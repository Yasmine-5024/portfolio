"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "publication", label: "Publication" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export function SectionIndicator() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null, // viewport
                rootMargin: "-50% 0px -50% 0px", // Middle of the screen
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group relative flex items-center justify-center w-4 h-4"
                    aria-label={`Scroll to ${section.label}`}
                >
                    <motion.div
                        className={`absolute rounded-full transition-colors duration-300 ${activeSection === section.id
                            ? "bg-accent w-3 h-3"
                            : "bg-neutral-600 w-2 h-2 group-hover:bg-neutral-400"
                            }`}
                        layoutId="activeSectionDot"
                    />
                    <span className="absolute right-8 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        {section.label}
                    </span>
                </button>
            ))}
        </div>
    );
}
