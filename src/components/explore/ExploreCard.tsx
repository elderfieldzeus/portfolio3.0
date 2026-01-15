"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagicCard } from "../ui/magic-card";

interface ExploreCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function ExploreCard({
  title,
  description,
  icon: Icon,
  href,
  className,
}: ExploreCardProps) {
  return (
    <MagicCard
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[102%] hover:shadow-lg hover:shadow-neutral-500/10",
        className,
      )}
    >
      <Link href={href} className="flex flex-col h-full p-6 cursor-pointer">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900 text-neutral-500 transition-colors group-hover:text-neutral-500-foreground">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="text-xl font-semibold text-card-foreground mb-2 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-neutral-300 text-pretty font-light">
          {description}
        </p>

        <div className="w-full mt-auto pt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          <p>Explore</p>
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </MagicCard>
  );
}
