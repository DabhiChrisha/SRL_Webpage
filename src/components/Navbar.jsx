import { useEffect, useState } from "react";
import SRLAppointmentButton from "./SRLAppointmentButton";
import JoinUsButton from "./JoinUsButton";

import srlLogo from "/SRL Logo.svg";
import ksvLogo from "../assets/KSV Logo.png";
import svkmLogo from "../assets/svkm.png";
import mmpsrpcLogo from "../assets/MMPSRPC Logo.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Visionary Charter", id: "visionary-charter" },
    { label: "Activities", id: "activities" },
    { label: "Achievements", id: "achievements" },
    { label: "Students' Leaderboard", id: "students-leaderboard" },
    { label: "SRL Members", id: "srl-student-members" }
  ];

  // Scroll spy + blur trigger
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll to section on click
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? "bg-[#ffffff] backdrop-blur-lg border-b border-gray-200 shadow-md"
          : "bg-[#ffffff] backdrop-blur-sm shadow-sm"}
      `}
    >
      <div className="w-full mr-3 px-6 h-20 flex items-center justify-start gap-6">

        {/* ================= SRL BRAND ================= */}
        <a
          href="#top"
          className="flex items-center gap-2 sm:gap-3 shrink-0"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("");
          }}
        >
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#fff6e3] drop-shadow-md flex items-center justify-center">
              <img src={srlLogo} alt="SRL Logo" className="w-10 h-10 sm:w-14 sm:h-14" />
            </div>
          </div>

          <div className="block leading-none whitespace-nowrap">
<<<<<<< HEAD
            <div className="text-xs sm:text-sm md:text-lg font-extrabold text-[#05877a]">Students Research Lab </div>
=======
            <div className="text-xs sm:text-sm md:text-lg font-extrabold text-[#05877a]">Students Research Lab</div>
>>>>>>> 898f76015a3d8ba2a6ea4b3150805c8b52d0ac49
            <div className="text-xs text-gray-500">MMPSRPC, Kadi Sarva Vishwavidyalaya</div>
          </div>
        </a>

        <div className="flex-1"></div>

        {/* ================= DESKTOP NAV ================= */}
        <ul className="hidden lg:flex items-center gap-6 justify-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`
                    relative
                    text-sm
                    font-medium
                    whitespace-nowrap
                    transition-all duration-300
                    pb-1
                    ${isActive ? "text-[#05877a]" : "text-gray-700 hover:text-[#05877a]"}
                  `}
                >
                  {item.label}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-0.5
                      bg-[#05877a]
                      transition-all
                      duration-300
                      ${isActive ? "w-full" : "w-0"} hover:w-full
                    `}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <div className="flex items-center gap-3">
            <JoinUsButton />
            <SRLAppointmentButton />
          </div>
<<<<<<< HEAD

          <div className="hidden lg:flex items-center gap-4 border-l border-gray-300 pl-5">
            <a href="https://www.svkm.ac.in/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
=======
          
                    <div className="hidden lg:flex items-center gap-4 border-l border-gray-300 pl-5">
            <a href="https://svkm.org.in/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
>>>>>>> 898f76015a3d8ba2a6ea4b3150805c8b52d0ac49
              <img src={svkmLogo} alt="SVKM Logo" className="h-12 drop-shadow-md" />
            </a>
            <a href="https://www.ksv.ac.in/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <img src={ksvLogo} alt="KSV Logo" className="h-12 drop-shadow-md" />
            </a>
            <a href="https://www.mmpsrpc.in/" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-transform hover:scale-110">
              <img src={mmpsrpcLogo} alt="MMPSRPC Logo" className="h-12 drop-shadow-md" />
            </a>
          </div>
        </div>


      </div>



      {/* ✅ GLOBAL GLOW STYLE */}
      <style>{`
        @property --a {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes glowSpin {
          to { --a: 1turn; }
        }

        @keyframes slow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .glow-btn {
          background: inherit;
          border-radius: 0.75rem;
          position: relative;
          overflow: hidden;
          z-index: 0;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glow-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        .glow-layer {
          position: absolute;
          inset: -0.7em;
          border-radius: inherit;
          border: solid 0.7em;
          border-image: conic-gradient(
            from var(--a),
            #05877a,
            #04725f,
            #06a990,
            #05877a,
            #04725f,
            #05877a
          ) 1;
          filter: blur(0.6em);
          animation: glowSpin 4s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </nav>
  );
}