import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    template: "%s | PasteUI"
  },
  description: "Copy-paste 100+ premium, open-source Tailwind CSS components. High-performance, interactive, and beautifully designed for Next.js & React.",
  keywords: ["Tailwind CSS", "React Components", "Next.js UI", "Shadcn UI", "Free Components", "Premium UI Kit", "Copy-Paste Components"],
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
    description: "Launch your next project in record time with our collection of interactive, hand-crafted Tailwind components.",
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
    description: "Copy-paste premium components for Next.js & React. Built for innovators.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
