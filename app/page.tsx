"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import DynamicWord from "./components/DynamicWord";

/* ─── Image collage card data (deterministic, no randomness) ─── */
const cards = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    alt: "Friends hanging out at a café",
    className: "float-card-1",
    style: {
      width: "220px",
      height: "310px",
      top: "10%",
      left: "0%",
      zIndex: 1,
      rotate: "-4deg",
    },
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
    alt: "Group of friends laughing together",
    className: "float-card-2",
    style: {
      width: "240px",
      height: "340px",
      top: "5%",
      left: "28%",
      zIndex: 3,
      rotate: "2deg",
    },
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    alt: "People collaborating in a cozy space",
    className: "float-card-3",
    style: {
      width: "210px",
      height: "300px",
      top: "15%",
      left: "58%",
      zIndex: 2,
      rotate: "-1deg",
    },
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FDF8F5]">
      {/* ─── Decorative blobs (deterministic positions) ─── */}
      <div
        className="blob"
        aria-hidden="true"
        style={{
          width: "500px",
          height: "500px",
          top: "-10%",
          right: "-5%",
          background: "rgba(255, 107, 43, 0.12)",
        }}
      />
      <div
        className="blob"
        aria-hidden="true"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-5%",
          left: "-8%",
          background: "rgba(255, 179, 71, 0.1)",
          animationDelay: "3s",
        }}
      />

      {/* ─── Hero Section ─── */}
      <section
        id="hero"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-16 lg:py-0">
          {/* ── Left Column: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-extrabold leading-[1.05] tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Welcome to{" "}
              <DynamicWord />
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-lg">
              Ditch the dating apps. Find your actual crowd in Namma Bengaluru.
              From coffee runs in Indiranagar to chill weekend hangouts, meet
              people who actually match your vibe and cure the big city
              loneliness.
            </p>

            {/* CTA Button */}
            <div>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full
                           bg-foreground text-[#FDF8F5] font-semibold text-base sm:text-lg
                           shadow-lg shadow-foreground/10
                           hover:shadow-xl hover:shadow-foreground/20
                           transition-shadow duration-300 cursor-pointer"
              >
                <Smartphone className="w-5 h-5" />
                Check the beta version
              </motion.a>
            </div>

            {/* Social proof hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-3 mt-2"
            >
              <div className="flex -space-x-2">
                {[
                  "bg-brand-orange",
                  "bg-brand-amber",
                  "bg-orange-300",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-[#FDF8F5] flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {["S", "A", "R"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-muted">
                <span className="font-semibold text-foreground">100+</span>{" "}
                people already vibing in Bengaluru
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Image Collage ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] hidden sm:block"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className={`absolute rounded-3xl overflow-hidden shadow-2xl shadow-black/10 ${card.className}`}
                style={{
                  width: card.style.width,
                  height: card.style.height,
                  top: card.style.top,
                  left: card.style.left,
                  zIndex: card.style.zIndex,
                  rotate: card.style.rotate,
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </div>
            ))}

            {/* Accent dot decoration */}
            <div
              className="absolute w-16 h-16 rounded-full bg-brand-orange/20 blur-xl"
              style={{ bottom: "5%", left: "10%" }}
              aria-hidden="true"
            />
            <div
              className="absolute w-12 h-12 rounded-full bg-brand-amber/25 blur-lg"
              style={{ top: "0%", right: "5%" }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Additional sections can be added below ─── */}
    </main>
  );
}
