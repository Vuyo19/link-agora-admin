import React from "react";
import "./Stating.css"; // Import the CSS file

const Stating = ({ icon, title, value }) => {
  return (
    <div className="stating-container">
      <div className="mb-3 mr-6 max-w-screen-xl">
        <div className="flex flex-col">
          {/* sm:flex-row sm:flex-wrap */}
          <div className="stating-card">
            <div className="content-position">
               {icon}
            </div>
           
            <div>
              <h4 className="text-value">{value}</h4>
              <p className="text-title">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stating;
