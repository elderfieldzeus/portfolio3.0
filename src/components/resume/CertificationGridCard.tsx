import { ICertification } from "@/data/resume";
import React from "react";
import { MagicCard } from "../ui/magic-card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { formatDate } from "@/lib/utils";

interface CertificationGridCardProps {
  certification: ICertification;
  onClick: () => void;
}

const CertificationGridCard: React.FC<CertificationGridCardProps> = ({
  certification,
  onClick,
}) => {
  return (
    <MagicCard className="w-full bg-black border rounded-lg border-opacity-20 overflow-hidden hover:border-opacity-40 transition-all cursor-pointer">
      <div onClick={onClick} className="w-full h-full">
        <div className="aspect-2/1 w-full h-auto overflow-hidden bg-zinc-900 flex items-center justify-center">
          <Image
            src={`/images/${certification.imgs[0]!}`}
            alt={certification.title}
            width={1000}
            height={1000}
            className="w-full h-auto object-cover object-center"
          />
        </div>
        <div className="w-full text-white font-kanit p-4">
          <p className="text-lg md:text-xl font-semibold mb-2">
            {certification.title}
          </p>
          <p className="w-full text-gray-400 font-extralight text-xs md:text-sm line-clamp-2 mb-2">
            {certification.subtitle}
          </p>
          <div>
            <Badge
              variant={"outline"}
              className="text-xs text-gray-500 font-light"
            >
              {formatDate(certification.date)}
            </Badge>
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

export default CertificationGridCard;
