import React from "react";
import { FaPhoneVolume } from "react-icons/fa";

const Call = () => {
  return (
    <div className="px-44 mt-10 bg-call flex items-center justify-between text-white h-[40vh] bg-no-repeat bg-cover bg-center">
      <h1 className="text-4xl font-medium">
        Lets get Your Business <br />
        Project Started!
      </h1>

      <div className="relative">
        <img
          src="./src/assets/round-image.png"
          className=" h-28  w-28 animate-spin-slow"
        />
        <div className="w-24 absolute h-24 left-[8px] top-2 rounded-full bg-white text-primary -rotate-45 flex items-center justify-center ">
          <FaPhoneVolume size={35} />
        </div>
      </div>
      <div>
        <h1 className="text-4xl">+ 98 376 (2890) 100 </h1>
        <h1 className="text-2xk">example@gmail.com</h1>
      </div>
    </div>
  );
};

export default Call;
