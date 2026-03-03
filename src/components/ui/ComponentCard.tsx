"use client";

import React, { useState } from "react";
import { Check, Copy, Eye, Terminal, Sparkles } from "lucide-react";
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
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
    name,
    description,
    code,
    preview,
    category,
}) => {
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
    const [copied, setCopied] = useState(false);
    const { resolvedTheme } = useTheme();

    const handleCopy = () => {
        navigator.clipboard.writeText(code.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group rounded-[2rem] border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/20 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]">
            <div className="p-6 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-black text-foreground tracking-tight">{name}</h3>
                            {category && (
                                <span className="px-2 py-0.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md text-[8px] font-black text-neutral-500 uppercase tracking-widest">
                                    {category}
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-neutral-500 font-medium">{description}</p>
                    </div>
                </div>
                <div className="flex gap-1 p-1.5 bg-black/5 dark:bg-black/60 rounded-2xl border border-black/5 dark:border-white/5">
                    <button
                        onClick={() => setActiveTab("preview")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === "preview" ? "bg-primary text-primary-foreground shadow-lg" : "text-neutral-500 hover:text-foreground"
                            }`}
                    >
                        <Eye className="w-3.5 h-3.5" /> Preview
                    </button>
                    <button
                        onClick={() => setActiveTab("code")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === "code" ? "bg-primary text-primary-foreground shadow-lg" : "text-neutral-500 hover:text-foreground"
                            }`}
                    >
                        <Terminal className="w-3.5 h-3.5" /> Code
                    </button>
                </div>
            </div>

            <div className="relative min-h-[350px] flex items-center justify-center p-12 bg-background overflow-hidden">
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
                            className="w-full flex justify-center z-10"
                        >
                            {preview}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="code"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="w-full max-h-[280px] overflow-auto rounded-2xl border border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-black/40 z-10"
                        >
                            <SyntaxHighlighter
                                language="javascript"
                                style={resolvedTheme === "light" ? prism : atomDark}
                                customStyle={{
                                    margin: 0,
                                    padding: "1.5rem",
                                    fontSize: "13px",
                                    lineHeight: "1.6",
                                    background: "transparent",
                                }}
                            >
                                {code.trim()}
                            </SyntaxHighlighter>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={handleCopy}
                    className="absolute bottom-6 right-6 px-4 py-2 bg-foreground text-background text-xs font-black rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all active:scale-95 z-10 flex items-center gap-2 shadow-2xl"
                >
                    {copied ? (
                        <>
                            <Check className="w-3.5 h-3.5" />
                            COPIED
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            COPY CODE
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};
