"use client";

import type React from "react";
import GridCard from "@/components/explore/GridCard";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden min-h-screen bg-black text-primary font-kanit relative">
      <section className="w-[min(80vw,_50rem)] mx-auto flex flex-col items-start gap-8 my-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <header className="mb-12 md:mb-16">
            <h1 className="mb-2 text-balance text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Zeus Elderfield
            </h1>
            <p className="text-pretty text-lg md:text-xl">Software Engineer</p>
          </header>

          {/* Bento Grid */}
          <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* About - Large Card */}
            <GridCard
              href="/about"
              className="md:col-span-2 md:row-span-2"
              title="About"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-pretty text-sm leading-relaxed md:text-base">
                    I&apos;m a developer passionate about crafting accessible,
                    pixel-perfect user interfaces that blend thoughtful design
                    with robust engineering.
                  </p>
                </div>
              </div>
            </GridCard>

            {/* Projects - with image example */}
            <GridCard
              href="/projects"
              className="md:col-span-1 md:row-span-1"
              title="Projects"
              image="/coding-project-workspace.jpg"
              imageAlt="Projects workspace"
            >
              <p className="text-sm text-white">
                A collection of things I&apos;ve built
              </p>
            </GridCard>

            {/* Experience */}
            <GridCard
              href="/experience"
              className="md:col-span-1 md:row-span-1"
              title="Experience"
            >
              <p className="text-sm text-white">
                Where I&apos;ve worked and what I&apos;ve done
              </p>
            </GridCard>

            {/* Writing - Tall Card with image */}
            <GridCard
              href="/writing"
              className="md:col-span-1 md:row-span-2"
              title="Writing"
              image="/writing-desk-with-notebook.jpg"
              imageAlt="Writing"
            >
              <div className="flex h-full flex-col justify-between">
                <p className="text-sm text-white">
                  Thoughts on design, development, and everything in between
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-white">
                    Latest: Building Better UIs
                  </div>
                </div>
              </div>
            </GridCard>

            {/* Skills */}
            <GridCard
              href="/skills"
              className="md:col-span-2 md:row-span-1"
              title="Skills"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  React
                </span>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  TypeScript
                </span>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Next.js
                </span>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Tailwind
                </span>
              </div>
            </GridCard>

            {/* Contact */}
            <GridCard
              href="/contact"
              className="md:col-span-1 md:row-span-1"
              title="Contact"
            >
              <p className="text-sm text-white">Let&apos;s work together</p>
            </GridCard>

            {/* Uses */}
            <GridCard
              href="/uses"
              className="md:col-span-1 md:row-span-1"
              title="Uses"
            >
              <p className="text-sm text-white">Tools and gear I use daily</p>
            </GridCard>

            {/* Now - Wide Card */}
            <GridCard
              href="/now"
              className="md:col-span-2 md:row-span-1"
              title="Now"
            >
              <p className="text-sm text-white">
                What I&apos;m currently focused on and learning
              </p>
            </GridCard>
          </div>
        </div>
      </section>
    </main>
  );
}
