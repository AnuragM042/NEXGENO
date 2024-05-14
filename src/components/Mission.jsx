import React, { useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import Accordian, { AccordianItem } from "./Accordian";

const Mission = () => {
  const options = [
    {
      label: "Our Mission",
      content:
        "Progressively harness resource sucking manufactured products after a pandemic infomediaries. Seamlessly deliver parallel benefits rather than strategic services. Holisticly underwhelm state of the art e-markets via low-risk high-yield convergence.",
    },
    {
      label: "Our Vision",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      label: "Our History",
      content:
        "Progressively harness resource sucking manufactured products after a pandemic infomediaries. Seamlessly deliver parallel benefits rather than strategic services. Holisticly underwhelm state of the art e-markets via low-risk high-yield convergence.",
    },
  ];
  const [current, setCurrent] = useState(0);
  return (
    <div className="px-40 my-10">
      <div className="flex items-center">
        <div className="flex-1">
          <h1 className="flex items-center gap-3 font-medium mb-2 text-primary">
            <FaPaperclip /> MISSION & VISION
          </h1>
          <h1 className="text-4xl">The Best Digital Agency Around The World</h1>
          <div className="flex gap-5 mt-5">
            {options.map((item, index) => (
              <div>
                <h1
                  onClick={() => setCurrent(index)}
                  className={` ${
                    current === index && "bg-primary text-white"
                  } font-medium  px-5 py-2.5 border cursor-pointer transition-all rounded-full `}
                >
                  {item.label}
                </h1>
              </div>
            ))}
          </div>
          {<p className="mt-5">{options[current].content}</p>}
        </div>
        <div className="flex-1">
          <Accordian>
            <AccordianItem
              value={1}
              trigger="01 How to Install WordPress in Server?"
            >
              Progressively harnes resource sucking manufactured more products
              pandemic infomedia. Seamlessly deliver parallel benefits in
              strategic services holisticly under.
            </AccordianItem>
            <AccordianItem value={2} trigger="02 What is the Consultation?">
              Progressively harnes resource sucking manufactured more products
              pandemic infomedia. Seamlessly deliver parallel benefits in
              strategic services holisticly under.
            </AccordianItem>
            <AccordianItem
              value={3}
              trigger="03 How to Connect a Device on PC?"
            >
              Progressively harnes resource sucking manufactured more products
              pandemic infomedia. Seamlessly deliver parallel benefits in
              strategic services holisticly under.
            </AccordianItem>
          </Accordian>
        </div>
      </div>
    </div>
  );
};

export default Mission;
