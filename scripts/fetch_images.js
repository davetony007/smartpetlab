const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// Map of product IDs to their official pages (or highly relevant pages)
const products = {
    'litter-robot-4': 'https://www.litter-robot.com/litter-robot-4.html',
    'petcube-bites': 'https://petcube.com/bites-2-lite/', // Redirects usually work
    'wickedbone': 'https://www.cheerble.com/products/wickedbone',
    'fitbark-gps': 'https://www.fitbark.com/store/fitbark-gps',
    'ifetch': 'https://goifetch.com/products/ifetch',
    'cheerble-ball': 'https://www.cheerble.com/products/wicked-ball-se',
    'eufy-dog-camera': 'https://us.eufy.com/products/t7200',
    'honeyguaridan-feeder': 'https://honeyguardian.com/', // General home page often has the hero
    'catlink-scooper': 'https://www.catlink.us/',
    'skymee-owl': 'https://skymee.com/'
};

const outputDir = path.join(process.cwd(), 'public/images/products');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function fetchImage(id, url) {
    console.log(`[${id}] Fetching page: ${url}`);

    // Use curl to get the HTML content because it's robust
    try {
        const html = execSync(`curl -L -s -A "Mozilla/5.0" "${url}"`).toString();

        // Regex to find og:image
        const match = html.match(/<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/i) ||
            html.match(/<meta\s+content=["'](.*?)["']\s+property=["']og:image["']/i);

        if (match && match[1]) {
            let imgUrl = match[1];
            // Fix relative URLs (rare in og:image but possible)
            if (imgUrl.startsWith('/')) {
                const urlObj = new URL(url);
                imgUrl = `${urlObj.protocol}//${urlObj.host}${imgUrl}`;
            }
            // Fix HTML entities
            imgUrl = imgUrl.replace(/&amp;/g, '&');

            console.log(`[${id}] Found Image: ${imgUrl}`);

            // Download the image
            const ext = path.extname(imgUrl).split('?')[0] || '.jpg';
            const dest = path.join(outputDir, `${id}${ext}`);

            execSync(`curl -L -s -A "Mozilla/5.0" "${imgUrl}" -o "${dest}"`);
            console.log(`[${id}] Saved to ${dest}`);

            // If extension was not .jpg, we might need to update products.ts or rename it
            // For simplicity in this script, just force rename if it's mostly compatible (jpg/png)
            // But better: rename to what products.ts expects (.jpg)
            if (ext !== '.jpg') {
                const desired = path.join(outputDir, `${id}.jpg`);
                fs.copyFileSync(dest, desired); // Copy to .jpg
                console.log(`[${id}] Copied to .jpg`);
            }

        } else {
            console.log(`[${id}] No og:image found.`);
        }
    } catch (e) {
        console.error(`[${id}] Error: ${e.message}`);
    }
}

async function run() {
    for (const [id, url] of Object.entries(products)) {
        await fetchImage(id, url);
    }
}

run();
