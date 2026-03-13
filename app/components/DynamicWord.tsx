"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [
  { text: "Nayaab", lang: "en" },
  { text: "ನಯಾಬ್", lang: "kn" },
  { text: "نایاب", lang: "ur" },
];

export default function DynamicWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[180px] sm:min-w-[280px] lg:min-w-[320px] text-left align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index].text}
          lang={words[index].lang}
          dir={words[index].lang === "ur" ? "rtl" : "ltr"}
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -28, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="gradient-text absolute left-0 whitespace-nowrap"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {words[index].text}
        </motion.span>
      </AnimatePresence>
      {/* Invisible sizer to reserve space */}
      <span className="invisible">Nayaab</span>
    </span>
  );
}
