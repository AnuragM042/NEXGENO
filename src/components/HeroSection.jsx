import { FaPhoneAlt } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <div className="relative bg-Hero px-40 flex items-center h-full overflow-hidden">
      <div className="text-white">
        <span className="px-5 py-2 bg-white/40 rounded-md flex items-center justify-center w-[350px] gap-5 ">
          <span className="inline-block w-10 h-0.5 rounded-full bg-blue-500"></span>{" "}
          Digital Agency Based on USA
        </span>
        <h1 className="text-4xl xl:text-6xl mt-5">
          Meet the corporate <br /> team for business
        </h1>
        <span className="text-lg xl:text-xl inline-block mt-5">
          Globally develop unique technologies low-risk high yield product{" "}
          <br />
          Seamlessly cultivate extensible solution rather
        </span>
        <div
          className="mt-5 flex flex-col  xl:flex xl:flex-row xl:items-center items-start gap-10
      "
        >
          <button className="bg-primary flex gap-2 items-center font-medium px-10 py-5 rounded-full text-white ">
            Get Start Now <FiChevronsRight size={25} />
          </button>
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary">
            <FaPhoneAlt size={25} />
          </div>
          <div>
            Call Everyday
            <h1 className="text-2xl">+98 321 (7690) 326</h1>
          </div>
        </div>
      </div>
      <img
        src="./src/assets/hero second.png"
        className="hidden xl:block h-[720px] absolute top-10 right-14 md:top-32 md:right-32 lg:top-24 lg:right-24 xl:top-40 xl:-right-20 "
      />
      <img
        src="./src/assets/round.png"
        className="hidden xl:block absolute animate-spin-slow w-[28%] top-[3rem] right-[4.5rem] md:top-20 md:right-40 lg:top-28 lg:right-32 xl:top-[13rem] xl:right-[0rem]"
      />
    </div>
  );
}
