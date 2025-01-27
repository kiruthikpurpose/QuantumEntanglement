"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Binary, Brain, Link, Share2, Waves } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=3431&auto=format')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              Quantum Entanglement
            </h1>
            <p className="text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Exploring the phenomenon that defies classical physics and powers the future of quantum computing
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <Waves className="w-12 h-12 text-blue-500/70" />
        </motion.div>
      </section>

      {/* Introduction */}
      <section id="intro" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={activeSection === "intro" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Atom className="w-10 h-10 text-blue-500" />
              <h2 className="text-4xl font-bold">Understanding Entanglement</h2>
            </div>
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Quantum entanglement represents one of the most profound mysteries in modern physics. When two particles become entangled, their quantum states are inextricably linked, regardless of the distance between them.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">Key Properties</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Instantaneous correlation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Non-local behavior
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Quantum superposition
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">Implications</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Quantum computing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Secure communications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Quantum teleportation
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visualization */}
      <section id="visualization" className="py-32 relative bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={activeSection === "visualization" ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Binary className="w-10 h-10 text-blue-500" />
              <h2 className="text-4xl font-bold">Quantum States</h2>
            </div>
            <div className="relative h-96 bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden">
              <motion.div
                className="absolute top-1/2 left-1/4 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.5)",
                    "0 0 0 20px rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 right-1/4 w-6 h-6 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 211, 238, 0.5)",
                    "0 0 0 20px rgba(34, 211, 238, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-0 right-0 h-0.5"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.5) 50%, transparent 100%)",
                }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={activeSection === "applications" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Brain className="w-10 h-10 text-blue-500" />
              <h2 className="text-4xl font-bold">Applications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Share2 className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Quantum Computing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Entanglement enables quantum computers to perform complex calculations exponentially faster than classical computers, revolutionizing fields from cryptography to drug discovery.
                </p>
              </motion.div>
              <motion.div
                className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Quantum Networks</h3>
                <p className="text-gray-300 leading-relaxed">
                  Quantum networks leverage entanglement to create unhackable communication channels, ensuring absolute security in data transmission.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}