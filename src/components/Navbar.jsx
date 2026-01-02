import { useState, useRef, useEffect } from "react";
import "@fontsource/literata";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const downloadRef = useRef(null);
  const [showDownload, setShowDownload] = useState(false);

  const navLinks = [
    { label: "Visionary Charter", href: "visionary-charter" },
    { label: "Activities", href: "activities" },
    { label: "Students' Leaderboard", href: "students-leaderboard" },
    { label: "Mentors & Members", href: "mentors-members" },
    { label: "Gallery", href: "gallery" },
  ];

  const organizationLogos = [
    { src: "/svkm.png", alt: "SVKM", href: "https://svkm.org.in" },
    { src: "/ksv.png", alt: "KSV University", href: "https://ksv.ac.in/" },
    { src: "/mmpsrpc.png", alt: "MMPSRPC", href: "https://www.mmpsrpc.in/" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const closeAll = () => {
    setShowDownload(false);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (downloadRef.current && !downloadRef.current.contains(event.target)) {
        setShowDownload(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed w-full z-50 top-0 left-0 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-between">
          
          {/* LEFT LOGO & BRANDING - SRL */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 flex items-center justify-center flex-shrink-0">
                <img src="/SRL Logo.svg" alt="SRL" className="h-full w-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm lg:text-lg font-bold tracking-tight" style={{ color: "#1a1a1a", fontFamily: "'Literata', serif" }}>
                  SRL
                </div>
                <div className="text-xs opacity-60" style={{ color: "#1a1a1a", fontFamily: "'Literata', serif" }}>
                  Student Research Lab
                </div>
              </div>
            </a>
          </div>

          <nav className="flex-1">
            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center text-xs lg:text-sm gap-1 lg:gap-2 justify-center">
              {navLinks.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 lg:px-4 py-2 font-medium transition-colors relative"
                  style={{ color: "#333" }}
                >
                  {item.label}
                  <span 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 hover:w-3/4"
                    style={{ backgroundColor: "#05877a" }}
                  ></span>
                </a>
              ))}

              {/* GLOW BUTTON */}
              <div className="ml-4 flex-shrink-0">
                <button 
                  className="glow-btn px-6 py-2.5 rounded-xl font-semibold text-black relative z-10 overflow-hidden"
                  style={{ backgroundColor: "white" }}
                >
                  <span className="relative z-10">ImpactThon @KSV</span>
                  <span className="glow-layer"></span>
                </button>
              </div>
            </div>

            {/* MOBILE ICON */}
            <div className="flex lg:hidden items-center gap-2">
              <button 
                onClick={() => setOpen(!open)} 
                className="p-2 text-2xl transition-colors"
                style={{ color: "#05877a" }}
              >
                {open ? "✕" : "☰"}
              </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
              <div className="absolute right-4 top-full mt-3 bg-white shadow-xl rounded-lg w-72 p-4 border border-gray-100">
                {navLinks.map((item, i) => (
                  <a
                    key={i}
                    href={`#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-3 px-2 hover:bg-gray-50 rounded transition-colors"
                    style={{ color: "#333" }}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-4 pt-4 border-t">
                  <button 
                    className="w-full glow-btn px-6 py-3 rounded-xl font-semibold text-white relative z-10 overflow-hidden"
                    style={{ backgroundColor: "white" }}
                  >
                    <span className="relative z-10">ImpactThon @KSV</span>
                    <span className="glow-layer"></span>
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* RIGHT LOGOS - Organization Logos */}
          <div className="hidden xl:flex items-center gap-2 ml-4 shrink-0">
            {organizationLogos.map((logo, i) => (
              <a
                key={i}
                href={logo.href}
                target={logo.href ? "_blank" : undefined}
                rel={logo.href ? "noopener noreferrer" : undefined}
              >
                <img src={logo.src} className="h-12 object-contain" alt={logo.alt} />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* GLOW ANIMATION STYLES */}
      <style>{`
        @property --a {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes glowSpin {
          to { --a: 1turn; }
        }

        .glow-btn {
          position: relative;
          overflow: hidden;
          z-index: 0;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 0.75rem;
        }

        .glow-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .glow-layer {
          position: absolute;
          inset: -0.7em;
          border-radius: inherit;
          border: solid 0.7em;
          border-image: conic-gradient(
            from var(--a),
            #669900,
            #99cc33,
            #ccee66,
            #006699,
            #3399cc,
            #990066,
            #cc3399,
            #ff6600,
            #ff9900,
            #ffcc00,
            #669900
          ) 1;
          filter: blur(0.6em);
          animation: glowSpin 4s linear infinite;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .glow-btn {
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          }

          .glow-btn:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          }
        }
      `}</style>
    </>
  );
}
