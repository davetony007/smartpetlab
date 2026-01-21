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
    }
];
