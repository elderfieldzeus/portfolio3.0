"use client";

import type React from "react";
import Masonry from "@/components/ui/masonry";
import { GALLERY_IMAGE_PATH, galleryItems } from "@/data/gallery";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";

export default function GalleryPage() {
  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-[min(80vw,_50rem)] h-full mx-auto flex flex-col items-start gap-8 my-10">
        <NonHomeHeader
          title="Gallery"
          description="A personal collection of candid moments and memories with me and my loved ones through the years."
          returnTo="/explore"
          returnToLabel="Explore"
        />

        <Masonry
          items={galleryItems.map((item, idx) => ({
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
      </section>
    </main>
  );
}
