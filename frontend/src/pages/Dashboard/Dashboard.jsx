import React from "react";
import useWindowSize from "../../components/useWindowSize";

// Importing Components
import StatsCard from "../../components/Cards/StatsCard";
import MyEvents from "../../components/MyEvents/MyEvents";



// Importing React-Icons
import { TbCalendarStar } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuCalendarCheck2 } from "react-icons/lu";
import { BiError } from "react-icons/bi";

// Importing CSS Style
import "./Dashboard.css";

import { Link } from 'react-router-dom'; // Import the Link component from React Router


const Dashboard = () => {
  const windowSize = useWindowSize();

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h1 className="page-heading">Welcome back Hendrik,</h1>
        <p className="page-subtitle">This is what we've got for you today.</p>
        {/* Stats  card aligned 3 per row */}

        <div className="button-group">
          <StatsCard
            title="Upcoming Events"
            icon={<TbCalendarStar  color="#016138" />}
            subtitle="12 upcoming events"
            info={<Link to="/upcomingevents">Click to view all your upcoming events</Link>}
          />
          <StatsCard
            title="Completed Events"
            icon={<LuCalendarCheck2  color="#016138" />}
            iconBackgroundColor="#edf6ff"
            subtitle="8 complted events"
            info="Click to view all your completed events"
            className="w-80"
          />


        </div>

        <div className="button-group-2">
          <StatsCard
            title="Flagged Events"
            icon={<BiError  color="#016138" />}
            iconBackgroundColor="#f6f2ff"
            subtitle="4 flagged events"
            info="Click to view all your upcoming events"
          />
          <StatsCard
            title="Declined Events"
            icon={<RiDeleteBin5Line color="#016138" />}
            iconBackgroundColor="#fdf0f6"
            subtitle="currently empty"
            info="Click to view all your completed events"
          />

        </div>

        <div class="flex items-center mt-12">
  <hr class="my-12 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />

  <p class="mr-4 ml-4 text-gray-400 font-light">September 2023</p>
  <hr class="my-12 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />
</div>

      </div>
      <div className="newsfeed">
        {windowSize.width && windowSize.width > 780 ? (
      <MyEvents/>

  ) : null}

      </div>
    </div>
  );
};

export default Dashboard;
