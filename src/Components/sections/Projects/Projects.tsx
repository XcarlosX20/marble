import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScrollIntoView } from "@/Hooks/useScrollIntoView";
import styles from "./projects.module.css";
import img from "public/assets/img/Rectangle 228project.jpg";
import Image from "next/image";
const Projects = () => {
  const projects = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const sliderProps = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
    autoplay: true,
  };
  const { CScrollIntoView } = useScrollIntoView("/#projects");
  return (
    <CScrollIntoView>
      <section className="py-16 bg-dark-100">
        <h2 className="text-center uppercase text-fontWhite text-3xl font-semibold mb-8">
          Projects
        </h2>
        <Slider {...sliderProps}>
          {projects.map((project, index) => (
            <div key={project} className={`${styles.card}`}>
              <div className="relative h-full items-center flex flex-col justify-end z-10 ">
                <Image
                  className="rounded object-cover h-full w-full z-10"
                  src={img}
                  alt="img"
                />
                <div
                  className={`absolute flex flex-col justify-end text-fontWhite inset-0 z-20 p-4 hover:cursor-pointer ${styles["card-content-text"]}`}
                >
                  <p className="font-semibold uppercase">stairs for a house</p>
                  <span>Houston, Texas</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </CScrollIntoView>
  );
};

export { Projects };
