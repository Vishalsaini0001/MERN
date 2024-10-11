import React from "react";
import videoji from "../assets/videos/videoji.mp4";

const PageNotFound = () => {
  return (
    <div className="">
        <div className="h-screen  bg-fixed ">
      {/* <video src={videoji} autoPlay loop muted></video> */}
      <video  muted autoPlay className="w-full bg-fixed h-auto">
        <source src={videoji} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="w-full h-screen flex justify-center items-center text-3xl tracking-widest bg-myimage1 bg-fixed bg-cover">404 Page Not Found!</div>
      
    </div>
  );
};

export default PageNotFound;
