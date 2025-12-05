"use client";

import { useEffect, useRef, useState } from "react";
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

export default function OurWorkRetail() {
  const { ref, isVisible } = useLocalVisible();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* HERO (Enhanced CloudNexus-style dark hero with gradient) */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#02151a] via-[#071E24] to-black" />
        <div className="absolute -left-32 top-16 w-[520px] h-[520px] rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-400/10 blur-[160px] pointer-events-none animate-pulse"></div>
        <div className="absolute right-32 bottom-16 w-[320px] h-[320px] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:flex-1">
              <div className="inline-block mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/20 backdrop-blur-lg shadow-lg">
                <span className="text-sm font-bold text-cyan-300 tracking-wide">Case Study</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
                AI Retail Demand Forecasting System{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 animate-gradient-x">
                  powered by ML & Analytics
                </span>
              </h1>

              <p className="text-gray-300 max-w-2xl text-xl leading-relaxed mb-10">
                Predictive inventory forecasting to cut waste, improve availability and boost margins through intelligent data-driven insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#customer" className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-bold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 transform">
                  <span className="flex items-center gap-2">
                    Read Case Study
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>

                <a
                  href="#services"
                  className="px-8 py-4 rounded-2xl border-2 border-cyan-400/50 text-white bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-400/10 hover:to-teal-400/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  Services
                </a>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-[600px]">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-black/20 to-transparent h-80 backdrop-blur-sm">
                  <img
                    src="/image/retaill.jpeg"
                    alt="Retail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Customer Overview */}
        <section
          id="customer"
          ref={ref}
          className={`py-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Customer Overview
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 group">
              <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-sm shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl"></div>
                <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                  A large retail chain required a demand forecasting solution to reduce waste and improve replenishment accuracy across thousands of stores through advanced machine learning and real-time analytics.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                  <div className="group/card p-6 bg-gradient-to-br from-black/40 to-black/20 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <div className="text-sm font-bold text-cyan-300 uppercase tracking-wide">Region</div>
                    </div>
                    <div className="text-gray-300 font-medium">North America</div>
                  </div>

                  <div className="group/card p-6 bg-gradient-to-br from-black/40 to-black/20 rounded-2xl border border-white/10 hover:border-teal-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <div className="text-sm font-bold text-teal-300 uppercase tracking-wide">Stores</div>
                    </div>
                    <div className="text-gray-300 font-medium">5000+</div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="group">
              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 rounded-3xl p-8 backdrop-blur-sm shadow-xl hover:shadow-cyan-400/20 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h3 className="text-cyan-300 font-bold text-lg">Relevant Industries</h3>
                </div>
                <div className="space-y-3">
                  {["Retail", "E-commerce", "Data & Analytics"].map((industry, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-6">
          <div className="rounded-2xl border border-cyan-400/10 p-6 bg-gradient-to-b from-black/10 to-transparent">
            <p className="text-gray-200 italic text-center max-w-3xl mx-auto">
              "CloudNexus transformed our inventory management with AI-driven forecasting that reduced waste by 40% and improved stock availability across all locations."
            </p>
            <p className="text-center text-cyan-300 mt-4 font-semibold">— Chief Operations Officer</p>
          </div>
        </section>

        {/* Problem Statements */}
        <section id="problems" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Problem Statements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Key challenges we addressed to deliver accurate demand forecasting solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                title: "Demand Prediction",
                text: "Accurate forecasts to reduce stockouts and overstocks across thousands of SKUs.",
                icon: "📈",
                color: "from-cyan-500/20 to-cyan-400/10"
              },
              {
                title: "Seasonality",
                text: "Model seasonal variations, promotions, and market trends effectively.",
                icon: "📅",
                color: "from-teal-500/20 to-teal-400/10"
              },
              {
                title: "Data Integration",
                text: "Blend POS, weather, social media and external market signals.",
                icon: "🔗",
                color: "from-blue-500/20 to-blue-400/10"
              },
              {
                title: "Real-time Updates",
                text: "Adjust forecasts dynamically for live market conditions.",
                icon: "⚡",
                color: "from-purple-500/20 to-purple-400/10"
              },
            ].map((p, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{p.icon}</div>
                    <div className="text-cyan-300 font-black text-2xl">{`0${i + 1}`}</div>
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">{p.title}</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{p.text}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section id="methodology" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Our Methodology
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Systematic approach to delivering innovative retail forecasting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Collection",
                body: "Aggregate historical sales data, external market signals, weather patterns, and POS streams for comprehensive analysis.",
                icon: "📊",
                color: "from-cyan-500/20 to-cyan-400/10"
              },
              {
                title: "Model Training",
                body: "Develop ensemble ML models and advanced time-series algorithms optimized for retail demand patterns.",
                icon: "🧠",
                color: "from-teal-500/20 to-teal-400/10"
              },
              {
                title: "Deployment",
                body: "Implement batch and real-time serving with comprehensive monitoring and automated retraining pipelines.",
                icon: "🚀",
                color: "from-blue-500/20 to-blue-400/10"
              },
            ].map((s, i) => (
              <div key={i} className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/30">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{s.icon}</div>
                    <div className="text-cyan-300 font-black text-2xl">{`0${i + 1}`}</div>
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">{s.title}</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{s.body}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Services Involved
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Comprehensive technology stack powering retail innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Analytics",
                description: "Advanced data processing and analytics platforms for retail intelligence.",
                icon: "📈",
                color: "from-cyan-500/20 to-cyan-400/10"
              },
              {
                title: "Machine Learning",
                description: "Custom ML models and algorithms for accurate demand forecasting.",
                icon: "🤖",
                color: "from-teal-500/20 to-teal-400/10"
              },
              {
                title: "Cloud Platform",
                description: "Scalable cloud infrastructure for real-time data processing and model serving.",
                icon: "☁️",
                color: "from-blue-500/20 to-blue-400/10"
              },
            ].map((s, i) => (
              <div key={i} className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/30">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{s.icon}</div>
                    <h4 className="font-bold text-xl text-cyan-300 group-hover:text-white transition-colors duration-300">{s.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{s.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="py-20 pb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Key Roles Involved
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Specialized expertise driving retail technology innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Analyst",
                description: "Analyzes retail data patterns, builds forecasting models, and provides actionable insights for inventory optimization.",
                icon: "📊",
                color: "from-cyan-500/20 to-cyan-400/10"
              },
              {
                title: "ML Engineer",
                description: "Develops and deploys machine learning models for demand forecasting and real-time analytics.",
                icon: "🧠",
                color: "from-teal-500/20 to-teal-400/10"
              },
              {
                title: "Cloud Engineer",
                description: "Architects scalable cloud infrastructure for data processing and model serving at retail scale.",
                icon: "☁️",
                color: "from-blue-500/20 to-blue-400/10"
              },
            ].map((r, i) => (
              <div key={i} className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/30">
                <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{r.icon}</div>
                    <h4 className="font-bold text-xl text-cyan-300 group-hover:text-white transition-colors duration-300">{r.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{r.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
