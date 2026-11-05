import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Noise } from "@/components/ui/Noise";
import { ElevenLabsWidget } from "@/components/ui/ElevenLabsWidget";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good'Ai | We'll handle the boring stuff",
  description: "Practical workflow fixes and business automation, built in Perth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-brand-coral selection:text-brand-ink`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-coral focus:text-brand-ink focus:font-medium focus:rounded-full focus:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Noise />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="min-h-[100dvh] outline-none">
            {children}
          </main>
          <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="afterInteractive" />
          <ElevenLabsWidget />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
