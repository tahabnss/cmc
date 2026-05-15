import { ExternalLink, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0a0e17] dark:bg-[#0a0e17]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="text-xl font-bold tracking-tight text-white">
              <span className="text-accent">C</span>MC
            </span>
            <p className="mt-3 max-w-md text-sm text-white/40 leading-relaxed">
              SARL Carreaux Modernes du Centre — Fabricant industriel de carreaux
              et dalles en ciment et grès. Rouiba, Alger.
            </p>
            <div className="mt-5">
              <a
                href="https://web.facebook.com/CMCROUIBA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 hover:border-accent/40 transition-colors"
                aria-label="Facebook"
              >
                <ExternalLink className="h-4 w-4 text-white/50" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                ZI Rouiba, voie H lot B54, Alger
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-accent" />
                +213 23 86 41 51
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
                sarlcmcrouiba@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "À propos", href: "#about" },
                { name: "Produits", href: "#products" },
                { name: "Galerie", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/40 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <p>&copy; {new Date().getFullYear()} SARL CMC.</p>
          <p>Conçu en Algérie</p>
        </div>
      </div>
    </footer>
  );
}
