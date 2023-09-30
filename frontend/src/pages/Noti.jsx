import React from "react";
import NotificationCenter from "../components/Exterior/Notification/NotificationCenter";

const Noti = () => {
  return (
    <div className="flex items-center min-h-screen bg-[#fafbfd]">
      <div className="w-full px-5 mx-auto lg:container">
        {/* Table */}
        <NotificationCenter />
      </div>
    </div>
  );
};

export default Noti;
