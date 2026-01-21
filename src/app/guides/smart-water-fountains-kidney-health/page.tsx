import Link from "next/link";
import { Check, X, Droplets, HeartPulse, Microscope, AlertTriangle, ShieldCheck, Waves, Zap } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";

export const metadata = {
    title: "Cat Hydration & Kidney Health: The Science of Smart Fountains (2026) | SmartPetLab",
    description: "Chronic Kidney Disease is the #1 killer of older cats. Learn how smart fountains, wireless pumps, and stainless steel prevent dehydration and biofilms.",
    openGraph: {
        title: "Cat Hydration & Kidney Health: The Science of Smart Fountains",
        description: "Preventing the #1 killer of cats with proper hydration technology.",
        images: ["/images/products/hero-petlibro-dockstream.jpg"],
    },
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-cyan-300 backdrop-blur-md">
                        <HeartPulse className="h-3 w-3" />
                        Veterinary Health Guide
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Cat Hydration & <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Kidney Disease Prevention</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        1 in 3 cats will develop kidney disease. It is often preventable. We explain the role of "Fountain Physics" in saving your cat's life.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-800">
                                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs text-zinc-500">SPL</div>
                            </div>
                            <div className="text-left">
                                <div className="text-white">Dr. Sarah Jenkins (Vet Consultant)</div>
                                <div className="text-xs">Reviewer</div>
                            </div>
                        </div>
                        <div className="hidden h-8 w-px bg-zinc-700 sm:block" />
                        <div className="flex items-center gap-2">
                            <Droplets className="h-4 w-4 text-cyan-500" />
                            <span>15 min read</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-zinc dark:prose-invert prose-cyan mx-auto">
                    <p className="lead border-l-4 border-cyan-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        "In the wild, cats get moisture from their prey. In your home, they eat dry kibble with 10% moisture. They are chronically dehydrated from birth."
                    </p>
                    <p>
                        This chronic low-level dehydration stresses the kidneys. Over 10 years, this stress accumulates into <strong>Chronic Kidney Disease (CKD)</strong>, the leading cause of death in senior cats.
                    </p>
                    <p>
                        The solution is simple: get them to drink. But cats have a low thirst drive. They evolved in deserts. They do not feel "thirsty" until they are already dangerously dehydrated.
                    </p>
                    <p>
                        This is where technology intervenes. We exploit their instinctual attraction to <strong>moving water</strong> to trick them into hydrating.
                    </p>
                </div>

                {/* Section 1: The Medical Reality */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">01</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Why Kidneys Fail</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            To understand why a $50 fountain matters, you need to understand the Nephron.
                        </p>

                        <div className="my-8 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
                                <h3 className="flex items-center text-lg font-bold text-zinc-900 dark:text-white">
                                    <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" /> The Cycle of Concentration
                                </h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    When a cat is dry, their kidneys work overtime to concentrate urine (saving water). This highly concentrated urine allows crystals (struvite) to form, leading to blockages and painful UTIs.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
                                <h3 className="flex items-center text-lg font-bold text-zinc-900 dark:text-white">
                                    <Waves className="mr-2 h-5 w-5 text-cyan-500" /> The Flow Fix
                                </h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    Increased water intake dilutes the urine. It "flushes" the system. A well-hydrated cat's kidneys are under significantly less mechanical stress.
                                </p>
                            </div>
                        </div>

                        <h3>The "Whiskers Stress" Factor</h3>
                        <p>
                            Why do cats hate bowls? **Whisker Fatigue**. Cat whiskers are highly sensitive touch sensors. When they touch the sides of a deep, narrow bowl, it causes sensory overload (pain). This is why cats dip their paws in water to drink.
                        </p>
                        <p>
                            **The Fix:** Wide, flat trays where water pools at the top.
                        </p>
                    </div>
                </div>

                <StickyCTA price="$69.99" productName="PetLibro Dockstream (Best Wireless)" amazonUrl="https://www.amazon.co.uk/s?k=PetLibro+Dockstream&tag=dts0f-21" />

                {/* Section 2: Material Science (Biofilm) */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">02</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The "Slime" Problem (Biofilm)</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            Ever felt slime on your cat's plastic bowl? That is **Biofilm**. It is a colony of bacteria (E. Coli, Salmonella) that glues itself to the surface.
                        </p>
                        <p>
                            Plastic is porous. Even high-grade plastic develops microscopic scratches over time. Bacteria hide in these scratches, safe from your sponge. This is the #1 cause of **Feline Acne** (blackheads on the cat's chin).
                        </p>

                        <div className="my-8 rounded-xl bg-red-50 p-6 dark:bg-red-900/10">
                            <h3 className="m-0 text-lg font-bold text-red-800 dark:text-red-200">The Hierarchy of Materials</h3>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center gap-3">
                                    <X className="h-5 w-5 text-red-500" />
                                    <span className="text-zinc-800 dark:text-zinc-300"><strong>Plastic:</strong> Avoid. Scratches easily. Harbors bacteria.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-amber-500" />
                                    <span className="text-zinc-800 dark:text-zinc-300"><strong>Ceramic:</strong> Good, but heavy and can develop micro-cracks if dropped.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-green-500" />
                                    <span className="text-zinc-800 dark:text-zinc-300"><strong>304 Stainless Steel:</strong> The Gold Standard. Non-porous. Medical grade. Cannot be scratched by cleaning.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 3: Pump Engineering */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">03</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Wireless vs. Wired Pumps</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            The old fountains (Catit flower) had a critical design flaw: The wire went *into* the water. This meant:
                        </p>
                        <ol>
                            <li>You couldn't easily take the tank to the sink (tethered by cord).</li>
                            <li>Cleaning the pump was a nightmare, so nobody did it.</li>
                            <li>Electrical safety risks if the cord frayed.</li>
                        </ol>

                        <div className="my-8 rounded-2xl bg-zinc-900 p-8 text-white">
                            <h3 className="flex items-center gap-2 font-bold text-cyan-400">
                                <Zap className="h-5 w-5" /> The Wireless Induction Revolution
                            </h3>
                            <p className="mt-4 text-sm text-zinc-400">
                                New generation fountains (PetLibro Dockstream, Uahpet) use a "Docking" system. The base is plugged in. The tank sits on top. Power is transferred wirelessly (like charging a phone).
                            </p>
                            <p className="mt-4 text-sm font-bold text-white">
                                Result: You can pick up the tank and wash it like a regular dish. No cords used. This encourages frequent cleaning.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Top Picks */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Best Fountains of 2026</h2>
                    </div>

                    <div className="space-y-12">
                        {/* PetLibro Dockstream */}
                        <div className="flex flex-col gap-8 rounded-3xl border border-zinc-200 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 md:flex-row">
                            <div className="flex-1">
                                <div className="mb-4 inline-block rounded-lg bg-cyan-500 px-3 py-1 text-xs font-bold text-white">CLINICAL PREFERENCE</div>
                                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">PetLibro Dockstream</h3>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                    The pump is completely detached. The entire tank is 304 Stainless Steel. It is whisper quiet.
                                </p>
                                <ul className="mt-6 space-y-3 text-sm">
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <strong>Zero Plastic Contact:</strong> Water only touches steel.</li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <strong>Wireless Motor:</strong> Lift-off tank for cleaning.</li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <strong>Vertical Faucet:</strong> Mimics a tap (cats love this).</li>
                                </ul>
                                <div className="mt-8">
                                    <Link href="/reviews/petlibro-dockstream" className="mr-4 rounded-xl bg-zinc-900 px-6 py-3 font-bold text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900">
                                        Read Assessment
                                    </Link>
                                    <a href="https://www.amazon.co.uk/s?k=PetLibro+Dockstream&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-zinc-500 hover:text-zinc-900 underline">
                                        Check Price
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Uahpet ZERO */}
                        <div className="flex flex-col gap-8 rounded-3xl border border-zinc-200 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 md:flex-row">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">Uahpet ZERO Wireless</h3>
                                <div className="mt-2 inline-block rounded-lg bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">BEST FOR BATTERY</div>
                                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                    This one is truly wireless (battery operated). You can put it in the hallway where there are no plugs. It uses a motion sensor to save battery.
                                </p>
                                <ul className="mt-6 space-y-3 text-sm">
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <strong>Placement Freedom:</strong> Put it anywhere.</li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <strong>120-Day Battery:</strong> Exceptional endurance.</li>
                                </ul>
                                <div className="mt-8">
                                    <a href="https://www.amazon.co.uk/s?k=Uahpet+Pet+Water+Fountain&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-zinc-100 px-6 py-3 font-bold text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white">
                                        View on Amazon
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Conclusion */}
                <div className="mt-20 rounded-3xl bg-cyan-50 p-8 text-center dark:bg-cyan-900/10">
                    <h2 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100">The "Rule of 60"</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-cyan-800 dark:text-cyan-200/80">
                        Your cat needs roughly <strong>60ml of water per kg of body weight</strong> per day. If they eat dry food, they are likely getting half that. A fountain isn't a toy; it is a life-support system for their kidneys.
                    </p>
                </div>

            </div>
        </article>
    );
}
