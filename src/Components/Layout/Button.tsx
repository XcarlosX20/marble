import { FC } from "react";
interface Button {
    children: React.ReactNode
}
const Button:FC<Button> = ({children}) => {
    return (
        <button className="p-2 bg-black-100">
            {children}
        </button>
     );
}
 
export {Button};