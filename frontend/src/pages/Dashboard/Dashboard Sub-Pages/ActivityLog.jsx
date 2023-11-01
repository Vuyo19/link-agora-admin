import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import { PenLine } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import TimelineItem from "../../../components/Activity/TimelineItem";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react"; 
import activitylogRequestResponse from "../Response/activityLogResponse";

const ActivityLog = () => {
  const [loading, setLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [activityLog, setActivityLog] = useState([]); // Storing the activity log. 
   
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    // Fetching the activity log data. 
    const fetchData = async () => { 
      try {
        const responseData = await activitylogRequestResponse();
        setActivityLog(responseData); // setting the activity log. 
      } catch (error) {
        console.error('Error fetching history stats:', error);
      } finally {
        setLoading(false);
      }      
    }   

    fetchData();  

  }, []);

  // Sample data for TimelineItems 

  const timelineData = activityLog.map((log, index) => {  
      return {
        date: log.date, 
        time: log.time, 
        icon: <PenLine size={16} className="text-white" />,
        user: `${log.admin_first_name} ${log.admin_surname} • Admin`,
        message: `${log.message}`
      }
  });

  // Group timeline data by month and year
  const groupedTimelineData = timelineData.reduce((groups, item) => {
    const itemDate = new Date(item.date);
    const year = itemDate.getFullYear();
    const month = itemDate.getMonth() + 1; // Months are zero-indexed

    const key = `${year}-${month}`;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);

    return groups;
  }, {});

  // Get timeline data for the current and previous months
  const currentMonthKey = `${currentMonth.getFullYear()}-${
    currentMonth.getMonth() + 1
  }`;
  const currentMonthData = groupedTimelineData[currentMonthKey] || [];

  return (
    <div className="flex flex-col h-full bg-[#fafbfd]">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <BarLoader color={"#01663E"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="flex flex-col flex-grow">
          {/* Fixed Page Header Content */}
          <div className="bg-[#1f2937] p-4 sticky top-0 z-20">
            <h1 className="text-5xl font-semibold text-white uppercase text-center mt-20">
              Activity Log
            </h1>
            <p className="font-medium text-white text-center mt-4">
              View all your upcoming events! Inform yourself and make your
              reservations.
            </p>
            {/* Control Activity Stream */}
            <div className="flex items-center justify-center mt-4 mb-4">
              {/* Current Month */}
              <p className="font-medium text-white">
                {currentMonth.toLocaleString("default", { month: "long" })}{" "}
                {currentMonth.getFullYear()}
              </p>
              {/* Go to previous month button */}
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() - 1
                    )
                  )
                }
              >
                <ChevronLeft
                  size={28}
                  className="text-white mx-2 cursor-pointer rounded-md bg-[#01663E] hover:bg-[#8A2623]"
                />
              </button>

              {/* Go to next month button */}
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() + 1
                    )
                  )
                }
              >
                <ChevronRight
                  size={28}
                  className="text-white mx-2 cursor-pointer rounded-md bg-[#01663E] hover:bg-[#8A2623]"
                />
              </button>
            </div>
          </div>
          {/* End of Fixed Page Header Content */}

          {/* Centered Activity Stream */}
          <div className="flex items-center justify-center">
            <div className="overflow-y-auto">
              {currentMonthData.length === 0 ? (
                <div className="text-gray-500 text-center mt-40">
                  No activity for this month.
                </div>
              ) : (
                currentMonthData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    time={item.time}
                    icon={item.icon}
                    user={item.user}
                    message={item.message}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityLog;
