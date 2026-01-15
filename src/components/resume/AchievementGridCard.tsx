import { IAchievement } from "@/data/resume";
import React from "react";
import { MagicCard } from "../ui/magic-card";
import Image from "next/image";

interface AchievementGridCardProps {
  achievement: IAchievement;
  onClick: () => void;
}

const AchievementGridCard: React.FC<AchievementGridCardProps> = ({
  achievement,
  onClick,
}) => {
  return (
    <MagicCard className="w-full bg-black border rounded-lg border-opacity-20 overflow-hidden hover:border-opacity-40 transition-all cursor-pointer">
      <div onClick={onClick} className="w-full h-full">
        <div className="aspect-2/1 w-full h-auto overflow-hidden bg-zinc-900 flex items-center justify-center">
          <Image
            src={`/images/${achievement.imgs[0]!}`}
            alt={achievement.title}
            width={1000}
            height={1000}
            className="w-full h-auto object-cover object-center"
          />
        </div>
        <div className="w-full text-white font-kanit p-4">
          <p className="text-lg md:text-xl font-semibold mb-2">
            {achievement.title}
          </p>
          <p className="w-full text-gray-400 font-extralight text-xs md:text-sm line-clamp-2 mb-2">
            {achievement.subtitle}
          </p>
          <div>
            <span className="text-xs text-gray-500 font-light">
              {achievement.year}
            </span>
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

export default AchievementGridCard;
