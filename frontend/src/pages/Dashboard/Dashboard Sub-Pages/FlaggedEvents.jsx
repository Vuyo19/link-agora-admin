import React from "react";
import { useState, useEffect } from "react";

import BarLoader from "react-spinners/BarLoader";

import TitleDecoration from "../../../components/Card/Carousel/TitleDecoration";
import overlayImage1 from '../../../assets/decoOverlay.png';
import backgroundImages1 from '../../../assets/invitation-img-1.jpeg';
import backgroundImages2 from '../../../assets/invitation-img-2.jpeg';
import backgroundImages3 from '../../../assets/invitation-img-3.jpeg';
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
          <div className="w-full px-20 mx-auto lg:container -mt-24"> {/* Adjust margin-top here */}
          <TitleDecoration
          title="Events"
          subtitle="Take control of your events! Manage them right here"
          overlayImage={overlayImage1}
          backgroundImages={[backgroundImages1, backgroundImages2, backgroundImages3]}/>
          </div>
        </div>
        <div className="w-full h-[300px] px-20 mx-auto lg:container mt-10">
          {" "}
          <FlaggedTable/>
        </div>
      </div>
            )}
    </div>
  );
};

export default FlaggedEvents;
