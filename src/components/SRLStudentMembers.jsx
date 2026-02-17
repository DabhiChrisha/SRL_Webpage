import { useMemo, useState } from "react";
import students from "../data/srlStudents.json";
import ChromaGrid from "@/components/react-bits/ChromaGrid";
import { Mail, Linkedin } from "lucide-react";

export default function SRLStudentMembers() {
  const [activeStudent, setActiveStudent] = useState(null);

  // Prepare sorted students: group by semester (numeric ascending), within each semester sort by name
  const sortedStudents = useMemo(() => {
    const copy = [...students];
    copy.sort((a, b) => {
      const sa = Number(a.semester) || 0;
      const sb = Number(b.semester) || 0;
      if (sa !== sb) return sa - sb;
      return (a.student_name || "").localeCompare(b.student_name || "");
    });
    return copy;
  }, [students]);

  // Separate Research Assistants
  const researchAssistants = useMemo(() => {
    return sortedStudents.filter((s) => (s.roles || []).includes("Research Assistant"));
  }, [sortedStudents]);

  // Members (exclude RAs)
  const members = useMemo(() => {
    return sortedStudents.filter((s) => !(s.roles || []).includes("Research Assistant"));
  }, [sortedStudents]);

  const chromaItems = useMemo(() => {
    return members.map((s) => ({
      image: s.photo,
      title: s.student_name,
      subtitle: `${s.department} • Semester ${s.semester}`,
      email: s.email || "",
      linkedin: s.linkedin || "",
      reflection: s.reflection || "",
      gradient: "linear-gradient(160deg,#064E3B,#05877a)",
    }));
  }, [members]);

  const openModalFor = (s) => setActiveStudent(s);
  const closeModal = () => setActiveStudent(null);

  return (
    <section id="srl-student-members" className="py-16 bg-[#faf1d5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Research Assistants — displayed separately */}
        {researchAssistants.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#064E3B] mb-6">Research Assistants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAssistants.map((ra) => (
                <div
                  key={ra.enrollment_no || ra.student_name}
                  className="flex flex-col md:flex-row items-center gap-6 ra-card rounded-xl p-6 shadow-sm w-full"
                >
                  <button
                    onClick={() => openModalFor({
                      image: ra.photo,
                      title: ra.student_name,
                      reflection: ra.reflection || "",
                      email: ra.email || "",
                      linkedin: ra.linkedin || "",
                    })}
                    className="w-36 h-36 rounded-full overflow-hidden shrink-0"
                    aria-label={`Open profile of ${ra.student_name}`}
                  >
                    <img src={ra.photo} alt={ra.student_name} className="w-full h-full object-cover" />
                  </button>

                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{ra.student_name}</h3>
                        <div className="text-sm text-gray-600">Research Assistant</div>
                      </div>
                    </div>

                    {ra.reflection && (
                      <p className="mt-4 text-gray-700 animated-gradient-text">“{ra.reflection}”</p>
                    )}

                    <div className="mt-4 flex items-center gap-4">
                      {ra.email && (
                        <a href={`mailto:${ra.email}`} className="text-gray-700 hover:text-[#05877a] flex items-center gap-2">
                          <Mail size={18} />
                          <span className="text-sm">Email</span>
                        </a>
                      )}

                      {ra.linkedin && ra.linkedin.trim() !== "" && (
                        <a href={ra.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#05877a] flex items-center gap-2">
                          <Linkedin size={18} />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Members grid (ChromaGrid) */}
        <div>
          <h2 className="text-2xl font-semibold text-[#064E3B] mb-6">Student Members</h2>
          <ChromaGrid
            items={chromaItems}
            onImageClick={(s) => s.reflection && openModalFor(s)}
          />
        </div>
      </div>

      {/* MODAL */}
      {activeStudent && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="modal-content bg-white max-w-3xl w-full rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-100">
              <img src={activeStudent.image} alt={activeStudent.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{activeStudent.title}</h3>
              <p className="mt-4 text-gray-700 animated-gradient-text reflection-anim">“{activeStudent.reflection}”</p>

              <div className="mt-6 flex items-center gap-4">
                {activeStudent.email && (
                  <a href={`mailto:${activeStudent.email}`} className="text-gray-700 hover:text-[#05877a] flex items-center gap-2">
                    <Mail size={18} />
                    <span className="text-sm">Email</span>
                  </a>
                )}

                {activeStudent.linkedin && activeStudent.linkedin.trim() !== "" && (
                  <a href={activeStudent.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#05877a] flex items-center gap-2">
                    <Linkedin size={18} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>

            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
          </div>
        </div>
      )}

      {/* Styles for animations and SRL color palette */}
      <style>{`
        /* Animated gradient text (uses SRL greens) */
        .animated-gradient-text {
          background: linear-gradient(90deg, #05877a, #064E3B, #33a382, #9be5d4);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          animation: gradientShift 6s linear infinite;
          font-weight: 500;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Modal entrance */
        .modal-content {
          transform: translateY(12px) scale(0.98);
          opacity: 0;
          animation: modalIn 220ms cubic-bezier(.2,.9,.3,1) forwards;
        }
        @keyframes modalIn {
          to { transform: none; opacity: 1; }
        }

        /* Reflection subtle slide-up */
        .reflection-anim {
          opacity: 0;
          transform: translateY(6px);
          animation: textUp 420ms ease-out forwards 150ms;
        }
        @keyframes textUp { to { opacity: 1; transform: none; } }

        /* RA card subtle gradient matching SRL brand */
        .ra-card {
          background: linear-gradient(180deg, rgba(5,135,122,0.06), rgba(6,78,59,0.02));
          border: 1px solid rgba(5,135,122,0.08);
        }

        /* Card hover lift */
        .ra-card:hover { transform: translateY(-6px); transition: transform 220ms ease; }

        /* Ensure modal and RA images are circular and crisp */
        .modal-content img, .ra-card img { border-radius: 9999px; }
      `}</style>
    </section>
  );
}
