import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://smartpetlab.vercel.app";

    // 1. Static Routes
    const staticRoutes = [
        "",
        "/reviews",
        "/comparisons",
        "/guides",
        "/blog",
        "/about",
        "/privacy",
        "/terms",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // 2. Dynamic Guides (from filesystem)
    const guidesDirectory = path.join(process.cwd(), "src/app/guides");
    let guideRoutes: MetadataRoute.Sitemap = [];

    try {
        if (fs.existsSync(guidesDirectory)) {
            const guideFolders = fs.readdirSync(guidesDirectory).filter((file) => {
                const filePath = path.join(guidesDirectory, file);
                return fs.statSync(filePath).isDirectory();
            });

            guideRoutes = guideFolders.map((slug) => ({
                url: `${baseUrl}/guides/${slug}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.9,
            }));
        }
    } catch (error) {
        console.error("Error reading guides directory for sitemap:", error);
    }

    // 3. Dynamic Reviews (from data/products.ts)
    const reviewRoutes = products.map((product) => ({
        url: `${baseUrl}/reviews/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...guideRoutes, ...reviewRoutes];
}
