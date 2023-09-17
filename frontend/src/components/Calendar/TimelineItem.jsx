import React from "react";
import "./TimelineItem.css"; // Import the CSS file
import useWindowSize from "../../components/useWindowSize";


import { AiTwotoneCalendar } from "react-icons/ai";

const TimelineItem = ({ title, date, content }) => {
  const windowSize = useWindowSize();

  return (
    <li className="mb-6">
      <div className="md:flex">
        <div className="md:-ml-5 md:mr-2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#2A805D]">
          <AiTwotoneCalendar className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <div className="mt-2 md:mt-0 md:ml-8 block md:w-[70%] md:h-[10%] rounded-lg bg-black p-2 md:p-6 shadow-md shadow-black/5">
          <div className="mb-2 md:mb-4 flex flex-col md:flex-row justify-between">
            <a
              href="#!"
              className="text-xxs text-white transition md:text-xs duration-150 ease-in-out hover:text-[#2A805D] focus:text-info-600 active:text-info-700 mb-2 md:mb-0"
            >
              {title}
            </a>
            <a
              href="#!"
              className="text-xxs text-white transition md:text-end md:text-xs duration-150 ease-in-out hover:text-[#2A805D] focus:text-info-600 active:text-info-700"
            >
              {date}
            </a>
          </div>
          <p className="text-neutral-700 text-xs md:text-sm dark:text-neutral-200">
            {content}
          </p>

          <button
            type="button"
            className="inline-block rounded bg-[#2A805D] mt-4 mr-1 px-2 pb-1 pt-2 md:px-4 md:pb-[5px] md:pt-[6px] text-xs font-medium uppercase leading-normal text-white hover:bg-[#8A2623]"
          >
            Preview
          </button>
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;
