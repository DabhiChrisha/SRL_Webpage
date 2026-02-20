import { useEffect, useState } from "react";

export default function ResearchBackground() {
    const [offset, setOffset] = useState(0);

    // slow drifting movement
    useEffect(() => {
        const interval = setInterval(() => {
            setOffset(prev => (prev + 1.2) % 170);
        }, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none h-full w-full">

            {/* Soft breathing gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdfa] via-white to-[#f0fdfa]" />

            {/* Floating glow orbs */}
            <div className="absolute w-[500px] h-[500px] bg-[#dbe9e2]/40 rounded-full blur-3xl top-[-150px] left-[20%] animate-float1" />
            <div className="absolute w-[400px] h-[400px] bg-[#e6f1ec]/50 rounded-full blur-3xl bottom-[-120px] right-[10%] animate-float2" />

            {/* Moving SVG Pattern */}
            <svg
                className="absolute w-[200%] h-[200%] opacity-[0.35]"
                style={{ transform: `translate(${-offset}px, ${-offset}px)` }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="researchPattern"
                        width="170"
                        height="170"
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Book */}
                        <rect x="30" y="40" width="50" height="35" rx="4"
                            fill="none" stroke="#bfc8c4" strokeWidth="1.3" />
                        <line x1="55" y1="40" x2="55" y2="75"
                            stroke="#bfc8c4" strokeWidth="1.3" />

                        {/* Laptop */}
                        <rect x="100" y="80" width="50" height="30" rx="3"
                            fill="none" stroke="#bfc8c4" strokeWidth="1.3" />
                        <rect x="95" y="110" width="60" height="6"
                            fill="none" stroke="#bfc8c4" strokeWidth="1.3" />

                        {/* Atom */}
                        <circle cx="70" cy="135" r="12"
                            fill="none" stroke="#bfc8c4" strokeWidth="1.3" />
                        <ellipse cx="70" cy="135" rx="18" ry="7"
                            fill="none" stroke="#bfc8c4" strokeWidth="1.3" />
                        <ellipse cx="70" cy="135" rx="7" ry="18"
                            fill="none" stroke="#bfc8c4" strokeWidth="1.3" />

                        {/* Cap */}
                        <polygon
                            points="140,40 160,48 140,56 120,48"
                            fill="none"
                            stroke="#bfc8c4"
                            strokeWidth="1.3"
                        />

                        {/* Bulb */}
                        <circle cx="40" cy="120" r="10"
                            fill="none" stroke="#bfc8c4" strokeWidth="1.3" />
                        <line x1="40" y1="130" x2="40" y2="138"
                            stroke="#bfc8c4" strokeWidth="1.3" />
                    </pattern>
                </defs>

                <rect width="100%" height="100%" fill="url(#researchPattern)" />
            </svg>
        </div>
    );
}
