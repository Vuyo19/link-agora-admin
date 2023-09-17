import React from "react";

// Importing Components
import ManageTable from "../components/Tables/ManageTable";

const Manage = () => {
  return (
    <div className="flex items-center min-h-screen bg-[#fafbfd]">
      <div className="w-full px-5 mx-auto lg:container">
        {/* Table */}
        <ManageTable />
      </div>
    </div>
  );
};

export default Manage;
