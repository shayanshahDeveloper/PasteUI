import React from "react";

export interface UIComponent {
    id: string;
    name: string;
    description: string;
    category: "Buttons" | "Inputs" | "Cards" | "Navigation" | "Headers" | "Dashboards" | "Footers" | "Badges" | "Typography" | "Feedback" | "Landing Pages" | "FAQ";
    code: string;
    preview: React.ReactNode;
}

const ToastPreview = () => {
    const [show, setShow] = React.useState(false);
    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <button
                onClick={() => {
                    setShow(true);
                    setTimeout(() => setShow(false), 3000);
                }}
                className="px-6 py-2 bg-primary text-white text-xs font-black rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
                Trigger Demo Toast
            </button>
            <div className="h-16 relative w-full flex justify-center">
                {show && (
                    <div className="absolute inset-x-0 mx-auto p-3 bg-black text-white rounded-xl border border-white/10 shadow-2xl flex gap-3 max-w-[200px] animate-in slide-in-from-bottom-4 fade-in duration-300">
                        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">✓</div>
                        <div className="space-y-0.5 overflow-hidden">
                            <div className="text-[10px] font-black leading-tight">Success!</div>
                            <div className="text-[8px] opacity-60 leading-tight">Profile updated successfully.</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const TogglePreview = () => {
    const [isOn, setIsOn] = React.useState(true);
    return (
        <div
            onClick={() => setIsOn(!isOn)}
            className={`w-14 h-7 rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-primary' : 'bg-black/10 dark:bg-white/10'}`}
        >
            <div className={`w-5 h-5 bg-white rounded-full transition-all duration-300 transform ${isOn ? 'translate-x-7' : 'translate-x-0 shadow-sm'}`} />
        </div>
    );
}

const StarsPreview = () => {
    const [rating, setRating] = React.useState(4);
    const [hover, setHover] = React.useState(0);
    return (
        <div className="flex gap-2 p-2 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="transition-all transform hover:scale-125"
                >
                    <span className={`text-2xl ${(hover || rating) >= star ? 'text-amber-400 fill-amber-400' : 'text-neutral-300 dark:text-neutral-700'
                        }`}>
                        ★
                    </span>
                </button>
            ))}
        </div>
    );
}

const OTPPreview = () => {
    return (
        <div className="flex gap-2 focus-within:scale-105 transition-transform">
            {[1, 2, 3, 4].map(i => (
                <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-8 h-10 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-center font-black text-sm text-primary focus:border-primary focus:outline-none transition-all"
                    defaultValue={i === 1 ? "1" : ""}
                    autoFocus={i === 1}
                />
            ))}
        </div>
    );
}

