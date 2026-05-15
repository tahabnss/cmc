"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Adresse", value: "ZI Rouiba, voie H lot B54, BP 123, Rouiba, Alger" },
  { icon: Phone, label: "Téléphone", value: "+213 23 86 41 51" },
  { icon: Phone, label: "Mobile", value: "+213 561 18 16 25" },
  { icon: Mail, label: "Email", value: "sarlcmcrouiba@gmail.com" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 diamond-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground tracking-widest uppercase mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05] max-w-xl">
            On discute de votre projet&nbsp;?
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
                className="surface-card rounded-sm p-5 flex items-start gap-4 border-l-2 border-accent/30"
              >
                <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium mt-0.5">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form className="surface-card rounded-sm p-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium mb-1.5 block text-muted-foreground uppercase tracking-wider">Nom</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-sm border border-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-accent/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block text-muted-foreground uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full rounded-sm border border-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-accent/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium mb-1.5 block text-muted-foreground uppercase tracking-wider">Téléphone</label>
                <input
                  type="tel"
                  placeholder="+213 XX XX XX XX"
                  className="w-full rounded-sm border border-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-accent/50 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-medium mb-1.5 block text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  placeholder="Parlez-nous de votre projet..."
                  className="w-full rounded-sm border border-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-accent/50 transition-all resize-none"
                />
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer rounded-sm">
                <Send className="mr-2 h-4 w-4" />
                Envoyer
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
