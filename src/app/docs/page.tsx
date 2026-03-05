"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Sidebar } from "@/components/sections/Sidebar";
import gsap from "gsap";
import { BookOpen, Code2, Rocket, Zap, Palette, Terminal, Copy } from "lucide-react";

const steps = [
    {
        icon: <Rocket className="w-6 h-6" />,
        color: "bg-blue-500",
        title: "Quick Start",
        description: "Generate a new Next.js project with Tailwind CSS pre-configured.",
        code: "npx create-next-app@latest my-app --ts --tailwind --eslint"
    },
    {
        icon: <Palette className="w-6 h-6" />,
        color: "bg-purple-500",
        title: "Design Tokens",
        description: "Add our custom color palette and glassmorphism utilities to your config.",
        code: `colors: {
  primary: '#7c3aed',
  secondary: '#d946ef',
  accent: '#06b6d4',
  success: '#36d399',
}`
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        color: "bg-emerald-500",
        title: "Components",
        description: "Copy any component from our library and drop it into your components/ui folder.",
        code: "import { ShinyButton } from '@/components/ui/ShinyButton';"
    }
];

export default function DocsPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".docs-header", {
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "expo.out"
            });

            gsap.from(".doc-step", {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.4
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-background pt-24 pb-20">
            <Navbar />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-10">
                    <aside className="hidden md:block w-64 shrink-0">
                        <div className="sticky top-24">
                            <Suspense fallback={<div className="animate-pulse space-y-2">{[...Array(6)].map((_, i) => <div key={i} className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />)}</div>}>
                                <Sidebar />
                            </Suspense>
                        </div>
                    </aside>

                    <div className="flex-1 max-w-4xl">
                        <header className="docs-header mb-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary mb-6 uppercase tracking-widest">
                                <BookOpen className="w-3.5 h-3.5" /> Documentation
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                                System <span className="text-gradient-vibrant">Guide.</span>
                            </h1>
                            <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl">
                                Master the PasteUI workflow. From installation to advanced
                                theming, we've got you covered.
                            </p>
                        </header>

                        <div className="space-y-32">
                            {steps.map((step, idx) => {
                                const sectionId = step.title.toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <section
                                        key={idx}
                                        id={sectionId}
                                        className="doc-step relative scroll-mt-32"
                                    >
                                        <div className="flex items-start gap-8">
                                            <div className={`w-14 h-14 rounded-[1.5rem] ${step.color} flex items-center justify-center text-white shadow-2xl shrink-0`}>
                                                {step.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-xs font-black text-neutral-600 tracking-widest uppercase">Step 0{idx + 1}</span>
                                                    <div className="flex-1 h-px bg-black/5 dark:bg-white/5"></div>
                                                </div>
                                                <h2 className="text-4xl font-black mb-4 tracking-tight">{step.title}</h2>
                                                <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium mb-10 leading-relaxed max-w-xl">
                                                    {step.description}
                                                </p>

                                                <div className="mockup-window shadow-2xl">
                                                    <div className="p-6 bg-black/5 dark:bg-[#09090b] relative border-t border-black/10 dark:border-white/10">
                                                        <div className="absolute top-4 right-6 text-neutral-500 dark:text-neutral-600">
                                                            <Copy className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
                                                        </div>
                                                        <pre className="text-sm font-mono text-blue-600 dark:text-blue-300 overflow-x-auto">
                                                            <code>{step.code}</code>
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                );
                            })}
                        </div>


                    </div>
                </div>
            </div>
        </main>
    );
}
