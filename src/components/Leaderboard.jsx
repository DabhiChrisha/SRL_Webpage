import { useState } from "react";

export default function Leaderboard() {
  const [animateCircles, setAnimateCircles] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);

  const topStudents = [
    { rank: 2, name: "Nancy Patel", points: 92, area: "Data Analysis" },
    { rank: 1, name: "Kandarp Gajjar", points: 98, area: "AI Research" },
    { rank: 3, name: "Antra Gajjar", points: 88, area: "Systems" }
  ];

  const otherStudents = [
    { rank: 4, name: "Dabhi Chrisha", points: 85, area: "Research" },
    { rank: 5, name: "Aayush Pandya", points: 82, area: "Development" },
    { rank: 6, name: "Mahi Parmar", points: 80, area: "Analysis" },
    { rank: 7, name: "Pragati Varu", points: 78, area: "Research" },
    { rank: 8, name: "Yash Kumavat", points: 76, area: "Development" },
    { rank: 9, name: "Rudr Halvadiya", points: 74, area: "Systems" },
    { rank: 10, name: "Student G", points: 72, area: "Research" }
  ];

  const styles = `
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fillBar {
      from { width: 0; }
      to { width: var(--bar-width); }
    }

    @keyframes crownBounce {
      0%, 100% { transform: translateX(-50%) rotate(-22deg) translateY(0); }
      50% { transform: translateX(-50%) rotate(-22deg) translateY(-8px); }
    }

    @keyframes glow {
      0%, 100% { box-shadow: 0 0 25px rgba(5, 135, 122, 0.7); }
      50% { box-shadow: 0 0 40px rgba(5, 135, 122, 1); }
    }

    @keyframes clickPulse {
      0% { transform: scale(1); }
      50% { transform: scale(0.95); }
      100% { transform: scale(1); }
    }

    @keyframes rowPopOut {
      0% { transform: scale(1) translateX(4px); }
      50% { transform: scale(1.05) translateX(8px); }
      100% { transform: scale(1.05) translateX(8px); }
    }

    @keyframes ripple {
      0% { box-shadow: 0 0 0 0 rgba(5, 135, 122, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(5, 135, 122, 0); }
      100% { box-shadow: 0 0 0 0 rgba(5, 135, 122, 0); }
    }

    @keyframes cardClick {
      0% { transform: translateY(-12px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(-12px); }
    }

    .animate-slide-in {
      animation: slideInUp 0.6s ease-out forwards;
    }

    .top-student-card {
      animation: slideInUp 0.6s ease-out forwards;
      transition: all 0.4s ease;
      cursor: pointer;
    }

    .top-student-card:hover {
      transform: translateY(-12px);
    }

    .top-student-card:active {
      animation: cardClick 0.4s ease-in-out;
    }

    .circle-avatar {
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .circle-avatar:hover {
      transform: scale(1.12);
      box-shadow: 0 0 35px rgba(5, 135, 122, 0.8);
      animation: glow 1.5s ease-in-out;
    }

    .circle-avatar:active {
      animation: clickPulse 0.3s ease-out, ripple 0.6s ease-out;
    }

    .progress-bar {
      animation: fillBar 0.8s ease-out forwards;
      transition: all 0.3s ease;
    }

    .performer-row {
      animation: slideInUp 0.6s ease-out forwards;
      transition: all 0.3s ease;
      border: 1px solid rgba(5, 135, 122, 0.25);
      border-radius: 10px;
      cursor: pointer;
    }

    .performer-row:hover {
      background-color: rgba(5, 135, 122, 0.08);
      border-color: rgba(5, 135, 122, 0.5);
      box-shadow: 0 4px 12px rgba(5, 135, 122, 0.15);
      transform: translateX(4px);
    }

    .performer-row:active {
      animation: rowPopOut 0.4s ease-out forwards;
      background-color: rgba(5, 135, 122, 0.12);
      box-shadow: 0 6px 16px rgba(5, 135, 122, 0.3);
    }

    .performer-row:hover .progress-bar {
      box-shadow: 0 0 15px rgba(5, 135, 122, 0.5);
    }

    .rank-badge {
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .performer-row:hover .rank-badge {
      transform: scale(1.15);
      box-shadow: 0 0 15px rgba(5, 135, 122, 0.6);
    }

    .performer-row:active .rank-badge {
      animation: clickPulse 0.3s ease-out;
    }

    /* 👑 Crown – moved MORE to the left */
    .crown-wrapper {
      position: absolute;
      top: -34px;
      left: 38%;
      transform: translateX(-50%) rotate(-22deg);
      font-size: 26px;
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.25));
      z-index: 10;
      transition: all 0.3s ease;
    }

    .top-student-card:hover .crown-wrapper {
      animation: crownBounce 0.8s ease-in-out;
      filter: drop-shadow(0 4px 10px rgba(5, 135, 122, 0.5));
    }

    .crown-wrapper.first {
      font-size: 34px;
      top: -46px;
      left: 37%;
      transform: translateX(-50%) rotate(-18deg);
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <section id="students-leaderboard" className="py-16 px-6">
        <h2 className="text-center text-4xl font-bold mb-4 animate-slide-in bg-gradient-to-r from-[#05877a] to-[#04725f] bg-clip-text text-transparent">
          Students' Leaderboard
        </h2>
        <p className="text-center text-gray-600 mb-12 animate-slide-in">
          Top Contributors and Achievers
        </p>

        {/* TOP 3 */}
        <div className="flex justify-center gap-12 mb-12 flex-wrap items-center">
          {topStudents.map((student, index) => (
            <div
              key={student.rank}
              className="flex flex-col items-center top-student-card relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* 👑 Crown ABOVE & MORE LEFT */}
              <span
                className={`crown-wrapper ${
                  student.rank === 1 ? "first" : ""
                }`}
              >
                👑
              </span>

              <div
                className={`rounded-full overflow-hidden border-4 border-[#05877a] shadow-lg 
                bg-gradient-to-br from-[#05877a] to-[#04725f] 
                flex items-center justify-center circle-avatar
                ${index === 1 ? "w-48 h-48" : "w-32 h-32"}`}
              >
                <span
                  className={`text-white font-bold ${
                    index === 1 ? "text-7xl" : "text-5xl"
                  }`}
                >
                  {student.name.charAt(0).toUpperCase()}
                </span>
              </div>

              <h3
                className={`mt-6 font-bold text-center text-gray-800 ${
                  index === 1 ? "text-xl" : "text-lg"
                }`}
              >
                {student.rank}. {student.name}
              </h3>
              <p className="text-[#05877a] font-semibold text-lg">
                {student.points} pts
              </p>
              <p className="text-gray-500 text-sm">
                {student.area}
              </p>
            </div>
          ))}
        </div>

        {/* OTHER STUDENTS */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 animate-slide-in">
            🏆 Top Performers
          </h3>

          <div className="space-y-4">
            {otherStudents.map((student, index) => {
              const percentage = student.points;

              return (
                <div
                  key={student.rank}
                  className="flex items-center gap-4 performer-row px-4 py-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="rank-badge bg-gradient-to-br from-[#05877a] to-[#04725f] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shadow-md">
                    {student.rank}
                  </span>

                  <div className="w-36 font-semibold text-gray-800 truncate">
                    {student.name}
                  </div>

                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-full h-9 overflow-hidden">
                      <div
                        className="progress-bar bg-gradient-to-r from-[#05877a] to-[#04725f] h-full rounded-full flex items-center justify-end pr-3 font-bold text-white"
                        style={{
                          width: `${percentage}%`,
                          "--bar-width": `${percentage}%`
                        }}
                      >
                        {student.points}
                      </div>
                    </div>
                  </div>

                  <div className="w-24 text-right">
                    <p className="text-[#05877a] font-bold text-sm">
                      {student.points} pts
                    </p>
                    <p className="text-gray-500 text-xs">
                      {student.area}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}