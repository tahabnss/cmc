"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 stripes-diagonal" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground tracking-widest uppercase mb-6">
              <span className="inline-block w-8 h-px bg-accent" />
              À propos
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              C&apos;est ici que
              <br />
              <span className="text-accent">les murs</span> prennent vie
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Basée dans la <strong className="text-foreground">zone industrielle de Rouiba</strong> à Alger,
              <strong className="text-foreground"> SARL CMC</strong> transforme la matière première en carreaux
              depuis plus de vingt ans. Ciment, grès, faïence — chaque pièce raconte le
              savoir-faire d&apos;une industrie algérienne exigeante.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Avec une communauté de <strong className="text-foreground">plus de 16 000 followers</strong> et des
              centaines de projets réalisés, CMC est aujourd&apos;hui une référence dans le
              revêtement en Algérie.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                ["2004", "Création"],
                ["16K+", "Communauté"],
                ["100+", "Projets"],
              ].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-bold text-accent">{val}</div>
                  <div className="text-xs text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
