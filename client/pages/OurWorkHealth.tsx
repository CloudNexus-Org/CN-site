// Filename: OurWorkHealth.jsx
// React (Next.js client) component — glassmorphism + Tailwind + Framer Motion
// Install: npm install framer-motion

"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "../components/Header";

function useLocalVisible() {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, isVisible };
}

export default function OurWorkHealth() {
  const { ref, isVisible } = useLocalVisible();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  // memoized static content
  const industries = useMemo(() => ["Healthcare", "IoT", "Data & Analytics"], []);
  const problems = useMemo(
    () => [
      {
        title: "Real-time Monitoring",
        text: "Patient vitals needed automated IoT tracking with low-latency alerts.",
        icon: "📊",
        color: "from-cyan-500/20 to-cyan-400/10",
      },
      {
        title: "Predictive Analytics",
        text: "Detect early deterioration using ML on streaming vitals.",
        icon: "🧠",
        color: "from-teal-500/20 to-teal-400/10",
      },
      {
        title: "Operational Automation",
        text: "Reduce manual processes and streamline alert workflows.",
        icon: "⚡",
        color: "from-blue-500/20 to-blue-400/10",
      },
      {
        title: "Security & Compliance",
        text: "HIPAA-level data protection and audit trails.",
        icon: "🔒",
        color: "from-purple-500/20 to-purple-400/10",
      },
    ],
    []
  );

  const methodology = useMemo(
    () => [
      {
        title: "Discovery & Diagnosis",
        body: "Understand data sources, device reliability and current operational challenges through comprehensive analysis.",
        icon: "🔍",
        color: "from-cyan-500/20 to-cyan-400/10",
      },
      {
        title: "Solutioning",
        body: "Design ML models, streaming pipelines, alert rules and reliability patterns tailored to healthcare needs.",
        icon: "⚙️",
        color: "from-teal-500/20 to-teal-400/10",
      },
      {
        title: "Execution & Delivery",
        body: "Build, test, deploy and monitor solutions with SRE best practices ensuring healthcare-grade reliability.",
        icon: "🚀",
        color: "from-blue-500/20 to-blue-400/10",
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: "AI & ML Engineering",
        description: "Advanced machine learning models for predictive healthcare analytics.",
        icon: "🤖",
        color: "from-cyan-500/20 to-cyan-400/10",
      },
      {
        title: "Cloud Architecture",
        description: "Scalable, secure cloud infrastructure for healthcare data processing.",
        icon: "☁️",
        color: "from-teal-500/20 to-teal-400/10",
      },
      {
        title: "IoT Integration",
        description: "Seamless integration of medical devices and sensors.",
        icon: "📡",
        color: "from-blue-500/20 to-blue-400/10",
      },
    ],
    []
  );

  const roles = useMemo(
    () => [
      {
        title: "ML Engineer",
        description:
          "Develops and deploys machine learning models for predictive healthcare analytics and real-time decision support.",
        icon: "🧠",
        color: "from-cyan-500/20 to-cyan-400/10",
      },
      {
        title: "Cloud Engineer",
        description:
          "Architects and manages scalable, secure cloud infrastructure ensuring HIPAA compliance and high availability.",
        icon: "☁️",
        color: "from-teal-500/20 to-teal-400/10",
      },
      {
        title: "IoT Specialist",
        description:
          "Integrates medical devices and sensors, ensuring reliable data collection and device management at scale.",
        icon: "📡",
        color: "from-blue-500/20 to-blue-400/10",
      },
    ],
    []
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardHover = shouldReduceMotion ? {} : { scale: 1.03 };

  return (
    <div className="min-h-screen bg-black text-white" id="top">
      <Header />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#02151a] via-[#071E24] to-black" aria-hidden />
        <div
          className="absolute -left-32 top-16 w-[520px] h-[520px] rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-400/10 blur-[160px] pointer-events-none animate-pulse"
          aria-hidden
        />
        <div className="absolute right-32 bottom-16 w-[320px] h-[320px] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" aria-hidden />

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:flex-1">
              <div className="inline-block mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/20 backdrop-blur-lg shadow-lg">
                <span className="text-sm font-bold text-cyan-300 tracking-wide">Case Study</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                Smart Healthcare Platform
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 animate-gradient-x font-black">
                  powered by AI & IoT
                </span>
              </h1>

              <p className="text-gray-300 max-w-2xl text-lg leading-relaxed mb-8">
                Real-time monitoring, predictive analytics and automation built for modern healthcare — scalable, secure and device-ready.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#customer-overview"
                  className="group px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-bold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-transform duration-300 transform focus:outline-none focus:ring-4 focus:ring-cyan-400/20"
                >
                  <span className="flex items-center gap-2">
                    Read Case Study
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>

                <a
                  href="#services"
                  className="px-6 py-3 rounded-2xl border-2 border-cyan-400/50 text-white bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-400/10 hover:to-teal-400/10 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 focus:outline-none focus:ring-4 focus:ring-cyan-400/10"
                >
                  Services
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:w-[560px]">
              <motion.div whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" aria-hidden />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-black/20 to-transparent h-80 backdrop-blur-sm">
                  <img
                    src="/image/smart.jpeg"
                    alt="Healthcare"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Customer Overview */}
        <motion.section
          id="customer-overview"
          ref={ref}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={isVisible || shouldReduceMotion ? "visible" : "hidden"}
          variants={sectionVariants}
          className="py-24"
          aria-labelledby="customer-heading"
        >
          <div className="text-center mb-12">
            <h2 id="customer-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Customer Overview
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" aria-hidden />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="relative overflow-hidden glass-card p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-400">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl" aria-hidden />
                <p className="text-gray-300 leading-relaxed text-lg z-10">
                  We partnered with a leading healthcare provider to deliver an AI-driven monitoring & alerting platform using IoT sensors, secure cloud pipelines, and real-time analytics to reduce risk and operational overhead.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                  <motion.div whileHover={cardHover} className="p-6 glass-card-2 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <div className="text-sm font-bold text-cyan-300 uppercase tracking-wide">Location</div>
                    </div>
                    <div className="text-gray-300 font-medium">India / Global</div>
                  </motion.div>

                  <motion.div whileHover={cardHover} className="p-6 glass-card-2 rounded-2xl border border-white/10 hover:border-teal-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" />
                      <div className="text-sm font-bold text-teal-300 uppercase tracking-wide">Company size</div>
                    </div>
                    <div className="text-gray-300 font-medium">500+ Employees</div>
                  </motion.div>
                </div>
              </article>
            </div>

            <aside className="order-first lg:order-last">
              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 rounded-3xl p-6 backdrop-blur-sm shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  <h3 className="text-cyan-300 font-bold text-lg">Relevant Industries</h3>
                </div>
                <div className="space-y-3">
                  {industries.map((industry, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" />
                      <span className="text-gray-300 font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </motion.section>

        {/* Testimonial */}
        <section className="py-6">
          <div className="rounded-2xl border border-cyan-400/10 p-6 bg-gradient-to-b from-black/10 to-transparent">
            <p className="text-gray-200 italic text-center max-w-3xl mx-auto">
              “CloudNexus delivered a highly scalable, real-time monitoring platform that transformed patient care and operations.”
            </p>
            <p className="text-center text-cyan-300 mt-4 font-semibold">— Chief Technology Officer</p>
          </div>
        </section>

        {/* Problem Statements */}
        <section id="problems" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Problem Statements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" aria-hidden />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Key challenges we addressed to deliver a comprehensive healthcare solution</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {problems.map((p, i) => (
              <motion.article
                key={i}
                whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{p.icon}</div>
                    <div className="text-cyan-300 font-black text-2xl">{`0${i + 1}`}</div>
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">{p.title}</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{p.text}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
              </motion.article>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section id="methodology" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Our Methodology</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" aria-hidden />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Systematic approach to delivering innovative healthcare solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((s, i) => (
              <motion.article
                key={i}
                whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{s.icon}</div>
                    <div className="text-cyan-300 font-black text-2xl">{`0${i + 1}`}</div>
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">{s.title}</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{s.body}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
              </motion.article>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Services Involved</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" aria-hidden />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Comprehensive technology stack powering healthcare innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.article
                key={i}
                whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{s.icon}</div>
                    <h4 className="font-bold text-xl text-cyan-300 group-hover:text-white transition-colors duration-300">{s.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{s.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
              </motion.article>
            ))}
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="py-20 pb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Key Roles Involved</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" aria-hidden />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Specialized expertise driving healthcare technology innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((r, i) => (
              <motion.article
                key={i}
                whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{r.icon}</div>
                    <h4 className="font-bold text-xl text-cyan-300 group-hover:text-white transition-colors duration-300">{r.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{r.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky CTA & Back-to-top */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
        <a
          href="#customer-overview"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/90 text-black font-semibold shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
        >
          Read Case Study
        </a>
        <a href="#top" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md" aria-label="Back to top">
          ↑
        </a>
      </div>

      {/* Glass CSS snippet (add to your global stylesheet or Tailwind layer) */}
      <style jsx global>{`
        .glass-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
        }
        .glass-card-2 {
          background: linear-gradient(180deg, rgba(0,0,0,0.38), rgba(255,255,255,0.02));
        }

        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-x {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
