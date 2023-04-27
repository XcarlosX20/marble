import styles from './BtnBurguer.module.css'
const slug = require('slug')
type socialMedia = {
name: string, icon: string , url:string
}
interface Props{
   options: string[]
   socialMedias: socialMedia[]
}
import { font } from "../theme"
import Image from 'next/image'
import { useState } from 'react'

const BtnBurguer = ({options, socialMedias}:Props) => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    const toggleMenuMobile = () => {
        setOpenMenuMobile(!openMenuMobile)
    }
    return ( 
        <>
        <div onClick={toggleMenuMobile} className={styles['btn-burguer-container']}>
            <div className={styles['btn-burguer']}>  
            </div>
        </div>
            <div className={`${styles['cont-main']} ${!openMenuMobile ? `${styles['transition-entrance']}`: ''} bg-light-300`}>
                <div className="py-3 px-2">
                    <div className="flex h-[80vh]">
                        <div className="w-3/12">
                            <div className="h-full flex-col justify-start">
                                <button onClick={toggleMenuMobile}>back icon</button>
                            </div>
                        </div>
                        <div className="w-9/12">
                            <ul>
                                {options.map(option => (
                                    <li onClick={toggleMenuMobile} key={option}
                                    className={`${styles['item-list']} hover:bg-blue-100`}
                                    >
                                        <a className={`${font.className}`} href={`#${slug(option)}`}>{option}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-4">
                            {socialMedias.map((item,index) => (
                              <div key={index} className="w-full flex justify-center">
                               <div className="flex justify-center items-center w-12 h-12 hover:bg-blue-100 rounded-[50%]">
                                 <a href={item.url}>
                                    <Image src={item.icon} alt={`social media: ${item.name}`}/>
                                </a>
                               </div>
                                 </div>
                             ))}
                    </div>
                </div>
            </div>
        
        </>
     );
}
 
export {BtnBurguer};