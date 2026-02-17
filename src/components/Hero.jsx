import heroVideo from "../assets/hero-bg.mp4";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center"
      style={{ backgroundColor: "rgba(5, 135, 122, 0.06)" }} // very light SRL green
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* ================= LEFT: VIDEO ================= */}
        <div className="relative w-full h-70 sm:h-90 lg:h-105 flex items-center justify-center">
          <video
            className="w-full h-full object-contain rounded-2xl shadow-lg"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* ================= RIGHT: TEXT ================= */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#05877a] mb-4 tracking-tight">
            Student Research Lab
          </h1>

          <h2 className="text-lg md:text-xl text-[#05877a]/80 mb-8">
            MMPSRPC · Kadi Sarva Vishwavidyalaya
          </h2>

          {/* Animated tagline */}
          <p
            className="
              text-gray-700
              text-base
              md:text-lg
              leading-relaxed
              max-w-xl
              mx-auto
              lg:mx-0
              animate-fade-up
            "
            style={{ animationDelay: "300ms" }}
          >
            Fostering a disciplined research culture, consistency in academic
            practice, and excellence through collaborative scholarly engagement.
          </p>
        </div>

      </div>
    </section>
  );
}