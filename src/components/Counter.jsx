import React, { useState } from "react";

import { FaAndroid, FaGift, FaUserTie } from "react-icons/fa";
import { LuMedal } from "react-icons/lu";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="min-h-[40vh] pt-16 px-40 bg-[#030F25]">
      <div className="flex items-center h-full text-white justify-between">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="flex-1 flex flex-col items-center justify-center text-center mx-auto">
            <div className="w-20 mb-3 h-20 bg-[#FF9A62] rounded-md flex items-center justify-center">
              <FaAndroid size={40} />
            </div>
            {counterOn && (
              <>
                <h1 className="text-4xl">
                  <CountUp start={0} end={85} duration={2} /> K+
                </h1>
                <h1 className="mt-2">Project Done</h1>
              </>
            )}
          </div>
        </ScrollTrigger>
        <ScrollTrigger>
          <div className="flex-1 flex flex-col items-center justify-center text-center mx-auto">
            <div className="w-20 mb-3 h-20 bg-[#2875FF] rounded-md flex items-center justify-center">
              <FaUserTie size={40} />
            </div>
            {counterOn && (
              <h1 className="text-4xl">
                <CountUp start={0} end={12} duration={2} delay={1} /> K+
              </h1>
            )}
            <h1 className="mt-2">Happy Customers</h1>
          </div>
        </ScrollTrigger>
        <ScrollTrigger>
          <div className="flex-1 flex flex-col items-center justify-center text-center mx-auto">
            <div className="w-20 mb-3 h-20 bg-[#2875FF] rounded-md flex items-center justify-center">
              <LuMedal size={40} />
            </div>
            {counterOn && (
              <h1 className="text-4xl">
                <CountUp start={0} end={17} duration={2} delay={1} /> K+
              </h1>
            )}
            <h1 className="mt-2">Years Experience</h1>
          </div>
        </ScrollTrigger>
        <ScrollTrigger>
          <div className="flex-1 flex flex-col items-center justify-center text-center mx-auto">
            <div className="w-20 mb-3 h-20 bg-[#F05D8A] rounded-md flex items-center justify-center">
              <FaGift size={40} />
            </div>
            <h1 className="text-4xl">
              <CountUp start={0} end={83} duration={2} delay={1} /> K+
            </h1>
            <h1 className="mt-2">Years Experience</h1>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Counter;
