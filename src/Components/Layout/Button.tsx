import { FC, useState } from "react";
interface Button {
    children: React.ReactNode
}
const Button:FC<Button> = ({children}) => {
    const [hovered, setHovered] = useState(false)
    return (
        <button onMouseEnter={() => setHovered(true) }
         onMouseLeave={() => setHovered(false)}
         className={`text-fontWhite bg-dark-100 btn ${hovered ? 'btn-hover' : ''} p-2 rounded`}>
            {children}
        </button>
     );
}
 
export {Button};