import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { ChevronLeft } from "lucide-react";
import { X } from "lucide-react";
import { Bookmark } from "lucide-react";
import { AiFillStar } from "react-icons/ai";



const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-2/5">
        <header className="bg-[gray-100] rounded-md px-4 py-2 flex justify-between items-center">
          <div></div>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
          </div>
          <button onClick={() => setShowEventModal(false)}>
            <X
              size={28}
              className="text-gray-600 mx-2 cursor-pointer rounded-md hover:border-[#007f66]"
            />
          </button>
        </header>
        <div className="flex items-center justify-center">
          <p className="font-bold text-[#007f66] text-center text-xl w-72 h-8">
            {daySelected.format("dddd, MMMM DD")}
          </p>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-1 items-end gap-y-7 ">
            <div className="flex items-center">
                      <label for="" class="text-base font-medium text-gray-900 mr-4">
                        {" "}
                        Title{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="text"
                          name="title"
                          value={title}
                required
                          placeholder="Enter the event title"
                          class="block w-96 px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>

            {/* Timepicker component */}

            <div class="sm:col-span-2">
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Description{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          value={description}
                          placeholder=""
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows="4"
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex items-center">

                    <p className="text-base font-medium text-gray-900 mr-4">Select event label colour</p>
                    <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-8 h-8 rounded-md flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
            <AiFillStar
            size={48}
            className="text-white mx-2 cursor-pointer rounded-md"
          />
                  )}
                </span>
              ))}
            </div>              
                    </div>
                   


          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#01663E] hover:bg-black px-6 py-2 rounded text-white"
          >
            Request
          </button>
        </footer>
      </form>
    </div>
  );
}
