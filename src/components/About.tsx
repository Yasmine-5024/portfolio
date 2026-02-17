"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";
import { Tilt } from "react-tilt";
import { Coffee, Cat, Film } from "lucide-react";
import { motion } from "framer-motion";

const defaultTiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

export function About() {
    return (
        <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
            <SectionReveal width="100%">
                <h2 className="text-3xl font-bold text-foreground mb-12 border-b-2 border-accent/20 pb-2 inline-block">About Me</h2>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3 relative">
                        <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl transform rotate-6 scale-90"></div>
                        <Tilt options={defaultTiltOptions}>
                            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <img
                                    src="/photo_2026-02-17_16-00-30.jpg"
                                    alt="About Me"
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </Tilt>
                    </div>

                    <div className="w-full md:w-2/3">
                        <p className="text-lg text-muted leading-relaxed">
                            {portfolioData.sections.about}
                        </p>

                        <div className="mt-8 flex gap-4">
                            <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                                <span className="block text-2xl font-bold text-accent">3+</span>
                                <span className="text-sm text-neutral-400">Years Experience</span>
                            </div>
                            <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                                <span className="block text-2xl font-bold text-accent">20+</span>
                                <span className="text-sm text-neutral-400">Projects Completed</span>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-neutral-800 pt-8">
                            <p className="text-muted mb-4 font-medium flex items-center gap-2">
                                <span className="w-1 h-6 bg-accent rounded-full inline-block"></span>
                                When I'm not building AI systems, you'll find me with:
                            </p>
                            <div className="flex gap-6">
                                {/* Tea with Steam Animation */}
                                <div className="group relative flex flex-col items-center justify-center p-3 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-accent/50 transition-colors">
                                    <motion.div
                                        animate={{ y: [-2, -8, -12], opacity: [0, 0.6, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                        className="absolute -top-2 w-1.5 h-1.5 bg-white/30 rounded-full blur-[1px]"
                                    />
                                    <motion.div
                                        animate={{ y: [-2, -10, -15], opacity: [0, 0.5, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -top-2 right-4 w-1 h-1 bg-white/20 rounded-full blur-[1px]"
                                    />
                                    <Coffee size={28} className="text-muted group-hover:text-[#e0c097] transition-colors" />
                                    <span className="text-xs text-muted mt-2 font-medium">Tea</span>
                                </div>

                                {/* Cat with Wiggle Animation */}
                                <motion.div
                                    className="group flex flex-col items-center justify-center p-3 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-accent/50 transition-colors cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Cat size={28} className="text-muted group-hover:text-[#f4a261] transition-colors" />
                                    </motion.div>
                                    <span className="text-xs text-muted mt-2 font-medium">My Cats</span>
                                </motion.div>

                                {/* Movies with Reel Animation */}
                                <motion.div
                                    className="group flex flex-col items-center justify-center p-3 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-accent/50 transition-colors cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8, ease: "linear" }}
                                    >
                                        <Film size={28} className="text-muted group-hover:text-[#e76f51] transition-colors" />
                                    </motion.div>
                                    <span className="text-xs text-muted mt-2 font-medium">Movies</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}
