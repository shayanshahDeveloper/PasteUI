"use client";

import React, { useState, useEffect } from "react";
import { Check, Copy, Eye, Terminal, Sparkles, Code, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GridPattern } from "./GridPattern";

interface ComponentCardProps {
    name: string;
    description: string;
    code: string;
    preview: React.ReactNode;
    category?: string;
    hasSidebar?: boolean;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
    name,
    description,
    code,
    preview,
    category,
    hasSidebar = false,
}) => {
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
    const [copied, setCopied] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const handleCloseOthers = (e: any) => {
            if (e.detail !== name) {
                setIsModalOpen(false);
            }
        };
        window.addEventListener("close-all-code-modals", handleCloseOthers);
        return () => window.removeEventListener("close-all-code-modals", handleCloseOthers);
    }, [name]);

    const handleCopy = () => {
        if (hasSidebar) {
            // Close any other open modals before opening this one
            window.dispatchEvent(new CustomEvent("close-all-code-modals", { detail: name }));
            setIsModalOpen(true);
        } else {
            finalCopy();
        }
    };

    const finalCopy = () => {
        const creditedCode = `/**
 * Component: ${name}
 * Developed by: Shayan Shah | PasteUI Premium
 * Licensed under MIT
 * -----------------------------------------
 */

${code.trim()}`;
        navigator.clipboard.writeText(creditedCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group rounded-[2rem] border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/20 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]">
            <div className="p-4 sm:p-6 border-b border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-black text-foreground tracking-tight truncate">{name}</h3>
                            {category && (
                                <span className="px-2 py-0.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md text-[8px] font-black text-neutral-500 uppercase tracking-widest whitespace-nowrap">
                                    {category}
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-neutral-500 font-medium line-clamp-1">{description}</p>
                    </div>
                </div>
                <div className="flex gap-1 p-1 bg-black/5 dark:bg-black/60 rounded-2xl border border-black/5 dark:border-white/5 self-start sm:self-auto">
                    <button
                        onClick={() => setActiveTab("preview")}
                        className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === "preview" ? "bg-primary text-primary-foreground shadow-lg" : "text-neutral-500 hover:text-foreground"
                            }`}
                    >
                        <Eye className="w-3.5 h-3.5" /> <span className="hidden xs:inline">Preview</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("code")}
                        className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === "code" ? "bg-primary text-primary-foreground shadow-lg" : "text-neutral-500 hover:text-foreground"
                            }`}
                    >
                        <Terminal className="w-3.5 h-3.5" /> <span className="hidden xs:inline">Code</span>
                    </button>
                </div>
            </div>

            <div className="relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-4 sm:p-12 bg-background overflow-hidden">
                {/* Background Pattern */}
                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeWidth={1.5}
                    strokeDasharray="4 2"
                    className={
                        "absolute inset-0 h-full w-full opacity-60 dark:opacity-80 stroke-primary/40 dark:stroke-primary/40 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
                    }
                />

                <AnimatePresence mode="wait">
                    {activeTab === "preview" ? (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="w-full flex justify-center z-10 overflow-x-auto py-8"
                        >
                            {preview}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="code"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="w-full max-h-[300px] overflow-auto rounded-2xl border border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-black/40 z-10"
                        >
                            <SyntaxHighlighter
                                language="javascript"
                                style={resolvedTheme === "light" ? prism : atomDark}
                                customStyle={{
                                    margin: 0,
                                    padding: "1rem",
                                    fontSize: "12px",
                                    lineHeight: "1.6",
                                    background: "transparent",
                                }}
                            >
                                {code.trim()}
                            </SyntaxHighlighter>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom Controls Bar */}
            <div className="p-4 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/5 dark:border-white/5 flex flex-col xs:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 px-3 py-1.5 bg-background/50 backdrop-blur-md rounded-2xl border border-black/5 dark:border-white/5 cursor-default w-full xs:w-auto">
                    <div className="relative">
                        <div className="absolute inset-0 blur-md rounded-full bg-primary/40" />
                        <img
                            src="/images/DevProfile.png"
                            alt="Shayan Shah"
                            className="w-8 h-8 rounded-full border border-primary/20 relative z-10"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500">Author</span>
                        <span className="text-[11px] font-black text-foreground leading-tight">Shayan Shah</span>
                    </div>
                </div>

                <button
                    onClick={handleCopy}
                    className={`w-full xs:w-auto px-4 py-2.5 text-xs font-black rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl ${copied
                        ? "bg-primary text-white"
                        : "bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-200"
                        }`}
                >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "COPIED!" : "GET CODE"}
                </button>
            </div>

            {/* Premium Flush Code Box (Responsive + Aligned) */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-x-0 bottom-0 z-[100] pointer-events-none">
                        <div className="container mx-auto px-0 sm:px-4">
                            <div className="flex flex-col md:flex-row gap-10">
                                {/* Mirror Sidebar space to align the box with the components grid */}
                                {hasSidebar && <div className="hidden md:block w-64 shrink-0" />}

                                {/* The Actual Box */}
                                <div className="flex-1 min-w-0 pointer-events-auto">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "100%" }}
                                        transition={{ type: "spring", damping: 30, stiffness: 250 }}
                                        className="w-full bg-white dark:bg-zinc-950 backdrop-blur-2xl border-x border-t border-black/10 dark:border-white/10 overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[70vh]"
                                    >
                                        <div className="p-4 sm:p-6 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
                                            <div className="flex items-center gap-3 sm:gap-5">
                                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner shrink-0">
                                                    <Code className="w-5 h-5 sm:w-7 sm:h-7" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="text-sm sm:text-xl font-black tracking-tight truncate">{name}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                                                        <span className="text-[8px] sm:text-[10px] text-neutral-500 font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] truncate">
                                                            Code Ready
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-4">
                                                <button
                                                    onClick={finalCopy}
                                                    className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-black rounded-lg sm:rounded-xl shadow-[0_10px_20px_rgba(124,58,237,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                                                >
                                                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                                    <span className="hidden xs:inline">{copied ? "COPIED" : "COPY SOURCE"}</span>
                                                    <span className="xs:hidden">{copied ? "DONE" : "COPY"}</span>
                                                </button>
                                                <button
                                                    onClick={() => setIsModalOpen(false)}
                                                    className="p-2 sm:p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors border border-black/5 dark:border-white/5"
                                                >
                                                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex-1 overflow-hidden p-3 sm:p-6 bg-black/[0.03] dark:bg-black/40">
                                            <div className="h-full overflow-auto custom-scrollbar rounded-xl sm:rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/40">
                                                <SyntaxHighlighter
                                                    language="javascript"
                                                    style={resolvedTheme === "light" ? prism : atomDark}
                                                    customStyle={{
                                                        margin: 0,
                                                        padding: "1.25rem sm:2.5rem",
                                                        fontSize: "12px sm:14px",
                                                        lineHeight: "1.7",
                                                        background: "transparent",
                                                    }}
                                                >
                                                    {code.trim()}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>

                                        <div className="px-5 sm:px-8 py-3 sm:py-4 bg-white/[0.05] dark:bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 border-t border-black/5 dark:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="relative shrink-0">
                                                    <div className="absolute inset-0 blur-md rounded-full bg-primary/20" />
                                                    <img
                                                        src="/images/DevProfile.png"
                                                        alt="Shayan Shah"
                                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-primary/20 relative z-10"
                                                    />
                                                </div>
                                                <span className="text-[8px] sm:text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                                                    MIT License | PasteUI Asset
                                                </span>
                                            </div>
                                            <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-neutral-400">
                                                <span className="text-primary">Made with ❤️ for the community</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
