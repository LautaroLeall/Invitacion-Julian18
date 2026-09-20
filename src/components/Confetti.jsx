import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const colors = ["#f0b90b", "#ffd84d", "#1c3f8c", "#132f70", "#f5f0e2"];

export default function Confetti() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const newPieces = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      color: colors[i % colors.length],
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 7,
      opacity: (0.45 + Math.random() * 0.5).toFixed(2),
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-10vh", rotate: 0 }}
          animate={{ y: "118vh", rotate: 320 }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 rounded-[1px]"
          style={{
            left: p.left,
            background: p.color,
            width: "0.6vmin",
            height: "1.1vmin",
            minWidth: "5px",
            minHeight: "9px",
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
