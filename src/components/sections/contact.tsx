"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    label: "Appel",
    value: "+213 23 86 41 51",
    href: "tel:+21323864151",
    desc: "Ligne directe",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+213 561 18 16 25",
    href: "tel:+213561181625",
    desc: "Disponible 6j/7",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+213 561 18 16 25",
    href: "https://wa.me/+213561181625",
    desc: "Réponse rapide",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sarlcmcrouiba@gmail.com",
    href: "mailto:sarlcmcrouiba@gmail.com",
    desc: "Réponse sous 24h",
  },
  {
    icon: ExternalLink,
    label: "Facebook",
    value: "CMC Rouiba",
    href: "https://web.facebook.com/CMCROUIBA",
    desc: "16K+ abonnés",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "ZI Rouiba, voie H lot B54",
    href: "https://maps.google.com/?q=ZI+Rouiba+voie+H+lot+B54+Alger",
    desc: "Alger, Algérie",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 diamond-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground tracking-widest uppercase mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05] max-w-xl">
            On discute de votre projet&nbsp;?
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactOptions.map((opt, i) => (
            <motion.a
              key={opt.label}
              href={opt.href}
              target={opt.href.startsWith("http") ? "_blank" : undefined}
              rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.23, 1, 0.32, 1] }}
              className="surface-card group rounded-sm p-6 flex items-center gap-5 border border-border hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-200"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-300">
                <opt.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground tracking-wider uppercase group-hover:text-accent transition-colors duration-300">{opt.label}</p>
                <p className="text-sm font-medium mt-0.5 truncate">{opt.value}</p>
                <p className="text-xs text-muted-foreground/60 mt-0.5">{opt.desc}</p>
              </div>
              <div className="shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                <span className="text-xs group-hover:translate-x-0.5 transition-transform duration-300">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
