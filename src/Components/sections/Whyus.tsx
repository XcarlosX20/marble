import Image from "next/image";
import beauty from "public/assets/svg/Vectorbeauty.svg";
import quality from "public/assets/svg/VectorQuality.svg";
import excellence from "public/assets/svg/Vectorexcellence.svg";
import style from "public/assets/svg/Vectorstyle.svg";
import project24 from "public/assets/svg/24+add.svg";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useScrollIntoView } from "@/Hooks/useScrollIntoView";
const Whyus = () => {
  const qualities = [
    {
      icon: beauty,
      title: "Beauty",
      bodyContent: "Elevating spaces with the beauty of natural stone.",
    },
    {
      icon: quality,
      title: "Quality",
      bodyContent: "Elevate your living experience with the best  marble.",
    },
    {
      icon: excellence,
      title: "Excellence",
      bodyContent: "Excellence in marble craftsmanship.",
    },
    {
      icon: style,
      title: "style",
      bodyContent: "The art of marble: Timeless, luxurious, and functional.",
    },
  ];
  const { CScrollIntoView } = useScrollIntoView("/#why-us");
  return (
    <>
      <CScrollIntoView>
        <section
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/do5yybhwe/image/upload/v1682628836/bgwhyus-min_jnymc8.jpg)",
          }}
          className="bg-cover bg-fixed text-fontWhite pt-16"
        >
          <h2 className="text-center uppercase text-3xl font-bold">Why us</h2>
          <div className="px-18 py-16 mx-8 md:mx-20 lg:mx-40 flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-6 md:items-start lg:items-center md:w-4/12">
              <Image src={project24} alt="projects done" />
              <p className="w-9/12 xl:text-center">
                Projects made for costumers
              </p>
            </div>
            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-y-16 md:w-8/12">
              {qualities.map((quality) => (
                <div key={quality.title} className="flex grow gap-4">
                  <div className="w-16 h-16">
                    <Image
                      className="w-full h-full"
                      src={quality.icon}
                      alt={quality.title}
                    />
                  </div>
                  <div className="w-1 bg-blue-100" />
                  <article className="w-full">
                    <h1>{quality.title}</h1>
                    <p>{quality.bodyContent}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
          {/* <div 
        className="flex gap-4">
            <Image src={beauty} alt='beauty'/>
            <div className='w-1 bg-blue-100' />
            <article>
            <h1>Beauty</h1>
            <p>Elevating spaces with the beauty of natural stone.</p>
            </article>
        </div> */}
        </section>
      </CScrollIntoView>
    </>
  );
};
export { Whyus };
