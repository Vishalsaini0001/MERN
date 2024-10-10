import React from "react";
import computer from "../assets/images/computer.jpg";

const Home = () => {
  return (
    <main>
      <div className="w-full h-screen flex justify-center items-center bg-myimage1 bg-fixed bg-cover text-3xl tracking-widest">
        Hey How's Doing
      </div>
      <div className="w-full h-screen bg-gradient-to-t from-red-200 to-red-100"></div>
      <div className="w-full h-screen flex justify-center items-center bg-myimage2 bg-fixed bg-cover text-3xl tracking-widest">
        Hey! this is second images
      </div>
      <div className="w-full h-screen bg-gradient-to-t from-red-300 to-red-200"></div>
      <div className="w-full h-screen flex justify-center items-center bg-myimage3 bg-fixed bg-cover text-3xl tracking-widest">
        Hey How are you
      </div>
      <div className="w-full h-screen bg-gradient-to-t from-red-400 to-red-300"></div>
      <div className="w-full h-screen flex justify-center items-center bg-myimage4 bg-fixed bg-cover text-3xl tracking-widest">
        Hey what are you doing
      </div>
      <div className="w-full h-screen bg-gradient-to-t from-red-500 to-red-400"></div>
      <div className="w-full h-screen flex justify-center items-center bg-myimage5 bg-fixed bg-cover text-3xl tracking-widest">
        Hey this is another image
      </div>
    </main>
  );
};

export default Home;
