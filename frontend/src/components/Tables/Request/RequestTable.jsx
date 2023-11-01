import React, { useState, useEffect } from "react";
import RequestList from "./RequestTableItem";
import Stating from "../../Card/Statistics/Stating";
import filterRequestResponse from "../Response/EventRequestFilterResponse";
import filterManageResponse from "../Manage/Response/EventHistoryFilterResponse";
import { MoveLeft, MoveRight } from "lucide-react";


// Importing React-Icons
import { FiSearch } from "react-icons/fi";

function RequestTable() {
  const [events_table, setEventsTable] = useState([]);
  const [request_stat, setRequestStat] = useState([]);

  // Detecting which button was clicked and then changing the colour
  const [activeButton, setActiveButton] = useState("viewAll"); // Initially, 'viewAll' is active.

  // Function to handle the filter clicks.
  const filterEventRequestButton = async (value) => {
    alert(value);
    setActiveButton(value);

    // Reassigning the events into the EventsTable.
    try {
      const eventsData = await filterRequestResponse(value); // Wait for the response
      setEventsTable(eventsData); // Update the events_table state
    } catch (error) {
      // Handle the error if needed
      console.error("Error:", error);
    } // Calling the class to make the request and then storing the results inside the EventsTable.
  };

  useEffect(() => {
    // Code to run when the component mounts
    // alert('Loading event requests...');

    // Loading the send event requests.
    const url = "http://127.0.0.1:8000/requests/api/event-requests/"; // Url to request the event requests.
    const requestData = {
      // Your data to be sent in the request body.
    };

    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          const responseData = await response.json();
          setEventsTable(responseData.events); // Update events_table state.

          const request_stat_pull = await requestStatResponse();
          setRequestStat(request_stat_pull); // Updating the request_stat state.
        } else {
          alert("Request failed");
          // console.error('Request failed:', response.status, response.statusText);
        }
      } catch (error) {
        console.error("Request error:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Heading */}
          <div className="flex items-center gap-x-3 -mt-8 mb-6">
            <h1 className="text-3xl font-medium text-black">Events</h1>
          </div>
        </div>

        <div className="-mt-2 md:flex md:items-center md:justify-between">
          {/* ... Search and filter buttons ... */}
          <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg mb-2 rtl:flex-row-reverse">
            <button
              className={`px-5 py-2 text-xs font-medium ${
                activeButton === "viewAll"
                  ? "text-gray-200 bg-[#8A2623]"
                  : "text-gray-600"
              } transition-colors duration-200 sm:text-sm`}
              onClick={() => filterEventRequestButton("viewAll")}
            >
              View all
            </button>

            <button
              className={`px-5 py-2 text-xs font-medium ${
                activeButton === "inQueue"
                  ? "text-gray-200 bg-[#8A2623]"
                  : "text-gray-600"
              } transition-colors duration-200 sm:text-sm`}
              onClick={() => filterEventRequestButton("inQueue")}
            >
              In Queue
            </button>

            <button
              className={`px-5 py-2 text-xs font-medium ${
                activeButton === "underReview"
                  ? "text-gray-200 bg-[#8A2623]"
                  : "text-gray-600"
              } transition-colors duration-200 sm:text-sm`}
              onClick={() => filterEventRequestButton("underReview")}
            >
              Under Review
            </button>

            <button
              className={`px-5 py-2 text-xs font-medium ${
                activeButton === "complete"
                  ? "text-gray-200 bg-[#8A2623]"
                  : "text-gray-600"
              } transition-colors duration-200 sm:text-sm`}
              onClick={() => filterEventRequestButton("complete")}
            >
              Complete
            </button>
          </div>

          <div class="relative flex items-center mt-6 md:mt-0">
            <span class="absolute">
              <FiSearch className="w-5 h-5 ml-2" color="#6d6d6d" />
            </span>

            <input
              type="text"
              placeholder="Search"
              class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-400 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-[#8a2623]">
                    {/* Table header */}
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white"
                      >
                        <button class="flex items-center gap-x-3 focus:outline-none">
                          <span>Organiser</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                      >
                        Venue
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                      >
                        Progress
                      </th>

                      <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  {/* Adding the custom information */}
                  {/* Loading the event requests. */}
                  {events_table.map((event, index) => (
                    <tbody className="bg-white divide-y divide-gray-20">
                      <RequestList
                        eventId={event.event_id_comm}
                        organiser={event.organizer_name}
                        eventStatus={event.status_label}
                        statusColor={event.eventtrack_color}
                        eventDate={event.date}
                        eventVenue={event.venue}
                        progressBarWidth={event.approval_progress}
                        keyid={event.event_id}
                      />
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:flex sm:items-center sm:justify-between">
          {/* Pagination */}
          <div class="text-sm text-black">
            Page <span class="font-medium text-black">1 of 10</span>
          </div>

          <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
            {/* Previous Button */}
            <a
              href="#"
              class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-[#8A2623] border rounded-md sm:w-auto gap-x-2 hover:bg-[#01663E]"
            >
              <MoveLeft size={18} />

              <span>previous</span>
            </a>

            {/* Next Button */}
            <a
              href="#"
              class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-[#8A2623] border rounded-md sm:w-auto gap-x-2 hover:bg-[#01663E]"
            >
              <span>Next</span>
              <MoveRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default RequestTable;
