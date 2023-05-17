import Image from "next/image";
import bg from "public/assets/img/bg-hero.jpg";
import { Button } from "../Layout/Button";
import arrow from "public/assets/svg/arrowPointer.svg";
import kitchen from "public/assets/svg/Vectorkitchen.svg";
import customDesign from "public/assets/svg/ruler_svgrepo.comcustomdesign.svg";
import bathroom from "public/assets/svg/Vectorbathroom.svg";
import flooring from "public/assets/svg/Vectorflooring.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Galery } from "./Galery/Galery";
import { SectionType } from "./Galery/constants";
import { useState } from "react";

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
    section: SectionType.KITCHEN,
  },
  {
    icon: bathroom,
    name: "Bathroom",
    description:
      "Transform your bathroom into a luxurious oasis with custom marble vanities, showers, and flooring.",
    section: SectionType.BATRHOOM,
  },
  {
    icon: flooring,
    name: "Flooring",
    description:
      "Elevate your space with beautiful and durable marble flooring.",
    section: SectionType.FLOOR,
  },
  {
    icon: customDesign,
    name: "Custom design",
    description:
      "Create a one-of-a-kind feature for your space with our custom marble design services.",
    section: SectionType.CUSTOM,
  },
];

const Hero = () => {
  const [sectionSelected, setSectionSelected] = useState<SectionType | null>(
    null
  );

  const handleViewOurWork = (section: SectionType) => () => {
    console.log(section);
    setSectionSelected(section);
  };

  return (
    <>
      <div className="relative bg-gray">
        <div className="absolute overflow-hidden w-full h-full z-6 top-0 left-0 right-0 bottom-0">
          <Image
            className="h-[90vh] w-[100vw] object-cover"
            src={bg}
            alt="bg-hero"
          />
        </div>
        <div className="relative w-full h-full z-10 pb-14">
          <div className="pt-[225px] px-8 md:px-20 max-w-[1148px] m-auto">
            <div className="flex flex-col">
              <article className="m-h-[20rem]w-full md:max-w-[646px]">
                <h2 className="font-bold text-4xl">
                  Crafting Timeless beauty with the finest quality marble
                  materials
                </h2>
                <p className="font-medium md:max-w-[450px] mt-[25px]">
                  Experience the beauty and functionality of marble. Our expert
                  work enhances spaces. Trust us for quality and attention to
                  detail.
                </p>
                <Button className="mt-[25px]">FIND OUT MORE</Button>
              </article>
              <div className="md:hidden">
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
              <div className="md:grid grid-cols-4 gap-4 hidden mt-[300px]">
                {heroCards.map((card) => (
                  <div
                    key={card.name}
                    className="bg-[#2D2D2D] p-[35px] h-[370px]"
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <Image src={card.icon} alt="kitchen" />
                        <p className="text-blue-100 font-medium uppercase mt-[28px]">
                          {card.name}
                        </p>
                        <p className="text-fontWhite mt-[23px] text-sm">
                          {card.description}
                        </p>
                      </div>
                      <div
                        className="text-fontWhite flex space-x-2 hover:underline decoration-1 hover:cursor-pointer"
                        onClick={handleViewOurWork(card.section)}
                      >
                        <p>View our work</p>
                        <Image src={arrow} alt="arrow" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Galery section={sectionSelected} />
      </div>
    </>
  );
};

export { Hero };
