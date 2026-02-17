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
<<<<<<< HEAD
      email: s.email,          // ✅ REQUIRED
      linkedin: s.linkedin,    // ✅ REQUIRED
      reflection: s.reflection,// ✅ REQUIRED
      gradient: "linear-gradient(160deg,#064E3B,#000)",
=======
      email: s.email || "",
      linkedin: s.linkedin || "",
      reflection: s.reflection || "",
      gradient: "linear-gradient(160deg,#fbe8c1,#167d8d)",
>>>>>>> de11257 (chore: save workspace changes)
    }));
  }, []);

  return (
    <section id="srl-student-members" className="py-32 bg-[#faf1d5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
<<<<<<< HEAD
        <ChromaGrid
          items={chromaItems}
          onImageClick={(s) => s.reflection && setActiveStudent(s)}
        />
=======
        {/* Research Assistants — displayed separately */}
        {researchAssistants.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#064E3B] mb-6">Research Assistants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAssistants.map((ra) => (
                <article
                  key={ra.enrollment_no || ra.student_name}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                  aria-label={`Profile card for ${ra.student_name}`}
                >
                  {/* subtle radial accent */}
                  <div className="absolute -inset-10 blur-3xl opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle at 10% 20%, rgba(5,135,122,0.12), transparent 35%)' }} />

                  <div className="relative bg-white/60 backdrop-blur-sm p-6 md:p-8 flex items-center gap-6">
                    <button
                      onClick={() => openModalFor({
                        image: ra.photo,
                        title: ra.student_name,
                        reflection: ra.reflection || "",
                        email: ra.email || "",
                        linkedin: ra.linkedin || "",
                      })}
                      className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-white shadow-md transition-transform duration-300 group-hover:scale-105"
                      aria-label={`Open profile of ${ra.student_name}`}
                    >
                      <img src={ra.photo} alt={ra.student_name} className="w-full h-full object-cover" />
                    </button>

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-[#064E3B]">{ra.student_name}</h3>
                          <div className="text-sm text-gray-600">Research Assistant</div>
                        </div>
                      </div>

                      {ra.reflection && (
                        <p className="mt-3 text-gray-700 text-sm md:text-base line-clamp-3">“{ra.reflection}”</p>
                      )}

                      <div className="mt-4 flex items-center gap-4">
                        {ra.email && (
                          <a href={`mailto:${ra.email}`} className="flex items-center gap-2 text-gray-700 hover:text-[#05877a]">
                            <Mail size={16} />
                            <span className="text-sm">Email</span>
                          </a>
                        )}

                        {ra.linkedin && ra.linkedin.trim() !== "" && (
                          <a href={ra.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-[#05877a]">
                            <Linkedin size={16} />
                            <span className="text-sm">LinkedIn</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* hover border */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#e6f5f2] transition-colors" />
                </article>
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
>>>>>>> de11257 (chore: save workspace changes)
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
<<<<<<< HEAD
=======

      {/* Styles for animations and SRL color palette */}
      <style>{`
        :root{ --srl: #fbe8c1; --mmpsrpc: #167d8d; }

        /* Animated gradient text (uses MMPSRPC and SRL) */
        .animated-gradient-text {
          background: linear-gradient(90deg, var(--mmpsrpc), #064E3B, var(--srl));
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

        /* RA card using SRL (soft) and MMPSRPC (accent) colors */
        .ra-card {
          background: linear-gradient(180deg, rgba(251,232,193,0.6), rgba(251,232,193,0.35));
          border: 1px solid rgba(22,125,141,0.12); /* mmpsrpc subtle */
          transition: box-shadow 220ms ease, transform 220ms ease;
        }

        /* Hover lift and MMPSRPC glow */
        .ra-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 18px 36px rgba(22,125,141,0.12);
        }

        /* Image scale + ring on hover, and gentle shine */
        .ra-img { position: relative; display: inline-block; }
        .ra-img img { transition: transform 300ms cubic-bezier(.2,.9,.3,1); }
        .ra-card:hover .ra-img img { transform: scale(1.06) translateZ(0); }

        .ra-img-shine {
          pointer-events: none;
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.0) 40%);
          transform: translateX(-120%);
          transition: transform 700ms ease;
        }
        .ra-card:hover .ra-img-shine { transform: translateX(20%); }

        /* Content entrance / readability */
        .ra-content { transition: transform 260ms ease, opacity 260ms ease; }
        .ra-card:hover .ra-content { transform: translateY(-4px); }

        .ra-reflection { color: #164e40; }

        /* Subtle focus state */
        .ra-card:focus-within { box-shadow: 0 14px 28px rgba(22,125,141,0.08); outline: none; }

        /* Responsive tweaks */
        @media (max-width: 767px) {
          .ra-img { width: 88px; height: 88px; }
          .ra-card { padding: 1rem; }
        }

        /* Respect user motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .ra-card, .ra-img img, .ra-img-shine, .modal-content, .animated-gradient-text { transition: none !important; animation: none !important; transform: none !important; }
        }

        /* Ensure modal and RA images are circular and crisp */
        .modal-content img, .ra-card img { border-radius: 9999px; }
      `}</style>
>>>>>>> de11257 (chore: save workspace changes)
    </section>
  );
}
