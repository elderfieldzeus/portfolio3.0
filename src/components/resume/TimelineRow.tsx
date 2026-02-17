"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface TimelineRowProps {
  icon?: string;
  iconAlt: string;
  iconBasePath: string;
  showIcon?: boolean;
  shortenLine?: boolean;
  largePadding?: boolean;
  title: string;
  subtitle?: { name: string; url?: string };
  startDate: string;
  endDate?: string;
  bullets?: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const TimelineRow: React.FC<TimelineRowProps> = ({
  icon,
  iconAlt,
  iconBasePath,
  showIcon = true,
  shortenLine = false,
  largePadding = false,
  title,
  subtitle,
  startDate,
  endDate,
  bullets,
  isOpen,
  onToggle,
}) => {
  const hasBullets = bullets && bullets.length > 0;

  return (
    <section
      className={`flex px-4 gap-6 w-full relative ${largePadding ? "pb-8" : "pb-6"}`}
    >
      {/* Timeline */}
      <div className="flex flex-col items-center relative shrink-0">
        <div className={`relative z-10 mb-2 ${!showIcon ? "opacity-0" : ""}`}>
          <div className="size-14 rounded-full border border-white bg-white flex items-center justify-center overflow-hidden">
            {icon ? (
              <img
                src={iconBasePath + icon}
                alt={iconAlt}
                className="w-full object-cover"
              />
            ) : (
              <span className="text-sm font-semibold text-gray-700">
                {iconAlt.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </div>

        {/* Timeline Line */}
        {shortenLine ? (
          <div
            className={`absolute w-0.5 bg-zinc-600 top-12 bottom-2 transition-all ${isOpen ? "h-[75%]" : "h-0"}`}
          ></div>
        ) : (
          <div className={`absolute w-0.5 h-[120%] bg-zinc-600 top-12`}></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => hasBullets && onToggle()}
            className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 w-full text-left ${hasBullets ? "cursor-pointer" : "cursor-default"}`}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between sm:justify-start gap-2">
                <h3 className="text-lg font-medium text-white font-kanit">
                  {title}
                </h3>
                {hasBullets && (
                  <ChevronDown
                    className={`size-4 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                )}
              </div>
              {subtitle && (
                <div className="flex items-center gap-2">
                  {subtitle.url ? (
                    <Link
                      href={subtitle.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group cursor-pointer"
                    >
                      <span className="font-light">{subtitle.name}</span>
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        ↗
                      </span>
                    </Link>
                  ) : (
                    <p className="text-gray-300 font-light">{subtitle.name}</p>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-extralight text-gray-400 rounded-xl border px-3 py-1 border-zinc-800 border-opacity-20">
                {formatDate(startDate)}
                {" - "}
                {endDate ? formatDate(endDate) : "Present"}
              </p>
            </div>
          </button>

          {hasBullets && (
            <div
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="mt-3 pl-4 border-l-2 border-zinc-800 space-y-4">
                  {bullets!.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-300 font-light"
                    >
                      <span className="text-gray-500">•</span>
                      <span>{bullet}</span>
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

export default TimelineRow;
