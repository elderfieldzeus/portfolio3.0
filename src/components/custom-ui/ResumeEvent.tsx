import { IResumeEvent } from "@/data/resume";
import React from "react";

interface ResumeEventProps {
  event: IResumeEvent;
  isFirst?: boolean;
  isLast?: boolean;
}

const ResumeEvent: React.FC<ResumeEventProps> = ({
  event,
  isFirst,
  isLast,
}) => {
  const { title, subtitle, year } = event;

  return (
    <section className="flex px-4 gap-3 w-full pb-5">
      <div className="flex flex-col items-center relative">
        <div
          className={`absolute rounded-full size-4 aspect-square ${isFirst ? "bg-secondary hover:bg-primary" : "bg-black hover:bg-zinc-900"} border border-zinc-800 z-10 top-[0.3rem] transition-all`}
        ></div>
        <div
          className={`absolute w-0.5 ${isLast ? "h-3/4" : "h-[200%]"} bg-zinc-600 top-2`}
        ></div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-start w-full">
          <div>
            <p className="text-sm">{title}</p>
            <p className="text-xs font-extralight">{subtitle}</p>
          </div>
          <div>
            <p className="text-xs font-extralight rounded-xl border px-2 border-zinc-800 border-opacity-20">
              {year}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeEvent;
