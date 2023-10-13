import React from "react";
import { CalendarDays } from "lucide-react";
import { CircleDashed } from "lucide-react";
import { MapPin } from "lucide-react";
import { Users } from "lucide-react";
import { Binary } from "lucide-react";
import { UserSquare } from "lucide-react";
import { X } from "lucide-react";
import { Upload } from 'lucide-react';
import requestEventDetailResponseReply from "../Response/EventDetailsReply";


const EventDetailsModal = ({
  onClose,
  creator,
  status,
  timeline,
  venue,
  capacity,
  code,
  keyid 
}) => {  

  // Click event for replying to the requested event. 
  async function eventRequestDetailsReply(id, value) {
    await requestEventDetailResponseReply(id, value);  // Replying to the requested event, either approved, declined or under review. 
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="relative lg:w-2/5 sm:w-3/5 w-11/12 bg-gray-100 rounded-xl mx-auto border p-10 shadow-sm">
        <div className="inline-flex items-center justify-between w-full">
          {/* Modal Heading */}
          <h3 className="font-bold text-xl sm:text-2xl text-gray-800">
            Event Request
          </h3>
          {/* Close Modal Button */}
          <button
            className="inline-flex text-xs sm:text-sm bg-[#01663E] px-2 sm:px-3 py-2  items-center rounded-lg font-medium  border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-[#8A2623] text-white hover:text-white"
            onClick={onClose}
          >
            <X size={18} className="text-white" />
            Close
          </button>
          {/* //----- endof Button ----// */}
        </div>

        {/* Modal Subheading */}
        <p className=" font-medium text-gray-500 text-sm sm:text-base">
          Review Info
        </p>

        {/* Elements of modal */}
        <div>
          {/* Add Event Cover */}
          <div class="col-span-2 items-center justify-center w-full mt-5">
            <label
              htmlFor="description"
              className="text-base font-medium text-gray-900"
            >
              Add cover
            </label>

            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-40 mt-2 mb-[3rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
              < Upload size={24} color="#6B7280"/>
                <p class="mb-2 mt-2 text-sm text-gray-500">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
          {/* //---- endof ----// */}

          {/* Creator Info */}
          <div className="flex items-center justify-left mb-2">
            <UserSquare size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Creator</p>
            <span className="ml-2 text-xs  text-black font-bold px-8 py-1 rounded-full">
              {creator}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* Status Info */}
          <div className="flex items-center justify-left mb-2">
            <CircleDashed size={20} color="gray" />
            <p className="ml-2 text-xs  mr-8 font-bold">Status</p>
            <span className="ml-2 text-xs  bg-[#FFF0D1] text-black font-bold px-8 py-1 rounded-full">
              {status}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* TimeLine Info */}
          <div className="flex items-center justify-left mb-2">
            <CalendarDays size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Timeline</p>
            <span className="ml-2 text-xs text-black font-bold px-8 py-1 rounded-full">
              {timeline}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* Venue Info */}
          <div className="flex items-center justify-left mb-2">
            <MapPin size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Venue</p>
            <span className="ml-2 text-xs text-black font-bold px-8 py-1 rounded-full">
              {venue}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* Capacity Info */}
          <div className="flex items-center justify-left mb-2">
            <Users size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Potential capacity</p>
            <span className="ml-2 text-xs text-black font-bold px-8 py-1 rounded-full">
              {capacity}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* Event Code Info */}
          <div className="flex items-center justify-left mb-2">
            <Binary size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Event Code</p>
            <span className="ml-2 text-xs text-black font-bold px-8 py-1 rounded-full">
              {code}
            </span>
          </div>
          {/* //---- endof ----// */}
        </div>
        {/* ///---- endof Elements of modal ----/// */}

        <hr className="h-0.5 border-t-0 bg-[#9B9D9C] opacity-40" />
        <p className="text-xs font-bold mt-6 mb-6 flex justify-center items-center">
          {" "}
          Please choose an option below:
        </p>

        {/* Option Buttons */}
        <div className="flex flex-col justify-center space-y-4"> 
        
          <button className="px-6 py-2 text-[#03663F] font-bold bg-white border-[#DADADA] border-2 rounded-full hover:bg-[#03663F] hover:text-white"
            onClick={() => eventRequestDetailsReply(keyid, "approved")}>
            Approve Event 

          </button>
          <button className="px-6 py-2 text-[#8A2623] font-bold bg-white border-[#DADADA] border-2 rounded-full hover:bg-[#8A2623] hover:text-white"
           onClick={() => eventRequestDetailsReply(keyid, "declined")}>
            Decline Event 

          </button>
          <button className="px-6 py-2 text-white font-bold bg-black rounded-full hover:bg-green-800"
           onClick={() => eventRequestDetailsReply(keyid, "underReview")}> 

            Place on Review  

          </button>
        </div>
        {/* //---- endof ----// */}
      </div>
    </div>
  );
};

export default EventDetailsModal;
