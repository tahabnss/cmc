import { ExternalLink, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-[#0b1121]">
      <div className="absolute inset-0 tile-pattern opacity-10" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="text-xl font-bold tracking-tight text-white">
              <span className="text-accent">C</span>MC
            </span>
            <p className="mt-3 max-w-md text-sm text-white/50 leading-relaxed">
              SARL Carreaux Modernes du Centre — Fabricant industriel de carreaux 
              et dalles en ciment et grès. Basé à Rouiba, Alger.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://web.facebook.com/CMCROUIBA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg glass border-white/10 hover:bg-accent/20 hover:border-accent/30 transition-all"
                aria-label="Facebook"
              >
                <ExternalLink className="h-4 w-4 text-white/70" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/50">
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
            <h4 className="text-sm font-semibold text-white mb-4">Liens</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "À propos", href: "#about" },
                { name: "Produits", href: "#products" },
                { name: "Galerie", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} SARL CMC. Tous droits réservés.</p>
          <p>Conçu avec passion en Algérie</p>
        </div>
      </div>
    </footer>
  );
}
