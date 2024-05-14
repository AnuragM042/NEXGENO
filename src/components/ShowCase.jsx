import React from "react";
import AnimatedCard from "./AnimatedCard";

const ShowCase = () => {
  return (
    <div className=" bg-[#030F25]  grid place-items-center">
      <h1 className="text-4xl text-white my-10 font-bold">
        Latest Work <span className="text-primary">Showcase</span>
      </h1>
      <h1 className="text-white mx-auto text-center mb-10">
        Proactively enable process-centric services ratherscenarios to <br />
        syndicate future-proof outside the thinking.
      </h1>
      <AnimatedCard />
    </div>
  );
};

export default ShowCase;
