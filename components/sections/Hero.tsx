"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon, DotFilledIcon } from "@radix-ui/react-icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextScramble } from "@/components/ui/TextScramble";
import { SURVEY_URL } from "@/lib/links";

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-brand-ink py-16 md:py-24">
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Left Aligned Content - Asymmetric Layout (DESIGN_VARIANCE = 8) */}
                <div className="md:col-span-7 flex flex-col items-start text-left pt-12 md:pt-0">
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-paper/30 bg-brand-paper/5 text-[10px] uppercase tracking-[0.2em] text-brand-paper/85 font-mono">
                            <span className="w-2 h-2 rounded-full bg-brand-eucalyptus animate-pulse" />
                            WA Grown · Perth Built
                        </span>
                    </motion.div>

                    {/* Headline - Editorial Asymmetric */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                        className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.98] text-brand-paper mb-8"
                    >
                        Knock off Early <br />
                        <span className="text-brand-coral">
                            <TextScramble className="font-light">We&apos;ll cop it</TextScramble>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                        className="text-base sm:text-lg font-light text-brand-paper/75 max-w-[60ch] mb-10 leading-relaxed"
                    >
                        Not sure where to start? Answer our brief survey about your business and we&apos;ll suss out where your admin pain is hiding.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
                    >
                        <MagneticButton
                            onClick={() => window.location.assign(SURVEY_URL)}
                            className="rounded-full px-8 h-14 text-xs font-mono uppercase tracking-widest bg-brand-paper text-brand-ink hover:bg-brand-coral transition-colors font-medium shadow-[4px_4px_0_var(--brand-coral)]"
                        >
                            Repetitive Admin?
                        </MagneticButton>
                        <MagneticButton
                            onClick={() => window.location.assign(SURVEY_URL)}
                            className="flex items-center justify-center text-xs font-mono uppercase tracking-widest text-brand-paper/80 hover:text-brand-paper transition-colors group px-6 py-4 border border-brand-paper/20 rounded-full hover:border-brand-paper/40"
                        >
                            Let us sort it <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-brand-coral" />
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Right Aligned Visual / Interactive Bento Anchor (DESIGN_VARIANCE = 8) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                    className="md:col-span-5 w-full mt-6 md:mt-0"
                >
                    <div className="relative p-6 md:p-8 rounded-[2rem] border border-brand-paper/20 bg-brand-paper/5 backdrop-blur-md shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-paper/15">
                            <div className="flex items-center gap-2">
                                <DotFilledIcon className="w-4 h-4 text-brand-eucalyptus animate-ping" />
                                <span className="text-xs font-mono uppercase tracking-widest text-brand-paper/80">Active Flow Engine</span>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-paper/10 text-brand-coral border border-brand-coral/30">Live System</span>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-brand-ink/80 border border-brand-paper/10 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-mono text-brand-paper/60">Email & Inquiry Ingestion</p>
                                    <p className="text-sm font-medium text-brand-paper">Auto-reply & Calendar Sync</p>
                                </div>
                                <div className="w-7 h-7 rounded-full bg-brand-eucalyptus/20 border border-brand-eucalyptus flex items-center justify-center text-brand-eucalyptus">
                                    <CheckIcon className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-brand-ink/80 border border-brand-paper/10 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-mono text-brand-paper/60">Job Handover & Dispatch</p>
                                    <p className="text-sm font-medium text-brand-paper">Slack & Notion Sync</p>
                                </div>
                                <div className="w-7 h-7 rounded-full bg-brand-coral/20 border border-brand-coral flex items-center justify-center text-brand-coral">
                                    <CheckIcon className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-brand-ink/80 border border-brand-paper/10 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-mono text-brand-paper/60">Daily Admin Time Saved</p>
                                    <p className="text-xl font-mono text-brand-coral font-semibold">2.4 hrs / day</p>
                                </div>
                                <span className="text-xs font-mono text-brand-eucalyptus">100% automated</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
