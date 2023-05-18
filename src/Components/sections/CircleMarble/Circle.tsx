import { useState } from "react";
import styles from "./Circle.module.css";
import Image from "next/image";
import { Marble, circlesList } from "./constants";
const Circle = () => {
  const gapCircle: number = 360 / circlesList.length;
  const [circleToFocus, setCircleToFocus] = useState<Marble>({
    imgCircle: "",
    imgMarble: "",
    name: "",
  });
  const handleSetCircle = (circle: Marble) => {
    setCircleToFocus(circle);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw]">
        <div className="absolute border-2 border-dark-100 inset-0 m-auto w-[70%] h-[70%] flex justify-center items-center rounded-full ">
          <div className="flex flex-col justify-start items-center p-2 bg-fontWhite w-[80%] h-[80%] rounded-full">
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
        <div className={`${styles["parent-circle"]} relative z-[10] `}>
          {circlesList.map((circle, index) => (
            <div
              key={index}
              onClick={() => handleSetCircle(circle)}
              style={{
                backgroundImage: `url(${circle.imgCircle})`,
                transform: `rotate(${
                  gapCircle * index++
                }deg) translate(316%) rotate(${gapCircle * index++ * -1}deg)`,
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
