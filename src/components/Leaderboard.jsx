import React from "react";
import { students } from "./students";

export default function Leaderboard() {
  const sorted = [...students].sort((a, b) => b.points - a.points);

  const first = sorted[0];
  const second = sorted[1];
  const third = sorted[2];
  const rest = sorted.slice(3);

  return (
    <section className="bg-gradient-to-b from-cyan-50 to-emerald-50 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-16">
          Research Lab Leaderboard
        </h2>

        {/* Top 3 */}
        <div className="flex justify-center items-end gap-8 mb-20">

          <TopCard student={second} rank={2} />

          <TopCard student={first} rank={1} highlight />

          <TopCard student={third} rank={3} />

        </div>

        {/* Table */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden border border-emerald-100">

          <table className="w-full">
            <thead className="bg-emerald-100/60 text-emerald-700 text-sm">
              <tr>
                <th className="p-5 text-left">Rank</th>
                <th className="p-5 text-left">Student</th>
                <th className="p-5 text-left">Semester</th>
                <th className="p-5 text-right">Points</th>
              </tr>
            </thead>

            <tbody>
              {rest.map((student, index) => (
                <tr
                  key={student.id}
                  className="border-t border-emerald-100 hover:bg-emerald-50/60 transition"
                >
                  <td className="p-5 font-semibold text-emerald-700">
                    #{index + 4}
                  </td>

                  <td className="p-5 flex items-center gap-4">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-10 h-10 rounded-full ring-2 ring-emerald-200"
                    />
                    <span className="font-medium text-gray-800">
                      {student.name}
                    </span>
                  </td>

                  <td className="p-5 text-gray-600">
                    {student.semester}
                  </td>

                  <td className="p-5 text-right font-bold text-emerald-700">
                    {student.points.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </section>
  );
}

function TopCard({ student, rank, highlight }) {
  if (!student) return null;

  const scale =
    rank === 1 ? "scale-125" : "scale-105";

  return (
    <div
      className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 text-center 
      shadow-xl border border-emerald-100 transform ${scale}`}
    >

      {/* Rank Badge */}
      <div
        className={`absolute -top-5 left-1/2 -translate-x-1/2 
        px-4 py-1 rounded-full text-sm font-bold
        ${
          highlight
            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-300"
            : "bg-emerald-100 text-emerald-700"
        }`}
      >
        #{rank}
      </div>

      {/* Avatar */}
      <img
        src={student.image}
        alt={student.name}
        className={`w-20 h-20 mx-auto rounded-full ring-4 
        ${highlight ? "ring-emerald-400" : "ring-emerald-200"}`}
      />

      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {student.name}
      </h3>

      <p className="text-sm text-gray-600">
        {student.semester}
      </p>

      <p
        className={`mt-4 text-2xl font-extrabold
        ${highlight ? "text-emerald-700" : "text-emerald-600"}`}
      >
        {student.points.toLocaleString()}
      </p>

      <p className="text-xs text-gray-500">
        Points
      </p>

      {/* Glow for Rank 1 */}
      {highlight && (
        <div className="absolute inset-0 -z-10 rounded-3xl bg-emerald-300/30 blur-2xl" />
      )}
    </div>
  );
}
