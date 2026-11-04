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
        <SmoothScroll>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] rounded-full bg-brand-coral px-6 py-2.5 text-sm font-medium text-brand-ink border border-brand-ink shadow-[3px_3px_0_var(--brand-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink transition-transform"
          >
            Skip to main content
          </a>
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
