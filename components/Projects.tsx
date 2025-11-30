import { motion } from "framer-motion";
import { Cpu, ExternalLink } from "lucide-react";
import { PROJECTS } from "../lib/data";

export const Projects = () => {
    return (
        <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3 justify-end">
                SIDE QUESTS <Cpu className="w-8 h-8" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, i) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        key={i}
                        whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                        className="block bg-zinc-900 border-2 border-zinc-700 p-6 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 bg-[#ffff00] text-black text-xs font-bold px-2 py-1 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
                            {project.tag}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            {project.title} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                        </h3>
                        <p className="text-gray-400 text-sm">{project.desc}</p>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff41] to-[#ff00ff] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
