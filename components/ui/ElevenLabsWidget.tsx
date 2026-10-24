"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";

export function ElevenLabsWidget() {
  const [isVisible, setIsVisible] = useState(true);
  // Track visibility state in a ref to avoid triggering React state dispatches on every single scroll frame
  const isVisibleRef = useRef(true);
  const lenis = useLenis();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // OPTIMIZATION: Only dispatch state update when changing from visible to hidden.
      // This prevents re-rendering on every scroll frame (60-120Hz) during continuous scrolling.
      if (isVisibleRef.current) {
        isVisibleRef.current = false;
        setIsVisible(false);
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isVisibleRef.current = true;
        setIsVisible(true);
      }, 500); // 500ms delay after scrolling stops
    };

    // OPTIMIZATION: Register listener to Lenis scroll if available, falling back to window scroll.
    // Avoid double-registering scroll listeners on both Lenis and window.
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
      className={cn(
        "fixed bottom-4 right-4 z-[9999] transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <elevenlabs-convai agent-id="agent_8501m0h2hvh0edr99jkqzr4rw53n"></elevenlabs-convai>
    </div>
  );
}
