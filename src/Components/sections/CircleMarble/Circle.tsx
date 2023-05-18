import { useEffect, useState } from "react";
import styles from "./circle.module.css";
import Image from "next/image";
import { Marble, circlesList, gapCircle } from "./constants";

const circleInitialState = {
  imgCircle: "",
  imgMarble: "",
  name: "",
};

const Circle = () => {
  const [circleToFocus, setCircleToFocus] =
    useState<Marble>(circleInitialState);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const handleOnHover = (index: number) => () => {
    setCircleToFocus(circlesList[index]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento de desplazamiento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[500px] h-[500px] lg:w-[30vw] lg:h-[30vw]">
        <div className="absolute border-2 border-dark-100 inset-0 m-auto w-[300px] h-[296px] flex justify-center items-center rounded-full ">
          <div className="flex flex-col justify-start items-center p-2 bg-fontWhite w-[248px] h-[244px] rounded-full">
            <Image
              className="w-full h-auto object-cover"
              height={110}
              width={128}
              src={circleToFocus.imgMarble || circlesList[0].imgMarble}
              alt={`picture of ${circleToFocus.imgMarble}`}
            />
            <p className="text-sm md:text-base text-center">
              {circleToFocus.name || circlesList[0].name}
            </p>
          </div>
        </div>
        <div
          className={`${styles["parent-circle"]} relative z-[10]`}
          style={{
            transform: `rotate(${scrollPosition / 8}deg)`,
          }}
        >
          {circlesList.map((circle, index) => (
            <div
              onMouseEnter={handleOnHover(index)}
              key={index}
              style={{
                backgroundImage: `url(${circle.imgCircle})`,
                transform: `rotate(${
                  gapCircle * index++
                }deg) translate(300%) rotate(${gapCircle * index++ * -1}deg)`,
              }}
              className={`${styles["circle"]} hover:cursor-pointer bg-cover`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Circle };
