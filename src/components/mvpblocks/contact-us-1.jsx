import { Suspense, lazy, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Mail, Linkedin } from "lucide-react";

const Earth = lazy(() => import("../ui/globe"));
const SparklesCore = lazy(() =>
  import("../ui/sparkles").then((module) => ({ default: module.SparklesCore }))
);

export default function ContactUs1() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 bg-background">
      {/* 🌊 Light teal ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-[#05877a]/25 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[550px] w-[550px] rounded-full bg-[#05877a]/20 blur-[180px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-white/10 backdrop-blur-3xl shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT: Contact Info with sparkles */}
            <div
              ref={containerRef}
              className="relative p-6 md:p-10 flex flex-col justify-center gap-12"
            >
              {/* Sparkles behind left content */}
              <Suspense fallback={null}>
                <SparklesCore
                  id="left-sparkles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.2}
                  particleDensity={300}
                  className="absolute inset-0 pointer-events-none"
                  particleColor="#05877a"
                />
              </Suspense>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Get in Touch
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Reach out for collaborations, discussions, or research queries
                </p>
              </motion.div>

              {/* Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="space-y-6 relative z-10"
              >
                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-background/70 p-5 transition shadow-lg hover:shadow-2xl hover:scale-[1.03] backdrop-blur-sm bg-[#e3fffc]"
                >
                  <Linkedin className="h-6 w-6 text-[#05877a]" />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">
                      Connect for research collaboration
                    </p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:researchlab@example.com"
                  className="flex items-center gap-4 rounded-xl bg-background/70 p-5 transition shadow-lg hover:shadow-2xl hover:scale-[1.03] backdrop-blur-sm bg-[#e3fffc]"
                >
                  <Mail className="h-6 w-6 text-[#05877a]" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">
                      researchlab@example.com
                    </p>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* RIGHT: Earth card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative my-8 flex items-center justify-center overflow-hidden pr-8"
            >
              <article className="relative mx-auto h-[350px] max-w-[450px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#05877a] to-[#05877a]/5 p-6 text-3xl tracking-tight text-white md:h-[450px] md:p-8 md:text-4xl lg:text-5xl">
                Advancing knowledge through innovative research.
                <div className="absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-28 md:-bottom-28 md:max-w-[550px]">
                  <Suspense fallback={<div className="h-full w-full" />}>
                    <Earth
                      scale={1.1}
                      baseColor={[0.02, 0.53, 0.48]}
                      markerColor={[0, 0, 0]}
                      glowColor={[0.02, 0.53, 0.48]}
                    />
                  </Suspense>
                </div>
              </article>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
