import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export const viewport: Viewport = {
  themeColor: "#08080c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://xtremerpie.dev"),
  title: {
    default: "Xtremerpie — Official App Hub | Independent Software & AI Developer",
    template: "%s | Xtremerpie App Hub",
  },
  description:
    "Official software distribution platform and developer portfolio of Xtremerpie. Discover Xtreme AI Browser, Awaken, Rafail AI, and open desktop projects built with independent craft and zero telemetry.",
  keywords: [
    "Xtremerpie",
    "Xtreme AI Browser",
    "Awaken",
    "Rafail AI",
    "VYRXONE Forge",
    "Independent Developer",
    "Windows Applications",
    "Desktop Apps",
    "AI Tools",
    "Productivity",
    "Automation",
  ],
  authors: [{ name: "Xtremerpie", url: "https://github.com/Xtremerpie" }],
  creator: "Xtremerpie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xtremerpie.dev",
    title: "Xtremerpie — Official App Hub & Software Distribution",
    description:
      "Explore independent software, desktop applications, and AI companion projects crafted by Xtremerpie. Download verified Windows installers directly.",
    siteName: "Xtremerpie App Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtremerpie — Official App Hub",
    description: "Independent desktop applications, AI companions, and automation systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#08080c] text-[#f4f4f7] font-sans antialiased selection:bg-gold-500/30 selection:text-gold-200">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
