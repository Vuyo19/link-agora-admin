import React from "react";
import { useState, useEffect } from "react";
import Stating from "../components/Card/Statistics/Stating";
import BarLoader from "react-spinners/BarLoader";
import requestStatResponse from "../components/Tables/Response/EventRequestStatResponse";

// Importing React-Icons
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { LiaBalanceScaleSolid } from "react-icons/lia";

// Importing Components
import RequestTable from "../components/Tables/Request/RequestTable";

const Requests = () => {
  const [loading, setLoading] = useState(false);
  const [request_stats_table, setRequestStatsTable] = useState([]) // Recording the history stats. 

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000); 

    const fetchData = async () => {
      try {
        const responseData = await requestStatResponse();
        setRequestStatsTable(responseData);
      } catch (error) {
        console.error('Error fetching history stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 

  }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-[#fafbfd]">
      {loading ? (
        <BarLoader color={"#01663E"} loading={loading} size={150} />
      ) : (
        <div className="flex flex-col w-full">
          {/* Top Section */}
          <div className="w-full bg-[#fafbfd] px-5 z-10">
            <div className="w-full px-8 mx-auto lg:container">
              <div className="flex justify-start items-center">
                <h1 className="text-5xl font-semibold text-gray-800">
                  Requested Events
                </h1>
              </div>
              {/* <Stats /> */}
              <div className="flex flex-col mt-6 gap-2 sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap">
                {/* Stats cards components */}
                <Stating
                  icon={<MdOutlinePeopleAlt size={48} color="#f66e6e" />}
                  title="Event Organisers"
                  value={request_stats_table.event_organisers_num}
                />

                <Stating
                  icon={<MdPendingActions size={48} color="#f66e6e" />}
                  title="In Queue"
                  value={request_stats_table.events_in_queue}
                />

                <Stating
                  icon={<LiaBalanceScaleSolid size={48} color="#f66e6e" />}
                  title="Under Review"
                  value={request_stats_table.events_under_review}
                />

              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="w-full h-[400px] px-5 mx-auto lg:container mt-10">
            {/* Add margin-top to separate the sections */}
            <RequestTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default Requests;
