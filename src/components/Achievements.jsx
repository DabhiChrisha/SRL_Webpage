export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-[#05877a] font-semibold">
            Achievements
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-deepgreen">
            Milestones Worth Celebrating
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Highlights from student projects, publications, and awards that
            reflect our growing research culture.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-emerald-100 bg-white/80 p-6 text-left shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-500">Publication</p>
            <h3 className="mt-2 text-lg font-bold text-deepgreen">Peer-reviewed Papers</h3>
            <p className="mt-2 text-sm text-gray-600">
              Students co-authored papers in reputed conferences and journals.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white/80 p-6 text-left shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-500">Recognition</p>
            <h3 className="mt-2 text-lg font-bold text-deepgreen">Awards & Grants</h3>
            <p className="mt-2 text-sm text-gray-600">
              Teams secured grants and awards for impactful research ideas.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white/80 p-6 text-left shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-500">Innovation</p>
            <h3 className="mt-2 text-lg font-bold text-deepgreen">Prototype Showcases</h3>
            <p className="mt-2 text-sm text-gray-600">
              Working prototypes showcased at academic and industry events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
