"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StickyCTAProps {
    price: string;
    productName: string;
    amazonUrl: string;
}

export function StickyCTA({ price, productName, amazonUrl }: StickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px (past hero usually)
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-0 left-0 right-0 z-50 transform border-t border-zinc-200 bg-white p-4 shadow-lg transition-transform duration-300 dark:border-zinc-800 dark:bg-zinc-900 lg:hidden",
                isVisible ? "translate-y-0" : "translate-y-full"
            )}
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        {productName}
                    </span>
                    <span className="text-lg font-bold text-zinc-900 dark:text-white">
                        {price}
                    </span>
                </div>
                <a
                    href={amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#FF9900] px-6 py-2.5 text-sm font-bold text-black shadow-md transition hover:bg-[#FF9900]/90 active:scale-95"
                >
                    View Deal <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </div>
    );
}
