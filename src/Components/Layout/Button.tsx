import { forwardRef, useState } from "react";

interface ButtonOptions {}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const [hovered, setHovered] = useState(false);
  const { type = "button", children, className, ...rest } = props;
  const merged =
    `text-fontWhite bg-dark-100 btn p-2 rounded ${
      hovered ? "btn-hover" : ""
    } ` + className;
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      className={merged}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export { Button };
// import { FC, useState } from "react";
// interface Button {
//   children: React.ReactNode;
//   height: string;
//   onClick: () => void;
//   width: string;
// }
// const Button:FC<Button> = ({children, width}) => {
//     const [hovered, setHovered] = useState(false)
//     return (
//         <button onMouseEnter={() => setHovered(true) }
//          onMouseLeave={() => setHovered(false)}
//          style={{width}}
//          className={`text-fontWhite bg-dark-100 btn ${hovered ? 'btn-hover' : ''} p-2 rounded`}>
//             {children}
//         </button>
//      );
// }

// export {Button};
