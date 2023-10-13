import React from "react";
import { useState, useEffect } from "react";

import "../pages/House-Keeping/TableStyling.css"

// Importing Components
import RequestTable from "../components/Tables/Request/RequestTable";
import Stating from "../components/Card/Statistics/Stating";
import BarLoader from "react-spinners/BarLoader";

// Importing React-Icons
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { LiaBalanceScaleSolid } from "react-icons/lia";

const Requests = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    // Web Page Frame
    <div className="flex flex-col items-center justify-center h-full bg-[#fafbfd]">
      {loading ? (
        <BarLoader color={"#01663E"} loading={loading} size={150} />
      ) : (
        <div className="w-full">
          {/* Top Section */}
          <div className="w-full bg-[#fafbfd] z-10">
            <div className="w-full px-20 mx-auto mt-10 lg:container">
              <div className="flex justify-center items-center">
                <h1 className="text-5xl font-semibold uppercase text-gray-800">
                  Event Requests
                </h1>
              </div>
              <div className="flex justify-center items-center mt-4">
                <p className="font-medium text-[#777777]">
                  View all requested events! Manage them right here.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center mt-6 gap-2 sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap">
                {/* Stats cards components */}
                <Stating
                  icon={<MdOutlinePeopleAlt size={48} color="#f66e6e" />}
                  title="Event Organisers"
                  value="10"
                />

                <Stating
                  icon={<MdPendingActions size={48} color="#f66e6e" />}
                  title="Pending Events"
                  value="5"
                />

                <Stating
                  icon={<LiaBalanceScaleSolid size={48} color="#f66e6e" />}
                  title="Total Appeals"
                  value="2"
                />

                <Stating
                  icon={<BsCalendar2Event size={40} color="#f66e6e" />}
                  title="Total Events"
                  value="12"
                />
              </div>
            </div>
          </div>

          {/* Table Section */}
<div className="w-full px-20 mx-auto lg:container mt-6">
  <div className="fixed-table-height">
    <RequestTable />
  </div>
</div>

        </div>
      )}
    </div>
  );
};

export default Requests;
