import React from "react";
import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import MyInbox from "../../../components/Mail/MyInbox";


const PersonalInbox = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="flex items-center justify-center h-full bg-[#fafbfd]">
      {loading ? (
        <BarLoader color={"#01663E"} loading={loading} size={150} />
      ) : (
        /* Flex Container for Horizontal Alignment */
        <div className="flex flex-col w-full -mt-44">
          {/* Top Section */}
          <div className="w-full bg-[#fafbfd] px-5 z-10">
            <div className="w-full px-5 mx-auto lg:container">
              <div className="flex justify-center items-center">
                <h1 className="text-5xl font-semibold text-gray-800">
                  Personal Inbox
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-md font-medium uppercase tracking-widest text-gray-800 lg:text-sm mt-4">
                Your Hub for Communication.
                </p>
              </div>
              
            </div>
          </div>

          {/* Table Section */}
          <div className="w-full h-[300px] px-5 mx-auto lg:container">
            <MyInbox/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInbox;
