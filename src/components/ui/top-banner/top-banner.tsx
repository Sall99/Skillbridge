import React from "react";

import { ArrowRight } from "lucide-react";

export const TopBanner = () => {
  return (
    <div className="px-4 pt-10 md:px-_30 md:pt-5">
      <div className="rounded-lg bg-primary-500 py-_10 text-center text-white 2xl:py-_14">
        <h2 className="flex items-center justify-center gap-3 text-sm lg:gap-6 2xl:text-lg">
          <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p> <ArrowRight />
        </h2>
      </div>
    </div>
  );
};
