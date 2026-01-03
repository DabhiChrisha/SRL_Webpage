import { motion } from "framer-motion";
import students from "../data/srlStudents.json";

export default function SRLStudentMembers() {
  /**
   * Business rule:
   * - Anyone with role "Research Assistant" appears in the RA section
   * - EVERYONE appears in Student Members
   */
  const researchAssistants = students.filter(
    (student) => student.roles?.includes("Research Assistant")
  );

  const studentMembers = students; // all students

  return (
    <section
      id="srl-student-members"
      className="relative py-28 bg-[#f8e6c1]/60"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#05877a] mb-6">
            SRL Student Members
          </h2>
          <p className="text-gray-700 text-lg">
            A disciplined community of students contributing to research,
            leadership, and academic excellence.
          </p>
        </motion.div>

        {/* ================= RESEARCH ASSISTANTS ================= */}
        <div className="mb-28">
          <h3 className="text-2xl font-bold text-[#05877a] mb-12 text-center">
            Research Assistants
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {researchAssistants.map((ra, index) => (
              <motion.div
                key={ra.enrollment_no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl p-8 bg-white shadow-[0_30px_60px_rgba(5,135,122,0.25)]"
              >
                {/* Glow accent */}
                <div className="absolute -inset-3 rounded-3xl bg-[#05877a]/20 blur-2xl -z-10" />

                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-[#05877a]/20 flex items-center justify-center text-[#05877a] font-bold text-xl">
                    {ra.student_name.charAt(0)}
                  </div>

                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {ra.student_name}
                    </div>
                    <div className="text-sm text-[#05877a] font-medium">
                      Research Assistant
                    </div>
                    <div className="text-sm text-gray-600">
                      {ra.department} • Semester {ra.semester}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= STUDENT MEMBERS ================= */}
        <div>
          <h3 className="text-2xl font-bold text-[#05877a] mb-12 text-center">
            Student Members
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {studentMembers.map((student, index) => (
              <motion.div
                key={student.enrollment_no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white p-6 text-center shadow-md"
              >
                {/* Avatar */}
                <div className="w-14 h-14 mx-auto rounded-full bg-[#05877a]/20 flex items-center justify-center text-[#05877a] font-semibold mb-4">
                  {student.student_name.charAt(0)}
                </div>

                {/* Name */}
                <div className="font-medium text-gray-800">
                  {student.student_name}
                </div>

                {/* Meta */}
                <div className="text-sm text-gray-600">
                  {student.department} • Sem {student.semester}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
