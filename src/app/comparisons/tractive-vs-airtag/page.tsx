import Link from "next/link";
import { Check, X, ShieldAlert, Signal, Battery, Smartphone, MapPin, TreePine, Building2 } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";
import { ComparisonTable } from "@/components/ComparisonTable";

export const metadata = {
    title: "Tractive GPS vs. Apple AirTag (2026): A Dangerous Myth? | SmartPetLab",
    description: "Don't trust an AirTag to find a lost dog in the woods. We break down the real-world tracking capabilities of AirTag vs Tractive LTE.",
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-slate-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-slate-600 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-red-300 backdrop-blur-md">
                        <ShieldAlert className="h-3 w-3" />
                        Safety Critical
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Tractive GPS <span className="text-slate-400">vs.</span> Apple AirTag <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">The "Forest Failure" Reality</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                        One is a $29 coin-sized convenience. The other is a dedicated lifesaving device. If your dog runs into the woods, choosing the wrong one means you might never see them again.
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-slate dark:prose-invert mx-auto">
                    <p className="lead border-l-4 border-blue-500 pl-6 text-xl font-medium italic text-slate-700 dark:text-slate-300">
                        "I thought the AirTag was enough. But when he chased a deer into the National Forest, my phone just said 'Last Seen: 2 Hours Ago'. He was gone."
                    </p>
                    <p>
                        This is the most common story we hear. Apple AirTags are incredible technology for finding lost keys in a coffee shop. But for a dog running at 20mph into a rural area, they are fundamentally flawed.
                    </p>
                    <p>
                        In this comparison, we will strip away the marketing and look at the <strong>physics</strong> of how these devices communicate.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="mt-16">
                    <ComparisonTable
                        productNames={["Apple AirTag", "Tractive GPS Dog 4"]}
                        rows={[
                            { feature: "Technology", products: ["Bluetooth (Short Range)", "LTE + GPS (Unlimited)"] },
                            { feature: "Range Limit", products: ["~30-50 Feet (Needs iPhone)", "Worldwide (Any cell signal)"] },
                            { feature: "Forest Tracking", products: ["IMPOSSIBLE", "Excellent"] },
                            { feature: "Battery Life", products: ["1 Year", "2-7 Days"] },
                            { feature: "Live Tracking", products: ["No (Static updates)", "Yes (Every 2-3 seconds)"] },
                            { feature: "Subscription", products: ["Free", "Required (~£5/mo)"] },
                        ]}
                    />
                </div>

                {/* Section 1: The "Crowd" vs The "Tower" */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The "Forest Failure" Explained</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-950/30">
                            <h3 className="flex items-center font-bold text-red-900 dark:text-red-300">
                                <TreePine className="mr-2 h-5 w-5" /> Why AirTags Fail in Nature
                            </h3>
                            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                                AirTags do not have GPS. They act like a beacon saying "I am here!" to nearby iPhones.
                            </p>
                            <p className="mt-4 text-sm font-bold text-slate-900 dark:text-white">The Scenario:</p>
                            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                                Your dog runs into a forest. There are no people (and thus no iPhones) nearby. The AirTag is now invisible. You will wander the woods blindly, hoping to get within 30 feet of the dog.
                            </p>
                        </div>
                        <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900/50 dark:bg-green-950/30">
                            <h3 className="flex items-center font-bold text-green-900 dark:text-green-300">
                                <Signal className="mr-2 h-5 w-5" /> Why Tractive Works
                            </h3>
                            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                                Tractive has a SIM card inside, just like your phone. It talks directly to satellites and cell towers.
                            </p>
                            <p className="mt-4 text-sm font-bold text-slate-900 dark:text-white">The Scenario:</p>
                            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                                Your dog runs into the same forest. You open the app. You see a blue dot moving in real-time. You can see he is 1.2 miles north, heading towards the river. You intercept him.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: The Stalking Feature */}
                <div className="mt-16 rounded-2xl bg-slate-100 p-8 dark:bg-slate-800/50">
                    <h2 className="flex items-center text-2xl font-bold text-slate-900 dark:text-white">
                        <ShieldAlert className="mr-3 h-6 w-6 text-amber-500" /> The "Anti-Stalking" Risk
                    </h2>
                    <p className="mt-4 text-slate-700 dark:text-slate-300">
                        This is a massive hidden danger. Apple designed AirTags to prevent stalking. If an AirTag is away from its owner for 8-24 hours and moves, it will start <strong>beeping loudly</strong> to alert nearby people that they are being tracked.
                    </p>
                    <p className="mt-4 font-medium text-amber-600 dark:text-amber-400">
                        For a lost dog, this is a disaster.
                    </p>
                    <ul className="mt-4 list-disc pl-5 text-slate-700 dark:text-slate-300">
                        <li>The high-pitched chirping panics the dog.</li>
                        <li>It alerts predators (coyotes) to the dog's location.</li>
                        <li>Dogs often try to chew the "noisy thing" off their collar, leading to battery ingestion (deadly).</li>
                    </ul>
                </div>

                {/* The Verdict */}
                <div className="mt-16">
                    <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">Final Verdict</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-6 dark:bg-slate-900">
                            <div className="rounded-full bg-slate-200 p-3 dark:bg-slate-800">
                                <Building2 className="h-6 w-6 text-slate-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Winner for City/Apartments: Apple AirTag</h3>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    If your dog is never off-leash and you just want insurance in case they slip a collar in a busy city center, the AirTag is fine. There are enough iPhones around to track them.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl bg-blue-50 p-6 ring-2 ring-blue-500 dark:bg-blue-900/20">
                            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-800">
                                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-900 dark:text-blue-100">Winner for Real Safety: Tractive GPS</h3>
                                <p className="mt-2 text-sm text-blue-800/80 dark:text-blue-300">
                                    If you hike, live in the suburbs, or have a runner, this is non-negotiable. The monthly fee is the price of keeping your dog alive. You cannot put a price on knowing exactly where they are in an emergency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-center gap-4">
                    <StickyCTA price="£44.99" productName="Tractive GPS" amazonUrl="https://www.amazon.co.uk/s?k=Tractive+GPS+Dog+4+Tracker&tag=dts0f-21" />
                </div>
            </div>
        </article>
    );
}
