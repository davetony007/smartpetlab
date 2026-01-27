import Link from "next/link";
import { Activity, Heart, BarChart, Stethoscope, Microscope } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";
import { ComparisonTable } from "@/components/ComparisonTable";

export const metadata = {
    title: "Wearable Health Monitors: Understanding Itch Scores (2026) | SmartPetLab",
    description: "It's not just a GPS. It's an early warning system for Cancer, Osteoarthritis, and Allergies. We review the algorithms of Whistle vs. Fi.",
    openGraph: {
        title: "Wearable Health Monitors: Interpreting Itch Scores & Sleep Data",
        description: "Detect pain before your dog limps. The science of pet biometrics.",
        images: ["/images/products/hero-whistle-health.jpg"],
    },
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-rose-600 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-orange-600 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-rose-300 backdrop-blur-md">
                        <Stethoscope className="h-3 w-3" />
                        Preventative Medicine
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Wearable Monitors: <br />
                        <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">They Can&apos;t Tell You It Hurts</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        By the time a dog limps, they have been in pain for months. Biometric algorithms can detect Osteoarthritis and Dermatitis weeks before clinical signs appear.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-800">
                                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs text-zinc-500">SPL</div>
                            </div>
                            <div className="text-left">
                                <div className="text-white">SmartPetLab Team</div>
                                <div className="text-xs">Data Science Division</div>
                            </div>
                        </div>
                        <div className="hidden h-8 w-px bg-zinc-700 sm:block" />
                        <div className="flex items-center gap-2">
                            <BarChart className="h-4 w-4 text-rose-500" />
                            <span>3,000+ Data Points/Day</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-zinc dark:prose-invert prose-rose mx-auto">
                    <p className="lead border-l-4 border-rose-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        &quot;Your dog is stoic. In the wild, showing pain meant being left behind. They will hide their arthritis until they literally cannot stand.&quot;
                    </p>
                    <p>
                        This evolutionary trait makes veterinary diagnosis difficult. Owners often describe their dog as &quot;just getting old,&quot; when in reality, they are suffering from treatable chronic pain. By the time you notice a limp, the joint degradation is often advanced.
                    </p>
                    <p>
                        This is where <strong>Telematics</strong> comes in. Originally used in fleet management, the technology has shrunk down to a 3-ounce device that sits on your dog&apos;s collar. These are not just &quot;Fitbits for Dogs.&quot; They are diagnostic tools that use 3-axis accelerometers to map &quot;Micro-Movements&quot; at 50Hz (50 samples per second).
                    </p>
                    <p>
                        They can distinguish the specific g-force signature of a <strong>Scratch</strong> (start-stop, high frequency) from a <strong>Trot</strong> (rhythmic, vertical oscillation) or a <strong>Seizure</strong> (erratic, sustained high frequency).
                    </p>
                    <h3>The Promise of Predictive Health</h3>
                    <p>
                        Imagine knowing your dog has a flea infestation 3 days before you see a flea. Imagine knowing your Golden Retriever&apos;s heart is enlarging (DCM) 6 months before he collapses. This is not science fiction; it is data science. And in 2026, it is available for under $200.
                    </p>
                </div>

                {/* Section 1: The Science of Actigraphy */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">01</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Science of Actigraphy</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            To understand why some trackers are &quot;medical grade&quot; and others are just &quot;toys,&quot; you have to understand <strong>Sampling Rate</strong> and <strong>Classification Algorithms</strong>.
                        </p>

                        <div className="my-8 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800/50">
                            <h3 className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
                                <Microscope className="h-5 w-5 text-rose-500" /> How It Works
                            </h3>
                            <p className="mt-4">
                                A 3-axis accelerometer measures acceleration forces (g-force) in three directions: X (Left/Right), Y (Up/Down), and Z (Forward/Backward).
                            </p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li className="flex gap-2">
                                    <span className="font-bold text-rose-500">The Walk:</span> Rhythmic spikes on the Y-axis (vertical bounce).
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold text-orange-500">The Scratch:</span> Rapid, chaotic spikes on the X-axis (lateral neck movement) with a specific frequency (usually 4-10Hz).
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold text-blue-500">The Sleep:</span> Flatline on all axes, with minor Z-axis shifts (breathing).
                                </li>
                            </ul>
                        </div>

                        <h4>The &quot;Sampling&quot; Problem</h4>
                        <p>
                            Here is the trade-off every engineer faces: <strong>Battery Life vs. Data Resolution</strong>.
                        </p>
                        <p>
                            To detect a scratch (which happens fast), you need to sample the accelerometer at least <strong>50 times per second (50Hz)</strong>. If you sample at 10Hz (to save battery), you might miss the rapid-fire vibration of a hind leg thumping the neck. You&apos;ll just see &quot;movement&quot; and classify it as &quot;Active,&quot; messing up your data.
                        </p>
                        <p>
                            This is why <strong>Whistle</strong> has a shorter battery life (1-2 weeks) than <strong>Fi</strong> (1-2 months). Whistle is sampling aggressively to catch health behaviors. Fi is &quot;sleeping&quot; more often to prioritize GPS readiness.
                        </p>
                    </div>
                </div>

                {/* Section 2: The Two Vital Metrics */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">02</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Metrics That Matter</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-rose-600">
                                <Activity className="h-5 w-5" /> The Itch Score
                            </h3>
                            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                                <strong>Definition:</strong> The total duration (in seconds/minutes) your dog spends engaging in repetitive scratching or licking behaviors per 24 hours.
                            </p>
                            <div className="mt-6 rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
                                <span className="text-xs font-bold uppercase text-rose-800 dark:text-rose-200">The Warning Sign</span>
                                <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">
                                    A sudden spike of <strong>30% above baseline</strong>.
                                </p>
                            </div>
                            <p className="mt-4 text-sm text-zinc-500">
                                <strong>What it predicts:</strong> Flea allergy dermatitis, food allergies (if it spikes after meals), ear infections (head shaking counts as itching on some algorithms), or hot spots.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600">
                                <Heart className="h-5 w-5" /> Sleep Disturbance
                            </h3>
                            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                                <strong>Definition:</strong> The number of times your dog transitions from &quot;Deep Sleep&quot; to &quot;Light Sleep&quot; or &quot;Awake&quot; during the night (11 PM - 5 AM).
                            </p>
                            <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                                <span className="text-xs font-bold uppercase text-blue-800 dark:text-blue-200">The Warning Sign</span>
                                <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">
                                    An increase from <strong>2 to 8 disturbances/night</strong>.
                                </p>
                            </div>
                            <p className="mt-4 text-sm text-zinc-500">
                                <strong>What it predicts:</strong> Osteoarthritis. Arthritic dogs get stiff when lying still. They wake up to shift position, stretch, and lie back down. A healthy dog sleeps like a rock.
                            </p>
                        </div>
                    </div>
                </div>

                <StickyCTA price="$199.00" productName="Whistle Health (Best Diagnostics)" amazonUrl="https://www.whistle.com/" />

                {/* Section 3: Whistle vs Fi */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">03</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Whistle vs. Fi: The Deep Dive</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            This is the most common question we get: &quot;Which one should I buy?&quot; The answer depends entirely on your anxiety. Do you fear your dog <strong>dying of cancer</strong>, or do you fear your dog <strong>running away</strong>?
                        </p>

                        <ComparisonTable
                            productNames={["Whistle Health (Classic)", "Fi Series 3"]}
                            rows={[
                                { feature: "Primary Focus", products: ["Health & Diagnostics", "GPS Tracking & Battery"] },
                                { feature: "Sampling Rate", products: ["High (Frequent Health Checks)", "Low (Optimized for Battery)"] },
                                { feature: "Scratch Detection", products: ["Excellent (Clinically Validated)", "Poor (Often Inaccurate)"] },
                                { feature: "Battery Life", products: ["7-20 Days", "1-3 Months"] },
                                { feature: "GPS Technology", products: ["AT&T LTE", "AT&T LTE + 'Lost Dog Mode'"] },
                                { feature: "Subscription Cost", products: ["$8.25/mo (Yearly)", "$19/mo (Required for Hardware)"] },
                                { feature: "Device Size", products: ["Small & Rectangular", "Sleek & Metal (Armored)"] }
                            ]}
                        />

                        <div className="mt-12 flex flex-col gap-8 md:flex-row">
                            <div className="flex-1 rounded-2xl bg-gradient-to-br from-zinc-100 to-white p-8 shadow-sm dark:from-zinc-800 dark:to-zinc-900">
                                <strong className="block text-2xl text-rose-600">Whistle Health</strong>
                                <span className="mb-6 block text-sm font-bold uppercase tracking-wider text-zinc-400">The &quot;Lab Coat&quot; Choice</span>

                                <p>
                                    Whistle is owned by <strong>Mars Petcare</strong> (who owns Banfield, VCA, and Royal Canin). This gives them access to millions of veterinary records.
                                </p>
                                <p className="mt-4">
                                    Their AI is trained on correlated data: &quot;Dog X scratched Y amount, and was diagnosed with Z infection 2 days later.&quot; That feedback loop is what makes their algorithm superior.
                                </p>
                                <div className="mt-6 border-t border-zinc-200 pt-6 dark:border-zinc-700">
                                    <h5 className="font-bold text-zinc-900 dark:text-white">Killer Feature: &quot;Ask a Vet&quot;</h5>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        You can actually email your chart to a vet directly from the app. It&apos;s built for telemedicine.
                                    </p>
                                </div>
                            </div>

                            <div className="flex-1 rounded-2xl bg-gradient-to-br from-zinc-100 to-white p-8 shadow-sm dark:from-zinc-800 dark:to-zinc-900">
                                <strong className="block text-2xl text-yellow-500">Fi Series 3</strong>
                                <span className="mb-6 block text-sm font-bold uppercase tracking-wider text-zinc-400">The &quot;Escape Artist&quot; Choice</span>

                                <p>
                                    Fi is a hardware startup founded to solve one problem: <strong>The Dead Battery</strong>. A GPS tracker is useless if you forget to charge it.
                                </p>
                                <p className="mt-4">
                                    They engineered a proprietary efficient radio signal. The battery lasts months. If you are hiking the Appalachian Trail or live on a farm with a &quot;runner,&quot; this is the only device you should trust.
                                </p>
                                <div className="mt-6 border-t border-zinc-200 pt-6 dark:border-zinc-700">
                                    <h5 className="font-bold text-zinc-900 dark:text-white">Killer Feature: &quot;Stainless Steel Build&quot;</h5>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        It&apos;s built into the collar links. It can&apos;t be ripped off by branches. It is bombproof.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: What about AirTags? */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">04</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The AirTag Fallacy</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/10">
                            <strong>STOP. Do not rely on an AirTag for a lost dog.</strong>
                        </div>
                        <p className="mt-6">
                            Apple AirTags rely on <strong>Bluetooth handshakes</strong> with nearby iPhones. If your dog runs into the woods, where there are no iPhones, the AirTag is invisible. It has no GPS. It has no Cellular.
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>AirTag Range:</strong> ~30-50 feet (needs iPhone nearby).</li>
                            <li><strong>GPS Range:</strong> Infinite (uses Satellites + Cell Towers).</li>
                        </ul>
                        <p>
                            Use an AirTag as a backup, sure. But if you trust it to find a dog that chases a deer 2 miles into a forest preserve, you will never see that dog again.
                        </p>
                    </div>
                </div>

                {/* Section 5: The Verdict */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Final Recommendation</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Whistle */}
                        <div className="flex flex-col rounded-2xl bg-rose-50 p-6 dark:bg-rose-900/10">
                            <h3 className="text-xl font-bold text-rose-900 dark:text-rose-100">For The Worrier</h3>
                            <p className="mt-2 text-sm font-medium text-rose-800/60 dark:text-rose-200/60">Whistle Health</p>
                            <p className="my-4 flex-grow text-sm text-zinc-700 dark:text-zinc-300">
                                If you obsess over your dog&apos;s health or have an older dog. The itch score and sleep tracking are medical-grade.
                            </p>
                            <Link href="/reviews/whistle-health" className="mt-4 block w-full rounded-lg bg-rose-600 py-3 text-center text-sm font-bold text-white hover:bg-rose-700">
                                Buy Whistle
                            </Link>
                        </div>

                        {/* Fi */}
                        <div className="flex flex-col rounded-2xl bg-yellow-50 p-6 dark:bg-yellow-900/10">
                            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100">For The Adventurer</h3>
                            <p className="mt-2 text-sm font-medium text-yellow-800/60 dark:text-yellow-200/60">Fi Series 3</p>
                            <p className="my-4 flex-grow text-sm text-zinc-700 dark:text-zinc-300">
                                If you hike off-leash or have a Husky that jumps fences. The battery life is the safety feature.
                            </p>
                            <a href="https://tryfi.com" className="mt-4 block w-full rounded-lg bg-yellow-600 py-3 text-center text-sm font-bold text-white hover:bg-yellow-700">
                                Buy Fi
                            </a>
                        </div>

                        {/* Tractive */}
                        <div className="flex flex-col rounded-2xl bg-blue-50 p-6 dark:bg-blue-900/10">
                            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">For The Budget</h3>
                            <p className="mt-2 text-sm font-medium text-blue-800/60 dark:text-blue-200/60">Tractive GPS</p>
                            <p className="my-4 flex-grow text-sm text-zinc-700 dark:text-zinc-300">
                                A solid middle ground. Good GPS, decent health (not great), but much cheaper hardware upfront (~$50).
                            </p>
                            <a href="https://tractive.com" className="mt-4 block w-full rounded-lg bg-blue-600 py-3 text-center text-sm font-bold text-white hover:bg-blue-700">
                                Buy Tractive
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}
