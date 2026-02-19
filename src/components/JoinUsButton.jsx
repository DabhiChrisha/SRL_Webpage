import { useNavigate } from "react-router-dom";

export default function JoinUsButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/join")}
      className="
        group
        relative
        overflow-hidden
        rounded-full
        px-6
        py-2.5
        text-sm
        font-semibold
        text-white
        bg-[#d4af37]
        shadow-md
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-lg
        active:scale-95
      "
    >
      {/* Button Text */}
      <span className="relative z-20">
        Join Us
      </span>

      {/* Glow Halo */}
      <span
        className="
          absolute
          inset-0
          z-0
          rounded-full
          opacity-0
          blur-xl
          bg-[#d4af37]
          transition-opacity
          duration-300
          group-hover:opacity-40
        "
      />

      {/* Diagonal Shine Sweep */}
      <span
        className="
          absolute
          top-[-150%]
          left-[-150%]
          w-[300%]
          h-[300%]
          z-10
          rotate-45
          bg-linear-to-r
          from-transparent
          via-white/40
          to-transparent
          translate-x-0
          translate-y-0
          transition-transform
          duration-700
          ease-out
          group-hover:translate-x-[50%]
          group-hover:translate-y-[50%]
        "
      />
    </button>
  );
}
