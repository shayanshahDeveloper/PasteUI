import React from "react";
import { ArrowRight, Box, MousePointer2, Zap, Rocket } from "lucide-react";
import Link from "next/link";

import { BackgroundBoxes } from "../ui/BackgroundBoxes";
import { CodeTypingAnimation } from "../ui/CodeTypingAnimation";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-32 overflow-hidden">
            {/* Background Interactive Effect */}
            <div className="absolute inset-0 w-full h-full bg-background z-0 pointer-events-none" />

            <div className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]">
                <BackgroundBoxes />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="hero-tag inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold text-primary mb-10 tracking-widest uppercase shadow-[0_0_20px_rgba(124,58,237,0.1)]">
                    <Rocket className="w-4 h-4" /> Version 2.0 is Live
                </div>

                <h1
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
                >
                    <span className="text-foreground">Copy. Paste.</span> <br />
                    <span className="text-gradient-vibrant">Innovate.</span>
                </h1>

                <p
                    className="text-xl md:text-2xl text-neutral-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    A premium collection of high-performance Tailwind components
                    designed to wow your users. Built for React and Next.js.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                    <Link
                        href="/components"
                        className="hero-cta group relative w-full sm:w-auto px-10 py-5 bg-foreground text-background font-black rounded-2xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                        Explore Library <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="https://github.com/shayanshahDeveloper/PasteUI"
                        target="_blank"
                        rel="noreferrer"
                        className="hero-cta w-full sm:w-auto px-10 py-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground font-black rounded-2xl hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                    >
                        GitHub <span className="opacity-40">1.2k Stars</span>
                    </a>
                </div>

                {/* Trusted By Section */}
                <div className="hero-cta flex flex-col items-center justify-center gap-4 mb-32">
                    <div className="flex -space-x-4">
                        <img className="w-12 h-12 rounded-full border-4 border-background relative z-0 hover:z-50 transition-transform hover:scale-110 object-cover" src="https://i.pravatar.cc/100?img=68" alt="User 1" />
                        <img className="w-12 h-12 rounded-full border-4 border-background relative z-10 hover:z-50 transition-transform hover:scale-110 object-cover" src="https://i.pravatar.cc/100?img=32" alt="User 2" />
                        <img className="w-12 h-12 rounded-full border-4 border-background relative z-20 hover:z-50 transition-transform hover:scale-110 object-cover" src="https://i.pravatar.cc/100?img=12" alt="User 3" />
                        <img className="w-12 h-12 rounded-full border-4 border-background relative z-30 hover:z-50 transition-transform hover:scale-110 object-cover" src="https://i.pravatar.cc/100?img=33" alt="User 4" />
                        <img className="w-12 h-12 rounded-full border-4 border-background relative z-40 hover:z-50 transition-transform hover:scale-110 object-cover" src="https://i.pravatar.cc/100?img=47" alt="User 5" />
                        <div className="w-12 h-12 rounded-full border-4 border-background relative z-50 bg-primary flex items-center justify-center text-white text-[10px] font-black shadow-[0_0_20px_rgba(124,58,237,0.4)] cursor-default">
                            +2k
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 mt-2">
                        <div className="flex text-yellow-500 text-sm tracking-widest">
                            ★★★★★
                        </div>
                        <span className="text-neutral-500 font-medium text-sm">
                            Trusted by <span className="text-foreground font-bold">2,000+</span> developers
                        </span>
                    </div>
                </div>

                {/* Browser Mockup */}
                <div className="mockup-hero max-w-5xl mx-auto mb-32">
                    <div className="mockup-window shadow-2xl">
                        <div className="p-8 bg-neutral-50 dark:bg-neutral-900/50 min-h-[400px] flex items-center justify-center border-t border-black/10 dark:border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left w-full">
                                <div>
                                    <div className="text-primary font-mono text-sm mb-4">{"// Step 1: Browse"}</div>
                                    <h3 className="text-3xl font-bold text-foreground mb-6">Pick a component from our vetted library.</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Navbars", "Footers", "Dashboards", "Forms", "Pricing"].map(t => (
                                            <span key={t} className="px-3 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs font-bold text-foreground shadow-sm">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <CodeTypingAnimation />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {[
                        { icon: <Box className="w-8 h-8" />, title: "Modular Architecture", description: "Every component is isolated and tree-shakeable. Use only what you need." },
                        { icon: <Zap className="w-8 h-8" />, title: "Hyper Performance", description: "Built with pure Tailwind utility classes for the smallest bundle sizes." },
                        { icon: <MousePointer2 className="w-8 h-8" />, title: "Developer Experience", description: "Comprehensive documentation and copy-paste ready examples." }
                    ].map((feature, i) => (
                        <div key={i} className="feature-card p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] text-left hover:border-primary/50 transition-all group hover:bg-primary/[0.02]">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(124,58,237,0.1)]">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-[1.6]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
