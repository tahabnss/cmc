"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Cog, Leaf } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Qualité Industrielle",
    desc: "Carreaux fabriqués selon les normes les plus strictes, avec des matériaux sélectionnés pour leur durabilité.",
  },
  {
    icon: Cog,
    title: "Savoir-Faire Algérien",
    desc: "Plus de 20 ans d'expertise dans la fabrication de carreaux ciment et grès, un savoir-faire 100% algérien.",
  },
  {
    icon: Leaf,
    title: "Matériaux Durables",
    desc: "Nous utilisons des procédés respectueux de l'environnement et des matériaux durables pour un habitat sain.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 tile-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1121]/5 via-transparent to-transparent dark:from-[#0b1121]/30" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            À propos
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            CMC — Carreaux Modernes du Centre
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Basée dans la zone industrielle de <strong>Rouiba</strong> à Alger, 
            <strong> SARL CMC</strong> est spécialisée dans la fabrication industrielle 
            de carreaux et dalles en ciment et grès. Avec plus de <strong>16 000 followers</strong> 
            et une communauté engagée, CMC est une référence dans le secteur du revêtement 
            en Algérie.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card group rounded-2xl p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
