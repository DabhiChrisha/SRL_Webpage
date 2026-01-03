import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import VisionaryCharter from "./components/VisionaryCharter";
import Activities from "./components/Activities";
import Leaderboard from "./components/Leaderboard";
import HeadSRL from "./components/HeadSRL";
import SRLStudentMembers from "./components/SRLStudentMembers";
import ContactUs1 from "./components/mvpblocks/contact-us-1";



export default function App() {
  return (
    <div className="bg-beige text-deepgreen">
      <Navbar />
      <Hero />
      <VisionaryCharter />
      <Activities />
      <Leaderboard />
      <HeadSRL />
      <SRLStudentMembers />
      <ContactUs1 />
      <Footer />
    </div>
  );
}

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           {/* add a Curator route if you have one */}
//           {/* <Route path="curators" element={<Curator />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
