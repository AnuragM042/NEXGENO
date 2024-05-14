import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const cards = [
    {
      img: "./src/assets/card1.jpg",
      title: "Content strategy can helpengage customers",
      description:
        "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet",
      user: "Alex Collins",
    },
    {
      img: "./src/assets/card2.jpg",
      title: "Coin strategy can help youengage Audience",
      description:
        "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet",
      user: "Alex Collins",
    },
    {
      img: "./src/assets/card3.jpg",
      title: "Crypto Buy and Sell Coinwith Trusted Agency",
      description:
        "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet",
      user: "Alex Collins",
    },
    {
      img: "./src/assets/card1.jpg",
      title: "Coin strategy can help youengage Audience",
      description:
        "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet",
      user: "Alex Collins",
    },
    {
      img: "./src/assets/card2.jpg",
      title: "Crypto Buy and Sell Coinwith Trusted Agency",
      description:
        "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet",
      user: "Alex Collins",
    },
  ];

  return (
    <div className="px-44 bg-card pb-10">
      <h1 className="text-4xl font-bold py-10 text-center">
        We Are Here To{" "}
        <span className="text-blue-500 font-normal">Share Story</span> <br />{" "}
        From Latest News
      </h1>

      <div className="slider-container">
        <Slider {...settings}>
          {cards.map((card, index) => {
            return (
              <Card
                img={card.img}
                description={card.description}
                title={card.title}
                user={card.user}
                key={index}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;

function Card({ img, title, description, user }) {
  return (
    <div className="mx-5">
      <img src={img} className="rounded-t-md" />
      <div className="px-5 border bg-white rounded-md max-w-[390px]">
        <h1 className=" font-semibold text-xl my-2">{title}</h1>
        <span className=" text-gray-600 text-sm">{description}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-2">
            <img className="h-10" src="./src/assets/person.png" />
            <h1>{user}</h1>
          </div>
          <div className="flex items-center gap-2">
            Learn More <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
}
