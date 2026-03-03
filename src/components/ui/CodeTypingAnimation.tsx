"use client";

import React, { useState, useEffect, useRef } from "react";

const codeLines = [
    { text: "<button", color: "text-neutral-500", indent: false },
    { text: '  className="px-8 py-3', color: "text-sky-300", indent: true },
    { text: "  bg-gradient-to-r", color: "text-sky-300", indent: true },
    { text: "  from-violet-600 to-fuchsia-500", color: "text-sky-300", indent: true },
    { text: "  text-white font-bold", color: "text-sky-300", indent: true },
    { text: "  rounded-2xl shadow-lg", color: "text-sky-300", indent: true },
    { text: '  hover:shadow-violet-500/25"', color: "text-sky-300", indent: true },
    { text: ">", color: "text-neutral-500", indent: false },
    { text: "  Get Started", color: "text-amber-200", indent: true },
    { text: "</button>", color: "text-neutral-500", indent: false },
];

export const CodeTypingAnimation = () => {
    const [displayedLines, setDisplayedLines] = useState<
        { text: string; color: string; indent: boolean }[]
    >([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Start typing immediately on mount
    useEffect(() => {
        // Force the first character to appear instantly
        setCurrentCharIndex(1);

        // Set the first line with first character
        setDisplayedLines([{
            ...codeLines[0],
            text: codeLines[0].text.slice(0, 1)
        }]);
    }, []); // Empty dependency array - runs once on mount

    useEffect(() => {
        if (isComplete) return;

        if (currentLineIndex >= codeLines.length) {
            setIsComplete(true);
            const restartTimeout = setTimeout(() => {
                setDisplayedLines([]);
                setCurrentLineIndex(0);
                setCurrentCharIndex(0);
                setIsComplete(false);
            }, 3000);
            return () => clearTimeout(restartTimeout);
        }

        const currentLine = codeLines[currentLineIndex];

        if (currentCharIndex <= currentLine.text.length) {
            const typingSpeed = 25 + Math.random() * 35;
            const timeout = setTimeout(() => {
                setDisplayedLines((prev) => {
                    const newLines = [...prev];
                    // Ensure we have an entry for this line
                    if (!newLines[currentLineIndex]) {
                        newLines[currentLineIndex] = {
                            ...currentLine,
                            text: ''
                        };
                    }
                    newLines[currentLineIndex] = {
                        ...currentLine,
                        text: currentLine.text.slice(0, currentCharIndex),
                    };
                    return newLines;
                });
                setCurrentCharIndex((prev) => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else {
            const lineDelay = 80 + Math.random() * 120;
            const timeout = setTimeout(() => {
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentCharIndex(0);
            }, lineDelay);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex, isComplete]);

    return (
        <div
            ref={containerRef}
            className="bg-[#1e1e2e] p-4 rounded-2xl border border-[#2a2a3c] font-mono text-xs text-neutral-300 shadow-xl min-h-[220px]"
        >
            <div className="space-y-0.5">
                {displayedLines.map((line, i) => (
                    <div
                        key={i}
                        className={`${line.color} ${line.indent ? "pl-4" : ""} whitespace-pre`}
                    >
                        {line.text}
                        {i === currentLineIndex && !isComplete && (
                            <span className="inline-block w-[2px] h-[14px] bg-primary ml-0.5 align-middle animate-pulse" />
                        )}
                    </div>
                ))}
                {!isComplete && displayedLines.length === 0 && (
                    <span className="inline-block w-[2px] h-[14px] bg-primary animate-pulse" />
                )}
            </div>
        </div>
    );
};