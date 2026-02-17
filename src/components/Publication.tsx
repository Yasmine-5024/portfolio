"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { motion } from "framer-motion";

export function Publication() {
    const { citation, doi, badge } = portfolioData.publication;

    return (
        <section id="publication" className="py-20 px-6 max-w-5xl mx-auto">
            <SectionReveal width="100%">
                <h2 className="text-[28px] font-bold text-foreground mb-12 border-b-2 border-accent/20 pb-2 inline-block">Selected Publication</h2>

                <div className="relative group">
                    {/* Badge */}
                    <div className="absolute -top-3 right-4 bg-accent text-neutral-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 animate-pulse">
                        {badge}
                    </div>

                    <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 flex items-start gap-6 hover:border-accent/40 transition-colors">
                        <div className="p-4 bg-accent/10 rounded-xl hidden md:block">
                            <BookOpen className="text-accent" size={32} />
                        </div>
                        <div className="flex-grow">
                            <p className="text-[15px] text-neutral-200 italic mb-6 leading-relaxed font-light">
                                "{citation}"
                            </p>
                            <Link
                                href={doi}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors uppercase tracking-widest"
                            >
                                View Publication <BookOpen size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}
