"use client";

import type React from "react";
import { useMemo } from "react";
import Masonry from "@/components/ui/masonry";
import { GALLERY_IMAGE_PATH, galleryItems } from "@/data/gallery";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function GalleryPage() {
  // Shuffle gallery items on each page load
  const shuffledItems = useMemo(() => shuffleArray(galleryItems), []);

  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-(--w-mfull) h-full mx-auto flex flex-col items-start gap-8 my-10 px-4 md:px-8">
        <NonHomeHeader
          title="Gallery"
          description="A personal collection of candid moments and memories with me and my loved ones through the years."
          returnTo="/explore"
          returnToLabel="Explore"
        />

        <div className="w-full">
          <Masonry
            items={shuffledItems.map((item, idx) => ({
              id: String(idx),
              img: GALLERY_IMAGE_PATH + item.img,
              url: GALLERY_IMAGE_PATH + item.img,
              height: item.height,
            }))}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={1.05}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>
    </main>
  );
}
