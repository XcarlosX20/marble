import { FC } from "react";
interface Button {
    children: React.ReactNode
}
const Button:FC<Button> = ({children}) => {
    return (
        <button style={{background: 'linear-gradient(105.64deg, #080808 35.41%, #268B88 101.71%)'}} className="text-fontWhite p-2 rounded">
            {children}
        </button>
     );
}
 
export {Button};