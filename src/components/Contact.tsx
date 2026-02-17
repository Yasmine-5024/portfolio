import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
    const { email, github, linkedin } = portfolioData.personal;

    return (
        <section id="contact" className="py-32 px-6 border-t border-neutral-900/50 bg-neutral-950/30">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Connect</h2>
                <p className="text-xl text-muted mb-10 max-w-xl leading-relaxed">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-accent text-accent font-bold rounded-md hover:bg-accent/10 transition-all hover:scale-105 duration-300 mb-16 text-lg tracking-wide"
                >
                    Say Hello
                </a>

                <div className="flex gap-8 mb-16">
                    <Link href={github} target="_blank" className="text-muted hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                        <Github size={32} />
                    </Link>
                    <Link href={linkedin} target="_blank" className="text-muted hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                        <Linkedin size={32} />
                    </Link>
                    <Link href={`mailto:${email}`} className="text-muted hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                        <Mail size={32} />
                    </Link>
                </div>

                <p className="text-sm text-neutral-600 font-medium">
                    © {new Date().getFullYear()} Yasaman Akhoundzadeh Basti <br /> Built with Next.js & Tailwind
                </p>
            </div>
        </section>
    );
}
