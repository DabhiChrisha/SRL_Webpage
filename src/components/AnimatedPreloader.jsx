import { useEffect, useState } from "react";
import "./AnimatedPreloader.css";

export default function AnimatedPreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 2.5 seconds (for demo)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader-container">
      {/* Main animated logo background */}
      <div className="preloader-wrapper">
        {/* Outer rotating ring */}
        <div className="rotating-ring ring-outer-1"></div>
        <div className="rotating-ring ring-outer-2"></div>
        <div className="rotating-ring ring-outer-3"></div>

        {/* Center logo */}
        <div className="logo-wrapper">
          <img src="/SRL Logo.svg" alt="SRL Logo" className="animated-logo" />
          {/* Pulse effect */}
          <div className="pulse-ring"></div>
        </div>

        {/* Loading text */}
        <div className="loading-text">
          <span className="dot dot-1">•</span>
          <span className="dot dot-2">•</span>
          <span className="dot dot-3">•</span>
        </div>
      </div>

      {/* Background blur */}
      <div className="preloader-blur"></div>
    </div>
  );
}
