import React from "react";
import {
  FaArrowRightLong,
  FaChartArea,
  FaChartBar,
  FaMoneyBill,
} from "react-icons/fa6";
import { FiBarChart, FiBarChart2 } from "react-icons/fi";
import { IoBarChart } from "react-icons/io5";

const Features = () => {
  return (
    <div className="bg-Features bg-cover bg-center px-20 lg:px-40 py-20 text-white">
      <h1 className="font-medium text-5xl text-center  ">
        Checkout Our <span className="text-primary ">Company</span> <br />{" "}
        Services Below
      </h1>
      <div className="flex flex-col lg:flex-row mb-10 mt-10 gap-5">
        <div className="border hover:-translate-y-5 transition-all rounded-md border-[#FF9A62] px-5 py-10">
          <div
            className="h-[100px]  flex items-center justify-center rounded-md mx-auto mb-5 w-[90px] bg-[#FF9A62]"
            style={{ clipPath: "polygon(0% 11%,104% 0,100% 100%,0% 100%)" }}
          >
            <FiBarChart size={50} />
          </div>
          <h1 className="text-2xl text-center mb-2">Smart Business Strategy</h1>
          <h1 className="text-white/60 text-center">
            Monotonectally actualize customer methodologies rather than
          </h1>
          <FaArrowRightLong className="mx-auto mt-5" />
        </div>
        <div className="border hover:-translate-y-5 transition-all rounded-md border-[#2875FF] p-5">
          <div
            className="h-[100px]  flex items-center justify-center rounded-md mx-auto mb-5 w-[90px] bg-[#2875FF]"
            style={{ clipPath: "polygon(0% 0%,100% 9%,100% 100%,0% 100%)" }}
          >
            <FiBarChart size={50} />
          </div>
          <h1 className="text-2xl mb-2 text-center">Trend Market Analysis</h1>
          <h1 className="text-white/60 text-center">
            Monotonectally actualize customer methodologies rather than
          </h1>
          <FaArrowRightLong className="mx-auto mt-5" />
        </div>
        <div className="border hover:-translate-y-5 transition-all rounded-md border-[#54D7AF] p-5">
          <div
            className="h-[100px]  flex items-center justify-center rounded-md mx-auto mb-5 w-[90px] bg-[]"
            style={{ clipPath: "polygon(0% 11%,104% 0,100% 100%,0% 100%)" }}
          >
            <IoBarChart size={50} />
          </div>
          <h1 className="text-2xl  mb-2 text-center">
            Business Growing <br /> Strategy
          </h1>
          <h1 className="text-white/60 text-center">
            Monotonectally actualize customer methodologies rather than
          </h1>
          <FaArrowRightLong className="mx-auto mt-5" />
        </div>
        <div className="border hover:-translate-y-5 transition-all rounded-md border-[#F05D8A] p-5">
          <div className="flex justify-start flex-col items-center text-center">
            <div
              className="h-[100px]  flex items-center justify-center rounded-md mx-auto mb-5 w-[90px] bg-[#F05D8A]"
              style={{ clipPath: "polygon(0% 0%,100% 9%,100% 100%,0% 100%)" }}
            >
              <FaMoneyBill size={50} />
            </div>
            <h1 className="text-2xl mb-2 text-center">
              Smart Money <br /> Transfer
            </h1>
            <h1 className="text-white/60">
              Monotonectally actualize customer methodologies rather than
            </h1>
          </div>
          <FaArrowRightLong className="mx-auto mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Features;
