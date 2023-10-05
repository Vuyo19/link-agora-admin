import React from "react";
import { useState, useEffect } from "react";
import Stating from "../components/Card/Statistics/Stating";
import BarLoader from "react-spinners/BarLoader";

// Importing React-Icons
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { LiaBalanceScaleSolid } from "react-icons/lia";

// Importing Components
import RequestTable from "../components/Tables/Request/RequestTable";

const Requests = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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
              <div className="flex justify-start items-center -mt-28">
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
