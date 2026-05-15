"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { TiltCard } from "@/components/tilt-card";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1613545325262-2f3e7a6c43b4?w=500",
    title: "Carreaux Ciment",
    category: "Ciment",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500",
    title: "Dalles Grès",
    category: "Grès",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1602873452206-46c8fb9ec9d0?w=500",
    title: "Carreaux Muraux",
    category: "Muraux",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
    title: "Dalles de Sol",
    category: "Sol",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500",
    title: "Carreaux Décoratifs",
    category: "Décor",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500",
    title: "Revêtement Moderne",
    category: "Design",
  },
];

export function GalleryGridBlock() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...new Set(galleryImages.map((img) => img.category)),
  ];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const prevIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(
    (img) => img.id === selectedImage
  );

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    imageId: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImage(imageId);
    }
  };

  return (
    <section className="w-full bg-background" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          role="region"
          aria-labelledby="gallery-heading"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground tracking-widest uppercase mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            Galerie
          </div>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05] max-w-xl"
          >
            Ce qu&apos;on a fait
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 mb-10 flex flex-wrap gap-1.5 border-b border-border pb-4"
          role="group"
          aria-label="Catégories"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`text-xs tracking-wider uppercase px-3 py-1.5 transition-colors cursor-pointer ${
                filter === category
                  ? "text-accent border-b-2 border-accent -mb-[17px]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={filter === category}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Gallery items"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                role="listitem"
              >
                <TiltCard>
                  <Card
                    className="group relative cursor-pointer overflow-hidden border-border surface-card transition-all hover:border-accent/30"
                    onClick={() => setSelectedImage(image.id)}
                    onKeyDown={(event) => handleCardKeyDown(event, image.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Voir détails: ${image.title}`}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <motion.img
                        src={image.url}
                        alt={image.title}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0e17]/80"
                        aria-hidden="true"
                      >
                        <ZoomIn className="mb-2 h-8 w-8 text-white/60" />
                        <h3 className="mb-1 text-center text-lg font-semibold text-white">
                          {image.title}
                        </h3>
                        <Badge variant="secondary">{image.category}</Badge>
                      </motion.div>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-dialog-title"
              aria-describedby="gallery-dialog-description"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl"
              >
                {/* Close Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute -right-12 top-0 text-[var(--muted-foreground)] hover:bg-white/10"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Fermer la galerie"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Image suivante"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <motion.img
                  key={selectedImage}
                  src={selectedImageData.url}
                  alt={selectedImageData.title}
                  className="max-h-[80vh] w-auto rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-center text-white/60"
                  id="gallery-dialog-description"
                >
                  <h3
                    className="mb-2 text-xl font-semibold"
                    id="gallery-dialog-title"
                  >
                    {selectedImageData.title}
                  </h3>
                  <Badge variant="secondary">
                    {selectedImageData.category}
                  </Badge>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
