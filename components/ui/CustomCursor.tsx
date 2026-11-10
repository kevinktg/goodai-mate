"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// PERFORMANCE OPTIMIZATION:
// 1. Extract static spring physics configuration to module scope to prevent object reallocation on render.
// 2. Use Framer Motion's `opacity` motion value instead of React `useState(false)`.
//    This updates DOM styles directly outside React's render loop, eliminating component re-renders
//    and preventing global event listener teardown/re-subscription on window during mouse movement.
const SPRING_CONFIG = { damping: 25, stiffness: 700 };

export function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const opacity = useMotionValue(0);

    const cursorX = useSpring(mouseX, SPRING_CONFIG);
    const cursorY = useSpring(mouseY, SPRING_CONFIG);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16); // Center the 32px cursor
            mouseY.set(e.clientY - 16);
            if (opacity.get() !== 1) {
                opacity.set(1);
            }
        };

        const handleMouseDown = () => document.body.classList.add("cursor-clicking");
        const handleMouseUp = () => document.body.classList.remove("cursor-clicking");

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseX, mouseY, opacity]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white text-black pointer-events-none z-[10000] mix-blend-difference hidden md:flex items-center justify-center font-[10px]"
            style={{
                x: cursorX,
                y: cursorY,
                opacity,
            }}
        >
            {/* Optional: Small inner dot or ring */}
        </motion.div>
    );
}
