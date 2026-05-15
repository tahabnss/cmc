"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Carreaux Ciment",
    desc: "Carreaux en ciment faits main, motifs géométriques et couleurs variées.",
    image: "https://images.unsplash.com/photo-1613545325262-2f3e7a6c43b4?w=600&q=80",
  },
  {
    name: "Dalles Grès",
    desc: "Dalles en grès cérame haute résistance pour intérieur et extérieur.",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80",
  },
  {
    name: "Carreaux Muraux",
    desc: "Carreaux décoratifs pour murs, cuisine et salle de bain.",
    image: "https://images.unsplash.com/photo-1602873452206-46c8fb9ec9d0?w=600&q=80",
  },
  {
    name: "Dalles Sol",
    desc: "Dalles de sol robustes pour espaces commerciaux et résidentiels.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
];

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative py-28 sm:py-36 overflow-hidden bg-[#0b1121]">
      <div className="absolute inset-0 tile-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-medium text-white/60 mb-4 border border-white/10">
            Notre gamme
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Nos Produits
          </h2>
          <p className="mt-6 text-white/50 text-lg leading-relaxed">
            Une large gamme de carreaux et dalles pour tous vos projets de construction 
            et de rénovation.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="group glass border-white/10 bg-white/5 overflow-hidden hover:border-accent/30 transition-all duration-500 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121]/80 via-transparent to-transparent" />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-white font-semibold text-base mb-1.5">{p.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
