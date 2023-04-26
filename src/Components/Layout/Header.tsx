import { font } from "./theme"

const slug = require('slug')
const Header = () => {
    const options:string[]= ['Why us', 'Projects', 'Our story', 'Contact us']
    return ( 
        <>
        <header>
            <div className="flex w-full p-2 ">
                <div className="w-1/4 flex justify-center">
                    <div className="logo">
                        logo
                    </div>
                </div>
                <div className="w-3/4 md:pl-24 flex w-full justify-start md:gap-8">
                    {options.map(option => (
                        <div className={`p-3 uppercase font-bold ${font.className}`} key={option}>
                            <a  href={slug(option)}>{option}</a>
                        </div>
                    ))}
                        </div>
                
            </div>
        </header>
        </>
     );
}
 
export default Header;