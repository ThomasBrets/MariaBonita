import React from "react";

import { historyData } from "../data";
import videoSource from "../assets/video/historyVideo.mp4";

const MyHistory = () => {
  const { pretitle, title, subtitle1, subtitle2, btnText, image } = historyData;

  return (
    <section className="h-[500px]">
      <div className="container mx-auto flex flex-row justify-center items-center space-x-[200px]">
        {/* texto */}
        <div className="w-[400px]">
          <p className="font-primary text-[15px] pb-1 font-semibold text-orange-400">
            {pretitle}
          </p>
          <p className="font-primary text-[50px] pb-2">{title}</p>
          <p className="font-primary text-[20px] pb-4">{subtitle1}</p>
          <p className="font-primary text-[20px] pb-4">{subtitle2}</p>
        </div>
        {/* imagen */}
        <div className="w-[350px]">
          <video className="rounded-full" autoPlay loop>
            <source src={videoSource} type="video/mp4" />
            Tu navegador no admite la reproducción de videos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default MyHistory;
