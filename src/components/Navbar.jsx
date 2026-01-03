import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import SRLAppointmentButton from "./SRLAppointmentButton";

import srlLogo from "../assets/SRL Logo.png";
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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* ================= SRL BRAND ================= */}
        <a href="#top" className="flex items-center gap-4 shrink-0">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-20 h-20 rounded-full bg-[#05877a]/30 blur-2xl"
              style={{ animation: "slow-spin 14s linear infinite" }}
            />
            <div className="absolute w-14 h-14 rounded-full bg-[#05877a]/25 blur-lg" />
            <div className="relative z-10 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-xl">
              <img src={srlLogo} alt="SRL Logo" className="w-8 h-8" />
            </div>
          </div>

          <div className="hidden sm:block leading-tight whitespace-nowrap">
            <div className="text-lg font-extrabold text-[#05877a]">SRL</div>
            <div className="text-xs text-gray-500">Student Research Lab</div>
          </div>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <ul className="hidden lg:flex items-center gap-8 flex-1 justify-center">
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
                    after:h-[2px]
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
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <div className="flex items-center gap-3 opacity-80">
            <img src={svkmLogo} alt="SVKM Logo" className="h-9" />
            <img src={ksvLogo} alt="KSV Logo" className="h-9" />
            <img src={mmpsrpcLogo} alt="MMPSRPC Logo" className="h-9" />
          </div>

          <SRLAppointmentButton />
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
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
        <div className="lg:hidden bg-white border-t border-gray-200">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block px-6 py-3 text-sm font-medium ${
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
      )}
    </nav>
  );
}
