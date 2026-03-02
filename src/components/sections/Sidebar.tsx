"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    Book,
    Box,
    MousePointer2,
    Type,
    Palette,
    Zap,
    Layout,
    MessageCircle,
    Layers,
    Monitor
} from "lucide-react";

interface SidebarGroup {
    title: string;
    items: {
        title: string;
        href: string;
        icon?: React.ReactNode;
        label?: string;
    }[];
}

const sidebarConfig: SidebarGroup[] = [
    {
        title: "GETTING STARTED",
        items: [
            { title: "Introduction", href: "/docs", icon: <Book className="w-4 h-4" /> },
            { title: "Installation", href: "/docs#quick-start", icon: <Zap className="w-4 h-4" /> },
            { title: "Theming", href: "/docs#design-tokens", icon: <Palette className="w-4 h-4" />, label: "New" },
        ],
    },
    {
        title: "COMPONENTS",
        items: [
            { title: "All Components", href: "/components", icon: <Layers className="w-4 h-4" /> },
            { title: "Buttons", href: "/components?category=Buttons", icon: <MousePointer2 className="w-4 h-4" /> },
            { title: "Inputs", href: "/components?category=Inputs", icon: <Type className="w-4 h-4" /> },
            { title: "Cards", href: "/components?category=Cards", icon: <Box className="w-4 h-4" /> },
            { title: "Navigation", href: "/components?category=Navigation", icon: <Layout className="w-4 h-4" /> },
            { title: "Dashboard Designs", href: "/components?category=Dashboards", icon: <Monitor className="w-4 h-4" /> },
            { title: "Landing Pages", href: "/components?category=Landing Pages", icon: <Layout className="w-4 h-4" /> },
            { title: "Header Designs", href: "/components?category=Headers", icon: <Layout className="w-4 h-4" /> },
            { title: "FAQ Sections", href: "/components?category=FAQ", icon: <MessageCircle className="w-4 h-4" /> },
            { title: "Badges & Avatars", href: "/components?category=Badges", icon: <Layers className="w-4 h-4" /> },
            { title: "Feedback", href: "/components?category=Feedback", icon: <MessageCircle className="w-4 h-4" /> },
        ],
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get("category");
    const [currentHash, setCurrentHash] = React.useState("");

    React.useEffect(() => {
        // Set initial hash
        setCurrentHash(window.location.hash.replace("#", ""));

        const handleHashChange = () => {
            setCurrentHash(window.location.hash.replace("#", ""));
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <div className="w-full pr-4">
            {sidebarConfig.map((group, index) => (
                <div key={index} className="mb-10">
                    <h4 className="mb-4 px-2 text-[10px] font-black text-neutral-500 tracking-[0.2em] uppercase">
                        {group.title}
                    </h4>
                    <div className="space-y-1">
                        {group.items.map((item, i) => {
                            const [itemPath, itemQuery] = item.href.split("?");
                            const [purePath, itemHash] = itemPath.split("#");

                            const isExactPath = pathname === purePath;

                            // Handle Hash-based matching for Docs
                            const matchesHash = itemHash ? currentHash === itemHash : !currentHash;

                            // Handle Category-based matching for Components
                            const matchesCategory = activeCategory
                                ? item.href.includes(`category=${activeCategory}`)
                                : !itemQuery || !itemQuery.includes("category=");

                            // Final active check: Path must match, and either category OR hash must match
                            const isActive = isExactPath && (itemPath.includes('components') ? matchesCategory : matchesHash);

                            return (
                                <Link
                                    key={i}
                                    href={item.href}
                                    onClick={() => {
                                        const [, hash] = item.href.split("#");
                                        setCurrentHash(hash || "");
                                    }}
                                    className={cn(
                                        "group flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold transition-all border",
                                        isActive
                                            ? "bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(124,58,237,0.1)]"
                                            : "border-transparent text-neutral-500 hover:text-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "transition-colors",
                                            isActive ? "text-primary scale-110" : "text-neutral-600 group-hover:text-foreground"
                                        )}>
                                            {item.icon}
                                        </div>
                                        <span className={cn(isActive && "tracking-tight")}>{item.title}</span>
                                    </div>
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="w-1.5 h-1.5 rounded-full bg-primary"
                                        />
                                    )}
                                    {item.label && !isActive && (
                                        <span className="px-1.5 py-0.5 bg-primary text-[8px] font-black text-white rounded-md tracking-tighter uppercase">
                                            {item.label}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
