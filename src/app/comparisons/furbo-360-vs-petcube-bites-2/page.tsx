import Link from "next/link";
import { Check, X, Video, Mic, Smartphone, Wifi, Zap, Trophy, Dog, Camera, Eye } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";
import { ComparisonTable } from "@/components/ComparisonTable";
import Image from "next/image";

export const metadata = {
    title: "Furbo 360 vs. Petcube Bites 2 (2026): Best Treat Camera? | SmartPetLab",
    description: "The two best-selling pet cameras with treat tossing. Furbo rotates 360 degrees. Petcube has Alexa built-in. Which one belongs in your living room?",
    openGraph: {
        title: "Furbo 360 vs. Petcube Bites 2: Battle of the Treat Tossers",
        description: "See your dog, talk to your dog, feed your dog. We compare the top two devices.",
        images: ["/images/products/furbo-360.jpg"],
    },
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-yellow-300 backdrop-blur-md">
                        <Camera className="h-3 w-3" />
                        Interactive Cams
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Furbo 360 <span className="text-zinc-500">vs.</span> Petcube Bites 2 <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">The Ultimate Treat Toss</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        They both promised to keep your dog happy while you're at work. One rotates to see the whole room. The other is sleek enough to mount on the wall.
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-zinc dark:prose-invert mx-auto">
                    <p className="lead border-l-4 border-yellow-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        "Furbo is the 'fun' one. Petcube is the 'serious' one. Both will spit treats at your dog."
                    </p>
                    <p>
                        These are the heavyweights. <strong>Furbo 360</strong> is famous for a reason: its app is gamified, polished, and the 360-degree rotation is unique.
                    </p>
                    <p>
                        <strong>Petcube Bites 2 Lite</strong> (and Pro) takes a different approach. It mounts flat against the wall, shoots treats farther, and looks more like a high-end speaker than a toy.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="mt-16">
                    <ComparisonTable
                        productNames={["Furbo 360", "Petcube Bites 2"]}
                        rows={[
                            { feature: "Field of View", products: ["360° (Motorized Pan)", "160° (Wide Angle Lens)"] },
                            { feature: "Treat Capacity", products: ["~100 Small Treats", "~1.5lbs (Various Sizes)"] },
                            { feature: "Placement", products: ["Tabletop Only", "Wall Mount or Tabletop"] },
                            { feature: "Smart Alerts", products: ["Bark, Howl, Vomit (Sub)", "Bark, Meow (Sub)"] },
                            { feature: "Night Vision", products: ["Color Night Vision", "Standard IR (B&W)"] },
                            { feature: "Price", products: ["£199.00", "£129.00"] },
                        ]}
                    />
                </div>

                {/* Deep Dive 1: The View */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Round 1: Coverage & View</h2>
                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="flex items-center gap-4">
                            <Eye className="h-8 w-8 text-yellow-500" />
                            <h3 className="text-xl font-bold">Winner: Furbo 360</h3>
                        </div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            The <strong>Furbo 360</strong> wins by default because it moves. If your dog wanders into the kitchen, you can physically turn the camera to follow them.
                        </p>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            Petcube has an ultra-wide 160° lens, which is impressive, but it can't see around corners. If coverage is your #1 priority, motorized wins.
                        </p>
                    </div>
                </div>

                {/* Deep Dive 2: The Treat Tossing */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Round 2: The Snacks</h2>
                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="flex items-center gap-4">
                            <Zap className="h-8 w-8 text-orange-500" />
                            <h3 className="text-xl font-bold">Winner: Petcube Bites 2</h3>
                        </div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            Furbo is picky. It needs small, round, dry treats (about 1cm). If you use soft treats, they jam.
                        </p>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            Petcube is a beast. The flipper mechanism can launch larger biscuits, various shapes, and shoots them with varying force (Short/Medium/Long distance). It jams far less often in our testing.
                        </p>
                    </div>
                </div>

                {/* Deep Dive 3: Design & Aesthetics */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Round 3: Living Room Appeal</h2>
                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="flex items-center gap-4">
                            <Trophy className="h-8 w-8 text-zinc-500" />
                            <h3 className="text-xl font-bold">Winner: Petcube</h3>
                        </div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            Let's be honest: The Furbo looks like a kitchen appliance. It's white, plastic, and bulky.
                        </p>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            The Petcube Bites 2 is sleek, aluminum, and can be mounted on the wall. It looks like high-end tech. If you care about interior design, the Petcube disappears into the room better.
                        </p>
                    </div>
                </div>

                {/* The Verdict */}
                <div className="mt-16">
                    <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-white">Final Verdict</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 rounded-xl bg-yellow-50 p-6 ring-2 ring-yellow-500 dark:bg-yellow-900/20">
                            <div className="rounded-full bg-yellow-100 p-3 dark:bg-yellow-800">
                                <Video className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-yellow-900 dark:text-yellow-100">Most Fun: Furbo 360</h3>
                                <p className="mt-2 text-sm text-yellow-800/80 dark:text-yellow-300">
                                    If you want the best "peace of mind" experience with active tracking and cute AI diary highlights, Furbo is the market leader for a reason.
                                </p>
                                <div className="mt-4">
                                    <StickyCTA price="£199.00" productName="Furbo 360" amazonUrl="https://www.amazon.co.uk/s?k=Furbo+360+Dog+Camera&tag=dts0f-21" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl bg-zinc-50 p-6 dark:bg-zinc-900">
                            <div className="rounded-full bg-zinc-200 p-3 dark:bg-zinc-800">
                                <Smartphone className="h-6 w-6 text-zinc-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 dark:text-white">Smart Design: Petcube Bites 2</h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    If you have big dogs, big treats, or limited counter space (wall mount it!), this is the better engineered hardware.
                                </p>
                                <div className="mt-4 opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0">
                                    <StickyCTA price="£129.00" productName="Petcube Bites 2" amazonUrl="https://www.amazon.co.uk/s?k=Petcube+Bites+2&tag=dts0f-21" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}
