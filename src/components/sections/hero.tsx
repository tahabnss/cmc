"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-accent">C</span>MC
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground transition-colors">À propos</a>
            <a href="#products" className="hover:text-foreground transition-colors">Produits</a>
            <a href="#gallery" className="hover:text-foreground transition-colors">Galerie</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <a href="#contact">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-white cursor-pointer">
              Nous contacter
            </Button>
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b1121]">
        <div className="absolute inset-0 tile-pattern-lg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1121]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <MapPin className="h-3 w-3 text-accent" />
            Zone Industrielle Rouiba · Alger
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[0.9]">
            <span className="text-accent">C</span>arreaux{" "}
            <span className="text-accent">M</span>odernes
            <br />
            du <span className="text-accent">C</span>entre
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed">
            Fabricant industriel de carreaux et dalles en ciment et grès.
            L&apos;excellence algérienne dans le revêtement depuis plus de 20 ans.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white h-11 px-8 cursor-pointer text-base">
                Découvrir nos produits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="glass text-white border-white/20 hover:bg-white/10 h-11 px-8 cursor-pointer text-base">
                Demander un devis
              </Button>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              ["16K+", "Followers"],
              ["20+", "Ans d'expérience"],
              ["100+", "Projets"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{val}</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
