import brand from '/public/assets/svg/VILLALOBOS TILE 1brand.svg'
import { font } from "./theme"
import Image from "next/image"
import { BtnBurguer } from './BtnBurguer/BtnBurguer'
//icons
import phone from 'public/assets/svg/BsTelephonesocilalmedia.svg'
import whatsapp from 'public/assets/svg/IoLogoWhatsappsocilalmedia.svg'
import instagram from 'public/assets/svg/IoLogoInstagramsocilalmedia.svg'
import mail from 'public/assets/svg/IoMailOutlinesocilalmedia.svg'
const slug = require('slug')
const Header = () => {
    const options:string[]= ['Why us', 'Projects', 'Our story', 'Contact us']
     const socialMedias = [
    {name: 'phone', icon: phone, url:'/'},
    {name: 'instagram', icon: instagram, url:'/'},
    {name: 'whatsapp', icon: whatsapp, url:'/'},
    {name: 'mail', icon: mail, url:'/' }
]
    return ( 
        <>
        <header className="bg-light-200 w-full fixed">
            <div className="flex justify-between h-20 px-3 pt-2 ">
                <div className="flex justify-center md:justify-end w-5/12 md:w-3/12">
                    <div className="bg-light-200 pb-2 rounded-[50%] w-36 h-28 flex justify-center">
                        <Image width={100} height={90} src={brand} alt="brand-logo" />
                    </div>
                </div>
                <div className='w-2/12 md:w-11/12 flex md:justify-center md:mr-32 lg:mr-50 xl:mr-60'  >
                    <BtnBurguer socialMedias={socialMedias} options={options}/>
                    <div className="hidden md:flex lg:flex py-2">
                        {options.map(option => (
                        <div className={`p-3 uppercase font-bold ${font.className}`} key={option}>
                            <a className='hover:border-blue-100 hover:border-b-2 pb-1 ' href={`#${slug(option)}`}>{option}</a>
                        </div>
                    ))}
                    </div>
                    
                </div>
                
            </div>
        </header>
        <aside className='hidden md:block fixed right-4 top-1/4 z-30'>
             <div className="grid grid-rows-4 gap-4">
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
        </aside>
        </>
     );
}
 
export default Header;