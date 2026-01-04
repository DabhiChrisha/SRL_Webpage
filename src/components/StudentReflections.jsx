import { useEffect, useState } from "react";

export default function StudentReflections() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // CHANGE PATH ONLY IF YOUR JSON LOCATION IS DIFFERENT
    fetch("/srlStudents.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter only students who have reflections
        const withReflections = data.filter(
          (student) => student.reflection && student.reflection.trim() !== ""
        );
        setStudents(withReflections);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load SRL student reflections", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative py-24 bg-[#0b0f0e] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight">
            Student Reflections
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            How being part of SRL reshaped the way students think, research, and execute.
          </p>
        </div>

        {/* Animated Container */}
        <div className="relative h-[420px] overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              Loading reflections…
            </div>
          ) : students.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              No reflections available yet.
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col gap-6 animate-scroll-up hover:[animation-play-state:paused]">
              {[...students, ...students].map((student, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
                >
                  <p className="text-gray-200 leading-relaxed">
                    “{student.reflection}”
                  </p>

                  <div className="mt-4">
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-400">
                      {student.branch} · {student.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fade Effects */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0b0f0e] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0b0f0e] to-transparent" />
    </section>
  );
}
