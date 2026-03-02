"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Copy, Github, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchModal } from "../ui/SearchModal";
import { ThemeToggle } from "../ui/ThemeToggle";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 bg-background/80 ${!isSearchOpen ? "backdrop-blur-md" : ""}`}>
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-1.5 bg-primary/10 dark:bg-white/5 rounded-xl border border-primary/20">
                        <img src="/favicon.png" alt="PasteUI Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <span className="text-xl font-black tracking-tighter">PasteUI</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/components" className="text-sm font-bold text-neutral-500 dark:text-neutral-400 hover:text-foreground transition-colors">
                        Components
                    </Link>

                    <Link href="/showcase" className="text-sm font-bold text-neutral-500 dark:text-neutral-400 hover:text-foreground transition-colors">
                        Showcase
                    </Link>
                    <Link href="/docs" className="text-sm font-bold text-neutral-500 dark:text-neutral-400 hover:text-foreground transition-colors">
                        Design System
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-neutral-500 text-xs font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                    >
                        <span className="opacity-50">Search...</span>
                        <span className="px-1.5 py-0.5 bg-black/5 dark:bg-white/5 rounded border border-black/10 dark:border-white/10 text-[10px]">⌘K</span>
                    </button>
                    <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2" />
                    <ThemeToggle />
                    <a
                        href="https://github.com/shayanshahDeveloper/PasteUI"
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-foreground transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <Link
                        href="/components"
                        className="px-6 py-2 bg-primary text-white text-xs font-black rounded-xl hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all"
                    >
                        GET STARTED
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setIsSearchOpen(true)} className="text-neutral-500">
                        <span className="opacity-50 text-xs">Search...</span>
                    </button>
                    <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-black/10 dark:border-white/5 bg-background overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            <Link href="/components" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                Components
                            </Link>

                            <Link href="/showcase" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                Showcase
                            </Link>
                            <Link href="/docs" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                Docs
                            </Link>
                            <div className="flex items-center gap-4 pt-4 border-t border-black/10 dark:border-white/5">
                                <Link
                                    href="/components"
                                    className="w-full text-center px-4 py-3 bg-foreground text-background text-sm font-medium rounded-xl"
                                >
                                    Browse Components
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </nav>
    );
};
