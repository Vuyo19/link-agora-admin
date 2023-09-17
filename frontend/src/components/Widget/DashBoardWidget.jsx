import React from 'react';

const DashBoardWidget = ({ title, icon, message }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center mb-4 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-md border bg-white text-black py-5 sm:py-8 px-4 sm:px-6 md:px-8 shadow-lg transition-all duration-200 ease-in-out">
      <div className="flex flex-col items-center">
        <div className="text-sm mt-2 sm:mt-3 mb-1 sm:mb-2 font-bold">
          {title}
        </div>
        {icon}
        <div className="text-xs mt-2 sm:mt-3 mb-1 sm:mb-2">
          {message}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-[#01663E] text-white px-5 sm:px-6 opacity-0 transition group-hover:opacity-100">
        <a href="#" className="text-base sm:text-lg font-bold">
          Click to view your requests
        </a>
      </div>
    </div>
  );
};

export default DashBoardWidget;
