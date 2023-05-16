import { useState } from "react";
import styles from "./Circle.module.css";
import Image from "next/image";
const marblesBase = "/assets/svg";
type Marble = {
  imgCircle: string;
  imgMarble: string;
  name: string;
};
const Circle = () => {
  const CircleRadius = { width: { base: 50, sm: 40, md: 20 } };
  const circlesList: Marble[] = [
    {
      imgMarble: `${marblesBase}/A1marbles.svg`,
      imgCircle: `https://s3-alpha-sig.figma.com/img/bc83/3f1c/2cf22c5c9b3ed469a2b9805810d16413?Expires=1685318400&Signature=TfmuVkf3THtYJPlKuv7XNcaYQutlY44EQpdC1oBVffWe5Zb1ffiasByjJUS2yDxrF1la4AxjT7z1aZiXp8k12fitRt5ruH7PaqwpUw6Mi-LS45pzHSl~eOj4vuGjzeSSBR360hvKNkgnQysvNYLfW0KvQ3hc6PP~iAtxeo3DaYdM0VfaI2eAWi5ZCWFWmDTAd-4NrF~mISvvY-nVa17Y-ErENnup3YxNeF~XvQLgkdD-tt8LEMGQH-~vWhN5OeE2c1xkxdAp3KhgSYCtoVoss3VohUYUMO8D0ydeBOBjFJOFl7HZHTdJXWfz-1~z~dCr~Sbw~qorQKXPEyXiJvOVpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`,
      name: "Green Alps",
    },
    {
      imgMarble: `${marblesBase}/A2marbles.svg`,
      imgCircle: `https://s3-alpha-sig.figma.com/img/66ce/fb2d/6749e696427b126e694a421b9b75300a?Expires=1685318400&Signature=HqnwRcE572t3MNcfmHiNhUb2y1-qTxOF48lqFFXliiDAjLDhpfxqk~l78ACe2RtE8D-zuF-hAnGNfPC1OokM-g1rnyM6wUfuNqsWeTopcf9S2HU1xKxdgdhS-uRCR7JhQbSw6Sdtr0NkPMpQ7Ooi7ZTpKkPaATpmkJygWxla52KNqfhwwIwXlUeDsla9pyGgmnTaJaRN6InRGA2iBEk1n4X0CR19LC9qZwvfSfHUpUqlOK9zw-71MQ-Q12ka3Q78IA0JCZRmnPR8SQe5vVJ1Ai9HNPSfmXWhof-VgWCt9bzoZWrSF5~I6uBBC49qCELgWP5AppQDxUCYA5~-3MQlyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`,
      name: "Negro Marquina",
    },
    {
      imgMarble: `${marblesBase}/A1marbles.svg`,
      imgCircle: `https://s3-alpha-sig.figma.com/img/bc83/3f1c/2cf22c5c9b3ed469a2b9805810d16413?Expires=1685318400&Signature=TfmuVkf3THtYJPlKuv7XNcaYQutlY44EQpdC1oBVffWe5Zb1ffiasByjJUS2yDxrF1la4AxjT7z1aZiXp8k12fitRt5ruH7PaqwpUw6Mi-LS45pzHSl~eOj4vuGjzeSSBR360hvKNkgnQysvNYLfW0KvQ3hc6PP~iAtxeo3DaYdM0VfaI2eAWi5ZCWFWmDTAd-4NrF~mISvvY-nVa17Y-ErENnup3YxNeF~XvQLgkdD-tt8LEMGQH-~vWhN5OeE2c1xkxdAp3KhgSYCtoVoss3VohUYUMO8D0ydeBOBjFJOFl7HZHTdJXWfz-1~z~dCr~Sbw~qorQKXPEyXiJvOVpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`,
      name: "Green Alps",
    },
    {
      imgMarble: `${marblesBase}/A2marbles.svg`,
      imgCircle: `https://s3-alpha-sig.figma.com/img/66ce/fb2d/6749e696427b126e694a421b9b75300a?Expires=1685318400&Signature=HqnwRcE572t3MNcfmHiNhUb2y1-qTxOF48lqFFXliiDAjLDhpfxqk~l78ACe2RtE8D-zuF-hAnGNfPC1OokM-g1rnyM6wUfuNqsWeTopcf9S2HU1xKxdgdhS-uRCR7JhQbSw6Sdtr0NkPMpQ7Ooi7ZTpKkPaATpmkJygWxla52KNqfhwwIwXlUeDsla9pyGgmnTaJaRN6InRGA2iBEk1n4X0CR19LC9qZwvfSfHUpUqlOK9zw-71MQ-Q12ka3Q78IA0JCZRmnPR8SQe5vVJ1Ai9HNPSfmXWhof-VgWCt9bzoZWrSF5~I6uBBC49qCELgWP5AppQDxUCYA5~-3MQlyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`,
      name: "Negro Marquina",
    },
    {
      imgMarble: `${marblesBase}/A1marbles.svg`,
      imgCircle: `https://s3-alpha-sig.figma.com/img/bc83/3f1c/2cf22c5c9b3ed469a2b9805810d16413?Expires=1685318400&Signature=TfmuVkf3THtYJPlKuv7XNcaYQutlY44EQpdC1oBVffWe5Zb1ffiasByjJUS2yDxrF1la4AxjT7z1aZiXp8k12fitRt5ruH7PaqwpUw6Mi-LS45pzHSl~eOj4vuGjzeSSBR360hvKNkgnQysvNYLfW0KvQ3hc6PP~iAtxeo3DaYdM0VfaI2eAWi5ZCWFWmDTAd-4NrF~mISvvY-nVa17Y-ErENnup3YxNeF~XvQLgkdD-tt8LEMGQH-~vWhN5OeE2c1xkxdAp3KhgSYCtoVoss3VohUYUMO8D0ydeBOBjFJOFl7HZHTdJXWfz-1~z~dCr~Sbw~qorQKXPEyXiJvOVpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`,
      name: "Green Alps",
    },
    {
      imgMarble: `${marblesBase}/A2marbles.svg`,
      imgCircle: `https://s3-alpha-sig.figma.com/img/66ce/fb2d/6749e696427b126e694a421b9b75300a?Expires=1685318400&Signature=HqnwRcE572t3MNcfmHiNhUb2y1-qTxOF48lqFFXliiDAjLDhpfxqk~l78ACe2RtE8D-zuF-hAnGNfPC1OokM-g1rnyM6wUfuNqsWeTopcf9S2HU1xKxdgdhS-uRCR7JhQbSw6Sdtr0NkPMpQ7Ooi7ZTpKkPaATpmkJygWxla52KNqfhwwIwXlUeDsla9pyGgmnTaJaRN6InRGA2iBEk1n4X0CR19LC9qZwvfSfHUpUqlOK9zw-71MQ-Q12ka3Q78IA0JCZRmnPR8SQe5vVJ1Ai9HNPSfmXWhof-VgWCt9bzoZWrSF5~I6uBBC49qCELgWP5AppQDxUCYA5~-3MQlyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`,
      name: "Negro Marquina",
    },
  ];
  const gapCircle = 360 / circlesList.length;
  const [circleToFocus, setCircleToFocus] = useState<Marble>({
    imgCircle: "",
    imgMarble: "",
    name: "",
  });
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
              onClick={() => setCircleToFocus(circle)}
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
