"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="py-20 px-6 max-w-5xl mx-auto">
            <SectionReveal width="100%">
                <h2 className="text-[28px] font-bold text-foreground mb-12 border-b-2 border-accent/20 pb-2 inline-block">Education</h2>
                <div className="grid gap-8">
                    {portfolioData.education.map((edu, index) => (
                        <div key={index} className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800 hover:border-accent/30 transition-colors flex flex-col md:flex-row gap-6 items-start">
                            <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                <GraduationCap size={32} />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                                    <h3 className="text-[20px] font-bold text-foreground">{edu.school}</h3>
                                    <span className="text-[12px] font-medium text-accent/80 px-3 py-1 bg-accent/10 rounded-full border border-accent/20 w-fit">
                                        {edu.period}
                                    </span>
                                </div>
                                <h4 className="text-[16px] text-muted font-medium mb-3">{edu.degree}</h4>
                                <p className="text-neutral-400 leading-relaxed text-[14px] border-t border-neutral-800 pt-3 mt-1">
                                    {edu.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
