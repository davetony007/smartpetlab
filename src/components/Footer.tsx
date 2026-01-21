import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-black">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-4">
                <div className="col-span-1 md:col-span-2">
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        SmartPetLab
                    </span>
                    <p className="mt-4 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
                        Testing the latest pet technology to help you make smarter decisions for your furry friends.
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        Explore
                    </h3>
                    <ul className="mt-4 space-y-3">
                        <li>
                            <Link
                                href="/reviews"
                                className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            >
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/guides"
                                className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            >
                                Guides
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        Legal
                    </h3>
                    <ul className="mt-4 space-y-3">
                        <li>
                            <Link
                                href="/privacy"
                                className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            >
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-200 px-6 pt-8 dark:border-zinc-800">
                <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
                    &copy; {new Date().getFullYear()} SmartPetLab. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
