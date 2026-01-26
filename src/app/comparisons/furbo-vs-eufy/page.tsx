import Link from "next/link";
import { Check, X, Lock, Cloud, HardDrive, Video, Bell, Eye } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";
import { ComparisonTable } from "@/components/ComparisonTable";

export const metadata = {
    title: "Furbo 360 vs. Eufy Pet D605 (2026): The Privacy Battle | SmartPetLab",
    description: "Do you want cloud recording with a monthly fee, or local storage for free? We compare the two best treat-tossing dog cameras.",
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-950 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-red-600 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-yellow-300 backdrop-blur-md">
                        <Lock className="h-3 w-3" />
                        Privacy & Fees
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Furbo 360 <span className="text-zinc-500">vs.</span> Eufy D605 <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">The Cloud vs. Local War</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        Furbo is the famous brand name. Eufy is the privacy challenger. Does the £199 Furbo justify its subscription, or does Eufy steal the crown?
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-zinc dark:prose-invert mx-auto">
                    <p className="lead border-l-4 border-yellow-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        "I already pay for Netflix, Spotify, and Disney+. Do I really need to pay a subscription to watch my dog sleep?"
                    </p>
                    <p>
                        This is the question that defines this battle. <strong>The Furbo 360</strong> is an incredible piece of hardware, but its best features (Cloud Recording, Smart Alerts, Daily Diary) are locked behind the "Furbo Nanny" subscription (~£6/mo).
                    </p>
                    <p>
                        <strong>The Eufy Pet D605</strong> costs roughly the same upfront, but includes 16GB of local storage inside the device. You own your footage. No monthly fees. Ever.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="mt-16">
                    <ComparisonTable
                        productNames={["Furbo 360", "Eufy Pet D605"]}
                        rows={[
                            { feature: "Video Quality", products: ["1080p HD", "1080p HD"] },
                            { feature: "Field of View", products: ["360° Rotation", "270° Rotation + Wide Angle"] },
                            { feature: "Video History", products: ["Cloud (Requires Sub)", "16GB Local Storage (Free)"] },
                            { feature: "Treat Tossing", products: ["Yes (Small treats)", "Yes (Anti-clog design)"] },
                            { feature: "Smart Alerts", products: ["Detailed (Requires Sub)", "Basic Motion/Bark (Free)"] },
                            { feature: "Privacy", products: ["Cloud Server", "Local Encryption"] },
                        ]}
                    />
                </div>

                {/* Deep Dive 1: The Privacy Cost */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Round 1: Privacy & Fees</h2>
                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="flex items-center gap-4">
                            <HardDrive className="h-8 w-8 text-red-500" />
                            <h3 className="text-xl font-bold">Winner: Eufy D605</h3>
                        </div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            Eufy wins this easily. The footage stays in your house, on the device's memory chip. It is not uploaded to a cloud server where it could potentially be hacked (or cost you monthly rent).
                        </p>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            With Furbo, if you stop paying the subscription, you lose the ability to see "what happened today". You effectively turn a Smart Camera into a simple Live Stream monitor.
                        </p>
                    </div>
                </div>

                {/* Deep Dive 2: AI Smarts */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Round 2: The AI Smarts</h2>
                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="flex items-center gap-4">
                            <Eye className="h-8 w-8 text-yellow-500" />
                            <h3 className="text-xl font-bold">Winner: Furbo 360</h3>
                        </div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            If you *do* pay for the sub, Furbo's AI is unmatched. It doesn't just detect motion; it detects *behaviour*.
                        </p>
                        <ul className="mt-4 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                            <li><strong>Vomit Alert:</strong> Yes, it can actually tell if your dog is sick.</li>
                            <li><strong>Glass Breaking:</strong> Useful for home security.</li>
                            <li><strong>Continuous Barking vs Howling:</strong> Distinguishes between "someone is at the door" and "I am lonely".</li>
                        </ul>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            Eufy detects "Motion" and "Pet". It's good, but it's not *smart*.
                        </p>
                    </div>
                </div>

                {/* The Verdict */}
                <div className="mt-16">
                    <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-white">Final Verdict</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 rounded-xl bg-red-50 p-6 ring-2 ring-red-500 dark:bg-red-900/20">
                            <div className="rounded-full bg-red-100 p-3 dark:bg-red-800">
                                <Lock className="h-6 w-6 text-red-600 dark:text-red-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-red-900 dark:text-red-100">Smart Choice: Eufy Pet D605</h3>
                                <p className="mt-2 text-sm text-red-800/80 dark:text-red-300">
                                    For 95% of people, Eufy is the better buy. You get great 1080p video, treat tossing, and rotation, and you never pay a penny in monthly fees. The local storage is faster and more private.
                                </p>
                                <div className="mt-4">
                                    <StickyCTA price="£149.00" productName="eufy Pet D605" amazonUrl="https://www.amazon.co.uk/s?k=eufy+Pet+Dog+Camera&tag=dts0f-21" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl bg-yellow-50 p-6 dark:bg-yellow-900/10">
                            <div className="rounded-full bg-yellow-200 p-3 dark:bg-yellow-800">
                                <Cloud className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 dark:text-white">Buy Furbo If: You Have An Anxious Dog</h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    If your dog suffers from separation anxiety, the advanced AI alerts (Howling/Crying/Vomit) are worth the subscription cost. Furbo is a "Nanny", Eufy is just a camera.
                                </p>
                                <div className="mt-4 opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0">
                                    <StickyCTA price="£199.00" productName="Furbo 360" amazonUrl="https://www.amazon.co.uk/s?k=Furbo+360+Dog+Camera&tag=dts0f-21" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}
