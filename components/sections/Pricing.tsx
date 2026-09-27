"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SURVEY_URL } from "@/lib/links";
import { useMemo } from "react";

const STANDARD_ITEMS = ["One messy workflow", "A plain assessment", "A sensible next step"];
const EXECUTIVE_ITEMS = ["Workflow mapped", "Automation built", "Edge cases tested", "Team handover"];
const VIP_ITEMS = ["New workflows", "System upkeep", "Team questions", "Practical improvements"];

export function Pricing() {
    const renderedStandardItems = useMemo(() => {
        return STANDARD_ITEMS.map(item => (
            <li key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-coral shrink-0" /> {item}
            </li>
        ));
    }, []);

    const renderedExecutiveItems = useMemo(() => {
        return EXECUTIVE_ITEMS.map(item => (
            <li key={item} className="flex items-center gap-3">
                <CheckIcon className="w-4 h-4 text-brand-coral shrink-0" /> {item}
            </li>
        ));
    }, []);

    const renderedVipItems = useMemo(() => {
        return VIP_ITEMS.map(item => (
            <li key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-eucalyptus shrink-0" /> {item}
            </li>
        ));
    }, []);

    return (
        <section id="pricing" className="py-32 md:py-40 px-6 bg-brand-paper text-brand-ink">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight mb-6"
                    >
                        Ways to work together.
                    </motion.h2>
                    <p className="text-brand-ink/70 text-base md:text-lg font-light">Start small. Fix the right thing. Build from there.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {/* Standard Member */}
                    <div className="p-8 md:p-10 bg-brand-paper border border-brand-ink shadow-[4px_4px_0_var(--brand-ink)] rounded-2xl flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-sm font-mono tracking-widest uppercase mb-4 text-brand-coral">First chat</h3>
                            <div className="text-4xl md:text-5xl font-light mb-8 text-brand-ink">No charge</div>
                            <ul className="space-y-4 text-sm text-brand-ink/70 mb-10">
                                {renderedStandardItems}
                            </ul>
                        </div>
                        <Button asChild variant="outline" className="w-full rounded-full py-6 border-brand-ink bg-brand-paper text-brand-ink hover:bg-brand-eucalyptus transition-colors font-mono text-xs uppercase">
                            <a href={SURVEY_URL}>Tell us your problem</a>
                        </Button>
                    </div>

                    {/* Executive Member */}
                    <div className="relative p-8 md:p-10 bg-brand-ink text-brand-paper shadow-[8px_8px_0_var(--brand-coral)] flex flex-col justify-between h-full md:scale-105 border border-brand-ink rounded-2xl overflow-hidden">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-sm font-mono tracking-widest uppercase text-brand-coral">Operations sprint</h3>
                                <Badge variant="outline" className="border-brand-paper/30 text-brand-paper/80 font-mono text-[10px]">Best place to start</Badge>
                            </div>
                            <div className="text-4xl md:text-5xl font-light mb-2 text-brand-paper">Fixed scope</div>
                            <p className="text-brand-paper/60 text-xs font-mono mb-8">Agreed before we build</p>

                            <ul className="space-y-4 text-sm text-brand-paper/80 mb-10">
                                {renderedExecutiveItems}
                            </ul>
                        </div>
                        <Button asChild className="w-full rounded-full py-6 bg-brand-coral text-brand-ink hover:bg-brand-paper transition-colors font-mono text-xs uppercase font-medium">
                            <a href={SURVEY_URL}>Talk through a sprint</a>
                        </Button>
                    </div>

                    {/* Ongoing Support */}
                    <div className="p-8 md:p-10 bg-brand-paper border border-brand-ink shadow-[4px_4px_0_var(--brand-ink)] rounded-2xl flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-sm font-mono tracking-widest uppercase mb-4 text-brand-eucalyptus">Ongoing support</h3>
                            <div className="text-4xl md:text-5xl font-light mb-8 text-brand-ink">As needed</div>
                            <ul className="space-y-4 text-sm text-brand-ink/70 mb-10">
                                {renderedVipItems}
                            </ul>
                        </div>
                        <Button asChild variant="outline" className="w-full rounded-full py-6 border-brand-ink bg-brand-paper text-brand-ink hover:bg-brand-eucalyptus transition-colors font-mono text-xs uppercase">
                            <a href={SURVEY_URL}>Talk to us</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
