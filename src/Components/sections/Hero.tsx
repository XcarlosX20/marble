import Image from "next/image";
import bg from "public/assets/img/bg-hero.jpg";
import { Button } from "../Layout/Button";
import kitchen from "public/assets/svg/Vectorkitchen.svg";
import customDesign from "public/assets/svg/ruler_svgrepo.comcustomdesign.svg";
import bathroom from "public/assets/svg/Vectorbathroom.svg";
import flooring from "public/assets/svg/Vectorflooring.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const sliderProps = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const heroCards = [
    {
      icon: kitchen,
      name: "Kitchen",
      description:
        "Upgrade your kitchen with custom marble features that are both stylish and durable.",
    },
    {
      icon: bathroom,
      name: "Bathroom",
      description:
        "Transform your bathroom into a luxurious oasis with custom marble vanities, showers, and flooring.",
    },
    {
      icon: flooring,
      name: "Flooring",
      description:
        "Elevate your space with beautiful and durable marble flooring.",
    },
    {
      icon: customDesign,
      name: "Custom design",
      description:
        "Create a one-of-a-kind feature for your space with our custom marble design services.",
    },
  ];
  return (
    <>
      <div className="bg-light-200 relative">
        <div className="absolute overflow-hidden w-full h-full z-5 top-0 left-0 right-0 bottom-0">
          <Image
            className="h-[100vh] w-[100vw] object-cover"
            src={bg}
            alt="bg-hero"
          />
        </div>
        <div className="relative w-full h-full z-10 pb-12">
          <div className="pt-[225px] px-8">
            <div className="flex flex-col gap-14">
              <article className="flex m-h-[20rem] flex-col items-start gap-4 w-full md:w-[646px] md:pl-20 lg:pl-48">
                <h2 className="font-bold text-3xl">
                  Crafting Timeless beauty with the finest quality marble
                  materials
                </h2>
                <p className="font-medium">
                  Experience the beauty and functionality of marble. Our expert
                  work enhances spaces. Trust us for quality and attention to
                  detail.
                </p>
                <Button>FIND OUT MORE</Button>
              </article>
              <div className="md:hidden ">
                <Slider className="w-60 mx-auto" {...sliderProps}>
                  {heroCards.map((card) => (
                    <div key={card.name} className="bg-[#2D2D2D] h-[20rem] p-8">
                      <div className="flex flex-col gap-4">
                        <Image src={card.icon} alt="kitchen" />
                        <p className="text-blue-100 font-medium uppercase">
                          {card.name}
                        </p>
                        <p className="text-fontWhite">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="md:grid grid-cols-4 gap-4 mx-20 lg:mx-[160px] hidden">
                {heroCards.map((card) => (
                  <div key={card.name} className="bg-[#2D2D2D] p-8">
                    <div className="flex flex-col gap-4">
                      <Image src={card.icon} alt="kitchen" />
                      <p className="text-blue-100 font-medium uppercase">
                        {card.name}
                      </p>
                      <p className="text-fontWhite">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Hero };
