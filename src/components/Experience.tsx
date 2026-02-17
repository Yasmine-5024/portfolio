"use client";

import { portfolioData } from "@/data/portfolio";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

export function Experience() {
    return (
        <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
            <SectionReveal width="100%">
                <h2 className="text-[28px] font-bold text-foreground mb-12 border-b-2 border-accent/20 pb-2 inline-block">Experience</h2>
                <div className="space-y-12 border-l border-neutral-800 ml-3 pl-8 relative">
                    {portfolioData.experience.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} />
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}

function ExperienceItem({ exp }: { exp: any }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <span className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border transition-colors duration-300 ${isOpen ? "border-accent bg-accent" : "border-neutral-600 bg-neutral-900 group-hover:border-accent"}`} />

            <div className="transition-all duration-300">
                <h3 className={`text-xl font-semibold transition-colors ${isOpen ? "text-accent" : "text-foreground group-hover:text-accent"}`}>{exp.role}</h3>
                <p className="text-lg text-muted mt-1">{exp.company}</p>
                <p className="text-sm text-neutral-500 mt-1 uppercase tracking-wider mb-2">{exp.period}</p>

                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <ul className="list-disc list-inside text-muted/90 text-sm space-y-1 pt-2 ml-2">
                        {exp.description?.map((desc: string, i: number) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Hint to expand if descriptions exist and closed */}
                {!isOpen && exp.description && (
                    <div className="text-xs text-neutral-600 mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Click to expand</span>
                    </div>
                )}
            </div>
        </div>
    );
}
