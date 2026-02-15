import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Mail, Linkedin } from "lucide-react";

const ChromaGrid = ({ items, onImageClick }) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: 0.45,
      ease: "power3.out",
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.2 });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: 0.6 });
  };

  // 👉 per-card mouse tracking for spotlight
  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5"
    >
      {items.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          className="group relative rounded-xl overflow-hidden opacity-80 hover:opacity-100 transition"
          style={{ background: c.gradient }}
        >
          {/* 🔥 RADIAL HOVER SPOTLIGHT */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background:
                "radial-gradient(180px circle at var(--mx) var(--my), rgba(255,255,255,0.35), transparent 65%)",
            }}
          />

          {/* IMAGE CLICK → MODAL */}
          <div
            className="relative z-10 p-2 cursor-pointer"
            onClick={() => onImageClick?.(c)}
          >
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-[140px] object-cover rounded-lg"
            />
          </div>

          {/* TEXT */}
          <div className="relative z-10 px-3 pb-3 text-white">
            <h3 className="text-sm font-semibold">{c.title}</h3>
            <p className="text-xs opacity-85">{c.subtitle}</p>

            {/* ICONS */}
            <div className="mt-2 flex gap-3">
              {c.email && (
                <a
                  href={`mailto:${c.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="hover:scale-110 transition"
                >
                  <Mail size={16} />
                </a>
              )}
              {c.linkedin && (
                <a
                  href={c.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:scale-110 transition"
                >
                  <Linkedin size={16} />
                </a>
              )}
            </div>
          </div>
        </article>
      ))}

      {/* subtle global dim (unchanged) */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "brightness(0.9)",
          WebkitBackdropFilter: "brightness(0.9)",
        }}
      />
    </div>
  );
};

export default ChromaGrid;
