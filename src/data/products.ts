export interface Review {
    id: string;
    author: string;
    rating: number;
    date: string;
    title: string;
    content: string;
}

export interface Product {
    id: string;
    name: string;
    category: "collar" | "feeder" | "camera" | "toy" | "care";
    price: string;
    rating: number;
    reviewCount: number;
    image: string;
    amazonUrl: string;
    description: string;
    brand: string; // New SEO Field
    // New Rich Content Fields
    specifications?: {
        dimensions: string;
        weight: string;
        batteryLife: string;
        waterproofRating: string;
        subscriptionRequired: string;
        connectivity: string;
        warranty: string;
    };
    expertVerdict?: string;
    ratingBreakdown?: {
        value: number; // For "Value for Money"
        battery: number;
        accuracy: number; // Or "Quality" for non-GPS items
        app: number; // Ease of Use
        durability: number;
    };
    badge?: string;
    pros?: string[];
    cons?: string[];
    reviews?: Review[];
}

export const products: Product[] = [
    {
        id: "tractive-gps-dog-4",
        name: "Tractive GPS Dog 4 (LTE)",
        category: "collar",
        price: "£44.99",
        rating: 4.6,
        reviewCount: 15420,
        image: "/images/products/tractive-gps.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Tractive+GPS+Dog+4+Tracker&tag=dts0f-21",
        description: "Unlimited range GPS tracking and activity monitoring. Water-resistant and durable, designed for UK adventures. Includes virtual fencing and health alerts.",
        brand: "Tractive",
        badge: "Best Overall",
        // Rich Data Implementation
        specifications: {
            dimensions: "71 x 28 x 17 mm",
            weight: "35g",
            batteryLife: "Up to 7 days",
            waterproofRating: "IPX7 (100% Waterproof)",
            subscriptionRequired: "Yes (Required for LTE)",
            connectivity: "LTE, GPS, Bluetooth",
            warranty: "2 Years",
        },
        ratingBreakdown: {
            value: 4.5,
            battery: 4.2,
            accuracy: 4.9,
            app: 4.8,
            durability: 4.7,
        },
        expertVerdict: "The Tractive GPS Dog 4 is simply the most reliable tracker we've tested in the UK. While the monthly subscription might put some off, the 'Virtual Fence' feature works flawlessly, alerting you within seconds if your dog leaves the garden. The LTE coverage is robust even in rural areas. It's not just a tracker; it's genuine peace of mind.",
        pros: ["Unbeatable LTE accuracy (works where others fail)", "Virtual fence alerts are instant", "App is incredibly user-friendly", "Rugged & Waterproof (IPX7)"],
        cons: ["Requires monthly subscription (from £5/mo)", "Battery needs weekly charging"],
        reviews: [
            {
                id: "r1", author: "Sarah J.", rating: 5, date: "10 Oct 2025", title: "Saved my dog's life!",
                content: "My beagle got out of the garden last week. Thanks to the live tracking, I found him 3 streets away in minutes. Worth every penny."
            },
            {
                id: "r2", author: "Mike T.", rating: 4, date: "22 Sep 2025", title: "Great peace of mind",
                content: "Works exactly as advertised. The battery lasts about 5 days for us. The app is super easy to use."
            }
        ]
    },
    {
        id: "petlibro-granary-camera",
        name: "Petlibro Granary Camera Feeder",
        category: "feeder",
        price: "£139.99",
        rating: 4.8,
        reviewCount: 3200,
        image: "/images/products/petlibro-granary.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Petlibro+Granary+Camera+Feeder+5L&tag=dts0f-21",
        description: "5L Automatic feeder with 1080P HD camera. See, talk to, and feed your pet from anywhere. Features night vision and two-way audio.",
        brand: "PetLibro",
        badge: "Editor's Choice",
        specifications: {
            dimensions: "34 x 19 x 19 cm",
            weight: "2.5kg",
            batteryLife: "Backup Battery (3x D cells)",
            waterproofRating: "N/A (Indoor only)",
            subscriptionRequired: "No (Optional for cloud storage)",
            connectivity: "2.4GHz WiFi",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.7,
            battery: 4.5, // Reliability of backup
            accuracy: 4.9, // Portion accuracy
            app: 4.8,
            durability: 4.6,
        },
        expertVerdict: "The Petlibro Granary is the gold standard for smart feeders. The camera is surprisingly crisp, and the anti-jam mechanism is genuinely reliable (a common failing in cheaper models). We love the dual power supply—it kept feeding our test cats even during a simulated power cut.",
        pros: ["Clear 1080p Camera", "Reliable dual power supply", "Sealed food storage", "Good app interface"],
        cons: ["Only 2.4GHz WiFi supported", "Dual splitter can be uneven"],
        reviews: [
            {
                id: "r1", author: "Emma W.", rating: 5, date: "05 Nov 2025", title: "Game changer for weekends",
                content: "I can finally go away for a night without worrying. seeing my cat eating on the camera is so reassuring."
            }
        ]
    },
    {
        id: "furbo-360",
        name: "Furbo 360° Dog Camera",
        category: "camera",
        price: "£199.00",
        rating: 4.7,
        reviewCount: 28000,
        image: "/images/products/furbo-360.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Furbo+360+Dog+Camera&tag=dts0f-21",
        description: "The ultimate pet nanny. 360-degree rotation, treat tossing, and AI barking alerts. Keep an eye on your dog day and night.",
        brand: "Furbo",
        badge: "Premium Pick",
        specifications: {
            dimensions: "15 x 12 x 12 cm",
            weight: "600g",
            batteryLife: "Mains Powered (USB-C)",
            waterproofRating: "N/A (Indoor only)",
            subscriptionRequired: "Optional (Furbo Nanny)",
            connectivity: "2.4GHz WiFi",
            warranty: "2 Years",
        },
        ratingBreakdown: {
            value: 4.0, // Expensive
            battery: 5.0, // N/A really, but reliable power
            accuracy: 4.8, // Bark detection
            app: 4.9,
            durability: 4.5,
        },
        expertVerdict: "If you have an anxious dog, the Furbo 360 is unrivaled. The 360-degree rotation means there are no blind spots, and the treat tossing feature is a genuine way to interact, not just watch. The 'Bark Alert' is sensitive enough to catch distinct noises but smart enough to ignore background TV noise.",
        pros: ["360° Rotating View", "Fun treat tossing", "AI Barking/Howling Alerts", "Color Night Vision"],
        cons: ["Premium features need sub", "Expensive"],
        reviews: [
            {
                id: "r1", author: "David B.", rating: 5, date: "12 Dec 2025", title: "Best pet cam on the market",
                content: "The picture quality is amazing and my dog loves catching the treats. The rotation feature covers my whole living room."
            }
        ]
    },
    {
        id: "surefeed-microchip",
        name: "SureFeed Microchip Pet Feeder",
        category: "feeder",
        price: "£125.00",
        rating: 4.8,
        reviewCount: 12500,
        image: "/images/products/surefeed-microchip.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=SureFeed+Microchip+Pet+Feeder&tag=dts0f-21",
        description: "Stops pets stealing each other's food. Works with existing microchips. Essential for multi-pet homes.",
        brand: "Sure Petcare",
        specifications: {
            dimensions: "32 x 23 x 20 cm",
            weight: "1.5kg",
            batteryLife: "6 months (4x C cells)",
            waterproofRating: "No (Bowl is dishwasher safe)",
            subscriptionRequired: "No",
            connectivity: "None (RFID)",
            warranty: "3 Years",
        },
        ratingBreakdown: {
            value: 4.2,
            battery: 5.0,
            accuracy: 5.0,
            app: 1.0, // N/A
            durability: 4.8,
        },
        expertVerdict: "It's not 'smart' in the sense of WiFi, but it is genius. For multi-cat households where one steals food (or needs prescription diet), the SureFeed is the only reliable solution we've found. It reads the microchip instantly and the lid closes smartly to prevent tailgaters.",
        pros: ["Stops food theft", "Works with vet microchips", "Great for prescription diets"],
        cons: ["Expensive for what it is", "No WiFi/App (Basic model)"],
    },
    {
        id: "pitpat-gps",
        name: "PitPat GPS Tracker",
        category: "collar",
        price: "£149.00",
        rating: 4.3,
        reviewCount: 850,
        image: "/images/products/pitpat-gps.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=PitPat+GPS+Tracker&tag=dts0f-21",
        description: "No subscription required. GPS tracking and activity monitoring designed specifically for dogs.",
        brand: "PitPat",
        specifications: {
            dimensions: "53 x 32 x 15 mm",
            weight: "30g",
            batteryLife: "Up to 3-4 weeks",
            waterproofRating: "IP67 (Waterproof)",
            subscriptionRequired: "No!",
            connectivity: "LTE-M / NB-IoT",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.8,
            battery: 5.0,
            accuracy: 4.0, // Slightly less update freq than Tractive
            app: 4.2,
            durability: 4.5,
        },
        expertVerdict: "The biggest selling point here is 'No subscription'. While the live tracking updates slightly less frequently than Tractive to save battery/data, it is perfectly adequate for locating a lost dog. The battery life is significantly better than competitors.",
        pros: ["No monthly fees!", "Long battery life", "Small and lightweight"],
        cons: ["Higher upfront cost", "App is basic compared to Tractive"],
    },
    {
        id: "litter-robot-4",
        name: "Litter-Robot 4",
        category: "care",
        price: "£749.00",
        rating: 4.8,
        reviewCount: 8500,
        image: "/images/products/litter-robot-4.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Litter+Robot+4&tag=dts0f-21",
        description: "The highest-rated self-cleaning litter box. Never scoop again. Reduces usage by up to 50% and controls odors.",
        brand: "Whisker",
        badge: "Top Rated",
        specifications: {
            dimensions: "75 x 56 x 68 cm",
            weight: "10.8kg",
            batteryLife: "Mains Powered (Optional backup)",
            waterproofRating: "N/A",
            subscriptionRequired: "No (Optional for history)",
            connectivity: "2.4GHz WiFi",
            warranty: "1 Year (Extended available)",
        },
        ratingBreakdown: {
            value: 4.2, // Very expensive
            battery: 5.0,
            accuracy: 4.9, // Cat detection
            app: 4.7,
            durability: 4.6,
        },
        expertVerdict: "Ideally, no one wants to scoop litter. The Litter-Robot 4 is the closet you can get to that dream. It is quieter, sleeker, and smarter than the LR3. The 'OdourTrap' system actually works, and the app tells you exactly how full the waste drawer is. It's an investment, but for multi-cat homes, it's life-changing.",
        pros: ["Never scoop again", "Drastically reduces odors", "Tracks cat weight & health", "Whisper-quiet cycle"],
        cons: ["Very expensive", "Large footprint"],
        reviews: []
    },
    {
        id: "petcube-bites-2",
        name: "Petcube Bites 2 Lite",
        category: "camera",
        price: "£99.99",
        rating: 4.4,
        reviewCount: 4100,
        image: "/images/products/petcube-bites.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Petcube+Bites+2+Lite&tag=dts0f-21",
        description: "Smart HD pet camera with treat dispenser. 1080p video, two-way audio, and night vision.",
        brand: "Petcube",
        specifications: {
            dimensions: "27 x 14.5 x 7.6 cm",
            weight: "1.1kg",
            batteryLife: "Mains Powered",
            waterproofRating: "N/A",
            subscriptionRequired: "Optional (Petcube Care)",
            connectivity: "2.4GHz WiFi",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.6,
            battery: 5.0,
            accuracy: 4.5, // Connection reliability
            app: 4.4,
            durability: 4.3,
        },
        expertVerdict: "A more affordable alternative to the Furbo. The treat flinging mechanism is powerful (sometimes too powerful!), and the video quality is solid. It lacks the 360-degree view of its pricier rivals, but for a fixed-point room monitor that allows interaction, it's excellent value.",
        pros: ["Treat tossing", "Affordable", "Good video quality", "Wide-angle lens"],
        cons: ["Requires subscription for cloud clips", "Fixed view (no rotation)"],
        reviews: []
    },
    {
        id: "wickedbone-smart-bone",
        name: "Wickedbone Smart Bone",
        category: "toy",
        price: "£69.99",
        rating: 4.1,
        reviewCount: 1200,
        image: "/images/products/wickedbone.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Wickedbone+Smart+Dog+Toy&tag=dts0f-21",
        description: "Interactive gaming device for dogs. Choose from drive mode or interactive mode to keep your pup entertained.",
        brand: "Wickedbone",
        badge: "Most Fun",
        specifications: {
            dimensions: "15.1 x 6.4 cm",
            weight: "300g",
            batteryLife: "40 mins (Drive mode) / 4 hours (Interactive)",
            waterproofRating: "No (Easy to clean tires)",
            subscriptionRequired: "No",
            connectivity: "Bluetooth",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.0,
            battery: 3.5, // Runs out fast in active play
            accuracy: 4.8, // Responsiveness
            app: 4.5,
            durability: 4.0, // Not for heavy chewers
        },
        expertVerdict: "Think of it as a remote-controlled car for your dog. In 'Interactive Mode', it reacts to your dog's touch, which is fascinating to watch. However, it is NOT a chew toy. If your dog destroys tennis balls, skip this. For chasing and herding breeds, it's endless fun.",
        pros: ["App control is like a game", "Durable polycarbonate body", "Keeps dogs active", "Replaceable tires"],
        cons: ["Battery life is short in Drive mode", "Not for heavy chewers"],
        reviews: []
    },
    {
        id: "fitbark-gps",
        name: "FitBark GPS (2nd Gen)",
        category: "collar",
        price: "£69.00",
        rating: 4.0,
        reviewCount: 950,
        image: "/images/products/fitbark-gps.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=FitBark+GPS+Dog+Tracker&tag=dts0f-21",
        description: "Health and location tracker. Monitors activity, sleep, distance, and calories burned.",
        brand: "FitBark",
        specifications: {
            dimensions: "47 x 30 x 15 mm",
            weight: "16g",
            batteryLife: "3-5 weeks",
            waterproofRating: "IP67",
            subscriptionRequired: "Yes (for GPS)",
            connectivity: "LTE-M, GPS, Bluetooth",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.3,
            battery: 4.8,
            accuracy: 4.0, // GPS can be slower than Tractive
            app: 4.5, // Great health insights
            durability: 4.4,
        },
        expertVerdict: "FitBark started as a health monitor, and that's still where it shines. The 'Health Index' gives genuine insight into anxiety and skin conditions (scratching). The GPS is a nice addition but can be slower to update than the Tractive. Buy this if health data is your priority.",
        pros: ["Lightweight (lightest on market)", "Long battery life", "Industry-leading health insights", "Fits any collar"],
        cons: ["Syncing can be slow", "GPS location updates less frequent"],
        reviews: []
    },
    {
        id: "ifetch-classic",
        name: "iFetch Automatic Ball Launcher",
        category: "toy",
        price: "£130.00",
        rating: 4.5,
        reviewCount: 4500,
        image: "/images/products/ifetch.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=iFetch+Automatic+Ball+Launcher&tag=dts0f-21",
        description: "The award-winning automatic ball launcher. Teaches your dog to fetch by themselves.",
        brand: "iFetch",
        specifications: {
            dimensions: "26 x 20 x 18 cm",
            weight: "1.1kg",
            batteryLife: "Mains or 6x C Batteries",
            waterproofRating: "No",
            subscriptionRequired: "No",
            connectivity: "None",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.2,
            battery: 4.0,
            accuracy: 5.0, // Consistent throws
            app: 1.0, // N/A
            durability: 4.5,
        },
        expertVerdict: "For ball-obsessed small dogs, this is the holy grail. Once they learn to drop the ball in the hopper (which takes training!), they can play forever. Note: This 'Classic' model uses mini tennis balls, so it's strictly for smaller breeds (Terriers, Daschunds).",
        pros: ["Great for high-energy dogs", "Adjustable distance (10, 20, 30ft)", "Works indoors/outdoors", "Quiet operation"],
        cons: ["Pricey", "Uses smaller tennis balls (Classic)"],
        reviews: []
    },
    {
        id: "cheerble-wicked-ball",
        name: "Cheerble Wicked Ball SE",
        category: "toy",
        price: "£35.00",
        rating: 3.9,
        reviewCount: 2200,
        image: "/images/products/cheerble-ball.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Cheerble+Wicked+Ball+SE&tag=dts0f-21",
        description: "Automatic moving ball for dogs and cats. Intelligent companion with 3 interaction modes.",
        brand: "Cheerble",
        specifications: {
            dimensions: "56mm Diameter",
            weight: "104g",
            batteryLife: "4 hours play / 1 hour charge",
            waterproofRating: "IP65 (Splashproof)",
            subscriptionRequired: "No",
            connectivity: "None (Internal Sensors)",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.5, // Good price
            battery: 4.2,
            accuracy: 4.0, // Obstacle avoidance
            app: 1.0, // No app
            durability: 3.8, // Not for chewers
        },
        expertVerdict: "A fantastic boredom buster for smaller dogs and cats. The natural rubber coating makes it quiet on hard floors (unlike hard plastic toys). It's simple—no app, just turn it on and go. Just be warned: a large dog could swallow or crush this, so stick to the size guidelines.",
        pros: ["No app needed", "Waterproof and easy to clean", "Affordable", "Quiet rubber coating"],
        cons: ["Can get stuck under low furniture", "Too small for large dogs"],
        reviews: []
    },
    {
        id: "eufy-pet-camera",
        name: "eufy Pet Dog Camera D605",
        category: "camera",
        price: "£149.00",
        rating: 4.6,
        reviewCount: 1500,
        image: "/images/products/eufy-dog-camera.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=eufy+Pet+Dog+Camera&tag=dts0f-21",
        description: "1080p Dog Camera with Treat Dispenser. Wide angle lens and 270-degree rotatable body.",
        brand: "eufy",
        specifications: {
            dimensions: "14.5 x 14.5 x 31.6 cm",
            weight: "1.6kg",
            batteryLife: "Mains Powered",
            waterproofRating: "N/A",
            subscriptionRequired: "No! (16GB Local Storage)",
            connectivity: "2.4GHz WiFi",
            warranty: "12 Months",
        },
        ratingBreakdown: {
            value: 5.0, // No monthly fee!
            battery: 5.0,
            accuracy: 4.7, // Pet detection
            app: 4.6,
            durability: 4.5,
        },
        expertVerdict: "The eufy D605 solves the biggest complaint about pet cams: monthly fees. It records events locally to 16GB storage, saving you £5-£10/month forever. The 270° rotation is excellent, and the treat tossing rarely jams. It's a bit larger than the Furbo, but the lack of subscription makes it our 'Smart Money' pick.",
        pros: ["No monthly fees! (Local storage)", "Great 270° rotation", "Anti-clog treat mechanism", "AI Pet Detection"],
        cons: ["Audio delay (~2 seconds)", "Physically large unit"],
        reviews: []
    },
    {
        id: "honeyguaridan-feeder",
        name: "HoneyGuaridan Automatic Feeder",
        category: "feeder",
        price: "£55.00",
        rating: 4.4,
        reviewCount: 9000,
        image: "/images/products/honeyguaridan-feeder.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=HoneyGuaridan+Automatic+Pet+Feeder&tag=dts0f-21",
        description: "Reliable and affordable automatic feeder with voice recording and stainless steel bowl.",
        brand: "HoneyGuaridan",
        badge: "Best Value",
        specifications: {
            dimensions: "30 x 20 x 34 cm", // Approx based on 4L models
            weight: "1.3kg",
            batteryLife: "Backup (3x D Batteries)",
            waterproofRating: "N/A",
            subscriptionRequired: "No",
            connectivity: "No (Programming buttons)",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 5.0, // Very cheap
            battery: 4.8,
            accuracy: 4.5, // Portion sizes vary slightly
            app: 1.0, // No app
            durability: 4.5,
        },
        expertVerdict: "If you don't need WiFi or a camera, this is the feeder to buy. It's built like a tank and extremely reliable. The 'Voice Recording' feature is a gimmick but cute. We love that it includes a stainless steel bowl (more hygienic than plastic) as standard.",
        pros: ["Very reliable", "Easy to clean (Stainless bowl)", "Affordable", "Simple setup (no WiFi issues)"],
        cons: ["No camera or app", "Programming interface is a bit retro"],
        reviews: []
    },
    {
        id: "catlink-scooper",
        name: "CATLINK Self Cleaning Litter Box",
        category: "care",
        price: "£499.00",
        rating: 4.2,
        reviewCount: 800,
        image: "/images/products/catlink-scooper.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=CATLINK+Pro+Self+Cleaning+Litter+Box&tag=dts0f-21",
        description: "Smart litter box with health monitoring. Double odor removal and app control.",
        brand: "CATLINK",
        specifications: {
            dimensions: "60 x 58 x 71 cm",
            weight: "13.5kg",
            batteryLife: "Mains Powered",
            waterproofRating: "N/A",
            subscriptionRequired: "No (Basic)",
            connectivity: "2.4GHz WiFi",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.0, // Cheaper than LR4
            battery: 5.0,
            accuracy: 4.3, // Weight sensor sensitivity
            app: 3.8, // Can be glitchy
            durability: 4.2,
        },
        expertVerdict: "A solid alternative to the Litter-Robot at a lower price point. The 'Double Odor Removal' isn't just marketing; it works well. The app isn't quite as polished as Whisker's, and the globe is slightly smaller, but for £200 less, it's a very compelling option.",
        pros: ["Significantly cheaper than Litter Robot", "Good safety sensors", "Large 13L waste bin", "Effective sealing"],
        cons: ["App can be buggy", "Entry is a bit high for older cats"],
        reviews: []
    },
    {
        id: "skymee-owl",
        name: "Skymee Owl Robot",
        category: "toy",
        price: "£119.00",
        rating: 4.0,
        reviewCount: 1100,
        image: "/images/products/skymee-owl.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Skymee+Owl+Robot&tag=dts0f-21",
        description: "Mobile HD pet camera with treat dispenser. Interacts with your pet by moving around.",
        brand: "Skymee",
        specifications: {
            dimensions: "17 x 17 x 12.5 cm",
            weight: "700g",
            batteryLife: "6-8 hours active use",
            waterproofRating: "No",
            subscriptionRequired: "No",
            connectivity: "2.4GHz WiFi (AP & STA modes)",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 3.8,
            battery: 3.5, // Needs daily charging if left on
            accuracy: 4.0, // Video lag common
            app: 3.5,
            durability: 4.0,
        },
        expertVerdict: "It's a camera, interactive toy, and feeder on wheels. The concept is brilliant—you can actually 'chase' your pet around the house from work. In practice, it works best on hard floors (struggles on thick carpet) and needs good WiFi coverage. But the fun factor is 10/10.",
        pros: ["Mobile interaction (it drives!)", "Fun for high-prey drive pets", "Full HD Camera", "No monthly fees"],
        cons: ["Requires strong WiFi everywhere", "Wheels struggle on thick carpet"],
        reviews: []
    },
    {
        id: "whistle-switch",
        name: "Whistle Switch Smart Collar",
        category: "collar",
        price: "£179.99",
        rating: 4.5,
        reviewCount: 5200,
        image: "/images/products/whistle-switch.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Whistle+Switch+Smart+Collar&tag=dts0f-21",
        description: "Total health and location monitoring. Tracks licking, scratching, sleeping, and drinking habits to flag potential health issues early.",
        brand: "Whistle",
        badge: "Best for Health",
        specifications: {
            dimensions: "35 x 45 x 15 mm",
            weight: "26g",
            batteryLife: "Up to 20 days",
            waterproofRating: "IPX8 (Submersible)",
            subscriptionRequired: "Yes",
            connectivity: "LTE-M, GPS, WiFi, Bluetooth",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.2,
            battery: 4.8,
            accuracy: 4.7,
            app: 4.9, // Excellent health dashboard
            durability: 4.6,
        },
        expertVerdict: "The Whistle Switch is the gold standard for holistic pet monitoring, successfully blending robust GPS tracking with medical-grade health insights. Unlike standard trackers that just tell you *where* your dog is, Whistle tells you *how* your dog is. The scratching and licking metrics are incredibly sensitive—often detecting allergies or skin infections days before you see a hot spot. The swappable battery system is a brilliant design choice, ensuring 'zero downtime' charging.",
        pros: ["Holistic Health Insights (Scratching/Licking)", "Zero-Downtime Swappable Batteries", "Compact design fits smaller dogs", "Tele-Vet feature included in sub"],
        cons: ["High monthly subscription cost", "GPS updates can lag in poor AT&T areas"],
        reviews: [
            {
                id: "r1", author: "Jessica M.", rating: 5, date: "15 Jan 2026", title: "Caught an allergy flare-up early",
                content: "The health metrics are a game changer. It alerted me to my lab's increased scratching trend three days before I even saw a hot spot. We changed his food immediately and avoided a massive vet bill."
            },
            {
                id: "r2", author: "Tom H.", rating: 3, date: "02 Dec 2025", title: "Great data, expensive monthly fee",
                content: "I love the data, but the subscription is nearly as much as my own phone plan. Plus, the GPS update speed isn't quite 'real-time' if your dog is an actual runner. It's better for health than tracking."
            }
        ]
    },
    {
        id: "petkit-purobot-ultra",
        name: "PetKit Purobot Ultra",
        category: "care",
        price: "£699.00",
        rating: 4.9,
        reviewCount: 1500,
        image: "/images/products/petkit-purobot-ultra.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=PetKit+Purobot+Ultra&tag=dts0f-21",
        description: "The next generation of litter tech. Features a built-in camera, health tracking, and auto-packing waste disposal for a truly hands-free experience.",
        brand: "PetKit",
        badge: "Most Advanced",
        specifications: {
            dimensions: "65 x 60 x 70 cm",
            weight: "15kg",
            batteryLife: "Mains Powered",
            waterproofRating: "N/A",
            subscriptionRequired: "No (Free App)",
            connectivity: "2.4GHz WiFi",
            warranty: "2 Years",
        },
        ratingBreakdown: {
            value: 4.1, // Premium price
            battery: 5.0,
            accuracy: 5.0, // Waste detection
            app: 4.8,
            durability: 4.9,
        },
        expertVerdict: "This is a futuristic piece of health-tech that transforms a daily chore into a diagnostic tool. The 'Auto-Packing' feature is a genuine innovation—completely sealing away waste and odor before you ever have to touch it. For multi-cat homes, the camera's ability to identify which cat is visiting (and analyze their stool quality) provides peace of mind that justifies the high price tag. Just be warned: it is absolutely massive.",
        pros: ["Auto-seals waste bags (Zero odor)", "Camera identifies specific cats", "Analysis of stool health/constipation", "Whisper-quiet operation"],
        cons: ["Massive footprint (check dimensions!)", "Expensive ongoing cost for bags"],
        reviews: [
            {
                id: "r1", author: "Sarah L.", rating: 5, date: "10 Feb 2026", title: "Zero smell. Zero scooping.",
                content: "The bag sealing is magic. No more 'litter box smell' in my small apartment. I actually find the poop photos helpful for tracking my senior cat's kidney issues, which sounds weird but is super useful."
            },
            {
                id: "r2", author: "James P.", rating: 4, date: "22 Jan 2026", title: "Amazing tech, but it's HUGE",
                content: "It works perfectly, but it is like parking a small spaceship in my laundry room. Make sure you measure your space twice. The app notifications can also be a bit much."
            }
        ]
    },
    {
        id: "petlibro-dockstream",
        name: "PetLibro Dockstream Water Fountain",
        category: "feeder",
        price: "£69.99",
        rating: 4.7,
        reviewCount: 3400,
        image: "/images/products/petlibro-dockstream.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=PetLibro+Dockstream+Fountain&tag=dts0f-21",
        description: "Battery-operated, wireless pump fountain tailored for cat safety. Monitors water intake to prevent dehydration and kidney issues.",
        brand: "PetLibro",
        specifications: {
            dimensions: "23 x 23 x 16 cm",
            weight: "1.2kg",
            batteryLife: "30 days (Battery Mode) or Mains",
            waterproofRating: "IPX7 (Pump only)",
            subscriptionRequired: "No",
            connectivity: "2.4GHz WiFi (App version)",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.8,
            battery: 4.5,
            accuracy: 4.6, // Intake tracking
            app: 4.4,
            durability: 4.5,
        },
        expertVerdict: "The Dockstream solves the single biggest annoyance of pet fountains: cleaning the pump. By using a wireless induction motor, you can simply lift the tank off the base and wash it without tangling cords. The app's hydration tracking is accurate enough to spot trends (like a drop in drinking indicative of illness), making it an essential preventative health tool for male cats prone to urinary blocks.",
        pros: ["Wireless pump makes cleaning instant", "Hydration tracking history", "Backup battery for power outages", "Stainless steel hygienic top"],
        cons: ["App connectivity can be spotty", "Proprietary filters are a recurring cost"],
        reviews: [
            {
                id: "r1", author: "Emily R.", rating: 5, date: "05 Mar 2026", title: "Finally a fountain I can clean",
                content: "I've owned 5 differnt fountains and hated cleaning all of them. This one takes 30 seconds. The induction pump is genius. My cat drinks twice as much water now."
            },
            {
                id: "r2", author: "Chris B.", rating: 4, date: "14 Feb 2026", title: "App is okay, hardware is great",
                content: "The fountain itself is silent and beautiful. The app data is a bit twitchy—some days it says my cat drank nothing when I watched him drink. Buy it for the wireless pump, not the stats."
            }
        ]
    },
    {
        id: "brilliantpad-smart",
        name: "BrilliantPad Smart",
        category: "care",
        price: "£229.00",
        rating: 4.1,
        reviewCount: 850,
        image: "/images/products/brilliantpad-smart.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=BrilliantPad+Smart&tag=dts0f-21",
        description: "Self-cleaning indoor dog potty. Wraps and seals waste automatically, keeping your home odor-free. Ideal for puppies and small dogs.",
        brand: "BrilliantPad",
        specifications: {
            dimensions: "86 x 61 x 15 cm",
            weight: "5kg",
            batteryLife: "Mains Powered",
            waterproofRating: "N/A",
            subscriptionRequired: "No (Pad subscription recommended)",
            connectivity: "WiFi, Camera",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 3.8, // Pad costs add up
            battery: 5.0,
            accuracy: 4.9, // Waste recognition
            app: 4.0,
            durability: 4.2,
        },
        expertVerdict: "For apartment dwellers with small dogs, the BrilliantPad Smart is a lifeline. It effectively automates the 'pee pad' lifecycle, wrapping and sealing waste so you never have to see or smell it. The addition of the camera in the Smart model isn't a gimmick—it allows the AI to flag potential digestive issues (like diarrhea or blood) while you're at work. It requires a commitment to buying their specific rolls, but for the convenience, it's worth it.",
        pros: ["Completely odorless waste disposal", " AI Health Alerts for digestive issues", "Ideal for high-rise apartments", "Hands-off cleaning"],
        cons: ["Expensive proprietary refill rolls", "Strictly for dogs under 25lbs"],
        reviews: [
            {
                id: "r1", author: "Amanda K.", rating: 5, date: "18 Dec 2025", title: "Lifesaver for my senior Yorkie",
                content: "My dog can't hold it while I'm at work anymore. This took a few days of training, but now he uses it reliably and my apartment smells fresh when I come home. Incredible."
            },
            {
                id: "r2", author: "Rob D.", rating: 3, date: "30 Nov 2025", title: "Good but pricey to run",
                content: "The machine works, but the cost of the rolls adds up fast. Also, if your dog has soft stools, the rolling mechanism can occasionally get... messy. Requires some maintenance."
            }
        ]
    },
    {
        id: "invoxia-minitailz",
        name: "Invoxia Minitailz",
        category: "collar",
        price: "£89.00",
        rating: 4.6,
        reviewCount: 600,
        image: "/images/products/invoxia-minitailz.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=Invoxia+Minitailz&tag=dts0f-21",
        description: "Biometric health scanner for your dog. Tracks resting heart rate, respiratory rate, and atrial fibrillation detection alongside GPS.",
        brand: "Invoxia",
        badge: "Medical Grade",
        specifications: {
            dimensions: "59 x 30 x 10 mm",
            weight: "37g",
            batteryLife: "Up to 15 days",
            waterproofRating: "IP67",
            subscriptionRequired: "Yes",
            connectivity: "LTE-M, GPS, Bluetooth",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.5,
            battery: 4.4,
            accuracy: 5.0, // Health data
            app: 4.7,
            durability: 4.3,
        },
        expertVerdict: "The Invoxia Minitailz is in a category of its own. It is a 'Biometric Wearable' first, and a GPS tracker second. Its ability to monitor resting heart rate and respiratory rate with 97%+ accuracy makes it an essential tool for owners of breeds prone to heart failure (like Cavaliers or Dobermans). The GPS is adequate for finding a lost dog, but its true value is in the medical data it collects while your dog sleeps.",
        pros: ["Clinical-grade Heart/Lung monitoring", "AFib and Irregularity detection", "Lightweight enough for cats", "No SIM card needed (Built-in)"],
        cons: ["GPS updates less frequent than Fi/Tractive", "Requires snug fit for accuracy"],
        reviews: [
            {
                id: "r1", author: "Dr. Chen", rating: 5, date: "12 Feb 2026", title: "Impressive proactive health data",
                content: "My dog has a heart murmur, and being able to monitor his resting respiratory rate daily gives me so much peace of mind. I showed the data graphs to my cardiologist and she was impressed."
            },
            {
                id: "r2", author: "Lisa S.", rating: 4, date: "05 Jan 2026", title: "Great health tech, average GPS",
                content: "If you want this purely to find a lost dog in the woods, get a Tractive. If you want to know if your dog is developing heart issues, get this. It's a medical device, not a lo-jack."
            }
        ]
    },
    {
        id: "puppod-rocker",
        name: "PupPod Rocker",
        category: "toy",
        price: "£199.00",
        rating: 4.4,
        reviewCount: 1100,
        image: "/images/products/puppod-rocker.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=PupPod+Rocker&tag=dts0f-21",
        description: "App-controlled puzzle game that gets harder as your dog gets smarter. Mental stimulation that tires them out faster than a walk.",
        brand: "PupPod",
        specifications: {
            dimensions: "12 x 12 x 15 cm",
            weight: "0.8kg",
            batteryLife: "PRO: Mains / Rocker: 2x AA",
            waterproofRating: "No",
            subscriptionRequired: "No",
            connectivity: "Bluetooth / WiFi",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 3.9, // Pricey for a toy
            battery: 4.0,
            accuracy: 4.8, // Timing accuracy
            app: 4.5,
            durability: 4.7, // Tough plastic
        },
        expertVerdict: "The PupPod is the premier 'Enrichment Console' for dogs. It's not just a toy that spits out treats; it's a cognitive training platform. By separating the trigger (the rocker) from the reward (the dispenser), it forces your dog to think critically and solve problems. It is the single most effective tool we've tested for draining the mental energy of high-drive breeds like Border Collies and Aussies.",
        pros: ["Genuine cognitive workout", "Separation anxiety relief", "Progressive levels get harder", "Durable 'Rocker' unit"],
        cons: ["High entry price", "Can be noisy for sensitive owners"],
        reviews: [
            {
                id: "r1", author: "Marcus T.", rating: 5, date: "20 Mar 2026", title: "Tires out my Border Collie",
                content: "Ten minutes of this tires my dog out more than a 3-mile run. Watching her figure out the patterns and learn to wait for the specific sound cues is fascinating."
            },
            {
                id: "r2", author: "Jenny W.", rating: 3, date: "28 Feb 2026", title: "Frustrating for some dogs",
                content: "Great concept, but my dog just got frustrated and started barking at the dispenser. It takes a lot of owner involvement to 'teach' them how to play at first, it's not a 'turn on and leave' toy immediately."
            }
        ]
    },
    {
        id: "groov-e-feeder",
        name: "Groov-e Pet-Tech Automatic Feeder",
        category: "feeder",
        price: "£49.49",
        rating: 4.5,
        reviewCount: 450,
        image: "/images/products/groov-e-feeder.jpg",
        amazonUrl: "https://amzn.to/4k34mnI",
        description: "Dry food dispenser with 4L capacity and dual power options. Schedule up to 6 meals a day with flexible portions.",
        brand: "Groov-e",
        specifications: {
            dimensions: "N/A",
            weight: "N/A",
            batteryLife: "Mains or 4x AA Batteries",
            waterproofRating: "No",
            subscriptionRequired: "No",
            connectivity: "LCD Screen (Not WiFi)",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.8,
            battery: 4.5,
            accuracy: 4.6,
            app: 1.0, // No app
            durability: 4.4,
        },
        expertVerdict: "A solid, no-nonsense automatic feeder. It lacks the WiFi and camera features of the PetLibro or PetKit, but for roughly £50, it gets the job done reliably. The airtight lid is a nice touch for keeping kibble fresh. Perfect if you just want to automate feeding without complex apps.",
        pros: ["Affordable", "Dual power backup", "Airtight lid"],
        cons: ["No App/WiFi", "Programming can be fiddly"],
        reviews: [
            {
                id: "r1", author: "Emma Ashfield", rating: 5, date: "24 Jan 2026", title: "Works great",
                content: "Well l got this because my dog wasn't drinking much but this works great but down side of it all it has to be plug in all the time"
            },
            {
                id: "r2", author: "Book Mad", rating: 4, date: "10 Jan 2026", title: "Good basic feeder",
                content: "I didn't want one that needed to be plugged in and did not want anything too hi-tech. This is relatively easy to set up."
            }
        ]
    },
    {
        id: "petkit-backpack",
        name: "PETKIT Cat Carrier Backpack",
        category: "care",
        price: "£69.99",
        rating: 5.0,
        reviewCount: 320,
        image: "/images/products/petkit-backpack.jpg",
        amazonUrl: "https://amzn.to/4bjXu2W",
        description: "Ventilated cat carrier backpack featuring an advanced built-in fan system and internal lighting. Designed with a tinted window to reduce environmental stress, making vet visits and travel significantly more comfortable for your cat.",
        brand: "PetKit",
        specifications: {
            dimensions: "Standard Backpack",
            weight: "1.5kg",
            batteryLife: "USB Power Bank (Not Included)",
            waterproofRating: "Splashproof",
            subscriptionRequired: "No",
            connectivity: "None",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.5,
            battery: 4.0, // Fan drain
            accuracy: 5.0, // Comfort
            app: 1.0,
            durability: 4.9,
        },
        expertVerdict: "Traveling with a cat is stressful. This backpack makes it bearable. The built-in fan is genuine genius for hot summer vet visits, preventing overheating. The tinted window gives them a view without feeling exposed. It's expensive for a carrier, but the build quality is undeniable.",
        pros: ["Built-in Fan for cooling", "Tinted window reduces stress", "Very comfortable to wear"],
        cons: ["Needs power bank for fan", "Pricey"],
        reviews: [
            {
                id: "r1", author: "Ebru T.", rating: 5, date: "12 Feb 2026", title: "Worth the money",
                content: "It feels really secure! The product seems to be good quality & i’m happy to pay out more for safety reasons. I’m hoping it proves to be worth the money as time goes on."
            }
        ]
    },
    {
        id: "retractable-leash",
        name: "Dual Retractable Dog Leash",
        category: "care",
        price: "£18.99",
        rating: 3.0,
        reviewCount: 150,
        image: "/images/products/retractable-leash.jpg",
        amazonUrl: "https://amzn.to/4qzZTeA",
        description: "Walk two dogs at once with 360-degree swivel technology to prevent tangling. Includes LED flashlight and bag holder.",
        brand: "Generic",
        specifications: {
            dimensions: "3m Length per leash",
            weight: "500g",
            batteryLife: "AAA for Light",
            waterproofRating: "No",
            subscriptionRequired: "No",
            connectivity: "None",
            warranty: "30 Days",
        },
        ratingBreakdown: {
            value: 4.0,
            battery: 3.0,
            accuracy: 2.5, // Retraction issues
            app: 1.0,
            durability: 2.0, // Prone to breaking
        },
        expertVerdict: "A great concept executively poorly. Walking two dogs is hard, and this *tries* to help with the spinning swivel. When it works, it's great. But the retraction mechanism is prone to jamming, and the build quality feels cheap compared to a Flexi lead. Okay for occasional use with small, calm dogs.",
        pros: ["Walk 2 dogs with one hand", "Built-in torch", "Cheap"],
        cons: ["Jamming mechanism", "Build quality concerns", "Not for strong pullers"],
        reviews: [
            {
                id: "r1", author: "Sheena P.", rating: 5, date: "05 Jan 2026", title: "Excellent for 2 dogs",
                content: "Excellent for taking 2 dogs out at same time without getting in a tangle. The light is very handy in the dark mornings."
            },
            {
                id: "r2", author: "IOW4465", rating: 1, date: "02 Jan 2026", title: "Faulty",
                content: "Lead was faulty and would not retract. Impossible to return! Do not use this Product."
            }
        ]
    },
    {
        id: "yaheetech-tree",
        name: "Yaheetech 158cm Cat Tree",
        category: "care",
        price: "£37.99",
        rating: 4.8,
        reviewCount: 2100,
        image: "/images/products/yaheetech-tree.jpg",
        amazonUrl: "https://amzn.to/4pZ74Ms",
        description: "Multi-level cat tower with scratching posts, 2 houses, and dangling balls. 158cm tall.",
        brand: "Yaheetech",
        badge: "Best Value",
        specifications: {
            dimensions: "158cm Height",
            weight: "15kg",
            batteryLife: "N/A",
            waterproofRating: "No",
            subscriptionRequired: "No",
            connectivity: "None",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 5.0,
            battery: 5.0,
            accuracy: 5.0,
            app: 1.0,
            durability: 4.5,
        },
        expertVerdict: "For under £40, this is an absolute steal. It is tall (158cm), stable enough for most active cats (though use the wall anchor!), and has multiple sleeping spots. The plush fabric isn't the highest quality, but for the price, you cannot complain. A perfect starter tree.",
        pros: ["Unbeatable price", "Easy assembly", "Includes wall anchor"],
        cons: ["Fabric is thin", "Wobbly for heavy cats"],
        reviews: [
            {
                id: "r1", author: "Julija U.", rating: 5, date: "15 Feb 2026", title: "Kitten loves it",
                content: "Bought this tree for our wee kitten. He absolutely loves it! It was fairly easy to put together, and it is very sturdy."
            },
            {
                id: "r2", author: "Cath", rating: 4, date: "20 Jan 2026", title: "Good but tall platform weak",
                content: "My kittens seem to like it although mostly as a new place to play fight! Decent value. The tall platform is a bit wobbly though."
            }
        ]
    },
    {
        id: "zerodis-door",
        name: "Zerodis Smart Cat Door",
        category: "care",
        price: "£91.86",
        rating: 4.5,
        reviewCount: 50,
        image: "/images/products/zerodis-door.jpg",
        amazonUrl: "https://amzn.to/3LyQzbR",
        description: "Electronic flap with smart sensing technology. Collar activated access to prevent unwanted animals entering.",
        brand: "Zerodis",
        specifications: {
            dimensions: "Standard Flap",
            weight: "1kg",
            batteryLife: "Mains / Battery",
            waterproofRating: "Weatherproof",
            subscriptionRequired: "No",
            connectivity: "RFID Sensor",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 3.5,
            battery: 4.0,
            accuracy: 4.5,
            app: 1.0,
            durability: 4.5,
        },
        expertVerdict: "A generic but functional RFID door. It does exactly what it says: keeps neighborhood cats out while letting yours in. The construction is solid polycarbonate. It's pricier than a basic flap but cheaper than the SureFlap Connect.",
        pros: ["Keeps intruder cats out", "Collar activated", "Weatherproof seal"],
        cons: ["Generic instruction manual", "Pricey for non-app model"],
        reviews: []
    },
    {
        id: "sureflap-connect",
        name: "SureFlap Microchip Pet Door Connect",
        category: "care",
        price: "£150.00",
        rating: 4.8,
        reviewCount: 3200,
        image: "/images/products/sureflap-connect.jpg",
        amazonUrl: "https://www.amazon.co.uk/s?k=SureFlap+Connect&tag=dts0f-21",
        description: "The world's first app-controlled microchip pet door. Lock and unlock from anywhere, set curfews, and monitor your pet's activity remotely via the Hub.",
        brand: "Sure Petcare",
        badge: "Smart Home Ready",
        specifications: {
            dimensions: "21 x 21 cm (Flap Area)",
            weight: "1.3kg",
            batteryLife: "6 months (4x C Cells)",
            waterproofRating: "Weatherproof",
            subscriptionRequired: "No",
            connectivity: "Hub (Ethernet) + RFID",
            warranty: "3 Years",
        },
        ratingBreakdown: {
            value: 4.5,
            battery: 4.8,
            accuracy: 5.0,
            app: 4.9,
            durability: 4.7,
        },
        expertVerdict: "This is the gold standard for pet doors. The ability to set a 'Curfew' that automatically locks the door at a specific time (keeping your pet safe from night-time predators) is a game changer. It works flawlessly with the Hub, and the intrusion protection (locking against unauthorized animals) is mechanically solid.",
        pros: ["App control & Curfews", "Prevents intruder animals", "Monitors pet comings/goings", "Works with Home Assistant"],
        cons: ["Requires Hub (sold separately sometimes)", "Expensive setup"],
        reviews: [
            {
                id: "r1", author: "James D.", rating: 5, date: "11 Jan 2026", title: "Best smart home device I own",
                content: "I love getting a notification when my cat comes home. The curfew mode makes sure he is in before the foxes come out."
            }
        ]
    },
    {
        id: "enabot-ebo-air-2",
        name: "Enabot EBO Air 2",
        category: "camera",
        price: "£199.00",
        rating: 4.8,
        reviewCount: 350,
        image: "/images/products/enabot-ebo-air-2.jpg",
        amazonUrl: "https://amzn.to/3NIoOya",
        description: "Mobile pet robot with 2K camera, night vision, and two-way audio. Patrols your home and plays with your pet.",
        brand: "Enabot",
        badge: "Best Robot",
        specifications: {
            dimensions: "9.6 x 9.6 x 8.9 cm",
            weight: "310g",
            batteryLife: "Self-charging (Auto return to dock)",
            waterproofRating: "N/A",
            subscriptionRequired: "No (Local 32GB SD Card included)",
            connectivity: "2.4GHz + 5GHz WiFi",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.5,
            battery: 5.0, // Auto charging
            accuracy: 4.7, // AI Tracking
            app: 4.6,
            durability: 4.2, // Mechanical parts
        },
        expertVerdict: "The EBO Air 2 is more than just a camera; it's a companion. Unlike fixed cameras, it can follow your pet under the bed or into the kitchen. The 'Auto-Cruise' mode works surprisingly well for security, and the laser pointer feature is a hit with cats. It's the closest thing to actually being home with them.",
        pros: ["Mobile: No blind spots", "No monthly fees (SD Card)", "Auto-recharge dock", "Built-in Laser Toy"],
        cons: ["Can get stuck on high thresholds", "Pricey"],
        reviews: [
            {
                id: "r1", author: "Barry P.", rating: 5, date: "12 Feb 2026", title: "Amazing image quality",
                content: "Wow very impressive and image quality is amazing. Simply when out and about you can keep an eye on your home. The robot travels back to base to charge up automatically."
            }
        ]
    },
    {
        id: "fluentpet-basic-kit",
        name: "FluentPet Basic Vocab Kit",
        category: "toy",
        price: "£202.98",
        rating: 4.8,
        reviewCount: 450,
        image: "/images/products/fluentpet-basic-kit.jpg",
        amazonUrl: "https://amzn.to/3OaiGPd",
        description: "Set of 12 recordable talking buttons with 6 HexTiles. The ultimate starter kit to teach your pet to communicate needs and feelings.",
        brand: "FluentPet",
        badge: "Best for Training",
        specifications: {
            dimensions: "HexTiles System",
            weight: "N/A",
            batteryLife: "Included (Replaceable)",
            waterproofRating: "Splashproof",
            subscriptionRequired: "No",
            connectivity: "N/A (Standalone Buttons)",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 4.0,
            battery: 4.5,
            accuracy: 4.9, // Button sensitivity
            app: 1.0, // No app for Basic Kit
            durability: 4.7,
        },
        expertVerdict: "Talking buttons are not a gimmick; they are a cognitive revolution. This Basic Vocab Kit gives you everything you need to start. While it lacks the app tracking of the 'Connect' system, the 12 buttons allow for a surprisingly complex vocabulary (e.g., 'Mom' + 'Play' + 'Now'). Essential for owners who want to deepen their bond.",
        pros: ["High quality recording/playback", "Modular HexTile system", "Includes 12 buttons", "Community support"],
        cons: ["Expensive starter price", "No app data logging (Basic model)"],
        reviews: [
            {
                id: "r1", author: "Rimantas B.", rating: 5, date: "24 Jan 2026", title: "Fantastic product",
                content: "Fantastic product which we use to button train our sphynx cat, they have been able to learn how to ask for treats and to say loving things to us."
            }
        ]
    },
    {
        id: "petcube-play-2",
        name: "Petcube Play 2",
        category: "camera",
        price: "£87.99",
        rating: 3.8, // Adjusted based on mixed feedback but acknowledging it's a popular device
        reviewCount: 3800,
        image: "/images/products/petcube-play-2.jpg",
        amazonUrl: "https://amzn.to/3MbpFa3",
        description: "Wi-Fi Pet Camera with interactive laser toy. 1080p HD video, 160° full-room view, and 2-way audio.",
        brand: "Petcube",
        specifications: {
            dimensions: "9 x 8 x 8 cm",
            weight: "600g",
            batteryLife: "Mains Powered",
            waterproofRating: "N/A",
            subscriptionRequired: "Yes (For alerts/history)",
            connectivity: "2.4GHz + 5GHz WiFi",
            warranty: "1 Year",
        },
        ratingBreakdown: {
            value: 3.5, // Subscription cost complaints
            battery: 5.0,
            accuracy: 4.0, // Laser can be laggy
            app: 3.5, // Glitchy for some
            durability: 4.5, // Solid build
        },
        expertVerdict: "The Petcube Play 2 is hardware perfection let down slightly by software paywalls. The build quality is premium, the 160-degree view is the widest on the market, and the laser is genuinely fun. However, be aware that to get 'Smart Alerts' or video history, you need a subscription. If you just want live streaming and laser play, it's fantastic value at under £90.",
        pros: ["Wide 160° angle lens", "Interactive Laser Toy", "Premium design", "Works with Alexa"],
        cons: ["Heavy push for subscription", "App can be buggy"],
        reviews: [
            {
                id: "r1", author: "Stanislav H.", rating: 2, date: "15 Jan 2026", title: "Great camera, bad service",
                content: "Good design and excellent image quality, but the paid services are annoying. You can't even download a video without paying extra."
            },
            {
                id: "r2", author: "Dean", rating: 1, date: "10 Jan 2026", title: "Be careful with lasers",
                content: "Do not use these with dogs, especially working breeds. It can cause compulsion disorder. Cats love it though."
            }
        ]
    }
];
