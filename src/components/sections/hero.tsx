"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight, Maximize2, Minimize2 } from "lucide-react";

const VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4",
];

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [fullBleed, setFullBleed] = useState(true);
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur border-b border-border shadow-sm" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-accent">C</span>MC
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground transition-colors">À propos</a>
            <a href="#products" className="hover:text-foreground transition-colors">Produits</a>
            <a href="#gallery" className="hover:text-foreground transition-colors">Galerie</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
                Devis
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section
        className={`relative w-full overflow-hidden transition-all duration-500 ease-in-out ${
          fullBleed ? "min-h-screen" : "py-32 lg:py-40"
        } bg-background`}
      >
        <button
          onClick={() => setFullBleed(!fullBleed)}
          aria-label={fullBleed ? "Mode réduit" : "Mode plein écran"}
          className="absolute top-20 right-4 z-20 p-2.5 rounded-[10px] backdrop-blur-xl border border-accent/30 bg-background/40 text-foreground hover:bg-accent/10 transition-all cursor-pointer"
        >
          {fullBleed ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>

        <div className="absolute inset-0 diamond-grid opacity-40 dark:opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

        <div className="relative z-10 w-full h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-0 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6 tracking-widest uppercase">
                <span className="inline-block w-8 h-px bg-accent" />
                Alger · Rouiba
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92]">
                Carreaux
                <br />
                <span className="text-accent">Modernes</span>
                <br />
                du Centre
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
                Fabricant industriel de carreaux et dalles en ciment et grès.
                Plus de 20 ans d&apos;excellence algérienne dans le revêtement.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <a href="#products">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 cursor-pointer text-base">
                    Nos produits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="h-12 px-8 cursor-pointer text-base">
                    Contact
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-3 text-right">
            {[
              ["16K+", "followers"],
              ["20+", "ans"],
              ["100+", "projets"],
            ].map(([val, label]) => (
              <div key={label} className="border-l-2 border-accent pl-4">
                <div className="text-2xl font-bold">{val}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          Zone Industrielle Rouiba, voie H lot B54 — Alger
        </div>
      </section>
    </>
  );
}
