import Slider from "react-slick";

import { useScrollIntoView } from "@/Hooks/useScrollIntoView";
import styles from "./projects.module.css";
import img from "public/assets/img/Rectangle 228project.jpg";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/Components/Layout/Modal";
const Projects = () => {
  const projects = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderProps = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    dotsClass: styles.button__bar,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
    autoplay: true,
    appendDots: (dots: React.ReactNode) => {
      return (
        <div>
          <ul className="flex justify-center gap-[10px] overflow-x-auto max-w-[90%] mx-auto">
            {dots}
          </ul>
        </div>
      );
    },
    customPaging: (index: number) => {
      return (
        <div className="py-2 hover:cursor-pointer">
          <button className="w-[20px] h-[1px] bg-dark-500 text-fontWhite"></button>
        </div>
      );
    },
  };
  const { CScrollIntoView } = useScrollIntoView("/#projects");
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <CScrollIntoView>
      <section className="py-16 bg-dark-100">
        <h2 className="text-center uppercase text-fontWhite text-3xl font-semibold mb-8">
          Projects
        </h2>
        <Slider {...sliderProps}>
          {Array.from({ length: 50 }, (project, index) => (index = index)).map(
            (project, index: number) => (
              <div
                onClick={() => setShowModal(!showModal)}
                key={index}
                className={`${styles.card}`}
              >
                <div className="relative h-full items-center flex flex-col justify-end z-10">
                  <Image
                    className="rounded object-cover h-full w-full z-10"
                    src={img}
                    alt="img"
                  />
                  <div
                    className={`absolute flex flex-col justify-end text-fontWhite inset-0 z-20 p-4 hover:cursor-pointer ${styles["card-content-text"]}`}
                  >
                    <p className="font-semibold uppercase">
                      stairs for a house {index + 1}
                    </p>
                    <span>Houston, Texas</span>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
        <div onClick={() => setShowModal(false)}>
          <Modal open={showModal} />
        </div>
      </section>
    </CScrollIntoView>
  );
};

export { Projects };
