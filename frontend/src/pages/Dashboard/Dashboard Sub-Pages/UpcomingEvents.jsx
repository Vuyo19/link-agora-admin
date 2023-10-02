import React from "react";
import EventBox from "../../../components/EventBox";
import SearchBar from "../../../components/Search Bar/SearchBar";

const UpcomingEvents = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fafbfd]">
      <div className="w-full px-28 mx-auto lg:container">
        <SearchBar />
        {/* Table */}

        <div class="flex items-center">
          <p class="mr-4">July 2022</p>
          <hr class="my-12 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />
        </div>

        <EventBox />

        <EventBox />

        <EventBox />
      </div>
    </div>
  );
};

export default UpcomingEvents;
