import { useMemo, useState } from "react";
import students from "../data/srlStudents.json";
import ChromaGrid from "@/components/react-bits/ChromaGrid";

export default function SRLStudentMembers() {
  const [activeStudent, setActiveStudent] = useState(null);

  const chromaItems = useMemo(() => {
    return students.map((s) => ({
      image: s.photo,
      title: s.student_name,
      subtitle: `${s.department} • Semester ${s.semester}`,
      email: s.email,          // ✅ REQUIRED
      linkedin: s.linkedin,    // ✅ REQUIRED
      reflection: s.reflection,// ✅ REQUIRED
      gradient: "linear-gradient(160deg,#064E3B,#000)",
    }));
  }, []);

  return (
    <section className="py-32 bg-[#faf1d5]">
      <div className="max-w-7xl mx-auto px-6">
        <ChromaGrid
          items={chromaItems}
          onImageClick={(s) => s.reflection && setActiveStudent(s)}
        />
      </div>

      {/* MODAL */}
      {activeStudent && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setActiveStudent(null)}
        >
          <div
            className="bg-white max-w-xl rounded-xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">
              {activeStudent.title}
            </h3>
            <p className="italic text-gray-700">
              “{activeStudent.reflection}”
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
