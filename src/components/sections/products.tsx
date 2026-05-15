"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TiltCard } from "@/components/tilt-card";

const products = [
  {
    name: "Carreaux Ciment",
    desc: "Fabrication artisanale aux motifs géométriques. Une tradition algérienne dans chaque pièce.",
    accent: "#c24f1a",
  },
  {
    name: "Dalles Grès",
    desc: "Grès cérame haute résistance. Pour l'intérieur comme pour l'extérieur.",
    accent: "#8b7d71",
  },
  {
    name: "Carreaux Muraux",
    desc: "Décoration murale pour cuisines et salles de bain. Fini opaque, mat ou brillant.",
    accent: "#6b5e53",
  },
  {
    name: "Dalles de Sol",
    desc: "Robustesse et esthétique pour espaces commerciaux et résidentiels à fort trafic.",
    accent: "#d4561a",
  },
];

const diamondSVG = (color: string) =>
  `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 2L58 30L30 58L2 30Z' fill='${encodeURIComponent(color)}' opacity='0.12'/%3E%3C/svg%3E")`;

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 diamond-grid opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-[120px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.23, 1, 0.32, 1] }}
            >
              <TiltCard className="surface-card h-full flex flex-col p-8 border border-border group hover:border-accent/30 transition-colors duration-500" maxRotate={8} scale={1.03}>
                <div
                  className="w-full aspect-square mb-6 rounded-sm overflow-hidden relative"
                  style={{
                    backgroundImage: diamondSVG(p.accent),
                    backgroundColor: `${p.accent}08`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${p.accent}20, transparent 70%)`,
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  />
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <div className="industrial-line mt-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
