import Link from "next/link";
import { Menu, Search } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 transition group-hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-1.179 9.607a24.452 24.452 0 0 1 3.354 3.354c1.06 1.272 3.295 1.296 4.39.04l.11-.13 3.69-2.22" />
              <path d="m14 13.682.11.13c1.096 1.256 3.331 1.232 4.39-.04a24.452 24.452 0 0 1 3.355-3.354C24.887 6.814 23.593 1.278 20.77 0.81c-1.923-.321-3.5 1.98-3.5 3.368" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            SmartPet<span className="text-violet-600">Lab</span>
          </span>
        </Link>

        <div className="hidden gap-8 md:flex items-center">
          <Link
            href="/reviews"
            className="text-sm font-medium text-zinc-600 transition hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
          >
            Reviews
          </Link>
          <Link
            href="/comparisons"
            className="text-sm font-medium text-zinc-600 transition hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
          >
            Comparisons
          </Link>
          <Link
            href="/guides"
            className="text-sm font-medium text-zinc-600 transition hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
          >
            Guides
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-600 transition hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center h-9 w-9 text-zinc-500 hover:text-violet-600 transition">
            <Search className="h-5 w-5" />
          </button>
          <div className="md:hidden">
            <button className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800">
              <Menu className="h-4 w-4 text-zinc-900 dark:text-zinc-50" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
