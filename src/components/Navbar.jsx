export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-deepgreen to-forest shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Branding */}
        <a href="#top" className="text-white leading-tight">
          <div className="text-xl font-bold tracking-wide">SRL</div>
          <div className="text-xs opacity-80">Student Research Lab</div>
        </a>

        {/* Right Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-sm text-white">
          {[
            "Visionary Charter",
            "Activities",
            "Students’ Leaderboard",
            "Mentors & Members",
            "Gallery"
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="hover:text-gold transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <span className="bg-gold text-deepgreen px-4 py-2 rounded-md font-semibold">
              ImpactThon @KSV
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
