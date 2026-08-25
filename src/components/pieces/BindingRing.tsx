"use client";

import { useEffect, useState } from "react";


const BindingRing = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="w-20 bg-gray-400 flex flex-col items-center justify-around py-8 z-20 shadow-inner overflow-hidden">
      {Array.from({ length: Math.ceil(screenHeight / 70) }).map((_, index) => (
        <svg
            key={index}
          className="w-16 h-14 text-gray-600 drop-shadow-lg rotate-90"
          viewBox="0 0 40 50"
          fill="none"
          stroke="#001f3f"
          strokeWidth="10"
        >
          <path
            d="M20 5 C 35 5, 35 45, 20 45"
            strokeLinecap="round"
            className="text-gray-300 opacity-5"
          />
          <path
            d="M20 5 C 5 5, 5 45, 20 45"
            strokeLinecap="round"
            className="text-gray-500"
          />
        </svg>
      ))}
    </div>
  );
};

export default BindingRing;
