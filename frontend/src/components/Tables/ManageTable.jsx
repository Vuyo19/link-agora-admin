import React from "react";
import EventList from "./EventList";
import Stating from "../Stats/Stating";
// Importing React-Icons
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { FiSearch } from "react-icons/fi";



function ManageTable() {
  return (
    <>
      <section className="container px-4 mx-auto">
<div className="sm:flex sm:items-center sm:justify-between">
  {/* Stat Cards */}
  <div>
  <h1 className="text-5xl font-semibold text-gray-800 mt-8 mb-10">Approved Events</h1>
    <div className="flex flex-col mt-4 gap-2 sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap">
      {/* Stats cards components */}
      <Stating
        icon={<MdOutlinePeopleAlt size={48} color="#5AC369" />}
        title="Event Organisers"
        value="10"
      />

      <Stating
        icon={<MdPendingActions size={48} color="#5AC369" />}
        title="Pending Events"
        value="5"
      />

      <Stating
        icon={<LiaBalanceScaleSolid size={48} color="#5AC369" />}
        title="Total Appeals"
        value="2"
      />

      <Stating
        icon={<BsCalendar2Event size={40} color="#5AC369" />}
        title="Total Events"
        value="12"
      />
    </div>
    <div className="flex items-center gap-x-3 mb-6">
      <h2 className="text-3xl font-medium text-black">Events</h2>
    </div>
  </div>
</div>


        <div className="-mt-2 md:flex md:items-center md:justify-between">
          {/* ... Search and filter buttons ... */}
          <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg mb-2 rtl:flex-row-reverse">
            <button class="px-5 py-2 text-xs font-medium text-gray-200 transition-colors duration-200 bg-[#01663E] sm:text-sm">
              View all
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm">
              Completed
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ">
              Not Completed
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
                  <thead className="bg-[#E7ECF0]">
                    {/* Table header */}
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black"
                      >
                        <button class="flex items-center gap-x-3 focus:outline-none">
                          <span>Organiser</span>

                          <svg
                            class="h-3"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.3"
                            />
                          </svg>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
                      >
                        Venue
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
                      >
                        Progress
                      </th>

                      <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  {/* Row 1 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    <EventList
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Confirmed"
                      statusColor="#C2F6CA"
                      eventDate="03-08-2023"
                      eventVenue="Think Tank 1"
                      progressBarWidth="w-2/3 h-1.5"
                    />
                    {/* Other rows */}
                  </tbody>

                  {/* Row 2 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    <EventList
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Confirmed"
                      statusColor="#C2F6CA"
                      eventDate="20-08-2023"
                      eventVenue="Think Tank 2"
                      progressBarWidth="w-2/3 h-1.5"
                    />
                    {/* Other rows */}
                  </tbody>

                  {/* Row 3 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    <EventList
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Confirmed"
                      statusColor="#C2F6CA"
                      eventDate="10-08-2023"
                      eventVenue="Think Tank 3"
                      progressBarWidth="w-2/3 h-1.5"
                    />
                    {/* Other rows */}
                  </tbody>

                  {/* Row 4 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    <EventList
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Confirmed"
                      statusColor="#C2F6CA"
                      eventDate="15-08-2023"
                      eventVenue="Think Tank 4"
                      progressBarWidth="w-2/3 h-1.5"
                    />
                    {/* Other rows */}
                  </tbody>

                  {/* Row 5 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    <EventList
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Confirmed"
                      statusColor="#C2F6CA"
                      eventDate="17-08-2023"
                      eventVenue="Think Tank 5"
                      progressBarWidth="w-2/3 h-1.5"
                    />
                  </tbody>

                  {/* Row 6 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    <EventList
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Confirmed"
                      statusColor="#C2F6CA"
                      eventDate="23-08-2023"
                      eventVenue="Think Tank 6"
                      progressBarWidth="w-2/3 h-1.5"
                    />
                  </tbody>
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
            <a
              href="#"
              class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-[#01663E] border rounded-md sm:w-auto gap-x-2 hover:bg-[#8A2623]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>previous</span>
            </a>

            <a
              href="#"
              class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-[#01663E] border rounded-md sm:w-auto gap-x-2 hover:bg-[#8A2623]"
            >
              <span>Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ManageTable;
