import React from "react";
import ReturnToHome from "./ReturnToHome";

interface NonHomeHeaderProps {
  title: string;
  description?: string;
  returnTo?: string;
  returnToLabel?: string;
}

const NonHomeHeader: React.FC<NonHomeHeaderProps> = ({
  title,
  description = "",
  returnTo,
  returnToLabel,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <ReturnToHome returnTo={returnTo} returnToLabel={returnToLabel} />
      <div className="flex flex-col">
        <p className="text-4xl">{title}</p>
        <p className="text-sm text-neutral-300 font-light">{description}</p>
      </div>
    </div>
  );
};

export default NonHomeHeader;
