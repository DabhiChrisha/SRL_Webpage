import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ========= IMPORT MEDIA ========= */
import img1 from "../assets/ActivityCards/img-1.jpg";
import img2 from "../assets/ActivityCards/img-2.jpg";
import img3 from "../assets/ActivityCards/img-3.jpg";

import videoThumb1 from "../assets/ActivityCards/video-thumb-1.jpg";
import videoThumb2 from "../assets/ActivityCards/video-thumb-2.jpg";

import video1 from "../assets/ActivityCards/video-1.mp4";
import video2 from "../assets/ActivityCards/video-2.mp4";

/* ========= CONSTANTS ========= */
const CARD_WIDTH = 320;
const CARD_HEIGHT = 360;
const GAP = 40;
const BOTTOM_SPACE = 260;

/* ========= DATA ========= */
const cards = [
  {
    type: "image",
    title: "Research Sessions",
    caption:
      "Structured academic research discussions and innovation.",
    image: img1,
    link: "",
  },
  {
    type: "video",
    caption:
      "Celebrating achievements and milestones.",
    thumbnail: videoThumb2,
    video: video2,
    link: "https://www.linkedin.com/posts/mmpsrpc_ksv-svkm-mmpsrpc-activity-7417800043421843456-rV2a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
  {
    type: "image",
    title: "Peer Learning",
    caption:
      "Collaborative peer-to-peer learning environment.",
    image: img3,
    link: "https://www.linkedin.com/posts/mmpsrpc_ksv-ldrpitr-mmpsrpc-activity-7413814908217344000-JmvS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
  {
    type: "video",
    caption:
      "Students presenting research at IEEE Conference.",
    thumbnail: videoThumb1,
    video: video1,
    link: "https://www.linkedin.com/posts/mmpsrpc_ksv-svkm-mmpsrc-activity-7413813644284682240-u9XF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
  {
    type: "image",
    title: "Technical Workshops",
    caption:
      "Hands-on exposure to modern tools and technologies.",
    image: img2,
    link: "https://www.linkedin.com/posts/mmpsrpc_ksv-researchexcellence-studentachievement-activity-7412352256806920192-MoVv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
];

/* ========= MAIN COMPONENT ========= */
export default function Activities() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => (i === cards.length - 1 ? 0 : i + 1));

  const prev = () =>
    setIndex((i) => (i === 0 ? cards.length - 1 : i - 1));

  /* ========= ⭐ DYNAMIC AUTO SLIDE ========= */
  useEffect(() => {
    const currentCard = cards[index];

    const duration =
      currentCard.type === "video" ? 10000 : 5000;

    const timer = setTimeout(() => {
      next();
    }, duration);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section id="activities" className="bg-white px-16 pt-20 scroll-mt-24">
      <h2 className="text-center text-2xl font-bold mb-16">
        Activities
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
                  <VideoCard
                    item={item}
                    isActive={pos === 0}
                  />
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
        dir === "left" ? "left-[-32px]" : "right-[-32px]"
      } top-1/2 -translate-y-1/2
      w-14 h-14 rounded-full
      border border-gray-300 bg-white
      flex items-center justify-center
      hover:border-gray-500 hover:shadow-md
      transition`}
    >
      {dir === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </button>
  );
}


/* ========= IMAGE CARD ========= */
function ImageCard({ item }) {
  const handleClick = () => {
    if (item.link) {
      window.open(item.link, "_blank");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-[320px] h-[360px] rounded-xl overflow-hidden cursor-pointer"
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

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      onClick={() => item.link && window.open(item.link, "_blank")}
      className="w-[320px] h-[360px] rounded-xl overflow-hidden relative group cursor-pointer"
    >

      <video
        ref={videoRef}
        src={item.video}
        poster={item.thumbnail}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/60 rounded-full p-4 text-white text-3xl">
            ▶
          </div>
        </div>
      )}

      <div
        className="absolute inset-0 bg-black/70 opacity-0
                   group-hover:opacity-100 transition-opacity
                   flex flex-col justify-end"
      >
        <div className="p-5 text-white">
          <p className="text-sm mb-4 line-clamp-4">
            {item.caption}
          </p>
          <span className="font-semibold">Video</span>
        </div>
      </div>
    </div>
  );
}

/* ========= COMMON OVERLAY ========= */
function MediaOverlay({ image, caption, footer }) {
  return (
    <div className="relative w-full h-full group overflow-hidden">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />

      <div
        className="absolute inset-0 bg-black/70 opacity-0
                   group-hover:opacity-100 transition-opacity
                   flex flex-col justify-end"
      >
        <div className="p-5 text-white">
          <p className="text-sm mb-4 line-clamp-4">
            {caption}
          </p>
          {footer}
        </div>
      </div>
    </div>
  );
}
