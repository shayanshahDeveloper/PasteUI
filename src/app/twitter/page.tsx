import { Navbar } from "@/components/sections/Navbar";
import { Github, Twitter, MessageCircle } from "lucide-react";

export default function SocialPage() {
    const socials = [
        {
            name: "Twitter / X",
            user: "@PasteUI",
            icon: <Twitter className="w-8 h-8" />,
            color: "bg-black text-white",
            link: "https://twitter.com"
        },
        {
            name: "GitHub",
            user: "shayanshahDeveloper",
            icon: <Github className="w-8 h-8" />,
            color: "bg-neutral-800 text-white",
            link: "https://github.com/shayanshahDeveloper/PasteUI"
        },
        {
            name: "Discord",
            user: "PasteUI Community",
            icon: <MessageCircle className="w-8 h-8" />,
            color: "bg-indigo-600 text-white",
            link: "https://discord.com"
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-4 pt-40 pb-20 text-center">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                    Join the <span className="text-gradient-vibrant italic">Community</span>
                </h1>
                <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-20 font-medium leading-relaxed">
                    Connect with us, share your projects, and get the latest updates on new component releases.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {socials.map((social, i) => (
                        <a
                            key={i}
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group p-10 bg-black/[0.02] dark:bg-white/[0.01] border border-black/[0.05] dark:border-white/[0.05] rounded-[3rem] hover:border-primary/50 transition-all hover:-translate-y-2"
                        >
                            <div className={`w-20 h-20 mx-auto rounded-3xl ${social.color} flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform`}>
                                {social.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-2 tracking-tight">{social.name}</h3>
                            <p className="text-neutral-500 font-bold mb-6 italic">{social.user}</p>
                            <div className="text-primary font-black text-sm uppercase tracking-widest bg-primary/10 py-2 inline-block px-6 rounded-full">Follow</div>
                        </a>
                    ))}
                </div>

                <div className="mt-32 p-1 bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent h-px" />
            </div>
        </main>
    );
}