const FAQPreview = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);
    const faqs = [
        { q: "Is it free?", a: "Yes, for personal use." },
        { q: "How to install?", a: "Use npm or yarn." }
    ];
    return (
        <div className="space-y-2 w-full max-w-[280px]">
            {faqs.map((faq, i) => (
                <div key={i} className="border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden bg-black/[0.02]">
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full p-3 flex justify-between items-center text-[10px] font-black text-left"
                    >
                        {faq.q}
                        <span className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>↓</span>
                    </button>
                    {openIndex === i && (
                        <div className="px-3 pb-3 text-[9px] text-neutral-500 font-bold leading-tight animate-in slide-in-from-top-2">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const TabsPreview = () => {
    const [active, setActive] = React.useState(0);
    const tabs = ["Design", "Code", "Assets"];
    return (
        <div className="w-full max-w-[240px]">
            <div className="flex p-1 bg-black/5 dark:bg-white/5 rounded-xl gap-1">
                {tabs.map((tab, i) => (
                    <button
                        key={tab}
                        onClick={() => setActive(i)}
                        className={`flex-1 py-1.5 text-[9px] font-black rounded-lg transition-all ${active === i ? 'bg-background shadow-sm text-primary' : 'text-neutral-500 hover:text-foreground'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="mt-4 p-4 bg-black/[0.02] rounded-xl border border-black/[0.03] text-[9px] font-bold text-neutral-400">
                Viewing {tabs[active]} content...
            </div>
        </div>
    );
}

const NotificationPreview = () => {
    const [unread, setUnread] = React.useState(3);
    return (
        <div className="relative">
            <button
                onClick={() => setUnread(0)}
                className="relative p-3 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 hover:scale-105 transition-transform"
            >
                🔔
                {unread > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-background animate-bounce">
                        {unread}
                    </span>
                )}
            </button>
        </div>
    );
}

const AvatarGroupPreview = () => {
    return (
        <div className="flex -space-x-3 overflow-hidden p-2">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-primary/20 border border-primary/30 flex items-center justify-center text-[8px] font-black text-primary">
                    U{i}
                </div>
            ))}
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-black/5 dark:bg-white/10 flex items-center justify-center text-[8px] font-black text-neutral-500">
                +9
            </div>
        </div>
    );
}

const MarqueePreview = () => {
    return (
        <div className="w-full overflow-hidden bg-black/[0.02] dark:bg-white/[0.01] py-3 rounded-xl border border-black/[0.03] select-none">
            <div className="flex w-[200%] animate-marquee">
                <div className="flex justify-around w-full shrink-0 items-center gap-4 px-4">
                    {['APPLE', 'META', 'GOOGLE', 'OPENAI', 'TESLA'].map((logo) => (
                        <span key={logo} className="text-[10px] font-black tracking-tighter text-neutral-400 grayscale">{logo}</span>
                    ))}
                </div>
                <div className="flex justify-around w-full shrink-0 items-center gap-4 px-4">
                    {['APPLE', 'META', 'GOOGLE', 'OPENAI', 'TESLA'].map((logo) => (
                        <span key={logo} className="text-[10px] font-black tracking-tighter text-neutral-400 grayscale">{logo}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FAQItem = ({ q, a }: { q: string, a: string }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl transition-all">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <span className="text-[10px] font-black">{q}</span>
                <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
            </button>
            {isOpen && <p className="mt-2 text-[8px] text-neutral-500 leading-tight">{a}</p>}
        </div>
    );
}

const InputPreview = ({ placeholder }: { placeholder: string }) => {
    const [val, setVal] = React.useState("");
    return (
        <div className="relative w-full max-w-[200px]">
            <input
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
            />
        </div>
    );
}

export const componentsData: UIComponent[] = [
    // --- BUTTONS ---
    {
        id: "shiny-button",
        name: "Shiny Button",
        description: "A button with a shifting gradient and shadow effect.",
        category: "Buttons",
        code: `<button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 active:scale-95">Shiny Button</button>`,
        preview: <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-black rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all">Shiny Demo</button>
    },
    {
        id: "bouncing-button",
        name: "Bouncing Button",
        description: "Smooth hover bounce and satisfying click animation.",
        category: "Buttons",
        code: `<button className="px-6 py-3 bg-primary text-white font-black rounded-xl transition-all hover:-translate-y-1 active:scale-90 shadow-[0_10px_0_theme(colors.primary.dark)]">Bounce</button>`,
        preview: <button className="px-6 py-2 bg-primary text-white text-xs font-black rounded-lg transition-all hover:scale-110 active:scale-90 shadow-xl">Bounce Me</button>
    },
    {
        id: "outline-glow",
        name: "Outline Glow",
        description: "Border glow effect on hover.",
        category: "Buttons",
        code: `<button className="px-6 py-3 border border-primary/50 text-foreground rounded-xl hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all">Glow</button>`,
        preview: <button className="px-6 py-3 border border-primary/50 text-foreground rounded-xl hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all">Glow</button>
    },
    {
        id: "pulse-neon",
        name: "Pulse Neon",
        description: "A button with a persistent neon pulse effect.",
        category: "Buttons",
        code: `<button className="relative px-8 py-3 bg-primary text-white font-black rounded-full shadow-[0_0_20px_rgba(124,58,237,0.4)] animate-pulse hover:animate-none transition-all">
  Launch App
</button>`,
        preview: <button className="relative px-6 py-2 bg-primary text-white text-xs font-black rounded-full shadow-[0_0_20px_rgba(124,58,237,0.4)] animate-pulse hover:scale-105 transition-all">Launch App</button>
    },
    {
        id: "retro-3d",
        name: "Retro 3D",
        description: "Offset 3D button with satisfying click animation.",
        category: "Buttons",
        code: `<button className="px-6 py-2 bg-primary text-white font-bold rounded-lg border-b-4 border-primary/60 active:border-b-0 active:translate-y-1 transition-all">
  Push Me
</button>`,
        preview: <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg border-b-4 border-primary/60 active:border-b-0 active:translate-y-1 transition-all">Push Me</button>
    },

    // --- INPUTS ---
    {
        id: "floating-label",
        name: "Floating Label",
        description: "Modern input with animated label behavior.",
        category: "Inputs",
        code: `<div className="relative pt-4">
  <input type="text" id="email" placeholder=" " className="peer w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 py-2 outline-none focus:border-primary transition-all" />
  <label htmlFor="email" className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
</div>`,
        preview: (
            <div className="relative w-full max-w-[200px] pt-4">
                <input type="text" id="prev-email" placeholder=" " className="peer w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-1 text-sm outline-none focus:border-primary transition-all" />
                <label htmlFor="prev-email" className="absolute left-0 top-4 text-xs text-neutral-500 transition-all peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px]">Email Address</label>
            </div>
        )
    },
    {
        id: "search-input-glass",
        name: "Glass Search",
        description: "Search bar with blurred background.",
        category: "Inputs",
        code: `<div className="relative group">
  <input type="text" placeholder="Search..." className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-12 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
</div>`,
        preview: <InputPreview placeholder="Search..." />
    },
    {
        id: "modern-toggle",
        name: "Modern Toggle",
        description: "Animated switch component.",
        category: "Inputs",
        code: `<div className="w-12 h-6 bg-black/10 dark:bg-white/10 rounded-full p-1 cursor-pointer">
  <div className="w-4 h-4 bg-primary rounded-full transition-all"></div>
</div>`,
        preview: <TogglePreview />
    },

    // --- CARDS ---
    {
        id: "glass-card",
        name: "Frosted Glass",
        description: "Ultra-premium glassmorphism card with border-shimmer.",
        category: "Cards",
        code: `<div className="p-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  <h3 className="text-2xl font-black relative z-10">Premium Plan</h3>
  <p className="mt-4 text-neutral-400 relative z-10">Crystal clear UI components.</p>
</div>`,
        preview: (
            <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl relative overflow-hidden group w-full max-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                <h3 className="text-lg font-black relative z-10">Glassy</h3>
                <div className="h-2 w-16 bg-white/20 rounded mt-2 relative z-10" />
            </div>
        )
    },
    {
        id: "nft-card",
        name: "NFT Display Card",
        description: "Premium card for assets.",
        category: "Cards",
        code: `<div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl">
  <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4"></div>
  <h4 className="text-foreground font-bold">Cyber Punk #42</h4>
  <p className="text-primary text-sm font-bold mt-1">2.5 ETH</p>
</div>`,
        preview: (
            <div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl w-full max-w-[240px]">
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4"></div>
                <h4 className="text-foreground font-bold text-sm">Cyber Punk #42</h4>
                <p className="text-primary text-xs font-bold mt-1">2.5 ETH</p>
            </div>
        )
    },

    // --- DASHBOARDS ---
    {
        id: "activity-chart-stub",
        name: "Activity Bars",
        description: "Animated height bars for stats.",
        category: "Dashboards",
        code: `<div className="flex items-end gap-1 h-20">
  <div className="w-2 bg-primary h-1/2 rounded-full"></div>
  <div className="w-2 bg-primary h-3/4 rounded-full"></div>
  <div className="w-2 bg-primary h-full rounded-full"></div>
</div>`,
        preview: (
            <div className="flex items-end gap-1 h-12">
                <div className="w-2 bg-primary h-1/2 rounded-full"></div>
                <div className="w-2 bg-primary h-3/4 rounded-full"></div>
                <div className="w-2 bg-primary h-full rounded-full"></div>
                <div className="w-2 bg-primary h-2/3 rounded-full"></div>
                <div className="w-2 bg-primary h-1/3 rounded-full"></div>
            </div>
        )
    },

    // --- HEADERS ---
    {
        id: "announcement-bar",
        name: "Announcement Bar",
        description: "Top bar for notices.",
        category: "Headers",
        code: `<div className="bg-primary/20 border-b border-primary/30 text-primary text-center py-2 text-sm font-medium">New features released! Check them out.</div>`,
        preview: (
            <div className="w-full bg-primary/20 border border-primary/30 text-primary text-center py-2 text-[10px] font-medium rounded-lg">
                New features released! Check them out.
            </div>
        )
    },

    // --- FEEDBACK ---
    {
        id: "circular-progress",
        name: "Circular Progress",
        description: "Animated ring loader.",
        category: "Feedback",
        code: `<div className="w-12 h-12 border-4 border-black/10 dark:border-white/10 border-t-primary rounded-full animate-spin"></div>`,
        preview: <div className="w-8 h-8 border-3 border-black/10 dark:border-white/10 border-t-primary rounded-full animate-spin"></div>
    },

    // --- NAVIGATION ---
    {
        id: "breadcrumb",
        name: "Breadcrumbs",
        description: "Modern navigation path.",
        category: "Navigation",
        code: `<div className="flex gap-2 text-sm text-neutral-500">
  <span>Home</span> / <span>Docs</span> / <span className="text-foreground">Buttons</span>
</div>`,
        preview: (
            <div className="flex gap-2 text-xs text-neutral-500">
                <span>Home</span> / <span>Docs</span> / <span className="text-foreground">Buttons</span>
            </div>
        )
    },

    // --- TYPOGRAPHY ---
    {
        id: "code-block",
        name: "Inline Code",
        description: "Styled code snippet.",
        category: "Typography",
        code: `<code className="px-2 py-1 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded text-purple-600 dark:text-purple-400 font-mono text-sm">npm install</code>`,
        preview: <code className="px-2 py-1 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded text-purple-600 dark:text-purple-400 font-mono text-[10px]">npm install</code>
    },
    {
        id: "feature-title",
        name: "Impact Head",
        description: "High impact section title.",
        category: "Typography",
        code: `<h2 className="text-4xl font-black tracking-tight"><span className="text-primary mr-2">//</span>Main Feature</h2>`,
        preview: <h2 className="text-xl font-black tracking-tight text-foreground"><span className="text-primary mr-2">//</span>Main Feature</h2>
    },

    // --- DAISY-INSPIRED MOCKUPS ---
    {
        id: "browser-mockup",
        name: "Browser Window",
        description: "Classic browser window mockup frame.",
        category: "Cards",
        code: `<div className="mockup-window shadow-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/50 p-6">Hello World</div>`,
        preview: (
            <div className="rounded-xl shadow-2xl border border-black/10 dark:border-white/10 bg-background overflow-hidden w-full max-w-[280px] group">
                <div className="h-6 bg-black/5 flex items-center px-4 gap-1.5 border-b border-black/5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="p-4 text-[10px] font-mono opacity-80 h-24 bg-black/[0.02] dark:bg-white/[0.01]">
                    <div className="text-primary font-bold">const</div> app = {"{"} <br />
                    &nbsp;&nbsp;name: <span className="text-emerald-500">"PasteUI"</span>,<br />
                    &nbsp;&nbsp;status: <span className="text-amber-500">"Live"</span><br />
                    {"}"};
                </div>
            </div>
        )
    },
    {
        id: "chat-bubble-left",
        name: "Chat Bubble (Left)",
        description: "Modern chat message with user avatar.",
        category: "Feedback",
        code: `<div className="flex items-end gap-2">
  <div className="w-8 h-8 bg-primary rounded-full" />
  <div className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl rounded-bl-sm text-sm">Hello there!</div>
</div>`,
        preview: (
            <div className="flex items-end gap-2 w-full">
                <div className="w-6 h-6 bg-primary rounded-full shrink-0" />
                <div className="px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl rounded-bl-none text-[10px] text-foreground">
                    Hello there! 👋
                </div>
            </div>
        )
    },
    {
        id: "chat-bubble-right",
        name: "Chat Bubble (Right)",
        description: "Modern chat message for the current user.",
        category: "Feedback",
        code: `<div className="flex items-end gap-2 justify-end">
  <div className="px-4 py-2 bg-primary text-white rounded-2xl rounded-br-sm text-sm">Hi! How are you?</div>
</div>`,
        preview: (
            <div className="flex items-end gap-2 justify-end w-full">
                <div className="px-3 py-1.5 bg-primary text-white rounded-xl rounded-br-none text-[10px]">
                    How's the UI looking?
                </div>
            </div>
        )
    },
    {
        id: "step-indicator",
        name: "Vertical Steps",
        description: "Process tracking indicator.",
        category: "Navigation",
        code: `<div className="flex flex-col gap-4">
  <div className="flex gap-4 items-center"><div className="w-8 h-8 bg-primary rounded-full" /><span>Step 1</span></div>
</div>`,
        preview: (
            <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-[10px] font-bold">1</div>
                    <span className="text-foreground text-[10px] font-bold">Concept</span>
                </div>
                <div className="w-px h-4 bg-black/10 dark:bg-white/10 ml-3" />
                <div className="flex gap-3 items-center">
                    <div className="w-6 h-6 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center text-[10px] text-neutral-500">2</div>
                    <span className="text-neutral-500 text-[10px]">Review</span>
                </div>
            </div>
        )
    },
    {
        id: "tabs-interactive",
        name: "Modern Tabs",
        description: "Switch between views with smooth state transitions.",
        category: "Navigation",
        code: `<div className="flex p-1 bg-black/5 rounded-xl gap-1">
  {['Design', 'Code'].map(tab => (
    <button key={tab} className="flex-1 py-2 text-sm font-bold rounded-lg hover:bg-white transition-all">{tab}</button>
  ))}
</div>`,
        preview: <TabsPreview />
    },
    {
        id: "alert-info",
        name: "Modern Alert",
        description: "Semantic info alert bar.",
        category: "Feedback",
        code: `<div className="p-4 bg-info/10 border border-info/20 text-info rounded-2xl flex gap-3">...</div>`,
        preview: (
            <div className="p-3 bg-[#3abff81a] border border-[#3abff833] text-[#3abff8] rounded-xl flex gap-3 w-full max-w-[280px]">
                <span className="text-xs">ℹ️</span>
                <span className="text-[10px] font-bold">Updates available.</span>
            </div>
        )
    },

    // --- DASHBOARDS (COMPLEX) ---
    {
        id: "stats-dashboard",
        name: "Stats Dashboard",
        description: "A comprehensive grid of stats cards with live indicators.",
        category: "Dashboards",
        code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {['Revenue', 'Users', 'Sales', 'Profit'].map((label) => (
    <div key={label} className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2rem]">
      <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest">{label}</p>
      <h3 className="text-3xl font-black mt-2 leading-none">$24,500</h3>
      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg w-fit">
        +12.5% ↑
      </div>
    </div>
  ))}
</div>`,
        preview: (
            <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
                {['Sales', 'Users'].map((label) => (
                    <div key={label} className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl">
                        <div className="flex justify-between items-start">
                            <p className="text-neutral-500 text-[8px] font-bold uppercase tracking-tighter">{label}</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <h3 className="text-lg font-black mt-1 leading-none">{label === 'Sales' ? '$12K' : '840'}</h3>
                        <div className="mt-2 flex gap-0.5 h-4 items-end">
                            {[2, 4, 3, 5].map((h, i) => (
                                <div key={i} style={{ height: `${h * 20}%` }} className="w-full bg-primary/20 rounded-t-sm" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "notification-bell",
        name: "Notification Center",
        description: "Interactive bell icon with unread indicator and bounce animation.",
        category: "Dashboards",
        code: `<div className="relative">
  <button className="p-2 bg-black/5 rounded-xl">🔔</button>
  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full">3</span>
</div>`,
        preview: <NotificationPreview />
    },
    {
        id: "sidebar-layout",
        name: "SaaS Sidebar",
        description: "Professional sidebar layout with user profile and navigation.",
        category: "Dashboards",
        code: `<aside className="w-64 h-screen border-r border-black/5 dark:border-white/5 flex flex-col p-6">
  <div className="text-xl font-bold mb-10 px-2">Fluxo</div>
  <nav className="flex-1 space-y-2">
    {['Dashboard', 'Projects', 'Tasks', 'Settings'].map((item) => (
      <button key={item} className="w-full text-left px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 font-bold transition-all">
        {item}
      </button>
    ))}
  </nav>
  <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center gap-4">
    <div className="w-10 h-10 rounded-full bg-primary" />
    <span className="font-bold">Alex Smith</span>
  </div>
</aside>`,
        preview: (
            <div className="w-full max-w-[200px] border border-black/10 dark:border-white/10 rounded-3xl flex flex-col p-4 bg-background shadow-2xl scale-90 origin-top-left overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-5 h-5 bg-primary rounded-md" />
                    <span className="text-[10px] font-black uppercase">Fluxo</span>
                </div>
                <div className="space-y-1 mb-8">
                    {['Dashboard', 'Inbox', 'Team'].map((item, i) => (
                        <div key={item} className={`p-2 rounded-lg text-[9px] font-bold ${i === 0 ? 'bg-primary/10 text-primary' : 'text-neutral-500 hover:bg-black/5 transition-colors cursor-pointer'}`}>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30" />
                    <div>
                        <div className="text-[8px] font-bold leading-none">Alex S.</div>
                        <div className="text-[6px] text-neutral-400 font-bold uppercase leading-tight">Pro Admin</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "hero-split",
        name: "Modern Split Hero",
        description: "A high-conversion landing page hero with split design.",
        category: "Landing Pages",
        code: `<section className="py-24 grid lg:grid-cols-2 gap-16 items-center">
  <div className="max-w-xl">
    <h1 className="text-7xl font-black tracking-tighter leading-[0.9]">Transform your workflow.</h1>
    <p className="text-xl text-neutral-500 mt-8 mb-12">The fastest way to build stunning components without the heavy lifting.</p>
    <div className="flex gap-4">
      <button className="px-8 py-4 bg-primary text-white font-black rounded-2xl">Get Started</button>
      <button className="px-8 py-4 border border-black/10 dark:border-white/10 font-black rounded-2xl">View Docs</button>
    </div>
  </div>
  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] border border-black/5 dark:border-white/5" />
</section>`,
        preview: (
            <div className="w-full max-w-[320px] p-6 bg-background border border-black/10 dark:border-white/10 rounded-[2.5rem] shadow-2xl scale-75 origin-top-left">
                <div className="h-4 w-32 bg-primary/20 rounded-full mb-6" />
                <div className="h-8 w-full bg-foreground rounded-xl mb-3" />
                <div className="h-8 w-4/5 bg-foreground rounded-xl mb-6" />
                <div className="space-y-2 mb-8">
                    <div className="h-2 w-full bg-neutral-300 rounded" />
                    <div className="h-2 w-full bg-neutral-300 rounded" />
                    <div className="h-2 w-2/3 bg-neutral-300 rounded" />
                </div>
                <div className="flex gap-3">
                    <div className="h-10 w-24 bg-primary rounded-xl" />
                    <div className="h-10 w-24 border border-black/10 rounded-xl" />
                </div>
                <div className="mt-10 aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl" />
            </div>
        )
    },
    {
        id: "pricing-tier",
        name: "Modern Pricing",
        description: "Three-tier pricing table with glassmorphism effects.",
        category: "Landing Pages",
        code: `<div className="grid md:grid-cols-3 gap-8">
  {['Starter', 'Pro', 'Enterprise'].map((tier) => (
    <div key={tier} className="p-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2.5rem] hover:border-primary/50 transition-all">
      <h3 className="text-2xl font-black">{tier}</h3>
      <p className="text-4xl font-black mt-4 mb-8">{tier === 'Starter' ? '$0' : tier === 'Pro' ? '$29' : '$99'}<span className="text-sm font-bold text-neutral-500">/mo</span></p>
      <ul className="space-y-4 mb-10 text-neutral-500 font-bold">
        {['Unlimited components', 'Premium support', 'Live analytics'].map(f => <li key={f} className="flex gap-2 text-sm">✓ {f}</li>)}
      </ul>
      <button className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-xl">Select Plan</button>
    </div>
  ))}
</div>`,
        preview: (
            <div className="flex gap-4 w-full scale-90 origin-top-left overflow-x-auto pb-4 custom-scrollbar">
                {['Starter', 'Pro'].map((t) => (
                    <div key={t} className="min-w-[160px] p-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl shrink-0 hover:border-primary/50 transition-colors">
                        <div className="text-[10px] uppercase font-black text-primary mb-2">{t}</div>
                        <div className="text-2xl font-black mb-4">{t === 'Starter' ? '$0' : '$29'}</div>
                        <div className="space-y-2 mb-6">
                            {['API Access', '24/7 Support'].map(f => (
                                <div key={f} className="flex gap-2 items-center text-[10px] font-bold text-neutral-500">
                                    <span className="text-primary text-[8px]">✓</span> {f}
                                </div>
                            ))}
                        </div>
                        <button className="h-8 w-full bg-foreground text-background text-[10px] font-black rounded-xl hover:scale-105 transition-transform">Get Started</button>
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "feature-grid",
        name: "Bento Feature Grid",
        description: "A modern, asymmetrical grid for displaying product features.",
        category: "Landing Pages",
        code: `<div className="grid md:grid-cols-4 gap-4 auto-rows-[250px]">
  <div className="md:col-span-2 md:row-span-2 p-8 bg-primary/10 rounded-3xl border border-primary/20">Feature A</div>
  <div className="md:col-span-2 p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">Feature B</div>
  <div className="p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">Feature C</div>
  <div className="p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">Feature D</div>
</div>`,
        preview: (
            <div className="grid grid-cols-2 gap-2 w-full max-w-[300px] scale-90 origin-top-left auto-rows-[80px]">
                <div className="col-span-2 row-span-1 bg-primary/10 rounded-2xl border border-primary/20 p-4 font-black">
                    <span className="text-[10px] text-primary uppercase tracking-widest block mb-1">Performance</span>
                    <div className="text-[8px] opacity-70 leading-tight">Lightning fast response times.</div>
                </div>
                <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 p-3 flex flex-col justify-end">
                    <div className="text-[8px] font-black uppercase tracking-tighter">Security</div>
                </div>
                <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 p-3 flex flex-col justify-end">
                    <div className="text-[8px] font-black uppercase tracking-tighter">Scalable</div>
                </div>
            </div>
        )
    },

    // --- FOOTERS ---
    {
        id: "footer-simple",
        name: "Modern Minimal Footer",
        description: "A clean footer with logo, links, and copyright.",
        category: "Footers",
        code: `<footer className="py-12 border-t border-black/5 dark:border-white/5 bg-background">
  <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
    <div className="flex items-center gap-2 font-black text-xl">PasteUI</div>
    <div className="flex gap-6 text-sm font-bold text-neutral-500">
      <a href="#" className="hover:text-foreground">About</a>
      <a href="#" className="hover:text-foreground">Docs</a>
      <a href="#" className="hover:text-foreground">Twitter</a>
    </div>
    <p className="text-xs text-neutral-400 font-bold">© 2024 PasteUI Inc.</p>
  </div>
</footer>`,
        preview: (
            <footer className="w-full py-4 border-t border-black/10 dark:border-white/10 bg-background/50 rounded-2xl border border-black/5 dark:border-white/5">
                <div className="flex justify-between px-6 items-center">
                    <div className="text-[10px] font-black tracking-tighter">PasteUI</div>
                    <div className="flex gap-4">
                        <div className="text-[8px] font-bold text-neutral-500 hover:text-primary transition-colors cursor-pointer">Terms</div>
                        <div className="text-[8px] font-bold text-neutral-500 hover:text-primary transition-colors cursor-pointer">Privacy</div>
                    </div>
                </div>
            </footer>
        )
    },

    // --- DATA DISPLAY ---
    {
        id: "data-table",
        name: "Glass Data Table",
        description: "Responsive table with hover states and action buttons.",
        category: "Dashboards",
        code: `<div className="overflow-x-auto rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
  <table className="w-full text-left">
    <thead className="border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
      <tr>
        {['Product', 'Value', 'Status'].map(h => <th key={h} className="px-6 py-4 text-xs font-black uppercase text-neutral-500">{h}</th>)}
      </tr>
    </thead>
    <tbody>
      {[1, 2, 3].map(i => (
        <tr key={i} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <td className="px-6 py-4 font-bold text-sm">Component {i}</td>
          <td className="px-6 py-4 font-bold text-sm">$45.00</td>
          <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black rounded-lg uppercase">Active</span></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>`,
        preview: (
            <div className="w-full max-w-[340px] rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-background/50 scale-90 origin-top-left shadow-2xl">
                <div className="p-4 border-b border-black/5 bg-black/[0.02] flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Inventory</span>
                    <button className="px-2 py-1 bg-primary text-white text-[8px] font-black rounded-md">Add New</button>
                </div>
                {[
                    { n: "Header Section", v: "$42.0", s: "Live" },
                    { n: "Bento Grid", v: "$99.9", s: "Draft" }
                ].map((item) => (
                    <div key={item.n} className="p-4 flex justify-between items-center border-b border-black/[0.03] hover:bg-black/[0.02] transition-colors">
                        <div>
                            <div className="text-[10px] font-black">{item.n}</div>
                            <div className="text-[8px] text-neutral-500 font-bold">{item.v}</div>
                        </div>
                        <div className={`px-2 py-1 ${item.s === 'Live' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'} text-[8px] font-black rounded-md uppercase tracking-tighter`}>{item.s}</div>
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "faq-accordion",
        name: "Glass FAQ Accordion",
        description: "A sleek, animated FAQ section using standard Tailwind.",
        category: "FAQ",
        code: `<div className="space-y-4 max-w-3xl mx-auto">
  {[1, 2, 3].map(i => (
    <details key={i} className="group p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl cursor-pointer transition-all hover:bg-black/10">
      <summary className="list-none flex justify-between items-center font-black">
        <span>What is the price?</span>
        <span className="group-open:rotate-180 transition-transform">↓</span>
      </summary>
      <div className="mt-4 text-neutral-500 font-bold leading-relaxed">
        Our prices are transparent and scale with your team size. Start for free today!
      </div>
    </details>
  ))}
</div>`,
        preview: <FAQPreview />
    },
    {
        id: "hero-modern-mockup",
        name: "Mockup Hero",
        description: "Center-aligned hero with a large floating application mockup.",
        category: "Landing Pages",
        code: `<section className="pt-32 pb-64 text-center">
  <h1 className="text-8xl font-black tracking-tighter max-w-4xl mx-auto">Build the impossible.</h1>
  <p className="mt-10 text-2xl text-neutral-500 max-w-2xl mx-auto">Modern components for modern teams.</p>
  <div className="mt-20 relative px-10">
    <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[3rem] aspect-[16/10] shadow-2xl overflow-hidden p-6 animate-float">
      <div className="h-full w-full bg-background rounded-2xl border border-black/5 dark:border-white/5" />
    </div>
  </div>
</section>`,
        preview: (
            <div className="w-full text-center scale-75 origin-top-left">
                <div className="h-4 w-48 bg-primary/30 rounded-full mx-auto mb-6" />
                <div className="h-10 w-full bg-foreground rounded-2xl mb-12" />
                <div className="aspect-video bg-black/10 dark:bg-white/10 border-4 border-black/10 dark:border-white/10 rounded-[2rem] p-4 flex gap-2">
                    <div className="w-12 h-full bg-black/5 dark:bg-white/5 rounded-xl" />
                    <div className="flex-1 bg-background rounded-xl" />
                </div>
            </div>
        )
    },
    {
        id: "testimonial-grid",
        name: "Testimonial Grid",
        description: "Masonry-style grid for social proof and user feedback.",
        category: "Landing Pages",
        code: `<div className="grid md:grid-cols-3 gap-6 auto-rows-min">
  {[1, 2, 3, 4, 5, 6].map(i => (
    <div key={i} className="p-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2.5rem] break-inside-avoid shadow-xl">
      <p className="text-lg font-bold italic mb-6">"Best UI library I've ever used. Completely changed our workflow."</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary" />
        <div>
          <div className="font-black text-sm">John Doe</div>
          <div className="text-xs text-neutral-500 font-bold tracking-widest uppercase">CEO @ Startup</div>
        </div>
      </div>
    </div>
  ))}
</div>`,
        preview: (
            <div className="grid grid-cols-2 gap-3 w-full max-w-[320px] scale-75 origin-top-left">
                {[1, 2, 3].map(i => (
                    <div key={i} className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl">
                        <div className="h-2 w-full bg-neutral-300 rounded mb-4" />
                        <div className="h-2 w-3/4 bg-neutral-300 rounded mb-4" />
                        <div className="flex gap-2">
                            <div className="w-4 h-4 rounded-full bg-primary" />
                            <div className="h-1.5 w-12 bg-neutral-400 rounded mt-1.5" />
                        </div>
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "boxed-faq",
        name: "Boxed FAQ Grid",
        description: "A clean, multi-column grid layout for frequently asked questions.",
        category: "FAQ",
        code: `<div className="grid md:grid-cols-2 gap-8">
  {[1, 2, 3, 4].map(i => (
    <div key={i} className="p-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2.5rem]">
      <h4 className="text-lg font-black mb-4">How do I get started?</h4>
      <p className="text-neutral-500 font-bold leading-relaxed">Simply copy the code of any component and paste it into your Tailwind project.</p>
    </div>
  ))}
</div>`,
        preview: (
            <div className="grid grid-cols-2 gap-3 w-full scale-95 origin-top-left">
                {[
                    { q: "Free to use?", a: "Yes, forever." },
                    { q: "Open source?", a: "MIT Licensed." }
                ].map((item) => (
                    <div key={item.q} className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl hover:border-primary/50 transition-colors cursor-pointer">
                        <div className="text-[10px] font-black text-foreground mb-1 leading-tight">{item.q}</div>
                        <div className="text-[8px] text-neutral-500 font-bold leading-tight">{item.a}</div>
                    </div>
                ))}
            </div>
        )
    },

    // --- NAVIGATION ---
    {
        id: "floating-dock",
        name: "Floating Dock",
        description: "A premium, Apple-inspired floating navigation bar.",
        category: "Navigation",
        code: `<div className="fixed bottom-10 left-1/2 -translate-x-1/2 px-6 py-4 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full flex gap-6 shadow-2xl">
  {['🏠', '🔍', '⚙️', '👤'].map((icon, i) => (
    <button key={i} className="text-2xl hover:scale-150 transition-transform duration-300 transform-gpu">{icon}</button>
  ))}
</div>`,
        preview: (
            <div className="px-4 py-2 bg-black/80 backdrop-blur-md rounded-full flex gap-4 border border-white/10 shadow-xl">
                {['🏠', '🔍', '⚙️'].map((icon, i) => (
                    <div key={i} className="text-sm cursor-pointer hover:scale-125 transition-all">
                        {icon}
                    </div>
                ))}
            </div>
        )
    },

    // --- DASHBOARDS ---
    {
        id: "activity-feed",
        name: "User Activity Feed",
        description: "A clean stream of user actions and timeline events.",
        category: "Dashboards",
        code: `<div className="space-y-6">
  {[1, 2, 3].map(i => (
    <div key={i} className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 shrink-0" />
      <div className="flex-1 pb-6 border-b border-black/5 dark:border-white/5">
        <p className="text-sm font-bold leading-none">Alex uploaded a new file</p>
        <p className="text-xs text-neutral-500 mt-2">2 hours ago</p>
      </div>
    </div>
  ))}
</div>`,
        preview: (
            <div className="space-y-4 w-full max-w-[240px] p-6 bg-black/[0.02] dark:bg-white/[0.01] rounded-[2rem] border border-black/[0.03]">
                {[
                    { u: "Sarah", a: "pushed code", t: "5m ago" },
                    { u: "James", a: "created task", t: "1h ago" }
                ].map((item, i) => (
                    <div key={i} className="flex gap-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <span className="text-[10px] font-black text-primary">{item.u[0]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-black truncate">{item.u} {item.a}</div>
                            <div className="text-[8px] text-neutral-500 font-bold uppercase tracking-tight">{item.t}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    },

    // --- LANDING PAGES ---
    {
        id: "partner-logos",
        name: "Partner Logos",
        description: "Subtle, interactive logo cloud for trust building.",
        category: "Landing Pages",
        code: `<div className="py-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
  {['Microsoft', 'Google', 'Amazon', 'Meta', 'Apple'].map(logo => (
      <span key={logo} className="text-2xl font-black tracking-tighter">{logo}</span>
  ))}
</div>`,
        preview: (
            <div className="flex gap-4 justify-center items-center py-6 w-full opacity-40 hover:opacity-100 transition-opacity bg-black/[0.02] rounded-3xl">
                {['APPLE', 'GOOGLE', 'META'].map(logo => (
                    <span key={logo} className="text-[9px] font-black tracking-tighter grayscale hover:grayscale-0 hover:text-primary transition-all cursor-crosshair">{logo}</span>
                ))}
            </div>
        )
    },

    // --- FEEDBACK ---
    {
        id: "modern-toast",
        name: "Magic Toast",
        description: "A floating notification with glass effects and icons.",
        category: "Feedback",
        code: `<div className="fixed bottom-8 right-8 p-4 bg-black/90 text-white backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-4">
  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">✓</div>
  <div>
    <h4 className="font-bold text-sm">Success!</h4>
    <p className="text-xs opacity-60">Your profile has been updated.</p>
  </div>
</div>`,
        preview: <ToastPreview />
    },
    {
        id: "star-rating",
        name: "Interactive Stars",
        description: "A premium star-rating component with hover states.",
        category: "Feedback",
        code: `<div className="flex gap-1">
  {[1, 2, 3, 4, 5].map(i => (
    <button key={i} className="text-2xl text-amber-400 hover:scale-125 transition-transform">★</button>
  ))}
</div>`,
        preview: <StarsPreview />
    },
    {
        id: "otp-input",
        name: "Security OTP",
        description: "Modern 6-digit verification code input fields.",
        category: "Inputs",
        code: `<div className="flex gap-4 justify-center">
  {[1, 2, 3, 4, 5, 6].map(i => (
    <input key={i} type="text" maxLength={1} className="w-12 h-16 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 rounded-2xl text-center text-2xl font-black focus:border-primary focus:outline-none transition-all" />
  ))}
</div>`,
        preview: <OTPPreview />
    },
    {
        id: "sparkline-card",
        name: "Sparkline Card",
        description: "Stats card featuring a mini activity trendline.",
        category: "Cards",
        code: `<div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2rem]">
  <div className="flex justify-between items-start mb-4">
    <div>
      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Growth</p>
      <h3 className="text-2xl font-black">42.5%</h3>
    </div>
    <div className="flex gap-1 h-8 items-end">
      {[4, 7, 3, 9, 5, 8].map((h, i) => (
        <div key={i} style={{ height: \`\${h * 10}%\` }} className="w-1 bg-primary/40 rounded-full" />
      ))}
    </div>
  </div>
</div>`,
        preview: (
            <div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl w-full max-w-[180px]">
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-[8px] font-black text-neutral-500 uppercase tracking-widest leading-none mb-1">Growth</div>
                        <div className="text-lg font-black leading-none text-primary">42.5%</div>
                    </div>
                    <div className="flex gap-0.5 h-8 items-end">
                        {[2, 5, 3, 6, 4].map((h, i) => (
                            <div key={i} style={{ height: `${h * 15}%` }} className="w-1 bg-primary/40 rounded-full" />
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "contact-glass",
        name: "Glass Contact Form",
        description: "A beautiful, transparent contact section for modern brands.",
        category: "Landing Pages",
        code: `<div className="max-w-4xl mx-auto p-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl grid md:grid-cols-2 gap-12">
  <div>
    <h2 className="text-5xl font-black tracking-tighter mb-6">Let's talk.</h2>
    <p className="text-neutral-400 font-bold leading-relaxed mb-8">Ready to transform your digital presence? Send us a message.</p>
    <div className="space-y-4">
      <div className="flex gap-4 font-bold"><span className="text-primary text-xl">📍</span> San Francisco, CA</div>
      <div className="flex gap-4 font-bold"><span className="text-primary text-xl">✉️</span> hello@pasteui.com</div>
    </div>
  </div>
  <form className="space-y-4">
    <input type="text" placeholder="Name" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary outline-none transition-all" />
    <textarea placeholder="Message" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl h-32 focus:border-primary outline-none transition-all"></textarea>
    <button className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-xl">Send Message</button>
  </form>
</div>`,
        preview: (
            <div className="p-5 bg-white/5 border border-white/10 rounded-3xl w-full max-w-[320px] scale-75 origin-top-left shadow-2xl">
                <div className="text-xl font-black tracking-tighter mb-4">Let's talk.</div>
                <div className="space-y-2">
                    <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-[10px] text-neutral-400">Name</div>
                    <div className="bg-white/5 border border-white/10 px-3 py-6 rounded-xl text-[10px] text-neutral-400">Message...</div>
                    <button className="w-full py-2.5 bg-primary text-white text-[10px] font-black rounded-xl shadow-lg">Send</button>
                </div>
            </div>
        )
    },
    {
        id: "avatar-stack",
        name: "Avatar Stack",
        description: "Overlapping profile pictures for 'Trusted By' or team sections.",
        category: "Badges",
        code: `<div className="flex -space-x-3 overflow-hidden">
  {[1, 2, 3, 4].map((i) => (
    <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={\`/avatars/user-\${i}.jpg\`} alt="" />
  ))}
  <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-white bg-neutral-100 text-xs font-bold">+12</div>
</div>`,
        preview: <AvatarGroupPreview />
    },
    {
        id: "logo-marquee",
        name: "Logo Marquee",
        description: "Infinite scrolling brand logos with smooth CSS animation.",
        category: "Landing Pages",
        code: `<div className="relative flex overflow-x-hidden group bg-black/5 py-10">
  <div className="animate-marquee whitespace-nowrap flex gap-16">
    {['Apple', 'Google', 'Meta', 'Amazon', 'Microsoft'].map(logo => (
      <span key={logo} className="text-4xl font-black opacity-30 group-hover:opacity-100 transition-opacity">{logo}</span>
    ))}
  </div>
  <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16">
    {['Apple', 'Google', 'Meta', 'Amazon', 'Microsoft'].map(logo => (
      <span key={logo} className="text-4xl font-black opacity-30 group-hover:opacity-100 transition-opacity">{logo}</span>
    ))}
  </div>
</div>`,
        preview: <MarqueePreview />
    },
    {
        id: "pricing-vibrant",
        name: "Vibrant Pricing",
        description: "Vertical pricing card with high-impact gradient and active state.",
        category: "Landing Pages",
        code: `<div className="p-10 bg-gradient-to-br from-primary to-secondary rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
  <div className="absolute top-0 right-0 p-6 bg-white/20 rounded-bl-3xl font-black text-sm uppercase">Popular</div>
  <h3 className="text-3xl font-black">Professional</h3>
  <div className="text-7xl font-black my-8">$49<span className="text-xl opacity-60">/mo</span></div>
  <ul className="space-y-4 mb-10 opacity-90 font-bold">
    {['Unlimited Projects', 'Priority Support', 'Custom Domain'].map(f => <li key={f}>✓ {f}</li>)}
  </ul>
  <button className="w-full py-5 bg-white text-primary font-black rounded-2xl shadow-xl hover:scale-105 transition-all">Get Started</button>
</div>`,
        preview: (
            <div className="p-6 bg-gradient-to-br from-primary to-secondary rounded-[2rem] text-white w-full max-w-[240px] shadow-xl relative overflow-hidden">
                <div className="text-sm font-black mb-1">Growth</div>
                <div className="text-3xl font-black mb-4">$49</div>
                <div className="space-y-1.5 mb-6">
                    {['Unlimited', 'Priority'].map(f => (
                        <div key={f} className="text-[9px] font-bold opacity-80 flex gap-1"><span>✓</span> {f}</div>
                    ))}
                </div>
                <button className="w-full py-2 bg-white text-primary text-[10px] font-black rounded-xl">Upgrade</button>
            </div>
        )
    },
    {
        id: "testimonial-glass",
        name: "Glass Testimonial",
        description: "Elegant testimonial card with blurred profile background and star ratings.",
        category: "Landing Pages",
        code: `<div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl">
  <div className="flex gap-1 mb-4 text-amber-400">★★★★★</div>
  <p className="text-xl font-bold italic opacity-90 leading-relaxed mb-6">"This library changed how we build prototypes."</p>
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-primary/20 rounded-full" />
    <div>
      <div className="font-black">Jane Cooper</div>
      <div className="text-sm opacity-50 font-bold">CEO at PixelFlow</div>
    </div>
  </div>
</div>`,
        preview: (
            <div className="p-4 bg-white/5 border border-white/10 rounded-3xl w-full max-w-[280px] shadow-lg">
                <div className="flex gap-0.5 mb-2 text-amber-400 text-[8px]">★★★★★</div>
                <div className="text-[10px] font-bold italic mb-4 leading-tight">"Beautifully crafted UI."</div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary/20 rounded-full" />
                    <div>
                        <div className="text-[8px] font-black">Jane C.</div>
                        <div className="text-[6px] opacity-40 uppercase">CEO</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "bento-advanced",
        name: "Bento Advanced",
        description: "Complex grid with mixed span and inner glass effects.",
        category: "Landing Pages",
        code: `<div className="grid grid-cols-6 gap-4">
  <div className="col-span-4 bg-primary/10 rounded-3xl p-10">Large Item</div>
  <div className="col-span-2 bg-black/5 rounded-3xl p-10">Small Item</div>
  <div className="col-span-2 bg-black/5 rounded-3xl p-10">Small Item</div>
  <div className="col-span-4 bg-secondary/10 rounded-3xl p-10">Large Item</div>
</div>`,
        preview: (
            <div className="grid grid-cols-3 gap-1.5 w-full max-w-[300px] scale-90 origin-top-left">
                <div className="col-span-2 h-16 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center text-[8px] font-black">40% Growth</div>
                <div className="col-span-1 h-16 bg-black/5 rounded-xl border border-black/10" />
                <div className="col-span-1 h-16 bg-black/5 rounded-xl border border-black/10" />
                <div className="col-span-2 h-16 bg-secondary/10 rounded-xl border border-secondary/20" />
            </div>
        )
    },
    {
        id: "nav-floating",
        name: "Floating Navbar",
        description: "A sleek, centered navbar with glassmorphism and active indicators.",
        category: "Headers",
        code: `<nav className="fixed top-6 left-1/2 -translate-x-1/2 px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full flex gap-8 items-center shadow-2xl z-50">
  <div className="font-black">PasteUI</div>
  <div className="flex gap-6 font-bold text-sm opacity-60">
    <a href="#" className="hover:opacity-100">Features</a>
    <a href="#" className="hover:opacity-100">Pricing</a>
    <a href="#" className="hover:opacity-100">Docs</a>
  </div>
  <button className="bg-primary text-white px-5 py-2 rounded-full font-black text-sm">Join</button>
</nav>`,
        preview: (
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex gap-4 items-center shadow-lg scale-90">
                <div className="text-[10px] font-black">PasteUI</div>
                <div className="flex gap-2 text-[8px] font-bold opacity-40">
                    <span>Docs</span>
                    <span>Plans</span>
                </div>
                <div className="w-6 h-6 bg-primary rounded-full" />
            </div>
        )
    },
    {
        id: "pricing-comparison",
        name: "Pricing Comparison",
        description: "A detailed feature comparison table for SaaS landing pages.",
        category: "Landing Pages",
        code: `<div className="w-full max-w-5xl mx-auto overflow-hidden border border-black/5 rounded-3xl">
  <table className="w-full text-left">
    <thead>
      <tr className="bg-black/5"><th className="p-6">Feature</th><th>Free</th><th>Pro</th></tr>
    </thead>
    <tbody className="divide-y divide-black/5">
      {['API Access', 'Custom CSS', 'SSO'].map(f => (
        <tr key={f}><td className="p-6 font-bold">{f}</td><td>-</td><td>✓</td></tr>
      ))}
    </tbody>
  </table>
</div>`,
        preview: (
            <div className="w-full max-w-[320px] rounded-2xl border border-black/10 overflow-hidden scale-75 origin-top-left shadow-xl bg-background">
                <div className="p-3 bg-black/5 border-b border-black/10 flex justify-between font-black text-[10px]">
                    <div className="w-1/2">Feature</div>
                    <div>Pro</div>
                </div>
                {['API', 'Auth', 'SSO'].map(f => (
                    <div key={f} className="p-3 border-b border-black/5 flex justify-between text-[8px] font-bold">
                        <div className="w-1/2 opacity-60">{f}</div>
                        <div className="text-primary font-black">✓</div>
                    </div>
                ))}
            </div>
        )
    }
];


