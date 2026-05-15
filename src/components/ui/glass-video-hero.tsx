"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MagneticButton } from "@/components/magnetic-button";
import { ArrowRight, Maximize2, Minimize2 } from "lucide-react";

const HeroSection = () => {
  const [fullBleed, setFullBleed] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
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
        ref={heroRef}
        className={`relative w-full overflow-hidden transition-all duration-500 ease-in-out ${
          fullBleed ? "min-h-screen" : "py-32 lg:py-40"
        } bg-background`}
      >
        <button
          onClick={() => setFullBleed(!fullBleed)}
          aria-label={fullBleed ? "Switch to fit-to-content" : "Switch to full-bleed"}
          className="absolute top-20 right-4 z-20 p-2.5 rounded-[10px] backdrop-blur-xl border border-accent/30 bg-background/40 text-foreground hover:bg-accent/10 transition-all focus:outline-none cursor-pointer animate-pulse-glow"
        >
          {fullBleed ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>

        <div
          className="absolute inset-0 diamond-grid opacity-40 dark:opacity-60 transition-transform duration-200"
          style={{ transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px)` }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background"
        />
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent transition-transform duration-200"
          style={{ transform: `translate(${mouse.x * 15}px, ${mouse.y * 15}px)` }}
        />

        <div
          className="absolute w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-drift"
          style={{ top: "20%", left: "15%" }}
        />
        <div
          className="absolute w-24 h-24 rounded-full bg-accent/5 blur-2xl animate-breathe"
          style={{ bottom: "30%", right: "20%" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center justify-center min-h-screen px-6 pt-24">
          <h1
            className="font-bold text-foreground text-5xl lg:text-[96px] leading-[1.05] tracking-[-0.02em] max-w-5xl"
            style={{
              transform: `perspective(800px) rotateX(${mouse.y * -2}deg) rotateY(${mouse.x * 2}deg)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            Carreaux
            <br />
            <span className="text-accent">Modernes</span>
            <br />
            du Centre
          </h1>

          <div className="flex items-center gap-2 mt-6 text-xs text-muted-foreground tracking-widest uppercase">
            <span className="inline-block w-6 h-px bg-accent" />
            Alger · Rouiba
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
            Fabricant industriel de carreaux et dalles en ciment et grès.
            Plus de 20 ans d&apos;excellence algérienne dans le revêtement.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <MagneticButton as="a" href="#products">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 cursor-pointer text-base">
                Nos produits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </MagneticButton>
            <MagneticButton as="a" href="#contact">
              <Button size="lg" variant="outline" className="h-12 px-8 cursor-pointer text-base">
                Contact
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
};

export { HeroSection };
