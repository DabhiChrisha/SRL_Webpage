import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import VisionaryCharter from "./components/VisionaryCharter";
import Activities from "./components/Activities";
import Leaderboard from "./components/Leaderboard";
import HeadSRL from "./components/HeadSRL";
import SRLStudentMembers from "./components/SRLStudentMembers";
import ContactUs1 from "./components/mvpblocks/contact-us-1";

// ❌ REMOVE THIS IMPORT
// import ChromaGrid from "/components/react-bits/ChromaGrid";

export default function App() {
  return (
    <div className="bg-beige text-deepgreen">
      <Navbar />
      <Hero />
      <VisionaryCharter />
      <Activities />
      <Leaderboard />
      <HeadSRL />
      <SRLStudentMembers /> {/* ChromaGrid lives here */}
      <ContactUs1 />
      <Footer />
    </div>
  );
}
