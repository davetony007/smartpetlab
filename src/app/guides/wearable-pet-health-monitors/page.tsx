import Link from "next/link";
import { Activity, Heart, Moon, AlertOctagon, Smartphone, Calendar, Search } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";

export const metadata = {
    title: "Wearable Pet Health Monitors: Why You Need 'Big Data' for Your Dog | SmartPetLab",
    description: "It isn't just about finding a lost dog. We explain how tracking sleep and scratching can detect arthritis and allergies weeks before you see symptoms.",
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white dark:bg-black pb-24">
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-300 border border-rose-500/30">
                        Preventative Care
                    </span>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                        Wearable Health Monitors: <br /> <span className="text-rose-400">The "Talk" Interface</span>
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
                        Your dog can't tell you "My stomach hurts" or "My hip is sore." But their data can scream it.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4 text-sm text-zinc-500">
                        <span>By The SmartPetLab Team</span>
                        <span>•</span>
                        <span>15 min read</span>
                        <span>•</span>
                        <span>Updated Jan 2026</span>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-3xl px-6 prose prose-lg dark:prose-invert prose-rose">

                <p className="lead text-xl text-zinc-600 dark:text-zinc-300">
                    We used to buy smart collars just to find lost dogs (GPS). That is now the least interesting thing they do. The real revolution is <strong>Health Intelligence</strong>. These devices establish a "normal baseline" for your pet, so they can alert you when something deviates.
                </p>

                <StickyCTA price="£119.00" productName="Whistle Health (Best Data)" amazonUrl="https://www.amazon.co.uk/s?k=Whistle+Health+Dog&tag=dts0f-21" />

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">01</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">The "Sleep Quality" Signal</h2>
                </div>

                <p>
                    Dogs sleep a lot. But *how* they sleep tells a story.
                </p>
                <div className="flex items-start gap-6 my-8 not-prose">
                    <div className="rounded-full bg-zinc-100 p-4 dark:bg-zinc-900 flex-shrink-0"><Moon className="h-8 w-8 text-indigo-500" /></div>
                    <div>
                        <p className="text-lg font-bold text-zinc-900 dark:text-white">Why it matters:</p>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            If a dog is in pain (e.g., onset Arthritis), they cannot get comfortable. They will shift positions constantly throughout the night.
                            <br /><br />
                            <strong>The Metric: "Night Time Disturbance"</strong>
                            <br />
                            If your dog usually wakes up 2 times a night, and suddenly the app shows they are waking up 15 times a night, you have an immediate red flag. You can take this data to your vet weeks before the dog starts limping.
                        </p>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">02</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Scratching & Dermatitis</h2>
                </div>

                <p>
                    Allergies are miserable. But you aren't watching your dog 24/7.
                </p>
                <div className="not-prose my-6 rounded-xl bg-orange-50 border border-orange-200 p-6 dark:bg-orange-900/10 dark:border-orange-800">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-orange-100 p-2 text-orange-600"><AlertOctagon className="h-6 w-6" /></div>
                        <h4 className="font-bold text-orange-800 dark:text-orange-300 m-0">The 30-Day Trendline</h4>
                    </div>
                    <p className="mt-2 text-sm text-orange-900/80 dark:text-orange-200/80">
                        Devices like <strong>Whistle</strong> and <strong>FitBark</strong> have accelerometers tuned to the specific frequency of a dog scratching their ear or licking their paw.
                        <br /><br />
                        They will graph "Scratch Minutes per Day." If the line starts trending up slowly over a month, it might be a food allergy. If it spikes overnight, it's likely fleas. This lets you intervene <i>before</i> they scratch their skin raw and get an infection.
                    </p>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">03</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">GPS vs. Health (The Battery Trade-off)</h2>
                </div>

                <p>
                    There is a major difference between a "GPS Tracker" and a "Health Monitor."
                </p>

                <div className="grid gap-6 md:grid-cols-2 not-prose my-6">
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                        <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
                            <Search className="h-5 w-5 text-rose-500" /> GPS Trackers
                        </div>
                        <p className="text-xs uppercase font-bold text-zinc-400 mt-1">Example: Tractive</p>
                        <ul className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-4">
                            <li>Focus: Finding a lost dog.</li>
                            <li>Battery: 2-5 days.</li>
                            <li>Health Data: Basic (Activity only).</li>
                        </ul>
                    </div>
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                        <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
                            <Heart className="h-5 w-5 text-rose-500" /> Health Monitors
                        </div>
                        <p className="text-xs uppercase font-bold text-zinc-400 mt-1">Example: Whistle Health</p>
                        <ul className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-4">
                            <li>Focus: Longevity & Disease prevention.</li>
                            <li>Battery: 20 days (No GPS).</li>
                            <li>Health Data: Advanced (Scratching, Licking, Sleeping, Drinking).</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Our Recommendations</h2>
                </div>

                <div className="not-prose my-12 space-y-8">
                    {/* Recommendation 1 */}
                    <div className="flex flex-col gap-6 md:flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">1. Whistle Health (Device Only)</h3>
                            <div className="mt-2 inline-flex items-center rounded-md bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
                                Best for Data Geeks
                            </div>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                This small device clips onto any collar. It doesn't have GPS, so the battery lasts for weeks. It focuses 100% on collecting high-fidelity health data. The app generates a "Wellness Report" PDF that you can email directly to your vet.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="https://www.amazon.co.uk/s?k=Whistle+Health+Dog&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-zinc-900 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black">
                                Check Price
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "Wearable Pet Health Monitors: The Ultimate Guide",
                        image: ["https://smartpetlab.vercel.app/images/products/fitbark-gps.jpg"],
                        datePublished: "2026-01-21T11:30:00+00:00",
                        dateModified: "2026-01-21T15:30:00+00:00",
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
