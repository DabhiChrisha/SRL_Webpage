import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisionaryCharter from "./components/VisionaryCharter";
import Activities from "./components/Activities";
import Leaderboard from "./components/Leaderboard";
import Members from "./components/Members";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ContactUs1 from "./components/mvpblocks/contact-us-1.jsx";

export default function App() {
  return (
    <div className="bg-beige text-deepgreen">
      <Navbar />
      <Hero />
      <VisionaryCharter />
      <Activities />
      <Leaderboard />
      <Members />
      <Gallery />
      <ContactUs1 />
      <Footer />
    </div>
  );
}
