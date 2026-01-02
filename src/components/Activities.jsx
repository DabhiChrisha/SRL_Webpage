export default function Activities() {
  const activities = [
    "Research Sessions",
    "Technical Workshops",
    "Peer Learning",
    "Debates & Discussions",
    "Evaluation & Reviews"
  ];

  return (
    <section id="activities" className="py-16 bg-white px-6">
      <h2 className="text-center text-2xl font-bold mb-10">Activities</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activities.map((act) => (
          <div
            key={act}
            className="border border-forest/30 rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold mb-2">{act}</h3>
            <p className="text-sm text-gray-600">
              Structured academic engagement activity.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
