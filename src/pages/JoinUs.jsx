import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import JoinUsForm from "../components/JoinUs";

export default function JoinUs() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
        <div className="pt-20 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <JoinUsForm />
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
