import { Navbar } from "@/components/sections/Navbar";

export default function TermsPage() {
    const terms = [
        {
            title: "License",
            content: "All components under PasteUI are MIT Licensed. You are free to use them for personal and commercial projects. Attribution is appreciated but not required."
        },
        {
            title: "Usage Policy",
            content: "You may not redistribute these components as a standalone UI kit for sale. They are intended for use in building applications and websites."
        },
        {
            title: "Limitation of Liability",
            content: "The software is provided 'as is', without warranty of any kind. In no event shall the authors be liable for any claim or damages arising from the use of this library."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">
                        Terms of <span className="text-gradient-vibrant">Service</span>
                    </h1>
                    <p className="text-xl text-neutral-500 mb-12 font-medium leading-relaxed">
                        Please read our terms carefully. By using PasteUI, you agree to these conditions.
                    </p>

                    <div className="space-y-12">
                        {terms.map((term, i) => (
                            <div key={i} className="p-8 bg-black/[0.02] dark:bg-white/[0.01] border border-black/[0.05] dark:border-white/[0.05] rounded-[2.5rem] hover:border-primary/50 transition-colors">
                                <h2 className="text-2xl font-black mb-4 tracking-tight">{term.title}</h2>
                                <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-[1.8]">{term.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">✓</div>
                        <h3 className="text-3xl font-black mb-4">Agreement</h3>
                        <p className="font-bold opacity-90 leading-relaxed max-w-xl">
                            By copying code from PasteUI, you acknowledge that you have read and accepted these terms in full.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
