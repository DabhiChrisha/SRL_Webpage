import { Lightbulb, Target, Compass } from "lucide-react";

export default function VisionaryPillarCards({ visible }) {
  const pillars = [
    {
      title: "Vision",
      Icon: Lightbulb,
      content:
        "To build a disciplined research-driven community that nurtures long-term thinkers and academic leaders."
    },
    {
      title: "Mission",
      Icon: Target,
      content:
        "To cultivate critical thinking and collaborative research through structured activities and mentorship."
    },
    {
      title: "Objectives",
      Icon: Compass,
      content:
        "To provide students with research exposure, peer learning, academic rigor, and opportunities for real-world impact."
    }
  ];

  return (
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10">
      {pillars.map(({ title, Icon, content }, index) => (
        <div
          key={title}
          style={{
            animationDelay: visible ? `${index * 160}ms` : "0ms"
          }}
          className={`
            relative
            rounded-3xl
            p-6
            bg-white/20
            backdrop-blur-md
            border
            border-white/30
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-2
            ${
              visible ? "animate-fade-up" : "opacity-0"
            }
          `}
        >
          {/* Orbiting Ring */}
          <div className="orbit-ring" />

          {/* Icon */}
          <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white/40 shadow-md mb-4">
            <Icon className="w-7 h-7 text-[#05877a]" />
          </div>

          {/* Title */}
          <h4 className="relative z-10 text-xl font-semibold text-white mb-2">
            {title}
          </h4>

          {/* Content */}
          <p className="relative z-10 text-white/90 text-sm leading-relaxed">
            {content}
          </p>

          {/* Accent line */}
          <div className="relative z-10 mt-5 h-[2px] w-12 bg-white/60" />
        </div>
      ))}
    </div>
  );
}
