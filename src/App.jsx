import React from "react";
import { Home, Grid3X3, TrendingUp, Users } from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import VisionaryCharter from "./components/VisionaryCharter";
import Activities from "./components/Activities";
import Achievements from "./components/Achievements";
import Leaderboard from "./components/Leaderboard";
import HeadSRL from "./components/HeadSRL";
import SRLStudentMembers from "./components/SRLStudentMembers";
import ContactUs1 from "./components/mvpblocks/contact-us-1";
import ScrollToTop from "./components/ScrollToTop";
import Dock from "./components/Dock";
import StatsSection from "./components/StatsSection";
import AnimatedPreloader from "./components/AnimatedPreloader";
export default function App() {
  const dockItems = [
    { icon: <Home size={20} />, label: 'Visionary', onClick: () => {
      const element = document.getElementById('visionary-charter');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }},
    { icon: <Grid3X3 size={20} />, label: 'Activities', onClick: () => {
      const element = document.getElementById('activities');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }},
    { icon: <TrendingUp size={20} />, label: 'Leaderboard', onClick: () => {
      const element = document.getElementById('students-leaderboard');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }},
    { icon: <Users size={20} />, label: 'Members', onClick: () => {
      const element = document.getElementById('srl-student-members');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }},
  ];
  return (
    <>
    <AnimatedPreloader/>
    <div className="relative min-h-screen text-deepgreen bg-[#f6f9f7]">
      {/* Soft radial light (top) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-225 h-225 bg-[#d5e3dc]/50 rounded-full blur-3xl"></div>

      {/* Gentle side depth */}
      <div className="absolute top-1/3 -right-64 w-175 h-175 bg-[#e3ede8]/60 rounded-full blur-3xl"></div>

      {/* Very subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Ccircle cx=%221%22 cy=%221%22 r=%221%22 fill=%22%23000000%22/%3E%3C/svg%3E')]"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <VisionaryCharter />
        <Activities />
        <Achievements />
        <Leaderboard />
        <HeadSRL />
        <SRLStudentMembers />
        <StatsSection />
        <ContactUs1 />
        <Footer />
        <ScrollToTop />
       
      </div>
      {/* Mobile & Tablet Dock at Bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-transparent w-full flex justify-center">
        <Dock 
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
  </>
  );
}