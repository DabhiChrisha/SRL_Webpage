import React from "react";
import { Home, FileText, Calendar, Users, Image, Download } from "lucide-react";

// Simple bottom dock inspired by reactbits.dev/dock
export default function Dock({ navItems = [], onNavigate = () => {} }) {
  const iconFor = (id) => {
    switch (id) {
      case "visionary-charter":
        return <FileText size={20} />;
      case "activities":
        return <Calendar size={20} />;
      case "students-leaderboard":
        return <Home size={20} />;
      case "srl-student-members":
        return <Users size={20} />;
      case "gallery":
        return <Image size={20} />;
      default:
        return <Download size={20} />;
    }
  };

  return (
    <div className="lg:hidden fixed left-1/2 bottom-4 -translate-x-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full px-3 py-2 flex gap-3 items-center">
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="flex flex-col items-center justify-center text-sm text-gray-700 hover:text-[#05877a] px-3 py-1 rounded-md"
            aria-label={item.label}
          >
            <div className="opacity-95">{iconFor(item.id)}</div>
            <span className="text-xs mt-0.5 hidden">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
