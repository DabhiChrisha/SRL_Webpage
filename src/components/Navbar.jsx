import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Visionary Charter",
    "Activities",
    "Students' Leaderboard",
    "Mentors & Members",
    "Gallery"
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left Branding */}
        <a href="#top" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#05877a" }}>
            <span className="text-lg font-bold text-white">S</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-bold tracking-tight" style={{ color: "#05877a" }}>
              SRL
            </div>
            <div className="text-xs opacity-60" style={{ color: "#05877a" }}>
              Student Research Lab
            </div>
          </div>
        </a>

        {/* Center Navigation - Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-100"
                style={{ 
                  color: "#333",
                  fontWeight: "500"
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA Button - Desktop */}
        <div className="hidden lg:block flex-shrink-0">
          <button 
            className="px-6 py-2.5 rounded-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#05877a" }}
          >
            ImpactThon @KSV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
        >
          {isOpen ? (
            <X size={24} style={{ color: "#05877a" }} />
          ) : (
            <Menu size={24} style={{ color: "#05877a" }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item} className="border-b border-gray-100">
                <a
                  href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="p-4">
              <button 
                className="w-full px-6 py-2.5 rounded-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: "#05877a" }}
              >
                ImpactThon @KSV
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
