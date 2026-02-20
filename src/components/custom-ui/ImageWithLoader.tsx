"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  width = 1000,
  height = 1000,
  className,
  priority,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <Loader2 className="w-6 h-6 text-zinc-500 animate-spin" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

export default ImageWithLoader;
