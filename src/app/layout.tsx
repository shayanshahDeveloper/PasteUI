import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PasteUI — Premium Tailwind CSS Components",
    template: "%s | PasteUI",
  },
  description:
    "Copy-paste 100+ premium, open-source Tailwind CSS components. High-performance, interactive, and beautifully designed for Next.js & React.",
  keywords: [
    "Tailwind CSS",
    "React Components",
    "Next.js UI",
    "Shadcn UI",
    "Free Components",
    "Premium UI Kit",
    "Copy-Paste Components",
  ],
  authors: [{ name: "Shayan Shah" }],
  creator: "Shayan Shah",
  publisher: "PasteUI",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pasteui.online/",
    siteName: "PasteUI",
    title: "PasteUI | Free Premium Tailwind CSS Components",
    description:
      "Launch your next project in record time with our collection of interactive, hand-crafted Tailwind components.",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PasteUI | Free Premium Tailwind CSS Components",
    description:
      "Copy-paste premium components for Next.js & React. Built for innovators.",
    creator: "@PasteUI",
    images: ["/favicon.png"],
  },
  verification: {
    google: "xWRUGTHRLjAVuukXJSswdGugu-ozAPrnp3RCyJmixdg",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4ZNS16M5PE"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4ZNS16M5PE');
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* Floating theme toggle */}
          <div className="fixed bottom-6 right-6 z-[9999] md:hidden">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}