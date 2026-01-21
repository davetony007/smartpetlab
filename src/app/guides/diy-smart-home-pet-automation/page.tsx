import Link from "next/link";
import { Server, Thermometer, Video, Wifi, Cpu, Shield, Code, Fan } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";

export const metadata = {
    title: "DIY Smart Home for Pets: The 'Cloud-Free' Guide | SmartPetLab",
    description: "Sick of subscriptions? Build a private, powerful pet monitoring system using Home Assistant, Frigate NVR, and Zigbee sensors.",
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white dark:bg-black pb-24">
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/30">
                        Advanced Guide
                    </span>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                        DIY Smart Home: <br /> <span className="text-amber-400">Automating Pet Care</span>
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
                        Sick of monthly fees? Want accurate AI detection without sending video to China? Here is how to build a pro-grade system.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4 text-sm text-zinc-500">
                        <span>By The SmartPetLab Team</span>
                        <span>•</span>
                        <span>20 min read</span>
                        <span>•</span>
                        <span>Updated Jan 2026</span>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-3xl px-6 prose prose-lg dark:prose-invert prose-amber">

                <p className="lead text-xl text-zinc-600 dark:text-zinc-300">
                    Most pet tech is "Cloud-Based." That means if the company goes bust, your £200 feeder stops working. The <strong>DIY approach</strong> (Self-Hosted) puts you in control. It's cheaper, faster, and infinitely more private.
                </p>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">01</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">The Brain: Home Assistant</h2>
                </div>

                <p>
                    You need a central computer to run your house. We recommend <strong>Home Assistant</strong>. It connects literally everything (Sonos, Philips Hue, IKEA blinds, generic sensors) into one dashboard.
                </p>
                <div className="not-prose my-6 rounded-xl bg-zinc-100 p-6 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                        <Cpu className="h-8 w-8 text-amber-500" />
                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-white">Hardware Recommendation: Home Assistant Green</h4>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                Don't mess around with Raspberry Pis unless you are a linux nerd. Just buy the "Green" box ($99). It comes pre-installed. You plug it into your router, and it just works.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">02</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Environmental Protections</h2>
                </div>

                <p>
                    Pets are vulnerable to heatstroke. A "smart home" should proactively protect them.
                </p>

                <div className="grid gap-6 md:grid-cols-2 not-prose my-8">
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                        <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white mb-2">
                            <Thermometer className="h-5 w-5 text-red-500" /> The Sensor
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            <strong>Aqara Temperature Sensor</strong> ($15). It uses Zigbee (a low-power radio protocol), so the battery lasts 2 years. Stick one near the dog bed.
                        </p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                        <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white mb-2">
                            <Fan className="h-5 w-5 text-blue-500" /> The Action
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            <strong>Smart Plug</strong> ($10). Plug a standard desk fan or AC unit into it.
                        </p>
                    </div>
                </div>

                <div className="my-6 p-6 bg-zinc-800 rounded-lg text-white font-mono text-sm not-prose border-l-4 border-amber-500">
                    <p className="text-amber-400 font-bold mb-2">// The Automation Logic</p>
                    <p>IF sensor_temp &gt; 26°C</p>
                    <p>AND family_home = false</p>
                    <p>THEN turn_on(smart_fan)</p>
                    <p>AND notify.phone("High Temp Alert! Fan activated.")</p>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">03</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Frigate NVR: True AI Cameras</h2>
                </div>

                <p>
                    Consumer cameras (Ring, Nest) are "dumb." They detect *pixel changes* (motion). So a cloud moving over the sun triggers an alert.
                    <br /><br />
                    <strong>Frigate</strong> is open-source software that uses a Google Coral AI chip to detect <i>objects</i>. It knows the difference between a "Person", a "Dog", and a "Car".
                </p>
                <div className="grid gap-6 md:grid-cols-2 not-prose my-8">
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                        <h3 className="font-bold text-zinc-900 dark:text-white">Why it's better</h3>
                        <ul className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-4 space-y-2">
                            <li><strong>Zero False Positives:</strong> You only get an alert if it actually sees a dog.</li>
                            <li><strong>Speed:</strong> Analysis happens locally in milliseconds.</li>
                            <li><strong>Privacy:</strong> No footage ever leaves your house.</li>
                        </ul>
                    </div>
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 bg-amber-50/50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800">
                        <h3 className="font-bold text-zinc-900 dark:text-white">What you need</h3>
                        <ul className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-4 space-y-2">
                            <li>Any RTSP Camera (Reolink/Amcrest) - $40</li>
                            <li>A PC/Mini-Server to run Frigate</li>
                            <li>Pro Tip: Google Coral USB Accelerator ($60) for speed.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Getting Started</h2>
                </div>

                <div className="not-prose my-12 space-y-8">
                    <div className="flex flex-col gap-6 md:flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">1. Home Assistant Green</h3>
                            <div className="mt-2 inline-flex items-center rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                                Best Starter Hub
                            </div>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                This is the best way to dip your toes into local home automation. It includes the Zigbee radio you need to talk to sensors, and the software is pre-loaded. It is the only "Hub" you will ever need.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="https://www.home-assistant.io/green/" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-zinc-900 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black">
                                Buy Directly
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
                        headline: "DIY Smart Home for Pets: The Ultimate Cloud-Free Guide",
                        image: ["https://smartpetlab.vercel.app/images/products/smart-home-sensor.jpg"],
                        datePublished: "2026-01-21T12:00:00+00:00",
                        dateModified: "2026-01-21T16:00:00+00:00",
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
