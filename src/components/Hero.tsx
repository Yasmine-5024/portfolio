"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { TypeAnimation } from "react-type-animation";
import { ParticlesBackground } from "./ParticlesBackground";

export function Hero() {
    const { name, bio, github, linkedin, email } = portfolioData.personal;

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20 relative">
            <ParticlesBackground />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 z-10"
            >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/50 p-1 bg-background">
                            <img
                                src="/profile.png"
                                alt={name}
                                className="w-full h-full rounded-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <span className="text-accent tracking-widest text-sm font-medium uppercase">
                            Hi, my name is
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                            {name}
                        </h1>
                        <div className="text-3xl md:text-5xl font-bold text-muted h-[60px] md:h-[80px]">
                            <TypeAnimation
                                sequence={[
                                    "AI Engineer",
                                    2000,
                                    "Full-Stack Developer",
                                    2000,
                                    "ML Researcher",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                </div>
                <p className="max-w-2xl text-lg text-muted/80 leading-relaxed pt-4">
                    {bio}
                </p>

                <div className="flex items-center gap-6 pt-8">
                    <Link
                        href={github}
                        target="_blank"
                        className="text-muted hover:text-accent transition-colors hover:animate-bounce"
                    >
                        <Github size={28} />
                    </Link>
                    <Link
                        href={linkedin}
                        target="_blank"
                        className="text-muted hover:text-accent transition-colors hover:animate-bounce"
                    >
                        <Linkedin size={28} />
                    </Link>
                    <Link
                        href={`mailto:${email}`}
                        className="text-muted hover:text-accent transition-colors hover:animate-bounce"
                    >
                        <Mail size={28} />
                    </Link>
                </div>
            </motion.div>
        </section >
    );
}
