"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import confetti from "canvas-confetti";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Portfolio() {
    const [konami, setKonami] = useState<string[]>([]);
    const controls = useAnimation();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const newKonami = [...konami, e.key];
            if (newKonami.length > 10) newKonami.shift();
            setKonami(newKonami);

            const code = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
            if (newKonami.join("").includes(code)) {
                confetti({ particleCount: 500, spread: 300 });
                controls.start({ rotate: 360, transition: { duration: 2 } });
                setKonami([]);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [konami, controls]);

    return (
        <motion.main
            animate={controls}
            className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono selection:bg-[#ff00ff] selection:text-white overflow-x-hidden"
        >
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Footer />
            </div>
        </motion.main>
    );
}