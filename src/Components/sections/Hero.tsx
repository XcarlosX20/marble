import Image from "next/image";
import bg from 'public/assets/img/bg-hero.jpg'
import { Button } from "../Layout/Button";
import kitchen from 'public/assets/svg/Vectorkitchen.svg'
import customDesign from 'public/assets/svg/ruler_svgrepo.comcustomdesign.svg'
import bathroom from 'public/assets/svg/Vectorbathroom.svg'
import flooring from 'public/assets/svg/Vectorflooring.svg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
     const sliderProps = {
      arrows:false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return ( 
    <>
    <div className="h-[150vh] bg-light-200 relative">
        <Image className="h-[100vh] object-cover" src={bg} alt="bg-hero" />
        <div className="absolute w-full h-full z-10 top-0 left-0 right-0 bottom-0">
            <div className="pt-[225px] px-8">
                <div className="flex flex-col gap-14">
                    <article className="flex flex-col items-start gap-4 w-full md:w-[646px] md:pl-20 lg:pl-48">
                        <h2 className="font-bold text-3xl" >Crafting Timeless beauty with the finest quality marble materials</h2>
                        <p className="font-medium">Experience the beauty and functionality of marble. Our expert work enhances spaces. Trust us for quality and attention to detail.</p>
                        <Button>FIND OUT MORE</Button>
                    </article>
                    <div className="md:hidden ">
                        <Slider className="w-60 mx-auto " {...sliderProps}>
                            <div className="bg-[#2D2D2D] min-h-[260px] p-8">
                            <div className="flex flex-col gap-4">
                            <Image src={kitchen} alt="kitchen" />
                            <p className="text-blue-100 font-medium uppercase" >Kitchen</p>
                            <p className="text-fontWhite" >Upgrade your kitchen with custom marble features that are both stylish and durable.</p>
                            </div>
                            </div>
                            <div className="bg-[#2D2D2D] min-h-[260px] p-8">
                        <div className="flex flex-col gap-4">
                            <Image src={kitchen} alt="kitchen" />
                            <p className="text-blue-100 font-medium uppercase" >Kitchen</p>
                            <p className="text-fontWhite" >Upgrade your kitchen with custom marble features that are both stylish and durable.</p>
                        </div>
                       </div>
                        </Slider>
                    </div>
                    <div className="md:grid grid-cols-4 gap-4 px-[160px] hidden">
                       <div className="bg-[#2D2D2D] p-8">
                        <div className="flex flex-col gap-4">
                            <Image src={kitchen} alt="kitchen" />
                            <p className="text-blue-100 font-medium uppercase" >Kitchen</p>
                            <p className="text-fontWhite" >Upgrade your kitchen with custom marble features that are both stylish and durable.</p>
                        </div>
                       </div>
                       <div className="bg-[#2D2D2D] p-3">
                         <Image src={bathroom} alt="flooring" />
                       </div>
                       <div className="bg-[#2D2D2D] p-3">
                        <Image src={flooring} alt="flooring" />
                       </div>
                       <div className="bg-[#2D2D2D] p-3">
                        <Image src={customDesign} alt="customDesign" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export {Hero};