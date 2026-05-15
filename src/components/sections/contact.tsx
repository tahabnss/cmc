"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Adresse", value: "ZI Rouiba, voie H lot B54, BP 123, Rouiba, Alger" },
  { icon: Phone, label: "Téléphone", value: "+213 23 86 41 51" },
  { icon: Phone, label: "Mobile", value: "+213 561 18 16 25" },
  { icon: Mail, label: "Email", value: "sarlcmcrouiba@gmail.com" },
  { icon: Clock, label: "Horaires", value: "Sam-Jeu : 08h00 - 17h00" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 tile-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1121]/5 dark:to-[#0b1121]/30" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Parlons de votre projet
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Que vous soyez particulier ou professionnel, notre équipe est à votre 
            écoute pour vous accompagner dans vos projets de revêtement.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="glass-card rounded-xl p-4 flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium mt-0.5">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Téléphone</label>
                <input
                  type="tel"
                  placeholder="+213 XX XX XX XX"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Parlez-nous de votre projet..."
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white h-11 cursor-pointer">
                <Send className="mr-2 h-4 w-4" />
                Envoyer le message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
