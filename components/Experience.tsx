"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";
import confetti from "canvas-confetti";
import { cn } from "../lib/utils";
import { EXPERIENCE } from "../lib/data";

export const Experience = () => {
    const [isRecruiterMode, setIsRecruiterMode] = useState(true);

    const toggleMode = () => {
        setIsRecruiterMode(!isRecruiterMode);
        if (isRecruiterMode) {
            confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        }
    };

    return (
        <section className="mb-32">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                    <Terminal className="w-8 h-8" /> CANON EVENTS
                </h2>

                {/* THE TOGGLE */}
                <div className="flex items-center gap-4 bg-[#1a1a1a] p-2 rounded-xl border border-[#333]">
                    <span className={cn("text-sm font-bold transition-colors", isRecruiterMode ? "text-white" : "text-gray-600")}>
                        👔 RECRUITER MODE
                    </span>
                    <button
                        onClick={toggleMode}
                        className={cn(
                            "relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]",
                            isRecruiterMode ? "bg-blue-600" : "bg-red-600"
                        )}
                    >
                        <motion.div
                            layout
                            className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                            animate={{ x: isRecruiterMode ? 0 : 32 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    </button>
                    <span className={cn("text-sm font-bold transition-colors", !isRecruiterMode ? "text-[#00ff41]" : "text-gray-600")}>
                        👺 REAL MODE
                    </span>
                </div>
                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-xs text-[#ff00ff] mt-2 font-bold animate-pulse"
                >
                    {isRecruiterMode ? "✨ 10x DEVELOPER" : "🐛 WORKS ON MY MACHINE"}               
                </motion.p>
            </div>

            <div className="space-y-8">
                {EXPERIENCE.map((job, i) => (
                    <motion.a
                        key={i}
                        href={job.link}
                        target="_blank"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="block bg-[#111] border-2 border-[#333] p-6 hover:border-[#00ff41] transition-colors relative group shadow-[8px_8px_0px_0px_rgba(50,50,50,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,255,65,1)] hover:-translate-y-1"
                    >
                        <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff41]">{job.company}</h3>
                                <p className="text-sm text-gray-400">{job.role}</p>
                            </div>
                            <span className="text-xs bg-[#222] px-2 py-1 rounded text-gray-300 font-mono">{job.period}</span>
                        </div>

                        <div className="relative min-h-[80px]">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={isRecruiterMode ? "recruiter" : "honest"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={cn("text-lg", isRecruiterMode ? "text-gray-300" : "text-[#ff00ff] font-medium")}
                                >
                                    {isRecruiterMode ? job.recruiter : job.honest}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        <div className="mt-4 flex gap-2 flex-wrap">
                            {job.stack.map((tech) => (
                                <span key={tech} className="text-xs border border-gray-600 px-2 py-1 rounded-full text-gray-400 group-hover:border-[#00ff41] group-hover:text-[#00ff41]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
