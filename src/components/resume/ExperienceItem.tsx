"use client";

import React, { useState } from "react";
import { IExperience } from "@/data/resume";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ExperienceItemProps {
  experience: IExperience;
  isLast?: boolean;
}

const formatDate = (dateString: string): string => {
  if (dateString.toLowerCase() === "present") {
    return "Present";
  }

  const [year, month] = dateString.split("-");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthIndex = parseInt(month, 10) - 1;
  return `${monthNames[monthIndex]} ${year}`;
};

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
        const isOpen = !!openPositions[positionIndex];
        const hasContributions =
          position.contributions && position.contributions.length > 0;

        return (
          <section
            key={positionIndex}
            className={`flex px-4 gap-6 w-full relative ${isLastPosition ? "pb-8" : "pb-6"}`}
          >
            {/* Timeline */}
            <div className="flex flex-col items-center relative shrink-0">
              {/* Company Circle - Visible for first position, invisible for others to maintain alignment */}
              <div
                className={`relative z-10 mb-2 ${!isFirstPosition ? "opacity-0" : ""}`}
              >
                <div className="size-14 rounded-full border border-white bg-white flex items-center justify-center overflow-hidden">
                  {experience.company.icon ? (
                    <img
                      src={
                        "/images/resume/experience/" + experience.company.icon
                      }
                      alt={`${experience.company.name} logo`}
                      className="w-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-500">
                      {experience.company.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
              </div>

              {/* Timeline Line */}
              {isLast && isLastPosition ? (
                <div className="absolute w-0.5 bg-zinc-600 top-16 bottom-2"></div>
              ) : (
                <div className="absolute w-0.5 h-[120%] bg-zinc-600 top-16"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 w-full">
              <div className="flex flex-col gap-2">
                {/* Position Title and Date */}
                <button
                  onClick={() =>
                    hasContributions && togglePosition(positionIndex)
                  }
                  className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 w-full text-left ${hasContributions ? "cursor-pointer" : "cursor-default"}`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-white font-kanit">
                        {position.title}
                      </h3>
                      {hasContributions && (
                        <ChevronDown
                          className={`size-4 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </div>
                    {/* Company name - only show for first position */}
                    {isFirstPosition && (
                      <div className="flex items-center gap-2">
                        {experience.company.url ? (
                          <Link
                            href={experience.company.url}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group cursor-pointer"
                          >
                            <span className="font-light">
                              {experience.company.name}
                            </span>
                            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                              ↗
                            </span>
                          </Link>
                        ) : (
                          <p className="text-gray-300 font-light">
                            {experience.company.name}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-extralight text-gray-400 rounded-xl border px-3 py-1 border-zinc-800 border-opacity-20">
                      {formatDate(position.startDate)} -{" "}
                      {position.endDate
                        ? formatDate(position.endDate)
                        : "Present"}
                    </p>
                  </div>
                </button>

                {/* Contributions - collapsible */}
                {hasContributions && (
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-3 pl-4 border-l-2 border-zinc-800 space-y-2">
                        {position.contributions!.map((contribution, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-300 font-light"
                          >
                            <span className="text-gray-500 mt-1">•</span>
                            <span>{contribution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Divider between positions if multiple */}
                {!isLastPosition && (
                  <div className="h-px bg-zinc-800 mt-4"></div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ExperienceItem;
