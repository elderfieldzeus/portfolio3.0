"use client";

import React, { useState } from "react";
import { IExperience } from "@/data/resume";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

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
  const [expandedPositionIndex, setExpandedPositionIndex] = useState<
    number | null
  >(null);

  const togglePosition = (index: number) => {
    setExpandedPositionIndex(expandedPositionIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {experience.positions.map((position, positionIndex) => {
        const isFirstPosition = positionIndex === 0;
        const isLastPosition =
          positionIndex === experience.positions.length - 1;

        return (
          <section
            key={positionIndex}
            className={`flex px-4 gap-6 w-full relative ${isLastPosition ? "pb-8" : "pb-6"}`}
          >
            {/* Timeline */}
            <div className="flex flex-col items-center relative flex-shrink-0">
              {/* Company Circle - Only show for first position */}
              {isFirstPosition && (
                <div className="relative z-10 mb-2">
                  <div className="size-12 rounded-full border-2 border-white bg-black flex items-center justify-center"></div>
                </div>
              )}

              {/* Spacer for non-first positions */}
              {!isFirstPosition && <div className="h-12"></div>}

              {/* Timeline Line */}
              {isLast && isLastPosition ? (
                <div className="absolute w-0.5 bg-zinc-600 top-12 bottom-2"></div>
              ) : (
                <div className="absolute w-0.5 h-full bg-zinc-600 top-12"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 w-full">
              <div className="flex flex-col gap-2">
                {/* Position Title and Date */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium text-white font-kanit">
                      {position.title}
                    </h3>
                    {/* Company name - only show for first position */}
                    {isFirstPosition && (
                      <div className="flex items-center gap-2">
                        {experience.company.url ? (
                          <Link
                            href={experience.company.url}
                            target="_blank"
                            rel="noreferrer"
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
                      {formatDate(position.endDate)}
                    </p>
                  </div>
                </div>

                {/* Contributions Dropdown */}
                {position.contributions &&
                  position.contributions.length > 0 && (
                    <div className="mt-2">
                      <button
                        onClick={() => togglePosition(positionIndex)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-light cursor-pointer"
                      >
                        <span>
                          {expandedPositionIndex === positionIndex
                            ? "Hide"
                            : "Show"}{" "}
                          contributions ({position.contributions.length})
                        </span>
                        {expandedPositionIndex === positionIndex ? (
                          <ChevronUp className="size-4" />
                        ) : (
                          <ChevronDown className="size-4" />
                        )}
                      </button>

                      {expandedPositionIndex === positionIndex && (
                        <div className="mt-3 pl-4 border-l-2 border-zinc-800 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          {position.contributions.map((contribution, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-300 font-light"
                            >
                              <span className="text-gray-500 mt-1">•</span>
                              <span>{contribution}</span>
                            </div>
                          ))}
                        </div>
                      )}
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
