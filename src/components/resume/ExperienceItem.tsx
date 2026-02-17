"use client";

import React, { useState } from "react";
import { IExperience } from "@/data/resume";
import TimelineRow from "./TimelineRow";

interface ExperienceItemProps {
  experience: IExperience;
  isLast?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  isLast,
}) => {
  const [openPositions, setOpenPositions] = useState<Record<number, boolean>>(
    {},
  );

  const togglePosition = (index: number) => {
    setOpenPositions((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full">
      {experience.positions.map((position, positionIndex) => {
        const isFirstPosition = positionIndex === 0;
        const isLastPosition =
          positionIndex === experience.positions.length - 1;

        return (
          <TimelineRow
            key={positionIndex}
            icon={experience.company.icon}
            iconAlt={`${experience.company.name} logo`}
            iconBasePath="/images/resume/experience/"
            showIcon={isFirstPosition}
            shortenLine={!!isLast && isLastPosition}
            largePadding={isLastPosition}
            title={position.title}
            subtitle={
              isFirstPosition
                ? {
                    name: experience.company.name,
                    url: experience.company.url,
                  }
                : undefined
            }
            startDate={position.startDate}
            endDate={position.endDate}
            bullets={position.contributions}
            isOpen={!!openPositions[positionIndex]}
            onToggle={() => togglePosition(positionIndex)}
          />
        );
      })}
    </div>
  );
};

export default ExperienceItem;
