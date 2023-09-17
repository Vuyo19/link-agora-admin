import React from 'react';
import poster from '../assets/event1poster.jpg'


const EventBox = () => {
  return (
    // Event Component
    <div className="flex max-w-6xl p-6 bg-white border border-gray-200 rounded-lg mb-12">

      {/* Item 1 - Date */}
      <div className="flex flex-col items-center mr-4 ml-8 mt-12">
        <p className="text-[#f0451f]">Mon</p>
        <p className="text-2xl text-gray-700 dark:text-gray-400">4</p>
      </div>

      {/* Item 2 - Event Details */}
      <div>
        <p className="font-light text-sm ml-14 text-gray-400 mb-2">4 July 2022 @ 6:30 pm - 7:30 pm</p>
        <h5 className="mb-2 text-lg ml-14 font-bold tracking-tight text-black hover:text-[#01663E]">POLICY DISCUSSION: DISCUSSING SOUTH AFRICA’S DRAFT COUNTRY INVESTMENT STRATEGY</h5>
        <p className="font-normal ml-14 text-black text-sm">The Black Management Forum is pleased to invite you to the 7th Annual Don Mkhwanazi Lecture presented by Bonang Mohale.</p>
      </div>

      {/* Item 3 - Event Poster */}
      <div className="ml-auto">
      <img src={poster} className=" w-60 rounded-lg" alt="Logo" />
      </div>
    </div>
  );
}

export default EventBox;
