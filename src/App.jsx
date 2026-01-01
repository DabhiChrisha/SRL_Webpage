import React from "react";

/*
  App.jsx
  Single-page professional academic website
  Tech: React + Tailwind CSS
*/

export default function App() {
  // Utility function for smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#f8f5f0] text-gray-900 font-sans scroll-smooth">
      {/* ================= Navbar ================= */}
      <nav className="sticky top-0 z-50 bg-emerald-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex flex-col text-left"
            >
              <span className="text-2xl font-bold text-amber-100 leading-none">
                SRL
              </span>
              <span className="text-xs tracking-wide text-amber-200">
                Student Research Lab
              </span>
            </button>

            {/* Navigation */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <button
                onClick={() => scrollToSection("vision")}
                className="text-amber-100 hover:text-amber-300 transition"
              >
                Visionary Charter
              </button>
              <button
                onClick={() => scrollToSection("activities")}
                className="text-amber-100 hover:text-amber-300 transition"
              >
                Activities
              </button>
              <button
                onClick={() => scrollToSection("leaderboard")}
                className="text-amber-100 hover:text-amber-300 transition"
              >
                Students’ Leaderboard
              </button>
              <button
                onClick={() => scrollToSection("people")}
                className="text-amber-100 hover:text-amber-300 transition"
              >
                Mentors & Members
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-amber-100 hover:text-amber-300 transition"
              >
                Gallery
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= Hero Section ================= */}
      <section
        id="hero"
        className="min-h-[80vh] flex items-center justify-center px-6"
      >
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-emerald-900 mb-4">
            Student Research Lab
          </h1>
          <p className="text-lg text-emerald-800 mb-3">
            MMPSRPC, KSV
          </p>
          <p className="text-gray-700 leading-relaxed">
            A disciplined academic ecosystem fostering research culture,
            consistency, and sustained pursuit of academic excellence.
          </p>
        </div>
      </section>

      {/* ================= Visionary Charter ================= */}
      <section id="vision" className="py-20 bg-[#f2ede6]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-emerald-900 text-center mb-12">
            Visionary Charter
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white border border-emerald-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                Vision
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Establish a strong undergraduate research culture</li>
                <li>Encourage academic rigor and intellectual depth</li>
                <li>Develop future-oriented researchers</li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white border border-emerald-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                Mission
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Enable structured and consistent research engagement</li>
                <li>Promote collaborative and ethical inquiry</li>
                <li>Support continuous academic improvement</li>
              </ul>
            </div>

            {/* Objectives */}
            <div className="bg-white border border-emerald-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                Objectives
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Strengthen analytical and technical competencies</li>
                <li>Encourage disciplined learning practices</li>
                <li>Recognize merit through measurable outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Activities ================= */}
      <section id="activities" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-emerald-900 text-center mb-12">
            Activities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Research Sessions", "Structured exploration of academic problems"],
              ["Technical Workshops", "Hands-on development of core skills"],
              ["Peer Learning", "Collaborative student-driven learning"],
              ["Debates & Discussions", "Analytical discourse and reasoning"],
              ["Evaluation & Reviews", "Continuous academic assessment"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white border border-emerald-100 rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-semibold text-emerald-800 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Leaderboard ================= */}
      <section id="leaderboard" className="py-20 bg-[#f2ede6]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-emerald-900 text-center">
            Students’ Leaderboard
          </h2>
          <p className="text-center text-gray-700 mt-2 mb-10">
            Performance and Merit Visibility
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-emerald-800 text-amber-100">
                  <th className="p-3 text-left">Rank</th>
                  <th className="p-3 text-left">Student Name</th>
                  <th className="p-3 text-left">Points</th>
                  <th className="p-3 text-left">Contribution Area</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [1, "Student A", 980, "Research"],
                  [2, "Student B", 940, "Technical"],
                  [3, "Student C", 900, "Peer Learning"],
                  [4, "Student D", 850, "Debates"],
                  [5, "Student E", 820, "Documentation"],
                ].map(([rank, name, points, area]) => (
                  <tr
                    key={rank}
                    className={`border-b ${
                      rank <= 3 ? "bg-amber-50 font-medium" : "bg-white"
                    }`}
                  >
                    <td className="p-3">{rank}</td>
                    <td className="p-3">{name}</td>
                    <td className="p-3">{points}</td>
                    <td className="p-3">{area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= Mentors & Members ================= */}
      <section id="people" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-emerald-900 text-center mb-12">
            Mentors, Research Assistants & Members
          </h2>

          {[
            ["Mentors", ["Dr. Alpha", "Dr. Beta"]],
            ["Research Assistants", ["RA One", "RA Two", "RA Three"]],
            ["Members", ["Member A", "Member B", "Member C", "Member D"]],
          ].map(([section, people]) => (
            <div key={section} className="mb-14">
              <h3 className="text-xl font-semibold text-emerald-800 mb-6">
                {section}
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {people.map((person) => (
                  <div
                    key={person}
                    className="bg-white border border-emerald-100 rounded-lg p-4 flex items-center space-x-4 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-800 text-amber-100 flex items-center justify-center font-semibold">
                      {person
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{person}</p>
                      <p className="text-xs text-gray-600">{section}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Gallery ================= */}
      <section id="gallery" className="py-20 bg-[#f2ede6]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-emerald-900 text-center mb-12">
            Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-40 bg-white border border-dashed border-emerald-300 rounded-lg flex items-center justify-center text-sm text-gray-600"
              >
                Session Image
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="bg-emerald-900 py-6">
        <p className="text-center text-amber-100 text-sm">
          © Student Research Lab – MMPSRPC, KSV
        </p>
      </footer>
    </div>
  );
}
