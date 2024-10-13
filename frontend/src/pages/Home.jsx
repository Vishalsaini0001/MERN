import React from "react";
import computer from "../assets/images/computer.jpg";

const Home = () => {
  return (
    <main>
      <div className="w-full h-screen bg-myimage1 bg-fixed bg-cover ">
        <div className="w-full h-full">
          <h2 className="text-center pt-32 text-7xl font-bold tracking-wider">Skills speak louder <br /> than words</h2>
          <p className="text-center text-lg font-light pt-6 text-gray-800">We help companies develop the strongest tech teams around. We help <br /> candidates sharpen their tech skills and pursue job opportunities.</p>
          <div className="flex justify-center items-center gap-6 mt-10">
            <button className="px-14 py-2 rounded-sm text-white bg-green-700">Sign Up</button>
          <button className="px-10 py-2 border rounded-sm border-black">Request demo</button>
          
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-gradient-to-t from-red-200 to-red-100"></div>
      <div className="w-full h-screen flex justify-center items-center bg-myimage2 bg-fixed bg-cover text-3xl tracking-widest">
      <div className="w-full h-full">
          <h2 className="text-center pt-32 text-7xl font-bold tracking-wider">Skills speak louder <br /> than words</h2>
          <p className="text-center text-lg font-light pt-6 text-gray-800">We help companies develop the strongest tech teams around. We help <br /> candidates sharpen their tech skills and pursue job opportunities.</p>
          <div className="flex justify-center items-center gap-6 mt-10">
            <button className="px-14 py-2 rounded-sm text-white bg-green-700">Sign Up</button>
          <button className="px-10 py-2 border rounded-sm border-black">Request demo</button>
          
          </div>
        </div>
      </div>
      <div className="w-full h-1 flex justify-center items-center bg-black">
       
      </div>
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
