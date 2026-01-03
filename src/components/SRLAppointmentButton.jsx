export default function SRLAppointmentButton() {
  return (
    <a
      href="https://appointment.mmpsrpc.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:block"
    >
      <button
        type="button"
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
          bg-[#d0a001]
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
          SRL Appointment System
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
            bg-[#987911]
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
            bg-gradient-to-r
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
    </a>
  );
}
