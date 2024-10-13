import React, { useState, useEffect } from 'react';

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen">
   
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          transform: `translateY(${offsetY * 0.5}px)`, // Slow down the background movement
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative flex items-center justify-center h-full text-white z-10">
        <div className="p-10 text-center bg-black bg-opacity-50 rounded-xl">
          <h1 className="text-5xl font-bold">Dynamic Parallax Effect</h1>
          <p className="mt-4 text-lg">Scroll down to see the parallax effect in action!</p>
        </div>
      </div>
    </div>
  );
};

export default Parallax;