import { useState } from "react";
import styles from "./Circle.module.css";
const Circle = () => {
  const circlesList = [1, 2, 3, 4, 5, 6, 7, 8];
  const gapCircle = 360 / circlesList.length;
  const [circleToFocus, setCircleToFocus] = useState(0);
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[30vw] h-[30vw]">
        <div className="absolute z-[10] inset-0 w-full h-full flex justify-center items-center ">
          {circleToFocus}
        </div>
        <div className={`${styles["parent-circle"]} relative`}>
          {circlesList.map((circle, index) => (
            <div
              key={index}
              onClick={() => setCircleToFocus(circle)}
              style={{
                transform: `rotate(${
                  gapCircle * circle
                }deg) translate(15vw) rotate(${gapCircle * circle * -1}deg)`,
              }}
              className={`${styles["circle"]} hover:cursor-pointer bg-blue-100`}
            ></div>
          ))}
          {/* <div className={`${styles["circle"]} bg-blue-100`}></div>
        <div className={`${styles["circle"]} bg-blue-100`}></div>
        <div className={`${styles["circle"]} bg-blue-100`}></div>
        <div className={`${styles["circle"]} bg-blue-100`}></div>
        <div className={`${styles["circle"]} bg-blue-100`}></div>
        <div className={`${styles["circle"]} bg-blue-100`}></div> */}
        </div>
      </div>
    </div>
  );
};

export { Circle };
