"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tilt } from "./Tilt";
import { SectionReveal } from "./SectionReveal";

const defaultTiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

export function Projects() {
    return (
        <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
            <SectionReveal width="100%">
                <h2 className="text-[28px] font-bold text-foreground mb-12 border-b-2 border-accent/20 pb-2 inline-block">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <Tilt key={index} options={defaultTiltOptions} className="h-full">
                            <motion.div
                                className="group bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:border-accent/50 transition-all h-full flex flex-col relative" // Removed p-6, added overflow-hidden
                            >
                                {/* Project Image Placeholder - Using Gradient as requested */}
                                <div className="h-48 w-full bg-gradient-to-br from-neutral-800 to-neutral-900 border-b border-neutral-800/50 flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                    <span className="text-neutral-700 text-lg font-bold opacity-30 px-8 text-center">{project.title}</span>

                                    {/* Badge */}
                                    {project.badge && (
                                        <div className="absolute top-3 right-3 bg-accent/90 text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm z-20">
                                            {project.badge}
                                        </div>
                                    )}

                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-[18px] font-semibold text-foreground group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-3 relative z-10">
                                            {project.github && (
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    className="text-muted hover:text-white transition-colors hover:scale-110 transform duration-200"
                                                >
                                                    <Github size={20} />
                                                </Link>
                                            )}
                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                    className="text-muted hover:text-white transition-colors hover:scale-110 transform duration-200"
                                                >
                                                    <ExternalLink size={20} />
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-muted mb-6 text-[14px] leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-neutral-800/80 text-neutral-300 text-xs rounded-full border border-neutral-700 group-hover:border-accent/30 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
