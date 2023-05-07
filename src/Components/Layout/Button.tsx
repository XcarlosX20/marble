import { FC, useState } from "react";
interface Button {
  children: React.ReactNode;
}
const Button: FC<Button> = ({ children, ...props }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`text-fontWhite bg-dark-100 btn p-2 rounded ${
        hovered ? "btn-hover" : ""
      } ${props.className ? props.className : ""} `}
    >
      {children}
    </button>
  );
};

export { Button };
