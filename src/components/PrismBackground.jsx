import { motion } from "framer-motion";

export default function PrismBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#f4f6f8] -z-10">
            {/* Base Gradient - Soft Light */}
            <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-teal-50 to-emerald-100 opacity-60" />

            {/* Floating Prisms */}
            <div className="absolute inset-0 w-full h-full">

                {/* Prism 1 - Large Top Left */}
                <FloatingPrism
                    width="w-[500px]"
                    height="h-[500px]"
                    top="-top-[10%]"
                    left="-left-[10%]"
                    color="bg-linear-to-br from-emerald-300/20 to-teal-400/20"
                    blur="blur-3xl"
                    delay={0}
                />

                {/* Prism 2 - Bottom Right */}
                <FloatingPrism
                    width="w-[600px]"
                    height="h-[600px]"
                    bottom="-bottom-[20%]"
                    right="-right-[10%]"
                    color="bg-linear-to-tr from-teal-300/30 to-emerald-400/20"
                    blur="blur-3xl"
                    delay={2}
                />

                {/* Prism 3 - Center Float (Sharp) */}
                <FloatingPrism
                    width="w-[300px]"
                    height="h-[300px]"
                    top="top-[20%]"
                    left="left-[40%]"
                    color="bg-linear-to-b from-teal-200/10 to-transparent"
                    blur="blur-2xl"
                    delay={4}
                    duration={15}
                />

                {/* Prism 4 - Small Accent */}
                <FloatingPrism
                    width="w-[150px]"
                    height="h-[150px]"
                    bottom="bottom-[30%]"
                    left="left-[10%]"
                    color="bg-linear-to-tr from-yellow-200/20 to-emerald-100/20"
                    blur="blur-xl"
                    delay={1}
                />

            </div>

            {/* Noise Texture for Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        </div>
    );
}

function FloatingPrism({ width, height, top, left, right, bottom, color, blur, delay = 0, duration = 20 }) {
    return (
        <motion.div
            className={`absolute ${width} ${height} ${top} ${left} ${right} ${bottom} rounded-full ${color} ${blur}`}
            animate={{
                x: [0, 50, -50, 0],
                y: [0, -50, 50, 0],
                scale: [1, 1.1, 0.9, 1],
                rotate: [0, 20, -20, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        />
    );
}
