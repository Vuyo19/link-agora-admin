import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { CalendarPlus } from 'lucide-react';



export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-lg flex items-center bg-[#01663E]"
    >
      <CalendarPlus alt="create_event" className="w-5 h-5" color="#FFFFFF" />
      <span className="pl-3 pr-7 text-white"> Create Event</span>
    </button>
  );
}