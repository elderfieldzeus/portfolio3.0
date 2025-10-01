import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface GridCardProps {
  href: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  image?: string;
  imageAlt?: string;
}

export default function GridCard({
  href,
  title,
  children,
  className,
  image,
  imageAlt,
}: GridCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-xl border border-zinc-800 hover:border-zinc-400 border-opacity-20 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt || title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/40" />
        </div>
      )}

      <div className="relative flex h-full flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-balance text-xl font-semibold tracking-tight text-white md:text-2xl">
            {title}
          </h2>
          <ArrowUpRight
            className={`h-5 w-5 text-white transition-all duration-300 ${isHovered ? "translate-x-1 -translate-y-1 text-primary" : ""}`}
          />
        </div>
        <div className="flex-1">{children}</div>
      </div>

      {/* Hover gradient effect */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
        style={{
          background:
            "radial-gradient(600px circle at 50% 50%, rgba(99, 179, 237, 0.06), transparent 40%)",
        }}
      />
    </Link>
  );
}
