"use client";

import React, { useState } from "react";
import { IEducation } from "@/data/resume";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface EducationItemProps {
  education: IEducation;
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

const EducationItem: React.FC<EducationItemProps> = ({ education, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasHighlights = education.highlights && education.highlights.length > 0;

  return (
    <section
      className={`flex px-4 gap-6 w-full relative ${isLast ? "pb-8" : "pb-6"}`}
    >
      {/* Timeline */}
      <div className="flex flex-col items-center relative shrink-0">
        <div className="relative z-10 mb-2">
          <div className="size-14 rounded-full border border-white bg-white flex items-center justify-center overflow-hidden">
            {education.icon ? (
              <img
                src={"/images/resume/education/" + education.icon}
                alt={`${education.institution} logo`}
                className="w-full object-cover"
              />
            ) : (
              <span className="text-sm font-semibold text-gray-700">
                {education.institution.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </div>

        {/* Timeline Line */}
        {isLast ? (
          <div className="absolute w-0.5 bg-zinc-600 top-16 bottom-2"></div>
        ) : (
          <div className="absolute w-0.5 h-[120%] bg-zinc-600 top-16"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => hasHighlights && setIsOpen((o) => !o)}
            className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 w-full text-left ${hasHighlights ? "cursor-pointer" : "cursor-default"}`}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-white font-kanit">
                  {education.degree}
                </h3>
                {hasHighlights && (
                  <ChevronDown
                    className={`size-4 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                )}
              </div>
              <div className="flex items-center gap-2">
                {education.url ? (
                  <Link
                    href={education.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="font-light">{education.institution}</span>
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </Link>
                ) : (
                  <p className="text-gray-300 font-light">
                    {education.institution}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-extralight text-gray-400 rounded-xl border px-3 py-1 border-zinc-800 border-opacity-20">
                {formatDate(education.startDate)} -{" "}
                {education.endDate ? formatDate(education.endDate) : "Present"}
              </p>
            </div>
          </button>

          {/* Highlights - collapsible */}
          {hasHighlights && (
            <div
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="mt-3 pl-4 border-l-2 border-zinc-800 space-y-2">
                  {education.highlights!.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-300 font-light"
                    >
                      <span className="text-gray-500 mt-1">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationItem;
