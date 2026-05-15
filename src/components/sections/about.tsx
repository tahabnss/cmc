"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? count : 0}
      {suffix}
    </span>
  );
}

const values = [
  {
    num: 2004,
    suffix: "",
    label: "Création",
    desc: "Année de fondation de CMC dans la zone industrielle de Rouiba.",
  },
  {
    num: 16000,
    suffix: "+",
    label: "Communauté",
    desc: "Abonnés sur Facebook, preuve de la confiance de nos clients.",
  },
  {
    num: 100,
    suffix: "+",
    label: "Projets",
    desc: "Réalisations à travers l'Algérie, du particulier au professionnel.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 diamond-grid opacity-40" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
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
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Basée dans la <strong className="text-foreground">zone industrielle de Rouiba</strong> à Alger,
              <strong className="text-foreground"> SARL CMC</strong> transforme la matière première en carreaux
              depuis plus de vingt ans. Ciment, grès, faïence — chaque pièce raconte le
              savoir-faire d&apos;une industrie algérienne exigeante.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Avec une communauté de <strong className="text-foreground">plus de 16 000 personnes</strong> et des
              centaines de projets réalisés, CMC est aujourd&apos;hui une référence dans le
              revêtement en Algérie.
            </p>

            <div className="grid gap-4 pt-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                  className="surface-card p-5 flex items-center gap-5 border-l-2 border-accent"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-accent tabular-nums min-w-[120px]">
                    <CountUp end={v.num} suffix={v.suffix} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{v.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{v.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
