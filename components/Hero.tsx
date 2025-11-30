import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { GlitchText } from "./GlitchText";

export const Hero = () => {
    return (
        <section className="mb-32 text-center relative">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-block mb-4 border-2 border-[#00ff41] px-4 py-1 rounded-full text-xs uppercase tracking-widest bg-[#0a0a0a]"
            >
                Based in Karachi 🇵🇰 • Lonely 24/7
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                <GlitchText text="USMAN" /> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#ffff00]">
                    SHAMSI
                </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                I write code so clean even AI asks me for comments<br />
                I turn coffee into <span className="line-through decoration-red-500">bugs</span> features.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
                <a href="https://github.com/usman-faisal" target="_blank" className="brutalist-btn bg-white text-black hover:bg-gray-200">
                    <Github className="inline mr-2 w-5 h-5" /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" className="brutalist-btn bg-[#0077b5] text-white hover:bg-[#006396]">
                    <Linkedin className="inline mr-2 w-5 h-5" /> LinkedIn
                </a>
                <a href="mailto:usman.shamsi987@gmail.com" className="brutalist-btn bg-[#ff00ff] text-white hover:bg-[#d100d1]">
                    <Mail className="inline mr-2 w-5 h-5" /> Email Me
                </a>
            </div>
        </section>
    );
};
