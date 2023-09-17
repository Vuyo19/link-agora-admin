import React from "react";
import BigCalendar from "../components/Calendar/BigCalendar";


const Schedule = () => {
  return (
    <div className="flex items-center min-h-screen bg-[#fafbfd]">
      <div className="w-full p-5">
        
       <BigCalendar/>
      </div>
    </div>
  );
};

export default Schedule;
