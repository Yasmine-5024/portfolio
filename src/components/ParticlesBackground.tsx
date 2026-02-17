"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "bubble", // Changed to bubble for subtle interaction
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    bubble: {
                        distance: 200,
                        duration: 2,
                        size: 6,
                        opacity: 0.8,
                    },
                },
            },
            particles: {
                color: {
                    value: "#14b8a6",
                },
                links: {
                    color: "#14b8a6",
                    distance: 150,
                    enable: true,
                    opacity: 0.15, // Subtle lines
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 0.8, // Slow movement
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        width: 800, // Adjusted density
                    },
                    value: 60,
                },
                opacity: {
                    value: { min: 0.1, max: 0.3 }, // Varying opacity
                    animation: {
                        enable: true,
                        speed: 0.5,
                        sync: false,
                    }
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
                className="absolute inset-0 -z-10"
            />
        );
    }

    return <></>;
}
