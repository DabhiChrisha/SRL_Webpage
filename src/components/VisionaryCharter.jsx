export default function VisionaryCharter() {
  const items = [
    {
      title: "Vision",
      points: [
        "Cultivate academic research mindset",
        "Promote innovation and inquiry"
      ]
    },
    {
      title: "Mission",
      points: [
        "Enable structured student research",
        "Encourage interdisciplinary learning"
      ]
    },
    {
      title: "Objectives",
      points: [
        "Regular research discussions",
        "Scholarly output and publications",
        "Ethical academic practice"
      ]
    }
  ];

  return (
    <section id="visionary-charter" className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-lg shadow p-6 border-t-4 border-forest"
          >
            <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
