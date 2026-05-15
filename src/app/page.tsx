import { HeroSection } from "@/components/ui/glass-video-hero";
import { About } from "@/components/sections/about";
import { Products } from "@/components/sections/products";
import { GalleryGridBlock } from "@/components/gallery-grid-block-shadcnui";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Products />
      <section id="gallery">
        <GalleryGridBlock />
      </section>
      <Contact />
      <Footer />
    </>
  );
}
