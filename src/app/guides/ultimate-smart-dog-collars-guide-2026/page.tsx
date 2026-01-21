import Link from "next/link";
import { Check, X, Info, MapPin, Activity, Battery, Signal, Smartphone, Zap } from "lucide-react";
import { ComparisonTable } from "@/components/ComparisonTable";
import { StickyCTA } from "@/components/StickyCTA";
import { JsonLd } from "@/components/JsonLd";
import Image from "next/image";

export const metadata = {
    title: "The Ultimate Guide to Smart Dog Collars (2026 Edition) | SmartPetLab",
    description: "GPS tracking, health monitoring, and virtual fences. We test Tractive, PitPat, and FitBark to help you choose the right smart collar.",
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white dark:bg-black pb-24">
            {/* Header / Hero */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300 border border-blue-500/30">
                        Buying Guide
                    </span>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                        The Ultimate Guide to <br /> <span className="text-blue-400">Smart Dog Collars</span>
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
                        A lost dog is every owner's nightmare. In 2026, smart collars are your insurance policy. But which one actually works when it matters?
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4 text-sm text-zinc-500">
                        <span>By The SmartPetLab Team</span>
                        <span>•</span>
                        <span>8 min read</span>
                        <span>•</span>
                        <span>Updated Jan 2026</span>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-3xl px-6 prose prose-lg dark:prose-invert prose-blue">

                {/* Quick Summary Box */}
                <div className="not-prose my-10 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-blue-900 dark:text-blue-300">
                        <Zap className="h-5 w-5 fill-current" />
                        Quick Verdict: What Should You Buy?
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-900">
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Best for Escapologists</span>
                            <div className="mt-1 font-bold text-lg text-zinc-900 dark:text-white">Tractive GPS 4</div>
                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Unbeatable live tracking range.</p>
                            <Link href="/reviews/tractive-gps-dog-4" className="mt-2 block text-sm font-semibold text-blue-600 hover:underline">Read Review →</Link>
                        </div>
                        <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-900">
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Best No-Subscription</span>
                            <div className="mt-1 font-bold text-lg text-zinc-900 dark:text-white">PitPat GPS</div>
                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">One-off cost, decent tracking.</p>
                            <Link href="/reviews/pitpat-gps" className="mt-2 block text-sm font-semibold text-blue-600 hover:underline">Read Review →</Link>
                        </div>
                    </div>
                </div>

                <p className="lead text-xl text-zinc-600 dark:text-zinc-300">
                    Smart dog collars have evolved from simple gimmicks to essential safety tools. In the UK alone, searches for "GPS dog trackers" have doubled in the last two years.
                </p>

                <StickyCTA price="£44.99" productName="Tractive GPS (Our #1 Pick)" amazonUrl="https://www.amazon.co.uk/s?k=Tractive+GPS+Dog+4&tag=dts0f-21" />

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">01</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Why Technology Matters</h2>
                </div>

                <p>
                    Before you buy, it is critical to understand the difference between <strong>Bluetooth</strong> and <strong>GPS/LTE</strong>. This is where most first-time buyers make a mistake.
                </p>

                <div className="grid gap-6 md:grid-cols-2 not-prose my-8">
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                        <Signal className="h-8 w-8 text-green-500" />
                        <h3 className="mt-3 font-bold text-zinc-900 dark:text-white">GPS / LTE Trackers</h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <strong>How it works:</strong> Uses a built-in SIM card to connect to mobile towers.
                        </p>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <strong>Pros:</strong> Infinite range. You can track your dog from the other side of the country.
                        </p>
                        <p className="mt-2 text-sm font-semibold text-red-500">
                            <strong>Cons:</strong> Requires a monthly subscription.
                        </p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                        <Smartphone className="h-8 w-8 text-amber-500" />
                        <h3 className="mt-3 font-bold text-zinc-900 dark:text-white">Bluetooth Trackers (AirTags)</h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <strong>How it works:</strong> Relies on being near *someone's* phone.
                        </p>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <strong>Pros:</strong> Cheap, battery lasts months.
                        </p>
                        <p className="mt-2 text-sm font-semibold text-red-500">
                            <strong>Cons:</strong> Useless in a forest or field with no people nearby.
                        </p>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">02</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">The "Forest Test"</h2>
                </div>

                <div className="my-6 rounded-2xl bg-zinc-900 p-8 text-white shadow-xl">
                    <p className="mb-6 font-serif text-lg italic text-zinc-300">
                        "Imagine your dog bolts into a dense forest. You can't see them."
                    </p>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl bg-zinc-800 p-4 border border-zinc-700">
                            <div className="flex items-center gap-2 font-bold text-red-400">
                                <X className="h-5 w-5" /> With an AirTag
                            </div>
                            <p className="mt-2 text-sm text-zinc-300">
                                You check your phone. It says <strong>"Last seen 15 minutes ago"</strong>. You are blind until another hiker walks past your dog (if ever).
                            </p>
                        </div>
                        <div className="rounded-xl bg-blue-900/30 p-4 border border-blue-500/50">
                            <div className="flex items-center gap-2 font-bold text-blue-400">
                                <Check className="h-5 w-5" /> With a GPS Tracker
                            </div>
                            <p className="mt-2 text-sm text-blue-100">
                                You hit <strong>"Live Mode"</strong>. The map updates every 2-3 seconds, showing exactly which tree your dog is sniffing. You walk straight to them.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">03</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Key Features to Compare</h2>
                </div>

                <div className="space-y-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                            <Activity className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="mt-0 text-xl font-bold text-zinc-900 dark:text-white">1. Subscription Costs</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Nobody likes a monthly bill, but for reliable GPS, it's unavoidable. <strong>Tractive</strong> and <strong>FitBark</strong> utilize cellular networks (just like your phone). <strong>PitPat</strong> offers a unique model with a higher upfront cost but <span className="underline decoration-green-500 decoration-2 underline-offset-2">no monthly fee</span> (using NB-IoT technology).
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                            <Battery className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="mt-0 text-xl font-bold text-zinc-900 dark:text-white">2. Battery Life</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                GPS is power-hungry. Most LTE trackers need charging every 5-7 days. Some newer models use <strong>"Power Saving Zones"</strong> (using your home WiFi) to extend this to 2-3 weeks.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="mt-0 text-xl font-bold text-zinc-900 dark:text-white">3. Durability (IP Ratings)</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Look for an <strong>IPX7</strong> rating or higher. This means the device can survive being <span className="font-semibold text-blue-600 dark:text-blue-400">submerged in water</span>—essential for UK weather and dogs that love puddles.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Comparison: Top 3 Smart Collars</h2>
                </div>

                <ComparisonTable
                    productNames={["Tractive GPS 4", "PitPat GPS", "FitBark GPS"]}
                    rows={[
                        { feature: "Price", products: ["£44.99", "£149.00", "£69.00"] },
                        { feature: "Monthly Fee", products: ["Yes (~£5/mo)", "No (Free)", "Yes (~£5/mo)"] },
                        { feature: "Battery Life", products: ["7 Days", "3-4 Weeks", "3-5 Weeks"] },
                        { feature: "Live Tracking", products: [true, "Updates less often", "Slower updates"] },
                        { feature: "Activity Monitor", products: [true, true, true] },
                        { feature: "Waterproof", products: ["IPX7", "IP67", "IP67"] },
                    ]}
                />

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Top Recommendations for 2026</h2>
                </div>

                <div className="not-prose my-12 space-y-8">
                    {/* Recommendation 1 */}
                    <div className="flex flex-col gap-6 md:flex-row items-start rounded-2xl p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">1. Tractive GPS Dog 4</h3>
                            <div className="mt-2 inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                                Best Overall Choice
                            </div>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                If safety is your #1 priority, Tractive wins. The app is incredibly polished, the "Live Tracking" is the fastest in the industry, and the Virtual Fence alerts are reliable. The subscription is worth the peace of mind.
                            </p>
                            <div className="mt-4 flex gap-4">
                                <Link href="/reviews/tractive-gps-dog-4" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
                                    Read Full Review
                                </Link>
                                <a href="https://www.amazon.co.uk/s?k=Tractive+GPS+Dog+4&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                                    Check Price on Amazon
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-100 dark:border-zinc-800" />

                    {/* Recommendation 2 */}
                    <div className="flex flex-col gap-6 md:flex-row items-start rounded-2xl p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">2. PitPat Dog GPS</h3>
                            <div className="mt-2 inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                Best Subscription-Free
                            </div>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                A fantastic British engineering feat. You pay more upfront, but never pay a monthly fee. It uses a different network (NB-IoT), so tracking isn't *quite* as real-time as Tractive, but it's perfect for most suburban dogs.
                            </p>
                            <div className="mt-4 flex gap-4">
                                <Link href="/reviews/pitpat-gps" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
                                    Read Full Review
                                </Link>
                                <a href="https://www.amazon.co.uk/s?k=PitPat+Dog+GPS&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                                    Check Price on Amazon
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Final Verdict</h2>
                </div>

                <p>
                    For <strong>peace of mind</strong> on off-lead walks, we recommend the <strong>Tractive GPS 4</strong>. The live tracking accuracy is unmatched. If you simply want to monitor your dog's activity and have a backup locator without a monthly bill, the <strong>PitPat GPS</strong> is a solid runner-up.
                </p>

            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "The Ultimate Guide to Smart Dog Collars (2026)",
                        image: ["https://smartpetlab.vercel.app/images/products/tractive-gps.jpg"],
                        datePublished: "2026-01-20T08:00:00+00:00",
                        dateModified: "2026-01-20T08:00:00+00:00",
                        author: [{
                            "@type": "Organization",
                            name: "SmartPetLab",
                            url: "https://smartpetlab.vercel.app"
                        }]
                    })
                }}
            />
        </article>
    );
}
