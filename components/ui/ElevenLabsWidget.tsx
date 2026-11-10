"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";

export function ElevenLabsWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 500); // 500ms delay after scrolling stops
    };

    // PERFORMANCE OPTIMIZATION:
    // When Lenis smooth scroll is present, listen exclusively to Lenis scroll events
    // instead of registering listeners on both Lenis and window simultaneously.
    // Registering both triggered redundant double event handling and timer rescheduling on every frame.
    if (lenis) {
      lenis.on("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (lenis) {
        lenis.off("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [lenis]);

  return (
    <div
      aria-hidden={!isVisible}
      className={cn(
        "fixed bottom-4 right-4 z-[9999] transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <elevenlabs-convai agent-id="agent_8501m0h2hvh0edr99jkqzr4rw53n"></elevenlabs-convai>
    </div>
  );
}
