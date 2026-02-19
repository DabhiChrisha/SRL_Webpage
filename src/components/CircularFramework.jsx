import { motion } from "framer-motion";
import srlLogo from "../assets/SRL Logo.png";

export default function CircularFramework() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center scale-90 md:scale-100"
        >

            {/* Outer Glow / Soft Background */}
            <div className="absolute w-[28rem] h-[28rem] md:w-[34rem] md:h-[34rem] rounded-full bg-white/40 shadow-none backdrop-blur-sm" />

            {/* SVG Circle System */}
            <svg
                viewBox="0 0 500 500"
                className="w-[28rem] h-[28rem] md:w-[34rem] md:h-[34rem] relative z-10"
            >
                {/* 1. Main Track Ring - Left Half (Beige) */}
                <circle
                    cx="250"
                    cy="250"
                    r="180"
                    stroke="#f8e6c1"
                    strokeWidth="24"
                    fill="none"
                    strokeDasharray="565 1131"
                    strokeDashoffset="-565"
                    strokeLinecap="butt"
                    transform="rotate(-90 250 250)"
                    className="opacity-100"
                />

                {/* 2. Main Track Ring - Right Half (Teal) */}
                <circle
                    cx="250"
                    cy="250"
                    r="180"
                    stroke="#00887b"
                    strokeWidth="24"
                    fill="none"
                    strokeDasharray="565 1131"
                    strokeDashoffset="0"
                    strokeLinecap="butt"
                    transform="rotate(-90 250 250)"
                    className="opacity-100"
                />
            </svg>

            {/* Center Content with Animation */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">

                {/* Circular Logo Container - "Odama" Style Animation (Spring + Spin) - ADJUSTED SIZE */}
                <motion.div
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        duration: 1.5
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="mb-3 relative cursor-pointer pointer-events-auto"
                >
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-xl flex items-center justify-center p-1 border-4 border-white relative overflow-hidden">
                        {/* Shine Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent z-10 opacity-50" />

                        <img
                            src={srlLogo}
                            alt="SRL Logo"
                            className="w-full h-full object-cover rounded-full relative z-0"
                        />
                    </div>
                </motion.div>

                {/* Text Reveal - ADJUSTED to Fit Inside Circle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center px-4 pointer-events-auto"
                >
                    <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00887b] via-[#059669] to-[#0d9488] leading-tight mb-1 drop-shadow-sm">
                        What is SRL?
                    </h2>

                    <p className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-[0.15em] mb-2">
                        Students Research Lab
                    </p>
                </motion.div>

                {/* Description below - ADJUSTED to Fit */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="max-w-[220px] md:max-w-[240px] text-center pointer-events-auto"
                >
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-medium">
                        A focused academic ecosystem for students prioritizing discipline, consistency, and intellectual rigor.
                    </p>
                </motion.div>
            </div>

        </motion.div>
    );
}
