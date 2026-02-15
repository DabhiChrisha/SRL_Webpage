// import React, { useState, useEffect } from "react";

// export default function Preloader() {
//   const [showPreloader, setShowPreloader] = useState(false);

//   useEffect(() => {
//     // Show preloader after 2 seconds of page load
//     // This assumes the page should load in less than 2 seconds on normal networks
//     const slowNetworkTimer = setTimeout(() => {
//       setShowPreloader(true);
//     }, 2000);

//     // Hide preloader when page is fully loaded
//     const handlePageLoad = () => {
//       setShowPreloader(false);
//       clearTimeout(slowNetworkTimer);
//     };

//     // Listen for page load completion
//     window.addEventListener("load", handlePageLoad);

//     return () => {
//       clearTimeout(slowNetworkTimer);
//       window.removeEventListener("load", handlePageLoad);
//     };
//   }, []);

//   if (!showPreloader) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-[#f6f9f7] to-[#e8f2ef]">
//       {/* Main loader container */}
//       <div className="flex flex-col items-center gap-6">
//         {/* Spinning circle loader */}
//         <div className="relative w-16 h-16">
//           <div className="absolute inset-0 rounded-full border-4 border-[#e3ede8]"></div>
//           <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-deepgreen border-r-deepgreen animate-spinSlow"></div>
//         </div>

//         {/* Loading text with pulse animation */}
//         <div className="flex flex-col items-center gap-2">
//           <h2 className="text-lg font-semibold text-deepgreen animate-pulseSoft">
//             Loading
//           </h2>
//           <div className="flex gap-1">
//             <span className="w-1 h-1 rounded-full bg-deepgreen animate-pulseSoft"></span>
//             <span className="w-1 h-1 rounded-full bg-deepgreen animate-pulseSoft" style={{ animationDelay: "0.2s" }}></span>
//             <span className="w-1 h-1 rounded-full bg-deepgreen animate-pulseSoft" style={{ animationDelay: "0.4s" }}></span>
//           </div>
//         </div>

//         {/* Progress bar */}
//         <div className="w-48 h-1 bg-[#e3ede8] rounded-full overflow-hidden">
//           <div className="h-full bg-linear-to-r from-transparent via-deepgreen to-transparent animate-loadingBar"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
