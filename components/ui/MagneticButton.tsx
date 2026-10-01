"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How strong the magnetic pull is (default: 0.5)
}

export function MagneticButton({
    children,
    className,
    strength = 0.5,
    style,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const x = useSpring(rawX, springConfig);
    const y = useSpring(rawY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const mouseX = clientX - (left + width / 2);
        const mouseY = clientY - (top + height / 2);

        rawX.set(mouseX * strength);
        rawY.set(mouseY * strength);
    };

    const handleMouseLeave = () => {
        rawX.set(0);
        rawY.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y, ...style }}
            className={cn("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral outline-none", className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}
