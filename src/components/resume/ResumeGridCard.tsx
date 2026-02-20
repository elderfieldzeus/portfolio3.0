import React from "react";
import { MagicCard } from "../ui/magic-card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { formatDate } from "@/lib/utils";

export enum ResumeGridCardType {
  Accomplishment = "accomplishment",
  Certification = "certification",
}

interface ResumeGridCardItem {
  title: string;
  subtitle: string;
  date: string;
  imgs: string[];
}

interface ResumeGridCardProps {
  item: ResumeGridCardItem;
  type: ResumeGridCardType;
  onClick: () => void;
}

const getImagePath = (type: ResumeGridCardType, img: string) => {
  if (type === ResumeGridCardType.Accomplishment) {
    return `/images/resume/accomplishments/${img}`;
  }
  return `/images/resume/certifications/${img}`;
};

const ResumeGridCard: React.FC<ResumeGridCardProps> = ({
  item,
  type,
  onClick,
}) => {
  return (
    <MagicCard className="w-full bg-black border rounded-lg border-opacity-20 overflow-hidden hover:border-opacity-40 transition-all cursor-pointer">
      <div onClick={onClick} className="w-full h-full">
        <div className="aspect-2/1 w-full h-auto overflow-hidden bg-zinc-900 flex items-center justify-center">
          <Image
            src={getImagePath(type, item.imgs[0]!)}
            alt={item.title}
            width={1000}
            height={1000}
            className="w-full h-auto object-cover object-center"
          />
        </div>
        <div className="w-full text-white font-kanit p-4">
          <p className="text-lg md:text-xl font-semibold mb-2">{item.title}</p>
          <p className="w-full text-gray-400 font-extralight text-xs md:text-sm line-clamp-2 mb-2">
            {item.subtitle}
          </p>
          <div>
            <Badge
              variant={"outline"}
              className="text-xs text-gray-500 font-light"
            >
              {formatDate(item.date)}
            </Badge>
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

export default ResumeGridCard;
