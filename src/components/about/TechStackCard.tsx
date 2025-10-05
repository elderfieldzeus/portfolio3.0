import React from "react";
import { MagicCard } from "../ui/magic-card";

interface TechStackProps {
  text: string;
}

const TechStackCard: React.FC<TechStackProps> = ({ text }) => {
  return (
    <MagicCard className="text-sm rounded-md px-2 py-0.5 font-light w-auto">
      {text}
    </MagicCard>
  );
};

export default TechStackCard;
