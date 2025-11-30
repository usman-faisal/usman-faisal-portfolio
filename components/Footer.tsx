import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="text-center pb-20 pt-10 border-t border-gray-800">
            <p className="text-gray-500 mb-4">
                Made with <Heart className="inline w-4 h-4 text-yellow-400" /> and too much Chai in Karachi.
            </p>
            <p className="text-xs text-gray-700 font-mono">
                © 2025 Muhammad Usman Shamsi. Steal this code, I dare you (JK)
            </p>
        </footer>
    );
};
