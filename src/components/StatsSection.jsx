import { useEffect, useRef, useState } from "react";
import { Users, TrendingUp, Zap, CheckCircle } from "lucide-react";
import SplashCursor from "./SplashCursor";

import { db, auth } from "../firebase";
import { signInAnonymously } from "firebase/auth";

import { doc, runTransaction } from "firebase/firestore";

export default function StatsSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const incrementVisitor = async () => {
      // ✅ prevent duplicate increment in same tab lifecycle
      if (sessionStorage.getItem("visitorCounted")) return;

      try {
        // wait for anonymous auth
        if (!auth.currentUser) {
          await signInAnonymously(auth);
        }

        const docRef = doc(db, "stats", "visitors");

        const newCount = await runTransaction(db, async (transaction) => {
          const snap = await transaction.get(docRef);

          if (!snap.exists()) {
            transaction.set(docRef, { count: 1 });
            return 1;
          } else {
            const updated = snap.data().count + 1;
            transaction.update(docRef, { count: updated });
            return updated;
          }
        });

        // mark counted for this tab session
        sessionStorage.setItem("visitorCounted", "true");

        setVisitorCount(newCount);

        setDisplayCounts((prev) => {
          const updated = [...prev];
          updated[0] = newCount;
          return updated;
        });

        console.log("✅ Visitor incremented:", newCount);

      } catch (error) {
        console.error("🔥 Firebase transaction failed:", error);
      }
    };

    incrementVisitor();
  }, []);


  const [visible, setVisible] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [displayCounts, setDisplayCounts] = useState([0, 0, 0, 0]);

  const stats = [
    {
      title: "Total Visitors",
      value: visitorCount,
      icon: TrendingUp,
      color: "from-[#05877a] to-[#046b64]"
    },
    {
      title: "Current Members",
      value: 156,
      icon: Users,
      color: "from-[#0d9488] to-[#059669]"
    },
    {
      title: "Ongoing Projects",
      value: 24,
      icon: Zap,
      color: "from-[#f8e6c1] to-[#f3d5a5]"
    },
    {
      title: "Completed Projects",
      value: 47,
      icon: CheckCircle,
      color: "from-[#10b981] to-[#059669]"
    }
  ];

  // 🔥 Increment Visitor Count (Runs Once Per Load)
  useEffect(() => {
    const incrementVisitor = async () => {
      if (hasIncremented.current) return;
      hasIncremented.current = true;

      try {
        if (!auth.currentUser) {
          await signInAnonymously(auth);
        }

        const docRef = doc(db, "stats", "visitors");

        const newCount = await runTransaction(db, async (transaction) => {
          const snap = await transaction.get(docRef);

          if (!snap.exists()) {
            transaction.set(docRef, { count: 1 });
            return 1;
          } else {
            const updated = snap.data().count + 1;
            transaction.update(docRef, { count: updated });
            return updated;
          }
        });

        setVisitorCount(newCount);

        setDisplayCounts((prev) => {
          const updated = [...prev];
          updated[0] = newCount;
          return updated;
        });

      } catch (error) {
        console.error("Visitor update failed:", error);
      }
    };

    incrementVisitor();
  }, []);

  // Count up animation (skip visitor card)
  useEffect(() => {
    if (!visible) return;

    const intervals = stats.map((stat, idx) => {
      if (idx === 0) return null;

      const increment = Math.ceil(stat.value / 50);

      return setInterval(() => {
        setDisplayCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.value) {
            newCounts[idx] = Math.min(newCounts[idx] + increment, stat.value);
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach((i) => i && clearInterval(i));
  }, [visible]);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative w-full py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#045850] via-[#034d47] to-[#04756b]">
        <SplashCursor />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-white/80 text-lg">
            Measuring the growth and success of our research community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 ${visible ? "opacity-100" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/20">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <p className="text-4xl font-extrabold text-white mb-2">
                  {displayCounts[index].toLocaleString()}
                </p>

                <p className="text-white/90">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
