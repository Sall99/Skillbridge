import { ArrowRight } from "lucide-react";
import React from "react";

export const TopBanner = () => {
  return (
    <div className="px-4 pt-10 md:px-_30 md:pt-5">
      <div className="rounded-lg bg-primary-100 py-_14 text-center text-white">
        <h2 className="flex items-center justify-center gap-6 text-sm">
          <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p> <ArrowRight />
        </h2>
      </div>
    </div>
  );
};
