import React from "react";

const StatsCard = ({ title, icon, subtitle, info }) => {
  return (
    <div className="group relative flex flex-col mb-4 w-40 h-40 sm:w-52 sm:h-52 md-medium md:w-72 md:h-full lg:w-64 rounded-md border bg-white text-black py-6 sm:py-8 px-2  shadow-lg transition-all duration-200 ease-in-out responsive-stats-card">
      <div className="flex flex-col items-center justify-between -mt-4 sm:-mt-5">
        <div className="flex items-center">
          <div
            className="text-sm sm:text-xxs md:text-base font-bold mt-4 sm:mt-8 sm:text-center" // Add text-xxs class for font size adjustment
            style={{ whiteSpace: "nowrap" }}
          >
            {title}
          </div>
        </div>
      </div>

      {/* Center-align the message vertically and horizontally */}
      <div className="flex-grow flex flex-col justify-center items-center">
        <p className="font-sans text-3xl sm:text-4xl md:text-5xl mt-1 sm:mt-2">
          {icon}
        </p>
        <p
          className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-6"
          style={{ whiteSpace: "nowrap" }}
        >
          {subtitle}
        </p>
      </div>

      <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-[#8A2623] text-white px-4 sm:px-6 opacity-0 transition group-hover:opacity-100">
        <a href="#" class="text-xs sm:text-sm font-bold ml-7">
          {info}
        </a>
      </div>
    </div>
  );
};

export default StatsCard;
