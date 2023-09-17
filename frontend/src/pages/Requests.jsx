import React from "react";

// Importing Components
import RequestTable from "../components/Tables/RequestTable";

const Requests = () => {
  return (
    <div className="flex items-center min-h-screen bg-[#fafbfd]">
      <div className="w-full px-5 mx-auto lg:container">
        {/* Table */} 
        <RequestTable />
      </div>
    </div>
  );
};

export default Requests;