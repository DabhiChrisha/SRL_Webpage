// ==============================
// SRL_Webpage/src/components/Footer.jsx
// ==============================
export default function Footer() {
  return (
    <footer className="bg-srlGreen text-srlBeige py-8">
      <div className="max-w-7xl mx-auto px-6 text-sm flex justify-between">
        <span>© {new Date().getFullYear()} Student Research Lab</span>
        <span className="text-srlGold">Excellence Through Discipline</span>
      </div>
    </footer>
  );
}
