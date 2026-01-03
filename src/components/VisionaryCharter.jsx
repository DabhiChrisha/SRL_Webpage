import { useEffect, useRef, useState } from "react";
import { Lightbulb, Target, Compass } from "lucide-react";

export default function VisionaryCharter() {
  const sectionRef = useRef(null);
  const revealRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const pillars = [
    {
      title: "Vision",
      Icon: Lightbulb,
      content:
        "To build a disciplined research-driven community that nurtures long-term thinkers, innovators, and academic leaders."
    },
    {
      title: "Mission",
      Icon: Target,
      content:
        "To cultivate consistency, critical thinking, and collaborative research through structured activities and mentorship."
    },
    {
      title: "Objectives",
      Icon: Compass,
      content:
        "To provide students with research exposure, peer learning, academic rigor, and opportunities for real-world impact."
    }
  ];

  /* ===== Reveal on scroll ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (revealRef.current) observer.observe(revealRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== Subtle ambient sparkle ===== */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let lastTime = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 160) return;
      lastTime = now;
      if (Math.random() > 0.45) return;

      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";

      const rect = section.getBoundingClientRect();
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;

      sparkle.style.left = `${e.clientX - rect.left + offsetX}px`;
      sparkle.style.top = `${e.clientY - rect.top + offsetY}px`;

      section.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 500);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="visionary-charter"
      ref={sectionRef}
      className="scroll-mt-24 py-32 relative overflow-hidden bg-[#05877a]"
    >
      {/* ===== Ambient background glows ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-white/10 blur-3xl animate-soft-pulse" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl animate-soft-pulse" />
      </div>

      <div
        ref={revealRef}
        className={`relative max-w-7xl mx-auto px-6 ${
          visible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        {/* ===== Header ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Visionary Charter
          </h2>
          <p className="text-white/90 text-lg">
            The principles that define the purpose, direction, and discipline of
            the Student Research Lab.
          </p>
        </div>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-stretch">

          {/* ===== WHAT IS SRL — SUPER HIGHLIGHTED ===== */}
          <div className="relative lg:col-span-1 rounded-3xl p-8 bg-white border border-white/40 glow-card transition-all duration-300 hover:-translate-y-2">
            {/* Glow halo */}
            <div className="absolute -inset-5 rounded-3xl bg-[#05877a]/30 blur-3xl -z-10" />

            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-[#05877a]" />

            <h3 className="text-2xl font-extrabold text-[#05877a] mb-4 tracking-tight">
              What is SRL?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              The Student Research Lab (SRL) is a focused academic ecosystem for
              students who prioritize consistency, intellectual rigor, and
              long-term research excellence over short-term outcomes.
            </p>

            <div className="mt-6 h-[3px] w-20 bg-[#05877a]/70 rounded-full" />
          </div>

          {/* ===== PILLAR CARDS ===== */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map(({ title, Icon, content }, index) => (
              <div
                key={title}
                style={{
                  animationDelay: visible ? `${index * 160}ms` : "0ms"
                }}
                className={`relative rounded-3xl p-6 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                  visible ? "animate-fade-up" : "opacity-0"
                }`}
              >
                {/* Orbit ring */}
                <div className="orbit-ring" />

                <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white/40 shadow-md mb-4">
                  <Icon className="w-7 h-7 text-[#05877a]" />
                </div>

                <h4 className="relative z-10 text-xl font-semibold text-white mb-2">
                  {title}
                </h4>

                <p className="relative z-10 text-white/90 text-sm leading-relaxed">
                  {content}
                </p>

                <div className="relative z-10 mt-5 h-[2px] w-12 bg-white/60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
