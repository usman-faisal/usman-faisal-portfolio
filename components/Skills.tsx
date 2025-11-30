import { motion } from "framer-motion";

export const Skills = () => {
    return (
        <section className="mb-20">
            <div className="border-4 border-dashed border-gray-800 p-8 rounded-3xl bg-black">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">INVENTORY</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {["Next.js (Lvl 99)", "NestJS (Lvl 80)", "TypeScript", "React", "PostgreSQL", "Docker", "LangChain", "Sleeping", "Brainrot Memes", "Leetcode (Lvl 0)"].map((skill) => (
                        <motion.div
                            key={skill}
                            whileHover={{ scale: 1.2, backgroundColor: "#00ff41", color: "#000" }}
                            className="px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded cursor-crosshair text-sm font-bold"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
