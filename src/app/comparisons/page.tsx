import Link from "next/link";
import { Swords, Zap, ShieldCheck, Activity, Tag, Camera, HelpCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Comparisons - SmartPetLab",
    description: "Head-to-head comparisons of the top pet tech brands. We test them side-by-side.",
};

interface ComparisonCardProps {
    href: string;
    category: string;
    product1: { name: string; image?: string; icon?: any };
    product2: { name: string; image?: string; icon?: any };
    title: string;
    subtitle: string;
    accentColor: string; // tailwind color class prefix e.g. "purple"
}

function ComparisonCard({ href, category, product1, product2, title, subtitle, accentColor }: ComparisonCardProps) {
    return (
        <Link href={href} className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
            {/* Category Badge */}
            <div className={`absolute left-6 top-6 z-20 rounded-full border border-zinc-200/50 bg-white/50 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md dark:bg-black/50 ${accentColor === "purple" ? "text-purple-600 dark:text-purple-400" :
                accentColor === "blue" ? "text-blue-600 dark:text-blue-400" :
                    accentColor === "green" ? "text-green-600 dark:text-green-400" :
                        accentColor === "yellow" ? "text-yellow-600 dark:text-yellow-400" :
                            "text-zinc-600 dark:text-zinc-400"
                }`}>
                {category}
            </div>

            {/* Visual Battle Area */}
            <div className={`relative flex h-64 w-full items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950`}>
                {/* Background Blobs */}
                <div className={`absolute -left-10 top-0 h-40 w-40 rounded-full blur-3xl opacity-20 bg-${accentColor}-500 transition duration-700 group-hover:opacity-40`} />
                <div className={`absolute -right-10 bottom-0 h-40 w-40 rounded-full blur-3xl opacity-20 bg-${accentColor}-500 transition duration-700 group-hover:opacity-40`} />

                {/* Left Fighter */}
                <div className="relative z-10 w-1/2 -translate-x-4 translate-y-4 transition duration-500 group-hover:-translate-x-6 group-hover:scale-110">
                    <div className="relative mx-auto aspect-square w-32 md:w-40">
                        {product1.image ? (
                            <Image src={product1.image} alt={product1.name} fill className="object-contain drop-shadow-xl" />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-200 dark:bg-zinc-800">
                                {product1.icon && <product1.icon className="h-12 w-12 text-zinc-400" />}
                            </div>
                        )}
                    </div>
                </div>

                {/* VS Badge */}
                <div className="absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-zinc-900 font-black text-white shadow-lg dark:border-zinc-900 dark:bg-white dark:text-black">
                    <span className="text-xs">VS</span>
                </div>

                {/* Right Fighter */}
                <div className="relative z-10 w-1/2 translate-x-4 -translate-y-4 transition duration-500 group-hover:translate-x-6 group-hover:scale-110">
                    <div className="relative mx-auto aspect-square w-32 md:w-40">
                        {product2.image ? (
                            <Image src={product2.image} alt={product2.name} fill className="object-contain drop-shadow-xl" />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-200 dark:bg-zinc-800">
                                {product2.icon && <product2.icon className="h-12 w-12 text-zinc-400" />}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                    <h3 className={`text-2xl font-bold leading-tight text-zinc-900 transition-colors dark:text-white ${accentColor === "purple" ? "group-hover:text-purple-600 dark:group-hover:text-purple-400" :
                        accentColor === "blue" ? "group-hover:text-blue-600 dark:group-hover:text-blue-400" :
                            accentColor === "green" ? "group-hover:text-green-600 dark:group-hover:text-green-400" :
                                accentColor === "yellow" ? "group-hover:text-yellow-600 dark:group-hover:text-yellow-400" :
                                    "group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
                        }`}>
                        {title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        {subtitle}
                    </p>
                </div>

                <div className="mt-6 flex items-center text-sm font-bold text-zinc-900 transition group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300">
                    See the Winner <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}


export default function ComparisonsPage() {
    return (
        <main className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero */}
            <div className="bg-zinc-50 py-24 text-center dark:bg-zinc-950/50">
                <div className="mx-auto max-w-2xl px-6">
                    <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black">
                        <Swords className="h-6 w-6" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                        The Arena
                    </h1>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        Marketing lies. Specs can be manipulated. We put the top devices in the ring together and see which one actually survives real life.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">

                    {/* 1. LR4 vs PetKit */}
                    <ComparisonCard
                        href="/comparisons/litter-robot-vs-petkit"
                        category="Smart Litter"
                        product1={{ name: "Litter-Robot 4", image: "/images/products/litter-robot-4.jpg" }}
                        product2={{ name: "PetKit Purobot Ultra", image: "/images/products/petkit-purobot-ultra.jpg" }}
                        title="The Heavyweights"
                        subtitle="Reliability vs. Technology. Is the new 'Zero Odor' tech worth the massive size?"
                        accentColor="purple"
                    />

                    {/* 2. Whistle vs Tractive */}
                    <ComparisonCard
                        href="/comparisons/whistle-switch-vs-tractive-gps"
                        category="GPS & Health"
                        product1={{ name: "Whistle Switch", image: "/images/products/whistle-switch.jpg" }}
                        product2={{ name: "Tractive GPS", image: "/images/products/tractive-gps.jpg" }}
                        title="Health vs. Location"
                        subtitle="The world's best tracker vs. the world's best health monitor."
                        accentColor="green"
                    />

                    {/* 3. Furbo vs Petcube */}
                    <ComparisonCard
                        href="/comparisons/furbo-360-vs-petcube-bites-2"
                        category="Cameras"
                        product1={{ name: "Furbo 360", image: "/images/products/furbo-360.jpg" }}
                        product2={{ name: "Petcube Bites 2", image: "/images/products/petcube-bites.jpg" }}
                        title="Battle of the Treat Tossers"
                        subtitle="One spins 360°. The other mounts on your wall. Which fits your home?"
                        accentColor="yellow"
                    />

                    {/* 4. Furbo vs Eufy */}
                    <ComparisonCard
                        href="/comparisons/furbo-vs-eufy"
                        category="Privacy"
                        product1={{ name: "Furbo 360", image: "/images/products/furbo-360.jpg" }}
                        product2={{ name: "Eufy Pet D605", image: "/images/products/eufy-dog-camera.jpg" }}
                        title="Cloud Subscription vs. Local Storage"
                        subtitle="Is Furbo's premium AI worth the monthly fee compared to Eufy's free local storage?"
                        accentColor="yellow"
                    />

                    {/* 5. Tractive vs PitPat */}
                    <ComparisonCard
                        href="/comparisons/tractive-vs-pitpat"
                        category="Trackers"
                        product1={{ name: "Tractive GPS", image: "/images/products/tractive-gps.jpg" }}
                        product2={{ name: "PitPat GPS", image: "/images/products/pitpat-gps.jpg" }}
                        title="The Subscription War"
                        subtitle="Tractive requires a sub. PitPat doesn't. But which one actually finds your dog?"
                        accentColor="blue"
                    />

                    {/* 6. Tractive vs AirTag */}
                    <ComparisonCard
                        href="/comparisons/tractive-vs-airtag"
                        category="Tech"
                        product1={{ name: "Tractive GPS", image: "/images/products/tractive-gps.jpg" }}
                        product2={{ name: "Apple AirTag", image: "/images/products/Apple-AirTag.jpg" }}
                        title="GPS vs. Bluetooth"
                        subtitle="Why an AirTag is NOT a GPS tracker (and why it might be dangerous to think it is)."
                        accentColor="zinc"
                    />

                </div>
            </div>
        </main>
    );
}
