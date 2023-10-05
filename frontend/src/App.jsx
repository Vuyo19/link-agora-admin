import React from "react";

// Importing Routing
import { Routes, Route, useLocation } from "react-router-dom";

// Importing Pages
import Dashboard from "./pages/Dashboard/Main Page/Dashboard";
import Requests from "./pages/Requests";
import Manage from "./pages/Manage";
import SettingsPage from "./pages/SettingsPage";
import Profile from "./pages/Profile/Profile";
import NeedHelp from "./pages/NeedHelp/NeedHelp";
import PersonalInbox from "./pages/Dashboard/Dashboard Sub-Pages/PersonalInbox";
import Noti from "./pages/Noti";
import Login from "./pages/Login/Login";
import EventDetails from "./components/Modals/Request Event Details/EventDetailsModal";

// Importing component
import NavSideBar from "./components/Exterior/Sidebar/NavSidebar";
import NavBar from "./components/Exterior/Navbar/NavBar";

// Importing CSS Style
import "./App";
import LoginLayout from "./pages/LoginLayout";

const App = () => {
  const location = useLocation();

  // Define routes that should show the navbar and sidebar
  const showNavRoutes = [
    "/",
    "/requests",
    "/manage",
    "/settings",
    "/profile",
    "/needhelp",
    "/upcomingevents",
    "/PersonalInbox",
    "/noti",
  ];

  // Check if the current route should show the navbar and sidebar
  const shouldShowNav = showNavRoutes.includes(location.pathname);
  return (
    <div className="flex bg-[#fafbfd] w-screen">
      {shouldShowNav && <NavSideBar />}
      <div className="flex flex-col flex-grow">
        {shouldShowNav && <NavBar />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/needhelp" element={<NeedHelp />} />
            <Route path="/eventDetails" element={<EventDetails />} />
            <Route path="/PersonalInbox" element={<PersonalInbox />} />
            <Route path="/noti" element={<Noti />} />
            {/* Use the layout for the login page */}
            <Route
              path="/login"
              element={
                <LoginLayout>
                  <Login />
                </LoginLayout>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
