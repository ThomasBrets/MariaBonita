import React from "react";

import { historyData } from "../data";
import videoSource from "../assets/video/historyVideo.mp4";

const MyHistory = () => {
  const { pretitle, title, subtitle1, subtitle2 } = historyData;

  return (
    <section className="h-[500px] pt-[50px]">
      <div className="container mx-auto flex flex-row justify-center items-center space-x-[250px]">
        {/* texto */}
        <div className="w-[400px]">
          <p className="font-primary text-[16px] pb-1 font-semibold text-orange-400">
            {pretitle}
          </p>
          <p className="font-primary text-[50px] pb-2">{title}</p>
          <p className="font-primary text-[21px] pb-4">{subtitle1}</p>
          <p className="font-primary text-[21px] pb-4">{subtitle2}</p>
        </div>
        {/* imagen */}
        <div className="w-[250px]">
          <video className="rounded-full" autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
            Tu navegador no admite la reproducción de videos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default MyHistory;
