"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smartphone,
  UserPlus,
  ShieldCheck,
  MessageCircle,
  ThumbsUp,
  AlertTriangle,
  Mail,
  ArrowRight,
  Instagram,
  Music,
} from "lucide-react";
import DynamicWord from "./components/DynamicWord";
import Link from "next/link";

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
      left: "-5%",
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
      left: "20%",
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
      left: "50%",
      zIndex: 2,
      rotate: "-1deg",
    },
  },
];

/* ─── Twinkling background grid images (hydration-safe, no Math.random) ─── */
const gridImages = [
  { src: "/grid1.jpg", duration: 5, delay: 0 },
  { src: "/grid2.jpg", duration: 6, delay: 1.5 },
  { src: "/grid3.jpg", duration: 4.5, delay: 0.8 },
  { src: "/grid4.jpg", duration: 7, delay: 2.2 },
  { src: "/grid5.jpg", duration: 4, delay: 0.3 },
  { src: "/grid6.jpg", duration: 5.5, delay: 2.8 },
  { src: "/grid7.jpg", duration: 6.5, delay: 1.2 },
  { src: "/grid8.jpg", duration: 4.8, delay: 0.5 },
];

export default function Home() {
  const { scrollY } = useScroll();
  const yBack = useTransform(scrollY, (value) => value * 0.05);
  const yFront = useTransform(scrollY, (value) => value * -0.05);

  /* ── How it Works carousel state ── */
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#FDF8F5]">
      {/* ─── Editorial Film Grain Texture ─── */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── Sticky Navbar ─── */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDF8F5]/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nayaab
          </Link>
          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-foreground text-white text-sm font-semibold rounded-full shadow-sm"
          >
            Download Beta
          </motion.button>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section
        id="hero"
        className="relative z-10 min-h-screen flex items-center pt-24"
      >
        {/* ── Twinkling Collage Wall Background (full-bleed, first child) ── */}
        <div className="absolute top-0 left-0 w-full h-[110%] md:h-[120vh] -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] pointer-events-none">
          <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-2 scale-110 origin-center">
            {gridImages.map((item, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.1, 0.6, 0.1] }}
                transition={{
                  duration: item.duration,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={item.src}
                  alt=""
                  className="object-cover w-full h-full rounded-xl blur-sm md:blur-md"
                  loading="eager"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-16 lg:py-0">
          {/* ── Left Column: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left"
          >
            {/* Headline */}
            <h1
              className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Welcome to{" "}
              <DynamicWord />
            </h1>

            {/* Subheadline Word Reveal */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0 flex flex-wrap justify-center lg:justify-start"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05 }}
            >
              {"Ditch the dating apps. Find your actual crowd in Namma Bengaluru. From coffee runs in Indiranagar to chill weekend hangouts, meet people who actually match your vibe and cure the big city loneliness.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mr-1 mb-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* CTA Button */}
            <div>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full
                           bg-foreground text-[#FDF8F5] font-semibold text-base sm:text-lg
                           shadow-lg shadow-foreground/10
                           hover:shadow-xl hover:shadow-foreground/20
                           transition-shadow duration-300 cursor-pointer
                           mx-auto lg:mx-0"
              >
                <Smartphone className="w-5 h-5" />
                Check the beta version
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right Column: Image Collage ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[320px] sm:max-w-sm mx-auto flex justify-center lg:justify-end lg:mx-0 mt-12 lg:mt-0 h-[420px] sm:h-[480px] lg:h-[540px]"
          >
            {cards.map((card, i) => {
              const yParams = i === 0 ? yBack : i === 1 ? yFront : 0;
              return (
                <motion.div
                  key={i}
                  className={`absolute rounded-3xl overflow-hidden shadow-2xl shadow-black/10`}
                  style={{
                    width: card.style.width,
                    height: card.style.height,
                    top: card.style.top,
                    left: card.style.left,
                    zIndex: card.style.zIndex,
                    rotate: card.style.rotate,
                    y: yParams,
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
                </motion.div>
              )
            })}

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

      {/* ─── Section 1: How It Works (3D Carousel) ─── */}
      <section className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-16 py-12 lg:py-24">
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

        <div className="relative h-[450px] w-full max-w-4xl mx-auto flex justify-center items-center overflow-visible">
          {[
            {
              icon: <UserPlus className="w-6 h-6 text-brand-orange" />,
              iconBg: "bg-brand-orange/10",
              title: "1. Host or Join",
              text: "Got a plan? Create an event and set the spots. Looking for plans? Browse HSR or Koramangala and hit Request to Join.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-brand-orange-dark" />,
              iconBg: "bg-brand-amber/15",
              title: "2. The Vibe Check",
              text: "No weird vibes. Hosts verify requests by checking profiles, past pictures, Instagram, and even Spotify playlists.",
            },
            {
              icon: <MessageCircle className="w-6 h-6 text-brand-orange" />,
              iconBg: "bg-brand-orange/10",
              title: "3. Chat & Vouch",
              text: "Join the group chat. Show up, respect the rules, and have fun. Attend and vouch for each other to build trust.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="absolute w-full max-w-sm"
              animate={{
                x: index === currentIndex ? '0%' : index < currentIndex ? '-55%' : '55%',
                scale: index === currentIndex ? 1 : 0.85,
                opacity: index === currentIndex ? 1 : 0.5,
                filter: index === currentIndex ? 'blur(0px)' : 'blur(4px)',
                zIndex: index === currentIndex ? 30 : 10,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 18, mass: 1 }}
            >
              <div className="bg-surface-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-black/5 flex flex-col items-start">
                <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                <h3
                  className="text-xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Section 2: Trust System ─── */}
      <section className="relative z-10 w-full bg-transparent text-foreground py-16 lg:py-20">
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
                className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Keep it Safe. Keep it Nayaab.
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Our transparent vouching system filters out the rule-breakers.
              </p>
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-text-secondary/80">
              The Math Doesn't Lie
            </div>
          </motion.div>

          {/* Compact Stats Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-green-50 rounded-2xl p-5 md:p-6 border border-green-200 shadow-sm shadow-green-900/5 flex items-center gap-5 cursor-pointer"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-green-900 mb-1">
                  10 Attended, 10 Vouched
                </h4>
                <p className="text-sm text-green-800/80">
                  <strong className="text-green-700 font-semibold">Absolute legend.</strong> Safe and highly liked.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-red-50 rounded-2xl p-5 md:p-6 border border-red-200 shadow-sm shadow-red-900/5 flex items-center gap-5 cursor-pointer"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-700" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-900 mb-1">
                  10 Attended, 2 Vouched
                </h4>
                <p className="text-sm text-red-800/80">
                  <strong className="text-red-700 font-semibold">Major red flag.</strong> Bad vibes = no vouches.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Final CTA & Footer ─── */}
      <section className="relative z-10 w-full pt-16 lg:pt-24 pb-12">
        {/* CTA Block */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 sm:p-16 text-center shadow-xl shadow-black/5"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to find your crowd in Namma Bengaluru?
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Join the beta, create your profile, and start hanging out this
              weekend.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-white font-semibold text-lg hover:shadow-lg transition-all mx-auto"
            >
              <Smartphone className="w-5 h-5" />
              Download Android APK
            </motion.a>
          </motion.div>
        </div>

        {/* Minimal Footer */}
        <footer className="max-w-7xl mx-auto px-6 border-t border-gray-200 pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left */}
            <p className="text-sm font-semibold text-foreground">
              Made for Bangalore. © 2026 Nayaab.
            </p>

            {/* Center (Social Icons) */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-foreground hover:bg-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-foreground hover:bg-gray-200 transition-colors"
                aria-label="Spotify / Music"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-foreground hover:bg-gray-200 transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Right */}
            <div className="text-xs text-text-muted text-center md:text-right">
              Feedback/Bugs:{" "}
              <a
                href="mailto:hussainsakib44@gmail.com"
                className="hover:text-foreground transition-colors break-all"
              >
                hussainsakib44@gmail.com
              </a>
              ,{" "}
              <a
                href="mailto:rohitypatil2004@gmail.com"
                className="hover:text-foreground transition-colors break-all"
              >
                rohitypatil2004@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
