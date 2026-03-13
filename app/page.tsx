"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  UserPlus,
  ShieldCheck,
  MessageCircle,
  ThumbsUp,
  AlertTriangle,
  Mail,
  ArrowRight,
} from "lucide-react";
import DynamicWord from "./components/DynamicWord";

/* ─── Image collage card data (deterministic, no randomness) ─── */
const cards = [
  {
    src: "/cafe.png",
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
    src: "/pizza.png",
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
    src: "/street.png",
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

      {/* ─── Section 1: How It Works ─── */}
      <section className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How it works
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Three simple steps to finding your actual crowd in the city.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 1 Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-surface-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-black/5 flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6">
              <UserPlus className="w-6 h-6 text-brand-orange" />
            </div>
            <h3
              className="text-xl font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              1. Host or Join
            </h3>
            <p className="text-base text-text-secondary leading-relaxed mb-6 flex-grow">
              Got a plan? Create an event and set the spots. Looking for plans?
              Browse HSR or Koramangala and hit Request to Join.
            </p>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-warm text-brand-orange-dark font-semibold text-sm border border-brand-orange/20 hover:bg-brand-orange/10 transition-colors">
              Request to Join
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Step 2 Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-black/5 flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-amber/15 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-brand-orange-dark" />
            </div>
            <h3
              className="text-xl font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              2. The Vibe Check
            </h3>
            <p className="text-base text-text-secondary leading-relaxed flex-grow">
              No weird vibes. Hosts verify requests by checking profiles, past
              pictures, Instagram, and even Spotify playlists.
            </p>
          </motion.div>

          {/* Step 3 Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-black/5 flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6">
              <MessageCircle className="w-6 h-6 text-brand-orange" />
            </div>
            <h3
              className="text-xl font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              3. Chat & Vouch
            </h3>
            <p className="text-base text-text-secondary leading-relaxed flex-grow">
              Join the group chat. Show up, respect the rules, and have fun.
              Attend and vouch for each other to build trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 2: Trust System ─── */}
      <section className="relative z-10 w-full bg-[#1A1A1A] text-[#FDF8F5] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div className="max-w-xl">
              <h2
                className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Keep it Safe. Keep it Nayaab.
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                Our transparent vouching system filters out the rule-breakers.
              </p>
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              The Math Doesn't Lie
            </div>
          </motion.div>

          {/* Compact Stats Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#262626] rounded-2xl p-5 md:p-6 border border-white/5 flex items-center gap-5 hover:border-[#4ADE80] transition-colors"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#4ADE80]/10 flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-[#4ADE80]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  10 Attended, 10 Vouched
                </h4>
                <p className="text-sm text-neutral-400">
                  <strong className="text-[#4ADE80] font-semibold">Absolute legend.</strong> Safe and highly liked.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#262626] rounded-2xl p-5 md:p-6 border border-white/5 flex items-center gap-5 hover:border-[#EF4444] transition-colors"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#EF4444]/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  10 Attended, 2 Vouched
                </h4>
                <p className="text-sm text-neutral-400">
                  <strong className="text-[#EF4444] font-semibold">Major red flag.</strong> Bad vibes = no vouches.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Footer ─── */}
      <footer className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-surface-card w-full max-w-4xl rounded-[2rem] p-10 sm:p-16 shadow-2xl shadow-black/5 border border-black/5 flex flex-col items-center"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to find your crowd?
          </h2>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full
                       bg-brand-orange text-[#FDF8F5] font-semibold text-base sm:text-lg
                       shadow-lg shadow-brand-orange/30
                       hover:shadow-xl hover:shadow-brand-orange/40
                       transition-shadow duration-300 cursor-pointer mb-12"
          >
            <Smartphone className="w-5 h-5" />
            Check the beta version - APK Download
          </motion.a>

          <div className="w-full h-px bg-black/10 mt-4 mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 text-sm text-text-muted">
            <p>Made for Bangalore. © 2026 Nayaab.</p>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>
                Feedback/Bugs:{" "}
                <a
                  href="mailto:hussainsakib44@gmail.com"
                  className="hover:text-brand-orange transition-colors"
                >
                  hussainsakib44@gmail.com
                </a>
                ,{" "}
                <a
                  href="mailto:rohitypatil2004@gmail.com"
                  className="hover:text-brand-orange transition-colors"
                >
                  rohitypatil2004@gmail.com
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
