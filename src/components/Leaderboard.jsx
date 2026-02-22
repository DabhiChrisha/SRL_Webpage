import { useState } from "react";

export default function Leaderboard() {
  const [animateCircles, setAnimateCircles] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);
  const [displayCount, setDisplayCount] = useState(7);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const topStudents = [
    { rank: 2, name: "Nancy Patel", points: 92, area: "Data Analysis", photo: "/students/Nancy.jpeg" },
    { rank: 1, name: "Kandarp Gajjar", points: 98, area: "AI Research", photo: "/students/Kandarp Gajjar.jpeg" },
    { rank: 3, name: "Antra Gajjar", points: 88, area: "Systems", photo: "/students/Gajjar Antra Ashvinkumar.jpeg" }
  ];

  const otherStudents = [
    { rank: 4, name: "Chavda Yashvi Surendrasinh", points: 85, area: "Research", photo: "/students/Chavda Yashvi Surendrasinh.jpeg" },
    { rank: 5, name: "Dabhi Chrisha Manish", points: 84, area: "Development", photo: "/students/Dabhi Chrisha Manish.png" },
    { rank: 6, name: "Devda Rachita Bharatsinh", points: 83, area: "Analysis", photo: "/students/Devda Rachita Bharatsinh.jpeg" },
    { rank: 7, name: "Ghetiya Poojan Rahulbhai", points: 81, area: "Development", photo: "/students/Ghetiya Poojan Rahulbhai.jpeg" },
    { rank: 8, name: "Halvdadiya Rudr", points: 80, area: "Systems", photo: "/students/Halvdadiya Rudr.jpeg" },
    { rank: 9, name: "Heny Patel", points: 79, area: "Research", photo: "/students/Heny Patel.jpeg" },
    { rank: 10, name: "Hetvi Hinsu", points: 78, area: "Development", photo: "/students/Hetvi Hinsu.jpeg" },
    { rank: 11, name: "Honey Modha", points: 77, area: "Analysis", photo: "/students/Honey Modha.jpeg" },
    { rank: 12, name: "Janki Chitroda", points: 76, area: "Research", photo: "/students/Janki Chitroda.jpeg" },
    { rank: 13, name: "Jenish Sorathiya", points: 75, area: "Development", photo: "/students/Jenish Sorathiya.jpeg" },
    { rank: 14, name: "Kanksha Keyur Buch", points: 73, area: "Research", photo: "/students/Kanksha Keyur Buch.jpeg" },
    { rank: 15, name: "Kansara Dev Dharmeshkumar", points: 72, area: "Development", photo: "/students/Kansara Dev Dharmeshkumar.jpeg" },
    { rank: 16, name: "Kanudawala Zeel PareshKumar", points: 71, area: "Analysis", photo: "/students/Kanudawala Zeel PareshKumar.jpeg" },
    { rank: 17, name: "Krishna Bhatt", points: 70, area: "Research", photo: "/students/Krishna Bhatt.jpeg" },
    { rank: 18, name: "Krutika Vijaybhai Patel", points: 69, area: "Development", photo: "/students/Krutika Vijaybhai Patel.jpeg" },
    { rank: 19, name: "Mihir Patel", points: 68, area: "Systems", photo: "/students/Mihir Patel.png" },
    { rank: 20, name: "Padh Charmi Ketankumar", points: 66, area: "Development", photo: "/students/Padh Charmi Ketankumar.jpeg" },
    { rank: 21, name: "Panchal Henit Shaileshbhai", points: 65, area: "Analysis", photo: "/students/Panchal Henit Shaileshbhai.jpeg" },
    { rank: 22, name: "Pande Hemant Rameshwarkumar", points: 64, area: "Research", photo: "/students/Pande Hemant Rameshwarkumar.jpeg" },
    { rank: 23, name: "Pandya Aayush Viral", points: 63, area: "Development", photo: "/students/Pandya Aayush Viral.jpeg" },
    { rank: 24, name: "Parmar Mahi Nitinchandra", points: 62, area: "Systems", photo: "/students/Parmar Mahi Nitinchandra.JPG" },
    { rank: 25, name: "Parva Kumar", points: 61, area: "Research", photo: "/students/Parva Kumar.jpeg" },
    { rank: 26, name: "Patel Banshari Rahulkumar", points: 60, area: "Development", photo: "/students/Patel Banshari Rahulkumar.jpeg" },
    { rank: 27, name: "Patel Jainee Hasmukhbhai", points: 59, area: "Analysis", photo: "/students/Patel Jainee Hasmukhbhai.jpeg" },
    { rank: 28, name: "Patel Krish Himanshu", points: 58, area: "Research", photo: "/students/Patel Krish Himanshu.jpeg" },
    { rank: 29, name: "Pragati Varu", points: 57, area: "Development", photo: "/students/Pragati Varu.jpeg" },
    { rank: 30, name: "Prem Raichura", points: 56, area: "Systems", photo: "/students/Prem Raichura.jpeg" },
    { rank: 31, name: "Ridham Patel", points: 55, area: "Research", photo: "/students/Ridham Patel.png" },
    { rank: 32, name: "Rohan Thakar", points: 54, area: "Development", photo: "/students/Rohan Thakar.png" },
    { rank: 33, name: "Yajurshi Velani", points: 52, area: "Research", photo: "/students/Yajurshi Velani.png" },
    { rank: 34, name: "Yash Kumavat", points: 51, area: "Development", photo: "/students/Yash Kumavat.jpeg" },
    { rank: 35, name: "Zenisha Devani", points: 50, area: "Systems", photo: "/students/Zenisha Devani.jpeg" }
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

    @keyframes glow {
      0%, 100% { box-shadow: 0 0 25px rgba(5, 135, 122, 0.7); }
      50% { box-shadow: 0 0 40px rgba(5, 135, 122, 1); }
    }

    @keyframes pulse-ring {
      0% { box-shadow: 0 0 0 0 rgba(5, 135, 122, 0.7); }
      50% { box-shadow: 0 0 0 10px rgba(5, 135, 122, 0); }
      100% { box-shadow: 0 0 0 0 rgba(5, 135, 122, 0); }
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

    @keyframes slideUpPoints {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideDownPoints {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(40px);
      }
    }

    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }

    @keyframes shimmerFast {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    @keyframes shimmerBg {
      0% { background-position: 0 0, -200% 0; }
      50% { background-position: 0 0, 0% 0; }
      100% { background-position: 0 0, 200% 0; }
    }

    .points-overlay {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(255, 253, 253, 0.44) 0%, rgba(255, 255, 255, 0.57) 100%);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      backdrop-filter: blur(4px);
    }

    .top-student-card .points-overlay {
      animation: slideDownPoints 0.4s ease-out forwards;
      border-radius: inherit;
    }

    .top-student-card:hover .points-overlay {
      opacity: 1;
      animation: slideUpPoints 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .points-text {
      font-size: 2rem;
      font-weight: 700;
      color: white;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      pointer-events: none;
    }

    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 16px rgba(5, 135, 122, 0.7), inset 0 0 10px rgba(5, 135, 122, 0.4), 0 0 30px rgba(255, 255, 255, 0.4); }
      50% { box-shadow: 0 0 32px rgba(5, 135, 122, 0.95), inset 0 0 16px rgba(5, 135, 122, 0.6), 0 0 48px rgba(255, 255, 255, 0.6); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-16px); }
    }

    @keyframes borderGlow {
      0%, 100% { border-color: rgba(5, 135, 122, 0.3); box-shadow: 0 0 0 0 rgba(5, 135, 122, 0);
      }
      50% { border-color: rgba(5, 135, 122, 0.6); box-shadow: 0 0 12px rgba(5, 135, 122, 0.3); }
    }

    @keyframes rankPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes haloGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(5, 135, 122, 0.4), inset 0 0 20px rgba(5, 135, 122, 0.1); }
      50% { box-shadow: 0 0 0 15px rgba(5, 135, 122, 0), inset 0 0 30px rgba(5, 135, 122, 0.2); }
    }

    @keyframes rotateBadge {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(3deg); }
    }

    @keyframes shimmerText {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }

    @keyframes cascadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes shadowBreathe {
      0%, 100% { box-shadow: 0 4px 15px rgba(5, 135, 122, 0.2), 0 0 0 0 rgba(5, 135, 122, 0); }
      50% { box-shadow: 0 12px 35px rgba(5, 135, 122, 0.35), 0 0 20px rgba(5, 135, 122, 0.15); }
    }

    .leaderboard-header {
      position: relative;
      padding-bottom: 2rem;
      border-bottom: 2px solid rgba(5, 135, 122, 0.15);
      margin-bottom: 3rem;
    }

    .leaderboard-header::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #05877a, transparent);
    }

    .top-section-label {
      position: relative;
      text-align: center;
      margin-bottom: 2rem;
      margin-top: 1rem;
    }

    .top-section-label::before,
    .top-section-label::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 40px;
      height: 1px;
      background: linear-gradient(90deg, rgba(5, 135, 122, 0.3), transparent);
    }

    .top-section-label::before {
      left: 0;
    }

    .top-section-label::after {
      right: 0;
      background: linear-gradient(90deg, transparent, rgba(5, 135, 122, 0.3));
    }

    .rank-badge-circle {
      position: relative;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #05877a, #04725f);
      border-radius: 50%;
      font-weight: 800;
      color: white;
      margin-bottom: 1rem;
      box-shadow: 0 4px 15px rgba(5, 135, 122, 0.3);
      animation: rankPulse 2s ease-in-out infinite, rotateBadge 4s ease-in-out infinite;
    }

    .rank-badge-circle::before {
      content: '';
      position: absolute;
      inset: -6px;
      border: 2px solid rgba(5, 135, 122, 0.2);
      border-radius: 50%;
      animation: borderGlow 2s ease-in-out infinite;
    }

    .top-student-card {
      animation: slideInUp 0.6s ease-out forwards, float 3s ease-in-out infinite;
    }

    .top-student-card:hover .rank-medal {
      transform: scale(1.2) rotate(-10deg);
    }

    .circle-avatar {
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      box-shadow: 0 10px 30px rgba(5, 135, 122, 0.2);
    }

    .circle-avatar::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
      pointer-events: none;
    }

    .circle-avatar:hover {
      transform: scale(1.15);
      box-shadow: 0 0 35px rgba(5, 135, 122, 0.8);
      animation: glow 1.5s ease-in-out;
    }

    .circle-avatar:active {
      animation: clickPulse 0.3s ease-out, ripple 0.6s ease-out;
    }

    .student-name {
      font-weight: 700;
      letter-spacing: -0.5px;
      position: relative;
      display: inline-block;
      background: linear-gradient(135deg, #05877a 0%, #04725f 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid rgba(5, 135, 122, 0.1);
    }

    .top-student-card .student-name {
      background: linear-gradient(90deg, #05877a, #04725f, #05877a, #04725f, #05877a);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmerText 3s ease-in-out infinite;
    }

    .student-name:hover {
      border-bottom-color: rgba(5, 135, 122, 0.4);
      transition: border-color 0.3s ease;
    }

    .student-points {
      font-weight: 600;
      font-size: 1.125rem;
      background: linear-gradient(135deg, #05877a 0%, #04725f 100%);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      background-color: rgba(5, 135, 122, 0.1);
    }

    .progress-bar {
      animation: fillBar 0.8s ease-out forwards, glow-pulse 1.3s ease-in-out infinite, shimmerBg 1.3s linear infinite;
      transition: all 0.3s ease;
      background-image: 
        linear-gradient(90deg, #05877a 0%, #048e81 50%, #04725f 100%),
        linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
      background-size: 100% 100%, 200% 100%;
      background-position: 0 0, -200% 0;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 14px rgba(5, 135, 122, 0.7);
    }

    .progress-bar::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      height: 100%;
      width: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
      animation: shimmer 1s infinite;
    }

    .progress-bar::before {
      content: '';
      position: absolute;
      top: -150%;
      left: -150%;
      width: 300%;
      height: 300%;
      z-index: 10;
      transform: rotate(45deg);
      background: linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent);
      transition: all 0.5s ease-out;
      pointer-events: none;
      opacity: 0;
      box-shadow: 0 0 16px rgba(255,255,255,0.5);
    }

    @keyframes shimmerBg {
      0% { background-position: 0 0, -200% 0; }
      50% { background-position: 0 0, 0% 0; }
      100% { background-position: 0 0, 200% 0; }
    }

    .performer-row:hover .progress-bar::before {
      opacity: 1;
      transform: rotate(45deg) translateX(100%) translateY(100%);
    }

    .performer-row {
      position: relative;
      animation: slideInUp 0.6s ease-out forwards, shadowBreathe 3s ease-in-out infinite;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      border: 2px solid rgba(5, 135, 122, 0.15);
      border-radius: 16px;
      cursor: pointer;
      background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(5, 135, 122, 0.02) 100%);
      backdrop-filter: blur(10px);
      overflow: hidden;
    }

    .performer-row:nth-child(1) { animation-delay: 0s, 0s; }
    .performer-row:nth-child(2) { animation-delay: 0.05s, 0s; }
    .performer-row:nth-child(3) { animation-delay: 0.1s, 0s; }
    .performer-row:nth-child(4) { animation-delay: 0.15s, 0s; }
    .performer-row:nth-child(5) { animation-delay: 0.2s, 0s; }
    .performer-row:nth-child(6) { animation-delay: 0.25s, 0s; }
    .performer-row:nth-child(7) { animation-delay: 0.3s, 0s; }
    .performer-row:nth-child(8) { animation-delay: 0.35s, 0s; }
    .performer-row:nth-child(9) { animation-delay: 0.4s, 0s; }
    .performer-row:nth-child(10) { animation-delay: 0.45s, 0s; }
    .performer-row:nth-child(n+11) { animation-delay: calc(0.05s * (var(--n) - 1)), 0s; }

    .performer-row::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(180deg, rgba(5, 135, 122, 0.5) 0%, transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .performer-row:hover::before {
      opacity: 1;
      box-shadow: 0 0 12px rgba(5, 135, 122, 0.6);
    }

    .performer-row:hover {
      background: linear-gradient(135deg, rgba(5, 135, 122, 0.08) 0%, rgba(5, 135, 122, 0.04) 100%);
      border-color: rgba(5, 135, 122, 0.4);
      box-shadow: 0 8px 24px rgba(5, 135, 122, 0.15);
      transform: translateX(6px) translateY(-2px);
    }

    .performer-row:active {
      animation: rowPopOut 0.4s ease-out forwards;
      background-color: rgba(5, 135, 122, 0.12);
      box-shadow: 0 6px 16px rgba(5, 135, 122, 0.3);
    }

    .performer-row:hover .progress-bar {
      box-shadow: 0 0 32px rgba(5, 135, 122, 0.95), inset 0 0 16px rgba(5, 135, 122, 0.6), 0 0 48px rgba(255, 255, 255, 0.6);
    }

    .performer-row:hover .progress-bar::after {
      animation: shimmer 0.5s infinite;
    }

    .performer-row:hover .progress-bar::before {
      opacity: 1;
      transform: rotate(45deg) translateX(100%) translateY(100%);
      animation: shimmerFast 1s ease-out;
    }

    .rank-badge {
      transition: all 0.3s ease;
      cursor: pointer;
      font-weight: 700;
      box-shadow: 0 4px 12px rgba(5, 135, 122, 0.25);
    }

    .performer-row:hover .rank-badge {
      transform: scale(1.2);
      box-shadow: 0 0 15px rgba(5, 135, 122, 0.6);
    }

    .performer-row:active .rank-badge {
      animation: clickPulse 0.3s ease-out;
    }

    .student-photo {
      border: 3px solid rgba(5, 135, 122, 0.2);
      box-shadow: 0 4px 12px rgba(5, 135, 122, 0.1);
      transition: all 0.3s ease;
    }

    .performer-row:hover .student-photo {
      box-shadow: 0 6px 16px rgba(5, 135, 122, 0.2);
    }

  `;

  return (
    <>
      <style>{styles}</style>

      <section id="students-leaderboard" className="relative w-full overflow-visible py-16 px-6 pb-40">
        {/* 🌊 Light teal ambient background with smooth fade */}
        <div className="pointer-events-none absolute inset-0 -bottom-20">
          <div className="absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-[#05877a]/25 blur-[160px]" />
          <div className="absolute -bottom-32 -right-32 h-[550px] w-[550px] rounded-full bg-[#05877a]/15 blur-[180px]" />
          {/* Gradient fade to white for seamless blend */}
          <div className="absolute -bottom-20 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#05877a]/3 to-white" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-in">
              <span className="bg-gradient-to-r from-[#05877a] to-[#04725f] bg-clip-text text-transparent">
                Students' Leaderboard
              </span>
            </h2>
            <p className="text-center text-gray-600 text-lg animate-slide-in">
              Celebrating excellence, dedication & outstanding achievements
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#05877a] to-[#04725f] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* TOP 3 */}
          <div className="flex justify-center gap-12 mb-16 flex-wrap items-end">
            {topStudents.map((student, index) => (
              <div
                key={student.rank}
                className={`flex flex-col items-center top-student-card relative group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Rank Medal */}
                <div className="mb-4 text-sm font-bold text-[#05877a]">Rank #{student.rank}</div>

                <div
                  className={`rounded-full overflow-hidden 
                flex items-center justify-center circle-avatar relative border-4 border-[#05877a] ${index === 1 ? "w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56" : "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                    }`}
                >
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="text-white font-bold ${index === 1 ? 'text-7xl' : 'text-5xl'}">${student.name.charAt(0).toUpperCase()}</span>`;
                    }}
                  />
                  {/* Points Overlay */}
                  <div className="points-overlay rounded-full">
                    <span className="points-text">{student.points} pts</span>
                  </div>
                </div>

                <h3
                  className={`mt-8 font-bold text-center student-name ${index === 1 ? "text-2xl" : "text-xl"
                    }`}
                >
                  {student.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2 font-medium">
                  {student.area}
                </p>
              </div>
            ))}
          </div>

          {/* OTHER STUDENTS */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                🌟 Top Performers
              </h3>
              <p className="text-gray-600">Ranked by achievement and contribution</p>
            </div>

            <div className="space-y-3">
              {otherStudents.slice(0, displayCount).map((student, index) => {
                const percentage = student.points;

                return (
                  <div
                    key={student.rank}
                    className="flex items-center gap-4 performer-row px-5 py-4 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="rank-badge bg-gradient-to-br from-[#05877a] to-[#04725f] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {student.rank}
                    </span>

                    <img
                      src={student.photo}
                      alt={student.name}
                      className="student-photo w-12 h-12 rounded-full object-cover flex-shrink-0"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 truncate text-sm md:text-base">
                        {student.name}
                      </h4>
                      <p className="text-xs text-gray-500">{student.area}</p>
                    </div>

                    <div className="flex-1 min-w-[120px]">
                      <div className="bg-gray-200 rounded-full h-8 overflow-hidden shadow-inner border border-gray-300">
                        <div
                          className="progress-bar bg-gradient-to-r from-[#05877a] to-[#04725f] h-full rounded-full flex items-center justify-end pr-3 font-bold text-white text-xs transition-all duration-300"
                          style={{
                            width: `${percentage}%`,
                            "--bar-width": `${percentage}%`
                          }}
                        >
                          {percentage > 20 && student.points}
                        </div>
                      </div>
                    </div>

                    <div className="w-20 text-right flex-shrink-0">
                      <p className="text-[#05877a] font-bold text-sm">
                        {student.points} pts
                      </p>
                    </div>
                  </div>
                );
              })}

              {displayCount < otherStudents.length && !isCollapsing && (
                <button
                  onClick={() => {
                    const newCount = Math.min(displayCount + 10, otherStudents.length);
                    setDisplayCount(newCount);
                    if (newCount >= otherStudents.length) {
                      setIsCollapsing(true);
                    }
                    setTimeout(() => {
                      window.scrollBy({ top: 300, behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full py-6 flex flex-col items-center justify-center gap-2 text-center hover:bg-gray-50 transition-colors duration-300 rounded-lg group cursor-pointer"
                >
                  <span className="text-[#05877a] font-semibold text-lg group-hover:text-[#04725f] transition-colors">
                    See more
                  </span>
                  <svg className="w-4 h-4 text-[#05877a]/60 group-hover:text-[#05877a] transition-colors transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              )}

              {(displayCount >= otherStudents.length || isCollapsing) && displayCount > 7 && (
                <button
                  onClick={() => {
                    const newCount = displayCount >= otherStudents.length ? displayCount - 5 : Math.max(7, displayCount - 10);
                    setDisplayCount(newCount);
                    if (newCount <= 7) {
                      setIsCollapsing(false);
                    }
                    setTimeout(() => {
                      window.scrollBy({ top: -300, behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full py-6 flex flex-col items-center justify-center gap-2 text-center hover:bg-gray-50 transition-colors duration-300 rounded-lg group cursor-pointer"
                >
                  <span className="text-[#05877a] font-semibold text-lg group-hover:text-[#04725f] transition-colors">
                    See less
                  </span>
                  <svg className="w-4 h-4 text-[#05877a]/60 group-hover:text-[#05877a] transition-colors transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}