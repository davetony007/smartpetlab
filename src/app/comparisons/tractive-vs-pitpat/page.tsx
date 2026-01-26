import Link from "next/link";
import { Check, X, PoundSterling, Signal, Battery, Smartphone, MapPin, Radio, ShieldCheck } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";
import { ComparisonTable } from "@/components/ComparisonTable";

export const metadata = {
    title: "Tractive GPS vs. PitPat GPS (2026): The 'Subscription' War | SmartPetLab",
    description: "One is cheap upfront but costs £5/mo. The other is £149 but free forever. We crunch the numbers on the Tractive vs PitPat debate.",
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-slate-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-green-300 backdrop-blur-md">
                        <PoundSterling className="h-3 w-3" />
                        Money Matters
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Tractive GPS <span className="text-slate-400">vs.</span> PitPat <br />
                        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Pay Now or Pay Forever?</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                        The UK's two biggest trackers go head-to-head. Do you want the best possible tracking for a monthly fee, or "good enough" tracking for free?
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-slate dark:prose-invert mx-auto">
                    <p className="lead border-l-4 border-blue-500 pl-6 text-xl font-medium italic text-slate-700 dark:text-slate-300">
                        "I hate monthly subscriptions. They are the bane of modern life. But is 'No Subscription' worth compromising on safety?"
                    </p>
                    <p>
                        This is the financial battle of the decade. <strong>Tractive</strong> follows the Netflix model: cheap hardware (£44.99) with a recurring subscription (£5-£8/mo). <strong>PitPat</strong> follows the Apple model: expensive hardware (£149) with zero ongoing costs.
                    </p>
                    <p>
                        But money isn't the only difference. The technology inside them is fundamentally different.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="mt-16">
                    <ComparisonTable
                        productNames={["Tractive GPS Dog 4", "PitPat GPS"]}
                        rows={[
                            { feature: "Upfront Cost", products: ["£44.99", "£149.00"] },
                            { feature: "Monthly Subscription", products: ["£5.00 - £8.00 / mo", "£0.00 (Free Forever)"] },
                            { feature: "Connectivity", products: ["LTE (Any network)", "LTE-M / NB-IoT"] },
                            { feature: "Live Tracking Speed", products: ["Every 2-3 Seconds", "Every 15s - 10 mins (Variable)"] },
                            { feature: "Battery Life", products: ["2-7 Days", "2-4 Weeks"] },
                            { feature: "Cost over 2 Years", products: ["~£180", "£149"] },
                        ]}
                    />
                </div>

                {/* Section 1: The Money Math */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Round 1: The 2-Year Cost</h2>
                    <div className="mt-6 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800">
                        <p className="font-mono text-sm text-zinc-500">Break-even Point Calculation:</p>
                        <div className="mt-4 space-y-4">
                            <div className="flex justify-between border-b border-zinc-300 pb-2 dark:border-zinc-700">
                                <span>Tractive (Device + 2 Yr Plan)</span>
                                <span className="font-bold">~£175.00</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-300 pb-2 dark:border-zinc-700">
                                <span>PitPat (Device Only)</span>
                                <span className="font-bold">£149.00</span>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
                            <strong>Verdict:</strong> PitPat wins on price, but only after ~18 months. If you lose the device or your dog outlives the warranty within the first year, Tractive is actually cheaper cash-flow wise.
                        </p>
                    </div>
                </div>

                {/* Section 2: Tracking Performance */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Round 2: The Tracking Tech</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/50 dark:bg-blue-950/30">
                            <h3 className="flex items-center font-bold text-blue-900 dark:text-blue-300">
                                <MapPin className="mr-2 h-5 w-5" /> Tractive (The "Chaser")
                            </h3>
                            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                                Tractive is built for <strong>chasing</strong> a running dog. In "Live Mode", it updates every 2-3 seconds. You can see your dog turn corners in real-time.
                            </p>
                            <p className="mt-4 text-xs font-bold uppercase text-blue-600 dark:text-blue-400">Best For: Escapologists / Huskies</p>
                        </div>
                        <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-900/50 dark:bg-orange-950/30">
                            <h3 className="flex items-center font-bold text-orange-900 dark:text-orange-300">
                                <Radio className="mr-2 h-5 w-5" /> PitPat (The "Finder")
                            </h3>
                            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                                PitPat uses NB-IoT to save costs. It works, but it's not "live" in the same way. It pings location on demand, which can sometimes take 10-30 seconds to wake up and connect.
                            </p>
                            <p className="mt-4 text-xs font-bold uppercase text-orange-600 dark:text-orange-400">Best For: Peace of Mind / Labradors</p>
                        </div>
                    </div>
                </div>

                {/* The Verdict */}
                <div className="mt-16">
                    <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">Final Verdict</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 rounded-xl bg-blue-50 p-6 ring-2 ring-blue-500 dark:bg-blue-900/20">
                            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-800">
                                <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-900 dark:text-blue-100">Winner for High-Risk Dogs: Tractive GPS</h3>
                                <p className="mt-2 text-sm text-blue-800/80 dark:text-blue-300">
                                    If your dog is a runner, speed matters. The 3-second update rate of Tractive is worth the £5/mo fee. When your dog is heading toward a road, you don't want to wait 30 seconds for a satellite handshake.
                                </p>
                                <div className="mt-4">
                                    <StickyCTA price="£44.99" productName="Tractive GPS" amazonUrl="https://www.amazon.co.uk/s?k=Tractive+GPS+Dog+4+Tracker&tag=dts0f-21" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-6 dark:bg-slate-900">
                            <div className="rounded-full bg-slate-200 p-3 dark:bg-slate-800">
                                <PoundSterling className="h-6 w-6 text-slate-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Winner for Value: PitPat GPS</h3>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    If you just want peace of mind for off-leash walks in safe areas, PitPat is fantastic. You pay once, and you never have another bill. The technology is solid, the battery lasts forever, and it's a "buy it for life" purchase.
                                </p>
                                <div className="mt-4 opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0">
                                    <StickyCTA price="£149.00" productName="PitPat GPS" amazonUrl="https://www.amazon.co.uk/s?k=PitPat+GPS+Tracker&tag=dts0f-21" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}
