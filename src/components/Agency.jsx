import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { VscFileSubmodule } from "react-icons/vsc";

const Agency = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-between text-white rounded-md bg-Agency my-20 mx-10  lg:mx-40 bg-cover bg-center bg-no-repeat h-[60vh] ">
      <div className="flex-1  mt-5 lg:mt-0  px-10">
        <FiMonitor className="text-5xl mb-2" />
        <h1 className="text-2xl mb-5">Build a Business Websites</h1> Dynamically
        promote economically sound experiences whereas Proactively enable
        process-centric services rather More About
        <button className="mt-5 flex gap-2 items-center  px-10 py-5 bg-primary text-white rounded-full">
          More About
          <FaArrowRightLong />
        </button>
      </div>
      <div className="flex-1 px-10">
        <VscFileSubmodule className="text-5xl mb-2" />
        <h1 className="text-2xl mb-5">Search Engine Optimize</h1> Dynamically
        promote economically sound experiences whereas Proactively enable
        process-centric services rather
        <div className=" w-[60px] text-white flex items-center justify-center h-[60px] bg-[#FF9A62] mt-5 rounded-full">
          <FaPlay className="animate-ping" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Agency;
