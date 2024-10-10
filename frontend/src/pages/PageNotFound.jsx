import React from "react";
import videoji from "../assets/videos/videoji.mp4";

const PageNotFound = () => {
  return (
    <div className="">
        <div className="h-screen  bg-fixed ">
      <video src={videoji} autoPlay loop muted></video>
      </div>
      <div className="w-full h-screen flex justify-center items-center text-3xl tracking-widest bg-gradient-to-t from-red-300 to-red-200">404 Page Not Found!</div>
      
    </div>
  );
};

export default PageNotFound;
