import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RequestList = ({
  eventId,
  organiser,
  eventDate,
  eventVenue,
  eventStatus,
  statusColor,
  progressBarWidth,
  keyid 
}) => {
  return (
    <tr>
      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black">
        <div className="flex items-center gap-x-3">
          <p className="font-medium text-gray-400">#{eventId}</p>
          <h2 className="text-sm font-normal text-black">{organiser}</h2>
        </div>
      </td>
      <td className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-black">
        <div className="inline px-3 py-1 text-sm font-normal rounded-lg text-black gap-x-2" style={{ background: statusColor }}> 
          {eventStatus}
        </div>
      </td>
      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black">
        <div className="flex items-center gap-x-3">
          <h2 className="text-sm font-normal text-black">{eventDate}</h2>
        </div>
      </td>
      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black">
        <div className="flex items-center gap-x-3">
          <h2 className="text-sm font-normal text-black">{eventVenue}</h2>
        </div>
      </td>
      <td className="px-4 py-3.5 text-sm text-left rtl:text-right text-black">
        <div className="w-48 h-1.5 bg-[#FFD8D8] overflow-hidden rounded-full">
          <div
            className="bg-[#F66B6B] w-2/3 h-1.5" 
            style={{ width: progressBarWidth }}
            aria-label="Progress bar"
          ></div>
        </div>
      </td>
      {/* Open Event Details Button */}
      <td className="relative py-3.5 px-4">
        {/* Wrap the button with a Link component */} 
        {/* Adding the event details id*/}
        <Link to={`/eventDetails/${keyid}`} className="block">
          <button className="px-1 py-1 text-white transition-colors duration-200 rounded-md bg-[#8A2623] hover:bg-[#01663E]">
            {/* arrow icon */}
            <FaArrowRight className="w-3 h-3" />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default RequestList;

