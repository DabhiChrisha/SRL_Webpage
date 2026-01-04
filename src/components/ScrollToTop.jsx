import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = docHeight
        ? scrollTop / docHeight
        : 0;

      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative w-16 h-16">

        {/* Outer Ring */}
        <svg className="w-16 h-16 -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#E6EEF2"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#2CB1A1"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Button */}
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="
            absolute inset-0 m-auto
            w-11 h-11
            bg-teal-600
            rounded-full
            flex items-center justify-center
            shadow-md
            hover:bg-teal-700
            transition
          "
          aria-label="Scroll to top"
        >
          {/* Arrow */}
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

      </div>
    </div>
  );
}
