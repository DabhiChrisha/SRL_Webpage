import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import VisionaryCharter from "./components/VisionaryCharter";
import Activities from "./components/Activities";
import Leaderboard from "./components/Leaderboard";
import Members from "./components/Members";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-beige text-deepgreen">
      <Hero />
      <VisionaryCharter />
      <Activities />
      <Leaderboard />
      <Members />
      <Gallery />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* add a Curator route if you have one */}
          {/* <Route path="curators" element={<Curator />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
