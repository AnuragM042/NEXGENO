import React from "react";
import { FaCheck, FaPaperclip } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="bg-About px-10 lg:px-40 flex items-center justify-end h-full relative bg-cover bg-center">
      <div className="hidden md:block absolute top-[13rem] left-[3rem]">
        <img src="./src/assets/about.png" />
      </div>
      <div className="max-w-lg">
        <h1 className="flex items-center gap-3 font-medium mb-2 text-primary">
          <FaPaperclip /> SINCE 1990
        </h1>
        <h1 className="text-4xl font-bold">
          The Right Place For Your{" "}
          <span className="font-light text-primary">Digital</span> Business
        </h1>
        <h1 className="my-5 font-medium text-xl">
          Dynamically promote economically sound experiences Proactively enable
          process services.
        </h1>
        <h1>
          Dynamically promote economically sound experiences whereas best the
          Proactively enable process-centric services rather than B2B scenarios
          to syndicate future-proof outside the thinking.
        </h1>
        <div className="flex gap-5 mt-5">
          <div
            className="bg-[#F2F6FF] flex items-center gap-5 px-10 py-5 font-medium"
            style={{ clipPath: "polygon(0% 11%,104% 0,100% 100%,0% 100%)" }}
          >
            <FaCheck size={25} />
            Free IT Consulting
          </div>
          <div
            className="bg-[#F2F6FF] flex items-center gap-5 px-10 py-5 font-medium"
            style={{ clipPath: "polygon(0% 0%,100% 9%,100% 100%,0% 100%)" }}
          >
            <FaCheck size={25} />
            Lifetime Dedicated Suports
          </div>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-5">
            <div>
              <img src="./src/assets/person.png" />
            </div>
            <div>
              <h1>David Alexon</h1>
              <h1>CEO & Founder</h1>
            </div>
          </div>
          <button className="flex gap-2 items-center  px-10 py-5 bg-primary text-white rounded-full">
            Discover More
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
