import { useEffect, useRef, useState } from "react";
import { Lightbulb, Target, Compass } from "lucide-react";

export default function VisionaryCharter() {
  const revealRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const pillars = [
    {
      title: "Vision",
      icon: Lightbulb,
      text:
        "To build a disciplined research-driven community that nurtures long-term thinkers and academic leaders."
    },
    {
      title: "Mission",
      icon: Target,
      text:
        "To cultivate consistency, critical thinking, and collaborative research through structured activities and mentorship."
    },
    {
      title: "Objectives",
      icon: Compass,
      text:
        "To provide students with research exposure, peer learning, academic rigor, and opportunities for real-world impact."
    }
  ];

  /* Reveal once on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (revealRef.current) observer.observe(revealRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="visionary-charter"
      className="relative py-32 overflow-hidden bg-linear-to-br from-[#05877a]/95 via-[#05877a]/85 to-[#05877a]/95"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-160 h-160 rounded-full bg-white/10 blur-3xl animate-soft-pulse" />
        <div className="absolute bottom-0 right-0 w-lg h-128 rounded-full bg-[#f8e6c1]/10 blur-3xl animate-soft-pulse" />
      </div>

      <div
        ref={revealRef}
        className={`relative max-w-7xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#f8e6c1] mb-6">
            Visionary Charter
          </h2>
          <p className="text-[#f8e6c1]/90 text-lg">
            The principles that define the purpose, discipline, and direction of
            the Student Research Lab.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-stretch">
          {/* WHAT IS SRL */}
          <div className="relative lg:col-span-1 rounded-4xl p-8 bg-white/95 backdrop-blur-xl shadow-[0_40px_80px_rgba(5,135,122,0.35)] animate-float">
            <div className="absolute -inset-4 rounded-4xl bg-[#05877a]/30 blur-2xl -z-10" />

            <h3 className="text-2xl font-extrabold text-[#05877a] mb-4">
              What is SRL?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              The Student Research Lab (SRL) is a focused academic ecosystem for
              students who prioritize discipline, consistency, and intellectual
              rigor in research and scholarly pursuits.
            </p>

            <div className="mt-8 h-0.75 w-20 bg-[#05877a]/70 rounded-full" />
          </div>

          {/* Pillar Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className={`relative group ${
                    visible ? "animate-fade-up" : "opacity-0"
                  }`}
                >
                  {/* ===== SPARKLES OUTSIDE CARD ===== */}
                  <div className="sparkle-orbit slow">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span key={i} className="sparkle-point" />
                    ))}
                  </div>

                  <div className="sparkle-orbit fast">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span key={i} className="sparkle-point soft" />
                    ))}
                  </div>

                  {/* ===== CARD ITSELF (CLEAN) ===== */}
                  <div className="relative rounded-4xl p-7 bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 rounded-full bg-white/50 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-[#05877a]" />
                    </div>

                    <h4 className="text-xl font-semibold text-[#f8e6c1] mb-3">
                      {item.title}
                    </h4>

                    <p className="text-[#f8e6c1]/90 text-sm leading-relaxed">
                      {item.text}
                    </p>

                    <div className="mt-6 h-0.5 w-12 bg-[#f8e6c1]/60" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
