import React from "react";
import { useState, useEffect } from "react";

import BarLoader from "react-spinners/BarLoader";
import TitleContainer from "../../../components/Decoration/TitleContainer";
import backgroundImage from "./../../../assets/titleBoxBackgroundRed.png";
import { AiFillFlag } from "react-icons/ai";
import FlaggedTable from "../../../components/Tables/Events Flagged/FlaggedTable";

const FlaggedEvents = () => {
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
        <div className="flex flex-col w-full">
          <div className="w-full bg-[#fafbfd] mb-6 z-10">
            {/* Page Content */}
            <div className="w-full px-20 mx-auto lg:container -mt-24">
              {" "}
              {/* Adjust margin-top here */}
              <TitleContainer
                title="Flagged events"
                subtitle="Your one-stop destination to viewing all flagged events"
                icon={<AiFillFlag size={32} color="black" />}
                backgroundImage={backgroundImage}
              />
            </div>
          </div>
          <div className="w-full h-[300px] px-20 mx-auto lg:container mt-10">
            {" "}
            <FlaggedTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default FlaggedEvents;

// Your one-stop destination to viewing all flagged events
{
  /* <TitleDecoration
          title="Flagged"
          subtitle="Take control of your events! Manage them right here"
          overlayImage={overlayImage1}
          backgroundImages={[backgroundImages1, backgroundImages2, backgroundImages3]}/> */
}
