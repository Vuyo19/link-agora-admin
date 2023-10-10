import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import EventDetailsModal from "../../Modals/Request Event Details/EventDetailsModal";
import requestEventDetailResponse from "../Response/EventRequestDetailResponse";

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
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState(false); 
  const [eventRequestDetail_Table, setEventRequestDetail_Table] = useState(); 

  async function openEventDetails(value) { 
    
    // Getting the detailed event and then the admin will decide what to do next. 
    const event_request_detail = await requestEventDetailResponse(value); 
    setEventRequestDetail_Table(event_request_detail.event_detail); 

    // Opening the event Details box. 
    setIsEventDetailsOpen(true);    
    
    
  };

  // Closing the event details box. 
  const closeEventDetails = () => {
    setIsEventDetailsOpen(false);
  };

  return (
    <tr>
      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black">
        <div className="flex items-center gap-x-3">
          <p className="font-medium text-gray-400">#{eventId}</p>
          <h2 className="text-sm font-normal text-black">{organiser}</h2>
        </div>
      </td>
      <td className="px-12 py-3.5 text-lg font-bold text-left rtl:text-right text-white">
        <div
          className="inline px-3 py-1 text-lg font-normal rounded-full text-white-500 gap-x-2"
          style={{ background: statusColor }}
        >
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
            className="bg-red-500 w-2/3 h-1.5"
            style={{ width: progressBarWidth }}
            aria-label="Progress bar"
          ></div>
        </div>
      </td>
      {/* Open Event Details Button */}
      <td className="relative py-3.5 px-4">
        {/* Wrap the button with a Link component */}
        <div className="block">
          <button
            className="px-1 py-1 text-white transition-colors duration-200 rounded-md bg-[#8A2623] hover:bg-[#01663E]"
            onClick={() => openEventDetails(keyid)}  
          >
            {/* arrow icon */}
            <FaArrowRight className="w-3 h-3" />
          </button>
        </div>
      </td>
      {isEventDetailsOpen && (
        <EventDetailsModal
          isOpen={isEventDetailsOpen}
          onClose={closeEventDetails}
          venue={eventRequestDetail_Table.venue}
          creator={eventRequestDetail_Table.organizer_name}
          capacity={eventRequestDetail_Table.capacity} 
          status={eventRequestDetail_Table.status_label} 
          code={eventRequestDetail_Table.event_id_comm}
          keyid={eventRequestDetail_Table.event_id}
        />
      )}
    </tr>
  );
};

export default RequestList;
