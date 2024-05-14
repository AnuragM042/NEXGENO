import React from "react";
import Photo1 from "../assets/photo1.jpeg";
import Photo2 from "../assets/photo2.jpeg";
import Photo3 from "../assets/photo3.jpeg";
import Photo4 from "../assets/photo4.png";
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Marketing",
    desc: "Solution for Financial",
  },
  {
    id: 2,
    img: Photo2,
    title: "Design",
    desc: "Technology & Business",
  },
  {
    id: 3,
    img: Photo3,
    title: "Marketing",
    desc: "Technology & Business",
  },
  {
    id: 4,
    img: Photo4,
    title: "Sunrise",
    desc: "Technology & Business",
  },
];
const AnimatedCard = () => {
  return (
    <div className="container mx-auto px-40">
      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-0">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-blue-500/50 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {desc}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCard;
