"use client";

import React, { useState } from "react";
import { IEducation } from "@/data/resume";
import TimelineRow from "./TimelineRow";

interface EducationItemProps {
  education: IEducation;
  isLast?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ education, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TimelineRow
      icon={education.icon}
      iconAlt={`${education.institution} logo`}
      iconBasePath="/images/resume/education/"
      shortenLine={!!isLast}
      largePadding={!!isLast}
      title={education.degree}
      subtitle={{ name: education.institution, url: education.url }}
      startDate={education.startDate}
      endDate={education.endDate}
      bullets={education.highlights}
      isOpen={isOpen}
      onToggle={() => setIsOpen((o) => !o)}
    />
  );
};

export default EducationItem;
