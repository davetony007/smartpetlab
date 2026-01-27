import Link from "next/link";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Wifi, Server } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";

export const metadata = {
    title: "Are Pet Cameras Safe? Privacy & Security Guide | SmartPetLab",
    description: "Worried about privacy? We explain how to secure your Furbo, Petcube, or Eufy camera from hackers using 2FA, guest networks, and local storage options for maximum security.",
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white dark:bg-black pb-24">
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300 border border-red-500/30">
                        Security Guide
                    </span>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                        Are Pet Cameras <span className="text-red-400">Safe?</span>
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
                        You're inviting a camera into your living room. Here is the uncomfortable truth about hacking risks and how to actually lock them down.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4 text-sm text-zinc-500">
                        <span>By The SmartPetLab Team</span>
                        <span>•</span>
                        <span>10 min read</span>
                        <span>•</span>
                        <span>Updated Jan 2026</span>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-3xl px-6 prose prose-lg dark:prose-invert prose-red">

                {/* Warning Box */}
                <div className="not-prose my-10 border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/10">
                    <h3 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                        <AlertTriangle className="h-5 w-5" /> The Reality Check
                    </h3>
                    <p className="mt-2 text-red-900/80 dark:text-red-200/80">
                        Most "hacks" aren't sophisticated code-breaking. They are <strong>Credential Stuffing</strong>—hackers using your old leaked passwords from other sites to log into your camera account.
                    </p>
                </div>

                <p className="lead text-xl text-zinc-600 dark:text-zinc-300">
                    Stories of hacked nursery cams screaming at babies are terrifying. But modern pet cameras like <strong>Furbo</strong> and <strong>Eufy</strong> use bank-grade encryption. The weak link in the chain isn't usually the camera... it's the settings.
                </p>

                <StickyCTA price="£149.00" productName="Eufy D605 (Local Storage)" amazonUrl="https://www.amazon.co.uk/s?k=eufy+Pet+Dog+Camera&tag=dts0f-21" />

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">01</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">How Hackers Actually Get In</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 not-prose my-8">
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                            <Lock className="h-5 w-5 text-zinc-500" />
                        </div>
                        <h3 className="mt-4 font-bold text-zinc-900 dark:text-white">1. Reused Passwords</h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            If you use the same password for specific dog forums as you do for your camera, and the forum gets hacked, the hackers have your camera key.
                        </p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                            <Wifi className="h-5 w-5 text-zinc-500" />
                        </div>
                        <h3 className="mt-4 font-bold text-zinc-900 dark:text-white">2. Outdated Firmware</h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Companies release security patches. If you ignore that "Update Available" notification, you are leaving the door unlocked.
                        </p>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">02</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Your 3-Step Lockdown Checklist</h2>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">1</div>
                        <div>
                            <h3 className="mt-0 font-bold text-zinc-900 dark:text-white">Enable Two-Factor Authentication (2FA)</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">This is non-negotiable. Even if a hacker has your password, 2FA stops them dead because they don't have your phone.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">2</div>
                        <div>
                            <h3 className="mt-0 font-bold text-zinc-900 dark:text-white">Use a 'Guest' WiFi Network</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Most modern routers allow a "Guest Network". Put your smart home devices on this separate network. If a camera is compromised, they can't jump to your laptop.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">3</div>
                        <div>
                            <h3 className="mt-0 font-bold text-zinc-900 dark:text-white">The "Wall Trick"</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Low tech, 100% effective. When you are home, turn the camera to face the wall. Or plug it into a smart plug and schedule it to turn OFF effectively cutting the power.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800 mr-4 select-none">03</span>
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Cloud vs. Local Storage: The Big Debate</h2>
                </div>

                <div className="my-8 rounded-2xl bg-zinc-900 p-8 text-white shadow-xl">
                    <h3 className="text-white mt-0">Where does the video go?</h3>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl bg-zinc-800 p-4 border border-zinc-700">
                            <div className="flex items-center gap-2 font-bold text-blue-400">
                                <Server className="h-5 w-5" /> Cloud Cameras
                            </div>
                            <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Furbo, Ring, Petcube</p>
                            <p className="mt-3 text-sm text-zinc-300">
                                Video is uploaded to the company's server.
                                <br /><br />
                                <span className="text-green-400">Pros:</span> You can see history if the camera is stolen.
                                <br />
                                <span className="text-red-400">Cons:</span> Theoretical risk of server breach. Monthly fees.
                            </p>
                        </div>
                        <div className="rounded-xl bg-zinc-800 p-4 border border-zinc-700">
                            <div className="flex items-center gap-2 font-bold text-green-400">
                                <CheckCircle className="h-5 w-5" /> Local Storage
                            </div>
                            <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Eufy, Aqara</p>
                            <p className="mt-3 text-sm text-zinc-300">
                                Video stays on a chip INSIDE your house.
                                <br /><br />
                                <span className="text-green-400">Pros:</span> Max privacy. No monthly fees.
                                <br />
                                <span className="text-red-400">Cons:</span> If a burglar steals the camera, they take the footage too.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Our Secure Picks</h2>
                </div>

                <div className="not-prose my-12 space-y-8">
                    {/* Recommendation 1 */}
                    <div className="flex flex-col gap-6 md:flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">1. Eufy Pet Dog Camera D605</h3>
                            <div className="mt-2 inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                                Best for Privacy
                            </div>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                The gold standard for privacy fanatics. It records to 16GB of local storage. No footage ever leaves your home unless you request it via the encrypted app. Zero monthly fees.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/reviews/eufy-pet-camera" className="rounded-lg bg-zinc-900 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black">
                                Read Review
                            </Link>
                            <a href="https://www.amazon.co.uk/s?k=eufy+Pet+Dog+Camera&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="text-center text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                                Check Price
                            </a>
                        </div>
                    </div>

                    {/* Recommendation 2 */}
                    <div className="flex flex-col gap-6 md:flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">2. Furbo 360</h3>
                            <div className="mt-2 inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                Most Popular
                            </div>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                While it is a cloud camera, Furbo has invested heavily in security (AES-256 bit encryption). It supports 2FA and has an excellent track record. Just make sure to set a unique password.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/reviews/furbo-360" className="rounded-lg bg-zinc-900 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black">
                                Read Review
                            </Link>
                            <a href="https://www.amazon.co.uk/s?k=Furbo+360+Dog+Camera&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="text-center text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                                Check Price
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-8 flex items-end border-b-2 border-zinc-200 pb-4 dark:border-zinc-800">
                    <h2 className="m-0 text-3xl font-bold text-zinc-900 dark:text-white">Conclusion</h2>
                </div>

                <p>
                    Pet cameras are safe enough for the average home <em>provided</em> you use a unique password and enable 2FA. If you are extremely privacy-conscious, skip the cloud subscription models and get the <strong>Eufy D605</strong>.
                </p>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "Are Pet Cameras Safe? Privacy & Security Explained",
                        image: ["https://smartpetlab.vercel.app/images/products/furbo-360.jpg"],
                        datePublished: "2026-01-20T08:00:00+00:00",
                        dateModified: "2026-01-20T08:00:00+00:00",
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
