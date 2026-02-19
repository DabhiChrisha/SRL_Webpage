import CircularFramework from "./CircularFramework";
import VisionaryPillarCards from "./VisionaryPillarCards";
import TreeBackground from "./TreeBackground";

export default function VisionaryCharter() {
  return (
    <section id="visionary-charter" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">

      {/* Tree Animated Background */}
      <TreeBackground noise={0} />

      {/* === Content Wrapper === */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side - Circular Framework */}
        <CircularFramework />

        {/* Right Side - Structured Content */}
        <div className="w-full relative z-10">
          <VisionaryPillarCards />
        </div>
      </div>
    </section>
  );
}
