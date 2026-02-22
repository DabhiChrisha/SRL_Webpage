import { Suspense, lazy, useMemo, useState } from "react";
import students from "../data/srlStudents.json";
import { Mail, Linkedin } from "lucide-react";
import GradientText from "./GradientText";

const ChromaGrid = lazy(() => import("./react-bits/ChromaGrid"));

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
      researchWorks: s.researchWorks || [],
      // Provide sensible default research areas when not present in JSON
      research: (s.research && s.research.length > 0)
        ? s.research
        : (s.department && String(s.department).toLowerCase().includes("it"))
          ? ["AI/ML", "NLP", "Deep Learning"]
          : (s.department && String(s.department).toLowerCase().includes("ce"))
            ? ["Embedded Systems", "IoT", "Computer Vision"]
            : ["AI/ML", "Deep Learning", "Computer Vision"],
      achievements: s.achievements || [],
      gradient: "linear-gradient(160deg,#fbe8c1,#167d8d)",
    }));
  }, [members]);

  const openModalFor = (s) => setActiveStudent(s);
  const closeModal = () => setActiveStudent(null);

  return (
    <section id="srl-student-members" className="py-16 sm:py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Research Assistants — displayed separately */}
        {researchAssistants.length > 0 && (
          <div className="mb-12">
            <div className="mb-8 flex justify-center">
              <GradientText
                colors={["#0b3d3a", "#c9a24d", "#0b3d3a", "#0b3d3a"]}
                animationSpeed={3}
                showBorder={false}
                animateOnHover={true}
                className="text-4xl sm:text-5xl font-merriweather font-bold px-4 py-2"
              >
                Research Assistants
              </GradientText>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {researchAssistants.map((ra) => (
                <article
                  key={ra.enrollment_no || ra.student_name}
                  className="group relative overflow-hidden rounded-2xl shadow-lg ra-card"
                  aria-label={`Profile card for ${ra.student_name}`}
                >
                  {/* subtle radial accent */}
                  <div
                    className="absolute -inset-10 blur-3xl opacity-30 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 10% 20%, rgba(5,135,122,0.12), transparent 35%)" }}
                  />

                  <div className="relative bg-white/60 backdrop-blur-sm p-5 sm:p-6 md:p-8 flex items-center gap-4 sm:gap-6">
                    <button
                      onClick={() => openModalFor({
                        image: ra.photo,
                        title: ra.student_name,
                        reflection: ra.reflection || "",
                        email: ra.email || "",
                        linkedin: ra.linkedin || "",
                        researchWorks: ra.researchWorks || [],
                        research: ra.research || [],
                        achievements: ra.achievements || [],
                      })}
                      className="relative rounded-full overflow-hidden ring-2 ring-white shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0"
                      aria-label={`Open profile of ${ra.student_name}`}
                      style={{ width: 100, height: 100, minWidth: 100 }}
                    >
                      <div className="ra-img w-full h-full relative">
                        <div className="img-aspect w-full h-full">
                          <img src={ra.photo} alt={ra.student_name} className="w-full h-full object-contain" />
                        </div>
                        <div className="ra-img-shine" aria-hidden="true" />
                      </div>
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#064E3B]">{ra.student_name}</h3>
                          <div className="text-xs sm:text-sm text-gray-600">Research Assistant</div>
                        </div>
                      </div>

                      {ra.reflection && (
                        <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm line-clamp-3">"{ra.reflection}"</p>
                      )}

                      <div className="mt-3 sm:mt-4 flex items-center gap-3 flex-wrap">
                        {ra.email && (
                          <a href={`mailto:${ra.email}`} className="flex items-center gap-2 text-gray-700 hover:text-[#05877a] text-xs sm:text-sm">
                            <Mail size={14} className="shrink-0" />
                            <span>Email</span>
                          </a>
                        )}

                        {ra.linkedin && ra.linkedin.trim() !== "" && (
                          <a href={ra.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-[#05877a] text-xs sm:text-sm">
                            <Linkedin size={14} className="shrink-0" />
                            <span>LinkedIn</span>
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
          <div className="mb-8 flex justify-center">
            <GradientText
              colors={["#0b3d3a", "#c9a24d", "#0b3d3a", "#0b3d3a"]}
              animationSpeed={3}
              showBorder={false}
              animateOnHover={true}
              className="text-4xl sm:text-5xl font-merriweather font-bold px-4 py-2"
            >
              Student Members
            </GradientText>
          </div>
          <Suspense fallback={<div className="min-h-[240px]" />}>
            <ChromaGrid items={chromaItems} onImageClick={(s) => s.reflection && openModalFor(s)} />
          </Suspense>
        </div>
      </div>

      {/* MODAL */}
      {activeStudent && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeModal}>
          <div className="modal-content bg-white max-w-3xl w-full rounded-xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-100 mx-auto md:mx-0">
              <div className="img-aspect w-full h-full">
                <img src={activeStudent.image} alt={activeStudent.title} className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{activeStudent.title}</h3>
              <p className="mt-4 text-gray-700 animated-gradient-text reflection-anim">“{activeStudent.reflection}”</p>

              {/* Research area / projects */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#064E3B] mb-2">Research Areas:</h4>
                {activeStudent.research && activeStudent.research.length > 0 ? (
                  <ul className="modal-list text-sm text-gray-700 list-inside list-disc space-y-2">
                    {activeStudent.research.map((r, idx) => (
                      <li key={idx}>{typeof r === 'string' ? r : (r.title || r.name)}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600">No research listed yet.</p>
                )}
              </div>

              {/* Research works */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-[#064E3B] mb-2">Research Works</h4>
                {activeStudent.researchWorks && activeStudent.researchWorks.length > 0 ? (
                  <ul className="modal-list text-sm text-gray-700 list-inside list-disc space-y-2">
                    {activeStudent.researchWorks.map((r, idx) => (
                      <li key={idx}>
                        {typeof r === 'string' ? r : (r.title || r.name) + (r.year ? ` — ${r.year}` : '')}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600">No research works listed yet.</p>
                )}
              </div>

              {/* Achievements */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#064E3B] mb-2">Achievements</h4>
                {activeStudent.achievements && activeStudent.achievements.length > 0 ? (
                  <ul className="modal-list text-sm text-gray-700 list-inside list-disc space-y-2">
                    {activeStudent.achievements.map((a, idx) => (
                      <li key={idx}>{typeof a === 'string' ? a : (a.title || a.name)}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600">No achievements listed yet.</p>
                )}
              </div>

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

            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" aria-label="Close profile">✕</button>
          </div>
        </div>
      )}

      {/* Styles for animations and SRL/MMPSRPC colors */}
      <style>{`
        :root{ --srl: #fbe8c1; --mmpsrpc: #167d8d; }

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

        .modal-content {
          transform: translateY(12px) scale(0.98);
          opacity: 0;
          animation: modalIn 220ms cubic-bezier(.2,.9,.3,1) forwards;
        }
        @keyframes modalIn { to { transform: none; opacity: 1; } }

        .reflection-anim { opacity: 0; transform: translateY(6px); animation: textUp 420ms ease-out forwards 150ms; }
        @keyframes textUp { to { opacity: 1; transform: none; } }

        .ra-card { background: linear-gradient(180deg, rgba(251,232,193,0.6), rgba(251,232,193,0.35)); border: 1px solid rgba(22,125,141,0.12); transition: box-shadow 220ms ease, transform 220ms ease; }
        .ra-card:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 18px 36px rgba(22,125,141,0.12); }

        .ra-img { position: relative; display: inline-block; }
        .ra-img img { transition: transform 300ms cubic-bezier(.2,.9,.3,1); }
        .ra-card:hover .ra-img img { transform: scale(1.06) translateZ(0); }

        .ra-img-shine { pointer-events: none; position: absolute; inset: 0; background: linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.0) 40%); transform: translateX(-120%); transition: transform 700ms ease; }
        .ra-card:hover .ra-img-shine { transform: translateX(20%); }

        .ra-content { transition: transform 260ms ease, opacity 260ms ease; }
        .ra-card:hover .ra-content { transform: translateY(-4px); }

        .ra-reflection { color: #164e40; }
        .ra-card:focus-within { box-shadow: 0 14px 28px rgba(22,125,141,0.08); outline: none; }

        @media (max-width: 767px) { .ra-img { width: 88px; height: 88px; } .ra-card { padding: 1rem; } }
        @media (prefers-reduced-motion: reduce) { .ra-card, .ra-img img, .ra-img-shine, .modal-content, .animated-gradient-text { transition: none !important; animation: none !important; transform: none !important; } }

        .modal-content img, .ra-card img { border-radius: 9999px; }

        .modal-list { margin: 0.25rem 0 0 1rem; }
        .modal-list li { margin-bottom: 0.35rem; }
      `}</style>
    </section>
  );
}
