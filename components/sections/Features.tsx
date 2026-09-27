"use client";

import { motion } from "framer-motion";
import { GlobeIcon, LockClosedIcon, GearIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "BUSINESS WORKFLOWS",
        description: "One clear end-to-end process, striking that task off your todo list forever.",
        icon: GlobeIcon,
        accent: "bg-brand-coral",
        className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        title: "It's Your Call",
        description: "You pick where your data lives, how much work gets done, and who has access.",
        icon: LockClosedIcon,
        accent: "bg-brand-eucalyptus",
        className: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "Systems that talk",
        description: "We connect the tools you already use so information stops falling through the gaps.",
        icon: GearIcon,
        accent: "bg-brand-eucalyptus",
        className: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "Less chasing",
        description: "You'll no longer dread updates, reminders or alarms as they now signal a job getting done.",
        icon: LightningBoltIcon,
        accent: "bg-brand-coral",
        className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
];

export function Features() {
    return (
        <section id="features" className="py-32 md:py-40 px-6 bg-brand-paper text-brand-ink">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 md:flex justify-between items-end">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.15]"
                    >
                        Less admin. <br /> <span className="text-brand-coral">More time.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                        className="text-brand-ink/70 max-w-sm mt-8 md:mt-0 text-base md:text-lg font-light leading-relaxed"
                    >
                        Invest in yourself, Chuck us all the hassle, we&apos;ll sort it for ya... better quality of life and stuff.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} className={feature.className}>
                            <div className="relative z-10 flex flex-col h-full justify-between p-8">
                                <div className={cn("w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center mb-6 text-brand-ink", feature.accent)}>
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium mb-3 tracking-tight">{feature.title}</h3>
                                    <p className="text-brand-ink/70 leading-relaxed text-sm md:text-base">{feature.description}</p>
                                </div>
                            </div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={cn(
                "relative border border-brand-ink bg-brand-paper overflow-hidden shadow-[4px_4px_0_var(--brand-ink)] rounded-2xl transition-transform hover:-translate-y-1 duration-200",
                className
            )}
        >
            {children}
        </div>
    );
}
