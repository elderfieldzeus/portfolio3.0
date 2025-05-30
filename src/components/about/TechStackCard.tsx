import React from "react";

interface TechStackProps {
  text: string;
}

const TechStackCard: React.FC<TechStackProps> = ({ text }) => {
  return (
    <p className="text-sm rounded-md border border-primary px-2 py-0.5 font-light">
      {text}
    </p>
  );
};

export default TechStackCard;
