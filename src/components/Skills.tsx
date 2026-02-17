"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";
import { motion } from "framer-motion";

export function Skills() {
    const { skills } = portfolioData;

    const categories = [
        { name: "Languages", items: skills.languages },
        { name: "AI / ML", items: skills.ai_ml },
        { name: "LLM & Agents", items: skills.llm_agents },
        { name: "Web Development", items: skills.web },
        { name: "Tools", items: skills.tools },
    ];

    return (
        <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
            <SectionReveal width="100%">
                <h2 className="text-[28px] font-bold text-foreground mb-12 border-b-2 border-accent/20 pb-2 inline-block">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {categories.map((category, index) => (
                        <div key={category.name}>
                            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-accent"></span>
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.1, backgroundColor: "#14b8a6", color: "#000" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="px-4 py-2 bg-neutral-900/50 text-neutral-300 text-[13px] font-medium rounded-lg border border-neutral-800 cursor-default hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] transition-shadow"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
