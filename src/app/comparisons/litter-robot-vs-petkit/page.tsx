import Link from "next/link";
import { Check, X, Scale, Wind, ScanFace, Box, Zap, Trash2 } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";
import { ComparisonTable } from "@/components/ComparisonTable";

export const metadata = {
    title: "Litter-Robot 4 vs. PetKit Purobot Ultra (2026): The $700 Battle | SmartPetLab",
    description: "Battle of the automatic litter boxes. Is the new PetKit's 'Auto-Sealing' tech worth the massive size? Or does the reliability of the Litter-Robot 4 still reign supreme?",
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-purple-300 backdrop-blur-md">
                        <Trash2 className="h-3 w-3" />
                        Premium Care
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Litter-Robot 4 <span className="text-zinc-500">vs.</span> PetKit Purobot <br />
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">The Battle of the Titans</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        At $700+, you aren't just buying a litter box. You are buying freedom from scooping. One offers infinite reliability, the other offers "Zero Odor" technology. Which wins?
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-zinc dark:prose-invert mx-auto">
                    <p className="lead border-l-4 border-purple-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        "The Litter-Robot is the reliable workhorse. The PetKit Purobot is the over-engineered spaceship. Your choice depends entirely on your tolerance for smell vs. your available floor space."
                    </p>
                    <p>
                        Both of these machines are incredible. They both track weight, have apps, and sift litter automatically. But they solve the "poop problem" in philosophically different ways.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="mt-16">
                    <ComparisonTable
                        productNames={["Litter-Robot 4", "PetKit Purobot Ultra"]}
                        rows={[
                            { feature: "Waste Disposal", products: ["Open Drawer (Gravity)", "Auto-Sealing 'Airlock' Bag"] },
                            { feature: "Odor Control", products: ["Good (Carbon Filter)", "Perfect (Sealed Bag)"] },
                            { feature: "Cat Size Limit", products: ["Any size (Huge Globe)", "Small/Medium (<15lbs best)"] },
                            { feature: "Footprint", products: ["Large", "Massive (Deep & Tall)"] },
                            { feature: "Health Tracking", products: ["Weight history", "Weight + Stool Analysis (Camera)"] },
                            { feature: "Consumables", products: ["Any trash bag", "Proprietary Refill Rings"] },
                        ]}
                    />
                </div>

                {/* Deep Dive 1: Odor Control */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Round 1: Odor Control</h2>
                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="flex items-center gap-4">
                            <Wind className="h-8 w-8 text-indigo-500" />
                            <h3 className="text-xl font-bold">Winner: PetKit Purobot Ultra</h3>
                        </div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            This is where the PetKit innovates. The LR4 dumps waste into a drawer. That drawer is technically "open" inside the base, meaning when the globe rotates, air can mix.
                        </p>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            The PetKit acts like a diaper genie. It <strong>heat-seals</strong> the waste inside a bag, then cuts it. You literally never smell it. For small apartments where the box is in a living area, this is the killer feature.
                        </p>
                    </div>
                </div>

                {/* Deep Dive 2: Size & Comfort */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Round 2: Cat Comfort</h2>
                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="flex items-center gap-4">
                            <Box className="h-8 w-8 text-purple-500" />
                            <h3 className="text-xl font-bold">Winner: Litter-Robot 4</h3>
                        </div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            The LR4 is an open, spacious circle. Big cats (Maine Coons, huge Ragdolls, chonksters) feel comfortable turning around in it.
                        </p>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            The PetKit feels more like a tunnel or a cave. The auto-sealing mechanism takes up internal volume. Several users report their 15lb+ cats refusing to use it because they feel cramped. If you have a big cat, do not risk it—get the LR4.
                        </p>
                    </div>
                </div>

                {/* Deep Dive 3: Reliability & Parts */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Round 3: Reliability</h2>
                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="flex items-center gap-4">
                            <Zap className="h-8 w-8 text-yellow-500" />
                            <h3 className="text-xl font-bold">Winner: Litter-Robot 4</h3>
                        </div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            The PetKit has <em>a lot</em> of moving parts. The globe motors, the sealing heater, the cutting blade, the bag feeder. More parts = more failure points.
                        </p>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            The Litter-Robot has been around for 25 years. They have refined the gravity-sift mechanism to perfection. It jams less, handles different litter types better, and Whisker's customer support (based in USA) is legendary for sending replacement parts overnight.
                        </p>
                    </div>
                </div>

                {/* The Verdict */}
                <div className="mt-16">
                    <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-white">Final Verdict</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 rounded-xl bg-purple-50 p-6 ring-2 ring-purple-500 dark:bg-purple-900/20">
                            <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-800">
                                <Check className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-purple-900 dark:text-purple-100">Most People Should Buy: Litter-Robot 4</h3>
                                <p className="mt-2 text-sm text-purple-800/80 dark:text-purple-300">
                                    It fits all cats, uses cheap regular trash bags, and will likely last longer. It is the safe, reliable "Toyota" of litter boxes.
                                </p>
                                <div className="mt-4">
                                    <StickyCTA price="£749.00" productName="Litter-Robot 4" amazonUrl="https://www.amazon.co.uk/s?k=Litter+Robot+4&tag=dts0f-21" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl bg-zinc-50 p-6 dark:bg-zinc-900">
                            <div className="rounded-full bg-zinc-200 p-3 dark:bg-zinc-800">
                                <ScanFace className="h-6 w-6 text-zinc-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 dark:text-white">Buy PetKit Purobot If: You Live in a Studio</h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    If you sleep 5 feet from the litter box, the odor-sealing tech is worth the extra complexity. Also, if you are a data nerd who wants to analyze cat poop via camera, this is your gadget.
                                </p>
                                <div className="mt-4 opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0">
                                    <StickyCTA price="£699.00" productName="PetKit Purobot Ultra" amazonUrl="https://www.amazon.co.uk/s?k=PetKit+Purobot+Ultra&tag=dts0f-21" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}
