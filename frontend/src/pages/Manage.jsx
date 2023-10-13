import React from "react";
import { useState, useEffect } from "react";

import "../pages/House-Keeping/TableStyling.css"

// Importing Components
import ManageTable from "../components/Tables/Manage/ManageTable";
import Stating from "../components/Card/Statistics/Stating";
import BarLoader from "react-spinners/BarLoader";
import historyStatResponse from "../components/Tables/Manage/Response/EventHistoryStatResponse";


// Importing React-Icons
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { AlertTriangle } from "lucide-react";

const Manage = () => {
  const [loading, setLoading] = useState(false);
  const [history_stats_table, setHistoryStatsTable] = useState([]) // Recording the history stats. 

  useEffect(() => { 

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);  

    const fetchData = async () => {
      try {
        const responseData = await historyStatResponse();
        setHistoryStatsTable(responseData);
      } catch (error) {
        console.error('Error fetching history stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();


  }, []);   
  
  return (
    // Web Page Frame
    <div className="flex flex-col items-center justify-center h-full bg-[#fafbfd]">
      {loading ? (
        <BarLoader color={"#01663E"} loading={loading} size={150} />
      ) : (
      <div className="flex flex-col w-full">
        {/* Top Section */}
        <div className="w-full bg-[#fafbfd] px-5 z-10">
          <div className="w-full px-8 mx-auto lg:container">
            <div className="flex justify-start items-center">
              <h1 className="text-5xl font-semibold text-gray-800">
                Manage Events
              </h1>
            </div>
            {/* <Stats /> */}
            <div className="flex flex-col mt-6 gap-2 sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap">
              {/* Stats cards components */}
              <Stating
                icon={<MdOutlinePeopleAlt size={48} color="#5AC369" />}
                title="Event Organisers"
                value={history_stats_table.total_organisers}
              />

              <Stating
                icon={<MdPendingActions size={48} color="#5AC369" />}
                title="Approved Events"
                value={history_stats_table.approved_events}
              />

              <Stating
                icon={<LiaBalanceScaleSolid size={48} color="#5AC369" />}
                title="Declined Events"
                value={history_stats_table.declined_events}
              />

              <Stating
                icon={<BsCalendar2Event size={40} color="#5AC369" />}
                title="Total Events"
                value={history_stats_table.total_events}
              />
            </div>
          </div>
        </div>

          {/* Table Section */}
<div className="w-full px-20 mx-auto lg:container mt-6">
  <div className="fixed-table-height">
    <ManageTable />
  </div>
</div>

        </div>
      )}
    </div>
  );
};

export default Manage;
