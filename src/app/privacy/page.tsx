import { Navbar } from "@/components/sections/Navbar";

export default function PrivacyPage() {
    const sections = [
        {
            title: "Information We Collect",
            content: "We only collect minimum information necessary to provide our services. This library is open-source and does not track personal data of its users beyond standard web analytics."
        },
        {
            title: "How We Use Information",
            content: "Data collected is used exclusively for improving the library's performance and ensuring a smooth user experience. We never sell or share your data with third parties."
        },
        {
            title: "Security",
            content: "We implement high-standard security measures to protect the codebase and its users. All components provided are audited for standard security vulnerabilities."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">
                        Privacy <span className="text-gradient-vibrant">Policy</span>
                    </h1>
                    <p className="text-xl text-neutral-500 mb-12 font-medium leading-relaxed">
                        Last updated: March 2024. Your privacy is important to us. Here's how we handle your data.
                    </p>

                    <div className="space-y-12">
                        {sections.map((section, i) => (
                            <div key={i} className="p-8 bg-black/[0.02] dark:bg-white/[0.01] border border-black/[0.05] dark:border-white/[0.05] rounded-[2.5rem] hover:border-primary/50 transition-colors">
                                <h2 className="text-2xl font-black mb-4 tracking-tight">{section.title}</h2>
                                <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-[1.8]">{section.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
                        <p className="text-sm font-bold text-primary italic">Questions? Reach out via GitHub in the issues section.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
