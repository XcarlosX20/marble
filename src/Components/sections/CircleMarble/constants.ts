const marblesBase = "/assets/svg";
export type Marble = {
  imgCircle: string;
  imgMarble: string;
  name: string;
};
export const circlesList: Marble[] = [
  {
    imgMarble: `${marblesBase}/A1marbles.svg`,
    imgCircle: `${marblesBase}/Ellipse-1.svg`,
    name: "Green Alps",
  },
  {
    imgMarble: `${marblesBase}/A2marbles.svg`,
    imgCircle: `${marblesBase}/Ellipse-2.svg`,
    name: "Negro Marquina",
  },
  {
    imgMarble: `${marblesBase}/A3marbles.svg`,
    imgCircle: `${marblesBase}/Ellipse-3.svg`,
    name: "White Carrara",
  },
  {
    imgMarble: `${marblesBase}/A4marbles.svg`,
    imgCircle: `${marblesBase}/Ellipse-4.svg`,
    name: "Black gold",
  },
  {
    imgMarble: `${marblesBase}/A5marbles.svg`,
    imgCircle: `${marblesBase}/Ellipse-5.svg`,
    name: "Azure Marble",
  },
  {
    imgMarble: `${marblesBase}/A6marbles.svg`,
    imgCircle: `${marblesBase}/Ellipse-6.svg`,
    name: "Portoro",
  },
  {
    imgMarble: `${marblesBase}/A7marbles.svg`,
    imgCircle: `${marblesBase}/Ellipse-7.svg`,
    name: "Pink Marble",
  },
  {
    imgMarble: `${marblesBase}/A8marbles.svg`,
    imgCircle: `${marblesBase}/Ellipse-8.svg`,
    name: "Arabescato",
  },
];
export const gapCircle: number = 360 / circlesList.length;
