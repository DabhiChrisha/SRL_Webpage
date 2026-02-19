import { motion } from "framer-motion";
import { Lightbulb, Target, Compass, Sparkles, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Our Vision",
    icon: Lightbulb,
    description:
      "To build a disciplined research-driven community that nurtures long-term thinkers and academic leaders.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 via-emerald-50/50 to-transparent",
    shadowColor: "shadow-emerald-500/20"
  },
  {
    title: "Our Mission",
    icon: Target,
    description:
      "To cultivate consistency, critical thinking, and collaborative research through structured activities and mentorship.",
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-50 via-teal-50/50 to-transparent",
    shadowColor: "shadow-teal-500/20"
  },
  {
    title: "Core Objectives",
    icon: Compass,
    description:
      "To provide students with research exposure, peer learning, academic rigor, and opportunities for real-world impact.",
    gradient: "from-cyan-500 to-sky-500",
    bgGradient: "from-cyan-50 via-cyan-50/50 to-transparent",
    shadowColor: "shadow-cyan-500/20"
  }
];

export default function VisionaryPillarCards() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto items-stretch">
      {pillars.map((item, index) => (
        <Card key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function Card({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      className="relative w-full"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        className={`
          group relative overflow-hidden rounded-2xl 
          bg-white/80 backdrop-blur-xl 
          border border-white/60 shadow-lg 
          hover:shadow-2xl hover:shadow-[rgba(5,135,122,0.15)]
          transition-all duration-400 ease-out
          p-6 sm:p-7
        `}
      >
        {/* 1. Animated Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out`} />

        {/* 2. Accent Bar (Left) */}
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.gradient}`} />

        {/* 3. Content Container */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">

          {/* Icon Box */}
          <div className="shrink-0 relative">
            <div className={`
              w-16 h-16 rounded-2xl 
              bg-gradient-to-br ${item.gradient} 
              shadow-lg flex items-center justify-center 
              text-white relative overflow-hidden
              group-hover:rotate-6 group-hover:scale-110 
              transition-all duration-400 ease-spring
            `}>
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
              <div className="absolute -inset-full bg-white/20 skew-x-12 translate-x-[-150%] group-hover:animate-shine" />
              <Icon size={32} strokeWidth={1.5} className="drop-shadow-sm relative z-10" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 pt-0.5">
            <div className="flex items-center justify-between mb-2">
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                {item.title}
              </h3>
              {/* Subtle decorative sparkle */}
              <Sparkles className={`w-5 h-5 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-2 group-hover:translate-y-0`} />
            </div>

            <p className="text-gray-600 leading-relaxed font-medium text-base sm:text-[1.05rem]">
              {item.description}
            </p>

            {/* Optional arrow indicator on hover */}
            {/* <div className="mt-4 flex items-center gap-2 text-sm font-bold text-teal-600 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
               <span>Learn more</span> <ArrowRight size={16} />
            </div> */}
          </div>
        </div>

        {/* 4. Glossy Highlight Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-500" />

      </motion.div>
    </motion.div>
  );
}
