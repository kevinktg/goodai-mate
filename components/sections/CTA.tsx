"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { SURVEY_URL } from "@/lib/links";

export function CTA() {
    return (
        <section className="py-32 px-6 bg-brand-ink text-brand-paper overflow-hidden relative border-y border-brand-paper/20">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                >
                    What&apos;s eating your week?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-lg md:text-xl text-brand-paper/70 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Tell us what gets copied, chased, or done twice. We&apos;ll tell you whether it is worth fixing.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                >
                    <Button asChild size="lg" className="rounded-full px-10 h-14 text-base bg-brand-coral text-brand-ink hover:bg-brand-paper focus-visible:outline-brand-coral transition-colors shadow-[4px_4px_0_var(--brand-paper)] font-medium">
                        <a href={SURVEY_URL}>Tell us your problem <ArrowRightIcon className="ml-2 w-5 h-5" /></a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
