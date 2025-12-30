"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { Footer } from "@/components/ContactAndFooter";

/* Logos */
const scrollingLogos = [
  { src: "/logos/boa.png" },
  { src: "/logos/cvs.png" },
  { src: "/logos/ite.png" },
  { src: "/logos/nec.png" },
  { src: "/logos/ylc.png" },
];

/* Leadership Data */
const leaders = [
  { name: "Yash Singh", role: "CTO", img: "/leaders/ceo.png" },
  { name: "Kaustubh Singh", role: "Founder & CEO", img: "/image/ceo.jpeg" },
  { name: "Shoaib Akhtar", role: "Technical Lead", img: "/image/Shoaib.jpg" },
  { name: "Harsh Dwivedi", role: "Team Lead - Development", img: "/image/harsh.jpeg" },
  { name: "Sourabh Patle", role: "Team Lead - Development", img: "/image/Sourabh.jpeg" },
  { name: "Adiba Ahmed", role: "Team Lead - Data Engineer", img: "/image/Adiba.jpeg" },
  { name: "Gaurav Tiwari", role: "Team Lead - DevOps", img: "/image/gaurav.jpeg" },
];

/* Counter Component */
function Counter({ end, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      let timer = setInterval(() => {
        start++;
        if (start >= end) clearInterval(timer);
        setCount(start);
      }, 15);
    }, { threshold: 0.5 });
    observer.observe(ref.current);
  }, []);

  return (
    <motion.div ref={ref} whileHover={{ scale: 1.1 }} className="border border-white/20 bg-white/5 rounded-xl py-6 text-center shadow-[0_0_25px_rgba(0,255,255,0.2)]">
      <p className="text-3xl font-bold text-cyan-400">{count}+</p>
      <p className="text-gray-300 text-sm">{label}</p>
    </motion.div>
  );
}

export default function Company() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="w-full min-h-screen bg-black text-white snap-y snap-mandatory overflow-scroll">
      <Header />

      {/* Back Button */}
      <div className="fixed top-20 left-6 z-40">
        <Link to="/company">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-white">
            <ArrowLeft className="w-4 h-4" /> Back to Page
          </button>
        </Link>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center snap-start">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video src="/video/origin.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-20 px-10 max-w-4xl">
          <p className="text-4xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Dependable Technology. Remarkable Outcomes.
            </span>
          </p>
          <p className="mt-4 text-gray-300">
            We don’t chase speed — we master consistency. Because real innovation is not a moment — it's a habit.
          </p>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="min-h-screen snap-start grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20">
        <div>
          <h2 className="text-4xl font-bold">Our <span className="text-cyan-400">Origin</span></h2>
          <p className="text-gray-400 mt-4">
            CloudNexus was built on one belief: technology should adapt to people — not the other way around.
          </p>
        </div>

        <motion.video src="/video/origin.mp4" autoPlay muted loop playsInline className="w-full h-[350px] object-cover rounded-3xl shadow-[0_0_35px_cyan]" />
      </section>

      {/* VISION */}
      <section className="min-h-screen snap-start grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20">
        <motion.img src="/image/vision.jpeg" className="w-full h-[350px] object-cover rounded-3xl shadow-[0_0_35px_cyan]" />

        <div>
          <h2 className="text-4xl font-bold">Our <span className="text-cyan-400">Vision</span></h2>
          <p className="text-gray-300 mt-4">A world where automation, cloud and AI unite — seamlessly.</p>
        </div>
      </section>

      {/* LOGO SLIDER */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Trusted by Leading Companies</h2>
        <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="flex gap-24 w-full whitespace-nowrap">
          {[...scrollingLogos, ...scrollingLogos].map((logo, i) => (
            <img key={i} src={logo.src} className="h-20 opacity-70 hover:opacity-100 transition" />
          ))}
        </motion.div>
      </section>

  {/* 🚀 LEADERSHIP (Premium Bio Reveal Style) */}
<section className="min-h-screen flex flex-col items-center px-6 lg:px-20 mb-24">
  <h2 className="text-4xl font-bold mb-14">Our Leadership</h2>

  {/* FIRST ROW - 3 Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-16">
    {leaders.slice(0, 3).map((leader, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="relative group bg-[#0F1C22] rounded-3xl border border-white/10 shadow-xl overflow-hidden cursor-pointer h-[420px]"
      >
        {/* IMAGE */}
        <img src={leader.img} className="w-full h-full object-cover absolute inset-0 transition-all duration-700 group-hover:opacity-0" />

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-0 transition-all duration-700 group-hover:opacity-100"></div>

        {/* STATIC NAME & ROLE */}
        <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md text-center py-4 z-20">
          <h3 className="text-xl font-bold text-white">{leader.name}</h3>
          <p className="text-cyan-400 text-sm">{leader.role}</p>
        </div>

        {/* BIO ON HOVER */}
        <div className="absolute inset-0 px-6 flex flex-col justify-center opacity-0 transition-all duration-700 group-hover:opacity-100 text-left z-10">
          <h3 className="text-2xl font-semibold text-white mb-1">{leader.name}</h3>
          <p className="text-cyan-400 mb-4">{leader.role}</p>
          <span className="text-cyan-300 text-4xl leading-none mb-2">❝</span>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            {leader.role.includes("CEO")
              ? "Born with a vision to redefine technology, leading CloudNexus with innovation, clarity, and purpose — ensuring every step shapes the future of intelligent automation."
              : "Passionate about innovation, engineering excellence, and driving meaningful digital transformation with dedication and consistency."}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* SECOND ROW - 4 Cards */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
    {leaders.slice(3, 7).map((leader, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="relative group bg-[#0F1C22] rounded-3xl border border-white/10 shadow-xl overflow-hidden cursor-pointer h-[380px]"
      >
        <img src={leader.img} className="w-full h-full object-cover absolute inset-0 transition-all duration-700 group-hover:opacity-0" />

        <div className="absolute inset-0 bg-black opacity-0 transition-all duration-700 group-hover:opacity-100"></div>

        <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md text-center py-3 z-20">
          <h3 className="text-lg font-semibold text-white">{leader.name}</h3>
          <p className="text-cyan-400 text-xs">{leader.role}</p>
        </div>

        <div className="absolute inset-0 px-4 flex flex-col justify-center opacity-0 transition-all duration-700 group-hover:opacity-100 text-left z-10">
          <h3 className="text-xl font-semibold text-white mb-1">{leader.name}</h3>
          <p className="text-cyan-400 mb-3 text-sm">{leader.role}</p>
          <span className="text-cyan-300 text-3xl leading-none mb-2">❝</span>
          <p className="text-gray-300 text-xs leading-relaxed max-w-xs">
            Dedicated to building scalable systems, leading teams with passion, and ensuring innovation meets real world impact.
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>




 
      <Footer />
    </main>
  );
}
