import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const CARD_WIDTH = 360;
const CARD_HEIGHT = 400;
const GAP = 48;
const BOTTOM_SPACE = 160;

export default function CardCarousel({ title, cards, sectionId }) {  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => (i === cards.length - 1 ? 0 : i + 1));

  const prev = () =>
    setIndex((i) => (i === 0 ? cards.length - 1 : i - 1));

  // ⭐ dynamic timing
  useEffect(() => {
    const currentCard = cards[index];
    const duration =
      currentCard.type === "video" ? 10000 : 5000;

    const timer = setTimeout(next, duration);
    return () => clearTimeout(timer);
  }, [index, cards]);

  return (
    <section className="bg-white px-16 pt-20" id={sectionId}>      <h2 className="text-center text-2xl font-bold mb-16">
        {title}
      </h2>

      <div className="relative max-w-7xl mx-auto">
        <div
          className="relative flex justify-center overflow-visible"
          style={{ height: CARD_HEIGHT }}
        >
          <Arrow dir="left" onClick={prev} />

          {cards.map((item, i) => {
            const offset =
              (i - index + cards.length) % cards.length;
            const pos =
              offset > cards.length / 2
                ? offset - cards.length
                : offset;

            if (Math.abs(pos) > 1) return null;

            return (
              <motion.div
                key={i}
                animate={{
                  x: pos * (CARD_WIDTH + GAP),
                  scale: pos === 0 ? 1.08 : 0.92,
                  opacity: pos === 0 ? 1 : 0.6,
                  y: pos === 0 ? -20 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  zIndex: pos === 0 ? 10 : 5,
                }}
              >
                {item.type === "image" && (
                  <ImageCard item={item} />
                )}

                {item.type === "video" && (
                  <VideoCard item={item} isActive={pos === 0} />
                )}
              </motion.div>
            );
          })}

          <Arrow dir="right" onClick={next} />
        </div>
      </div>

      <div style={{ height: BOTTOM_SPACE }} />
    </section>
  );
}

/* ========= ARROW ========= */
function Arrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`absolute ${
  dir === "left" ? "-left-8" : "-right-8"
} top-1/2 -translate-y-1/2
w-14 h-14 rounded-full
bg-[#05877a]
flex items-center justify-center
hover:brightness-110 hover:shadow-lg
transition`}

    >
      {dir === "left" ? (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </button>
  );
}

/* ========= IMAGE CARD ========= */
function ImageCard({ item }) {
  return (
    <div
      onClick={() => item.link && window.open(item.link, "_blank")}
      className="w-90 h-100 rounded-xl overflow-hidden cursor-pointer"
    >
      <MediaOverlay
        image={item.image}
        caption={item.caption}
        footer={<span className="font-semibold">{item.title}</span>}
      />
    </div>
  );
}

/* ========= VIDEO CARD ========= */
function VideoCard({ item, isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) video.play().catch(() => {});
    else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      onClick={() => item.link && window.open(item.link, "_blank")}
      className="w-90 h-100 rounded-xl overflow-hidden relative group cursor-pointer"
    >
      {/* 🔥 Blurred background */}
    <img
    src={item.thumbnail}
    alt=""
    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30"
    />

    {/* 🔥 Warm tint */}
    <div className="absolute inset-0 bg-[#FCF5E6]/70"></div>

    {/* ✅ Main video (full visible) */}
    <video
    ref={videoRef}
    src={item.video}
    poster={item.thumbnail}
    muted
    loop
    playsInline
    preload="metadata"
    className="relative w-full h-full object-contain"
    />


      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/60 rounded-full p-4 text-white text-3xl">
            ▶
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end">
        <div
  className="
    p-5 text-white
    transform translate-y-6 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500 ease-out
  "
>
          <p className="text-sm mb-4 line-clamp-4">
            {item.caption}
          </p>
          <span className="font-semibold">Video</span>
        </div>
      </div>
    </div>
  );
}

/* ========= OVERLAY ========= */
function MediaOverlay({ image, caption, footer }) {
  return (
    <div className="relative w-full h-full group overflow-hidden bg-[#F8E6C1]">
      {/* 🔥 Blurred background */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30"
      />

      {/* 🔥 Warm tint overlay */}
      <div className="absolute inset-0 bg-[#FCF5E6]/70"></div>

      {/* ✅ Main sharp image */}
      <img
        src={image}
        alt=""
        className="relative w-full h-full object-contain"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end">
        <div
  className="
    p-5 text-white
    transform translate-y-6 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500 ease-out
  "
>
          <p className="text-sm mb-4 line-clamp-4">{caption}</p>
          {footer}
        </div>
      </div>
    </div>
  );
}


