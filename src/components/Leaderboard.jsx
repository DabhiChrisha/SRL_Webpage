export default function Leaderboard() {
  const data = [
    { rank: 1, name: "Student A", points: 98, area: "AI Research" },
    { rank: 2, name: "Student B", points: 92, area: "Data Analysis" },
    { rank: 3, name: "Student C", points: 88, area: "Systems" }
  ];

  return (
    <section id="students-leaderboard" className="py-16 px-6">
      <h2 className="text-center text-2xl font-bold mb-8">
        Students’ Leaderboard
      </h2>
      <div className="max-w-4xl mx-auto">
        <table className="w-full border border-forest/30 text-sm">
          <thead className="bg-forest text-white">
            <tr>
              <th className="p-3">Rank</th>
              <th>Name</th>
              <th>Points</th>
              <th>Contribution</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.rank}
                className="text-center border-t bg-beige"
              >
                <td className="p-3 font-bold">{row.rank}</td>
                <td>{row.name}</td>
                <td>{row.points}</td>
                <td>{row.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
