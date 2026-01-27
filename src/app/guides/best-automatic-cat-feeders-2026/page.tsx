import Link from "next/link";
import { Clock, Check, X, Award, Battery, Zap, Cat } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";
import Image from "next/image";

export const metadata = {
    title: "Best Automatic Cat Feeders 2026: The Anti-Wake-Up-Call Guide | SmartPetLab",
    description: "Stop the 4 AM 'feed me' meows. We tested the Petlibro Granary, HoneyGuaridan, and SureFeed to find the most reliable feeders in the UK.",
    openGraph: {
        title: "Best Automatic Cat Feeders 2026: The Anti-Wake-Up-Call Guide",
        description: "We tested the top feeders so you can sleep in.",
        images: ["/images/products/petlibro-granary.jpg"],
    },
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-orange-600 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-yellow-600 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-300 backdrop-blur-md">
                        <Clock className="h-3 w-3" />
                        Reclaim Your Sleep
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Best Automatic Cat Feeders <br />
                        <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">of 2026</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        Your cat doesn't care that it's Saturday. An automatic feeder is the only way to silence the 4 AM demands. But which one won't jam?
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-800">
                                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs text-zinc-500">SPL</div>
                            </div>
                            <div className="text-left">
                                <div className="text-white">SmartPetLab Team</div>
                                <div className="text-xs">Testing Lab</div>
                            </div>
                        </div>
                        <div className="hidden h-8 w-px bg-zinc-700 sm:block" />
                        <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-yellow-500" />
                            <span>Jam-Test Verified</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-zinc dark:prose-invert prose-orange mx-auto">
                    <p className="lead border-l-4 border-orange-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        &quot;Cats are creatures of habit. If you feed them at 5 AM once, they will expect it forever.&quot;
                    </p>
                    <p>
                        The automatic pet feeder market is flooded with cheap plastic devices that look identical. But when you are trusting a machine to keep your pet alive while you are away for the weekend, <strong>reliability is everything</strong>.
                    </p>
                    <p>
                        We tested the most popular models in the UK to answer three questions:
                    </p>
                    <ul className="not-prose mt-4 space-y-2">
                        <li className="flex items-center gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">1</div>
                            <span className="font-medium text-zinc-900 dark:text-zinc-200">Will it jam with large kibble?</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">2</div>
                            <span className="font-medium text-zinc-900 dark:text-zinc-200">Can a determined cat stick their paw up the chute?</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">3</div>
                            <span className="font-medium text-zinc-900 dark:text-zinc-200">Does the battery backup actually work?</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Winners Podium</h2>
                </div>

                {/* Winner 1: Best Overall - Petlibro Granary */}
                <div id="petlibro" className="scroll-mt-24 rounded-3xl border-2 border-orange-500 bg-orange-50/10 p-8 dark:border-orange-500/30 dark:bg-orange-900/10">
                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-xs font-bold text-white">BEST OVERALL</div>
                            <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">Petlibro Granary Camera Feeder</h3>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white">£139.99</div>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
                            {/* Ideally use Next/Image here if path is valid, using placeholder for now if needed or local path */}
                            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-zinc-400">
                                <Image src="/images/products/petlibro-granary.jpg" alt="Petlibro Granary" fill className="object-cover" />
                            </div>
                        </div>
                        <div>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                The Granary series fixed every issue with older feeders. The rotor includes a silicone "sweeper" that prevents jamming, and the dual power supply (USB-C + Batteries) is flawless.
                            </p>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                The camera version (reviewed here) offers 1080p night vision so you can visually verify your cat has eaten.
                            </p>

                            <div className="mt-6 flex flex-col gap-3">
                                <Link href="/reviews/petlibro-granary-camera" className="w-full rounded-lg bg-zinc-900 py-3 text-center text-sm font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black">
                                    Read Full Review
                                </Link>
                                <a href="https://www.amazon.co.uk/s?k=Petlibro+Granary+Camera+Feeder+5L&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-orange-600 py-3 text-center text-sm font-bold text-white hover:bg-orange-700">
                                    Check Price on Amazon
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Winner 2: Best Value - HoneyGuaridan */}
                <div id="honeyguaridan" className="mt-12 scroll-mt-24 rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold text-white">BEST VALUE</div>
                            <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">HoneyGuaridan 6L</h3>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white">£55.00</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row">
                        <div className="flex-1">
                            <p className="text-zinc-600 dark:text-zinc-400">
                                If you don't need WiFi or a Camera, this is the tank. It is nearly indestructible. We dropped it (accidentally) and the lid stayed locked.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"><Check className="h-4 w-4 text-green-500" /> <strong>Simple:</strong> Programmed via buttons on the unit.</li>
                                <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"><Check className="h-4 w-4 text-green-500" /> <strong>Hygienic:</strong> Comes with a stainless steel bowl standard.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center gap-3 md:w-48">
                            <Link href="/reviews/honeyguaridan-feeder" className="w-full rounded-lg bg-zinc-100 py-3 text-center text-sm font-bold text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white">
                                Read Review
                            </Link>
                            <a href="https://www.amazon.co.uk/s?k=HoneyGuaridan+Automatic+Pet+Feeder&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-blue-600 py-3 text-center text-sm font-bold text-white hover:bg-blue-700">
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Winner 3: Best for Multi-Cat - SureFeed */}
                <div id="surefeed" className="mt-12 scroll-mt-24 rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="inline-block rounded-lg bg-teal-600 px-3 py-1 text-xs font-bold text-white">BEST FOR MULTI-CAT</div>
                            <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">SureFeed Microchip Feeder</h3>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white">£125.00</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row">
                        <div className="flex-1">
                            <p className="text-zinc-600 dark:text-zinc-400">
                                This is different. It is not a hopper feeder. It is a covered bowl that only opens for a specific microchip.
                            </p>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                <strong>Why you need it:</strong> If you have one fat cat and one skinny grazer. The fat cat cannot steal the food.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-3 md:w-48">
                            <Link href="/reviews/surefeed-microchip" className="w-full rounded-lg bg-zinc-100 py-3 text-center text-sm font-bold text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white">
                                Read Review
                            </Link>
                            <a href="https://www.amazon.co.uk/s?k=SureFeed+Microchip+Pet+Feeder&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-teal-600 py-3 text-center text-sm font-bold text-white hover:bg-teal-700">
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Detailed Data Comparison</h2>
                </div>

                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <table className="w-full text-left text-sm text-zinc-600 dark:text-zinc-400">
                        <thead className="bg-zinc-50 text-xs uppercase text-zinc-500 dark:bg-zinc-900">
                            <tr>
                                <th className="px-6 py-4 font-bold">Feature</th>
                                <th className="px-6 py-4 font-bold text-orange-600">Petlibro Granary</th>
                                <th className="px-6 py-4 font-bold text-zinc-900 dark:text-white">HoneyGuaridan</th>
                                <th className="px-6 py-4 font-bold text-teal-600">SureFeed</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            <tr>
                                <td className="px-6 py-4 font-medium">Power Source</td>
                                <td className="px-6 py-4">USB-C + Battery</td>
                                <td className="px-6 py-4">Mains + D Cells</td>
                                <td className="px-6 py-4">C Cells Only</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Connectivity</td>
                                <td className="px-6 py-4">WiFi (App)</td>
                                <td className="px-6 py-4">None (Buttons)</td>
                                <td className="px-6 py-4">None (RFID)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Camera</td>
                                <td className="px-6 py-4">Yes (1080p)</td>
                                <td className="px-6 py-4">No</td>
                                <td className="px-6 py-4">No</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Anti-Jam</td>
                                <td className="px-6 py-4">Silicone Rotor</td>
                                <td className="px-6 py-4">Reverse Gear</td>
                                <td className="px-6 py-4">N/A (Lid only)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Buying Guide: What Matters?</h2>
                </div>

                <div className="space-y-8">
                    <div>
                        <h3 className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white">
                            <Battery className="h-5 w-5 text-green-500" /> Power Backup
                        </h3>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            Never buy a feeder that runs only on mains power. If a storm knocks out your power while you are in Ibiza, your cat starves. All the models selected above have battery backups.
                        </p>
                    </div>
                    <div>
                        <h3 className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white">
                            <Cat className="h-5 w-5 text-orange-500" /> The "Paw" Test
                        </h3>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            Cats are engineers. They will stick their paws up the chute to dislodge kibble. The <strong>Petlibro Granary</strong> has a patented "triple lock" system that makes the chute inaccessible to paws.
                        </p>
                    </div>
                </div>

                <StickyCTA price="£139.99" productName="Petlibro Granary (Winner)" amazonUrl="https://www.amazon.co.uk/s?k=Petlibro+Granary+Camera+Feeder+5L&tag=dts0f-21" />

            </div>
        </article>
    );
}

