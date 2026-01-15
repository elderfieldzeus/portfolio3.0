import Link from "next/link";
import React from "react";
import BlurFade from "../ui/blur-fade";

const Explore = () => {
  return (
    <div className="flex justify-center font-kanit relative mt-4">
      <div className="flex justify-center items-center gap-1 py-4 text-xs font-light">
        <p>Still bored? </p>
        <Link
          href="/explore"
          className="underline underline-offset-4 font-light cursor-pointer"
        >
          Explore more.
        </Link>
      </div>
    </div>
  );
};

export default Explore;
