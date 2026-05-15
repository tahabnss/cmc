"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    name: "Carreaux Ciment",
    desc: "Fabrication artisanale aux motifs géométriques. Une tradition algérienne dans chaque pièce.",
    pattern: "bg-[#c24f1a]",
    accent: "#c24f1a",
  },
  {
    name: "Dalles Grès",
    desc: "Grès cérame haute résistance. Pour l'intérieur comme pour l'extérieur.",
    pattern: "bg-[#8b7d71]",
    accent: "#8b7d71",
  },
  {
    name: "Carreaux Muraux",
    desc: "Décoration murale pour cuisines et salles de bain. Fini opaque, mat ou brillant.",
    pattern: "bg-[#6b5e53]",
    accent: "#6b5e53",
  },
  {
    name: "Dalles de Sol",
    desc: "Robustesse et esthétique pour espaces commerciaux et résidentiels à fort trafic.",
    pattern: "bg-[#d4561a]",
    accent: "#d4561a",
  },
];

const diamondPattern = (color: string) =>
  `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='${encodeURIComponent(color)}' opacity='0.15'/%3E%3C/svg%3E")`;

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 diamond-grid opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground tracking-widest uppercase mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            Ce qu&apos;on fait
          </h2>
          <p className="mt-4 text-muted-foreground">
            Une gamme complète de revêtements pour tous vos projets.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 border-border overflow-hidden">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="surface-card hover:bg-muted/50 transition-colors duration-300 p-8 flex flex-col"
            >
              <div
                className="w-full aspect-square mb-6 rounded-sm"
                style={{
                  backgroundImage: diamondPattern(p.accent),
                  backgroundColor: `${p.accent}08`,
                  border: `1px solid ${p.accent}20`,
                }}
              />
              <h3 className="text-lg font-semibold tracking-tight mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="industrial-line mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
