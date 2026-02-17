import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import SRLAppointmentButton from "./SRLAppointmentButton";
import JoinUsButton from "./JoinUsButton";

import ksvLogo from "../assets/KSV Logo.png";
import svkmLogo from "../assets/svkm.png";
import mmpsrpcLogo from "../assets/MMPSRPC Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [navItems]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav
      className={`
        sticky top-0 z-50
        transition-all duration-300
        ${scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* ================= SRL BRAND ================= */}
        <a href="#top" className="flex items-center gap-4 shrink-0">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-20 h-20 rounded-full bg-[#05877a]/30 blur-2xl animate-spin"
              style={{ animationDuration: "14s" }}
            />
            <div className="absolute w-14 h-14 rounded-full bg-[#05877a]/25 blur-lg" />
            <div className="relative z-10 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-xl">
              <img src="/SRL Logo.svg" alt="SRL Logo" className="w-8 h-8" />
            </div>
          </div>

          <div className="hidden sm:block leading-tight whitespace-nowrap">
            <div className="text-lg font-extrabold text-[#05877a]">Student Research Lab</div>
            <div className="text-xs text-gray-500">MMPSRPC, Kadi Sarva Vishwavidyalaya</div>
          </div>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <ul className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`
                    relative
                    text-sm
                    font-medium
                    whitespace-nowrap
                    transition-all duration-300
                    ${isActive ? "text-[#05877a]" : "text-gray-700 hover:text-[#05877a]"}
                    
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:bg-[#05877a]
                    after:transition-all
                    after:duration-300
                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <JoinUsButton />
            <SRLAppointmentButton />
          </div>

          <div className="flex items-center gap-2 opacity-80">
            <a
              href="https://svkm.org.in/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-200 hover:scale-105"
              aria-label="SVKM website"
            >
              <img src={svkmLogo} alt="SVKM Logo" className="h-8" />
            </a>
            <a
              href="https://ksv.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-200 hover:scale-105"
              aria-label="KSV website"
            >
              <img src={ksvLogo} alt="KSV Logo" className="h-8" />
            </a>
            <a
              href="https://www.mmpsrpc.in/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-200 hover:scale-105"
              aria-label="MMPSRPC website"
            >
              <img src={mmpsrpcLogo} alt="MMPSRPC Logo" className="h-8" />
            </a>
          </div>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} className="text-[#05877a]" />
          ) : (
            <Menu size={24} className="text-[#05877a]" />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block py-2 text-sm font-medium ${
                  activeSection === item.id
                    ? "text-[#05877a]"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="px-6 pb-4 flex flex-col gap-3">
            <JoinUsButton />
            <SRLAppointmentButton />
          </div>

          <div className="px-6 pb-5 flex flex-wrap items-center gap-3 opacity-80">
            <a
              href="https://svkm.org.in/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-200 hover:scale-105"
              aria-label="SVKM website"
            >
              <img src={svkmLogo} alt="SVKM Logo" className="h-8" />
            </a>
            <a
              href="https://ksv.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-200 hover:scale-105"
              aria-label="KSV website"
            >
              <img src={ksvLogo} alt="KSV Logo" className="h-8" />
            </a>
            <a
              href="https://www.mmpsrpc.in/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-200 hover:scale-105"
              aria-label="MMPSRPC website"
            >
              <img src={mmpsrpcLogo} alt="MMPSRPC Logo" className="h-8" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
