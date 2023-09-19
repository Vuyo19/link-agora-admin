import React, { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import { CircleDashed } from "lucide-react";
import { MapPin } from "lucide-react";
import { Users } from "lucide-react";
import { Binary } from "lucide-react";
import { UserSquare } from "lucide-react";
import { X } from "lucide-react";
import { Info } from "lucide-react";
import { Image } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import filler from "../../assets/eventfillerimage.jpeg";
import { Link } from "react-router-dom"; 

import responseData from "./EventResponse";

const Event = () => {  

  // Getting the id parameter
  const { id } = useParams();
  const [events_table, setEventsTable] = useState([]);

  useEffect(() => {
    // Code to run when the component mounts
    // alert('Loading event requests...');      
    // Perform your action here  
    const url = 'http://127.0.0.1:8000/requests/api/send-event-request-detail/'; // Url to request the event requests. 
    const requestData = {
      // Your data to be sent in the request body
      // Sending the specific event id to the server to get the specific event. 
      event_id: id, // Passing the id of the event detail
    };
  
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (response.ok) {
          const responseData = await response.json();  
          setEventsTable(responseData.event_detail); // Update events_table state 

        } else {
          alert('Request failed')
          // console.error('Request failed:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Request error:', error);
      }
    }
  
    fetchData();
  }, []);  

  // Responding to the click of the button. 
  const eventResponseClick = (event) => {
    const responseValue = event.target.value;
    alert(responseValue); 

    // Sending the response to the backend. 
    responseData(responseValue, id); 

  };

  // Returning the page.         
  return (
    <div>
      <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-11/12 lg:w-10/12 xl:w-9/12">
            {/* Adjusted width */}
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-2 sm:p-14 ">
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    {/* Close Page Button */}
                    <Link to="/requests">
                      <button className="bg-[#8A2623] hover:bg-black text-white font-bold py-2 px-4 rounded-full flex items-center">
                        <X size={20} className="mr-2" />
                        Close
                      </button>
                    </Link>
                  </div>

                  <div className="text-center">
                    <h2 className="text-2xl text-[#9B9D9C] font-bold">
                      Event Request
                    </h2>
                  </div>
                  {/* */}
                  <div class="p-1">
                    <div class="mx-4 p-4 mb-14">
                      <div class="flex items-center">
                        <div class="flex items-center text-white relative">
                          <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#01663E] border-[#01663E] flex justify-center items-center">
                            <Info />
                          </div>
                          <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#01663E]">
                            Review Info
                          </div>
                        </div>
                        <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        <div class="flex items-center text-gray-300 relative">
                          <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-gray-300 flex justify-center items-center">
                            <Image />
                          </div>

                          <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-300">
                            Add Cover
                          </div>
                        </div>
                        <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        <div class="flex items-center text-gray-300 relative">
                          <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-gray-300 flex justify-center items-center">
                            <CalendarCheck />
                          </div>
                          <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-300">
                            Confirm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      src={filler}
                      className="w-96 rounded-3xl border-4 border-[#9B9D9C]"
                      alt="Logo"
                    />
                  </div>
                </div>

                <div className="mt-12 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <div className="flex items-center justify-left mb-6">
                    <UserSquare size={20} color="gray" />
                    <p className="ml-2  font-bold">Creator</p>
                    <span className="ml-2 text-black text-sm font-bold px-8 py-1 rounded-full">
                      {events_table.organizer_name} {/* Organizer name */}
                    </span>
                  </div>
                  <div className="flex items-center justify-left mb-6">
                    <CircleDashed size={20} color="gray" />
                    <p className="ml-2 mr-8 font-bold">Status</p>
                    <span className="ml-2 bg-[#FFF0D1] text-black text-xs font-bold px-8 py-1 rounded-full">
                      {events_table.eventtrack_label} {/* Event label */}
                    </span>
                  </div>

                  <div className="flex items-center justify-left mb-6">
                    <CalendarDays size={20} color="gray" />
                    <p className="ml-2  font-bold">Timeline</p>
                    <span className="ml-2 text-black text-sm font-bold px-8 py-1 rounded-full">
                      {events_table.date_format} {/* Event Date format */}
                    </span>
                  </div>

                  <div className="flex items-center justify-left mb-6">
                    <MapPin size={20} color="gray" />
                    <p className="ml-2  font-bold">Venue</p>
                    <span className="ml-2 text-black text-sm font-bold px-8 py-1 rounded-full">
                      {events_table.venue} {/* Event Venue*/}
                    </span> 
                  </div>

                  <div className="flex items-center justify-left mb-6">
                    <Users size={20} color="gray" />
                    <p className="ml-2  font-bold">Attendees</p>
                    <span className="ml-2 text-black text-sm font-bold px-8 py-1 rounded-full">
                      Somewhere nice
                    </span>
                  </div>

                  <div className="flex items-center justify-left mb-6">
                    <Binary size={20} color="gray" />
                    <p className="ml-2  font-bold">Event Code</p>
                    <span className="ml-2 text-black text-sm font-bold px-8 py-1 rounded-full">
                      4405
                    </span>
                  </div>
                  <hr className="my-12 h-0.5 border-t-0 bg-[#9B9D9C] opacity-40" />
                  <p className="text-xs font-bold">
                    {" "}
                    Please choose an option below:
                  </p>

                  {/* Buttons for responding to event requests */}
                  <div className="flex flex-col justify-center space-y-4">
                  <button className="px-6 py-2 text-[#03663F] font-bold bg-white border-[#DADADA] border-2 rounded-full hover:bg-[#03663F] hover:text-white"
                            value="approve"
                            onClick={eventResponseClick}>
                      Approve Event
                    </button>
                    <button className="px-6 py-2 text-[#8A2623] font-bold bg-white border-[#DADADA] border-2 rounded-full hover:bg-[#8A2623] hover:text-white"
                            value="decline"
                            onClick={eventResponseClick}>
                      Decline Event
                    </button>
                    <button className="px-6 py-2 text-white font-bold bg-black rounded-full hover:bg-green-800"
                            value="review"
                            onClick={eventResponseClick}>
                      Place on Review
                    </button>
                  </div>
                  <br> </br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
