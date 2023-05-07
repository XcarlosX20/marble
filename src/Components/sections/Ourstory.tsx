import { useScrollIntoView } from "@/Hooks/useScrollIntoView";
import Image from "next/image";
import imageOurStory from "public/assets/img/three-male-friends-standing-against-white-wall-pointing-finger-upward-looking-camera 1ourstory.jpg";
const OurStory = () => {
  const { CScrollIntoView } = useScrollIntoView("/#why-us");
  return (
    <CScrollIntoView>
      <section className="bg-gray py-[70px]">
        <div className="flex flex-col mx-8 md:ml-0 md:mr-20 md:flex-row gap-4">
          <div className="relative mx-auto md:my-auto lg:m-0  ">
            <div className="relative z-20">
              <Image src={imageOurStory} alt={"image of Our story"} />
            </div>
            <div className="absolute top-[-15px] right-[-15px] z-10 w-32 h-32 t bg-dark-100 z-index-10"></div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-8 md:pr-4 ">
            <h2 className="text-fontWhite uppercase text-3xl font-bold mb-3">
              Our Story
            </h2>
            <h4 className="font-semibold text-lg">
              Villalobos Tile, A business that changes lives
            </h4>
            <div className="bg-blue-100 h-[2px] w-4/12 mb-4"></div>
            <p className="text-fontWhite">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              doloribus corrupti vero et odit quam dolor beatae magnam. Fugiat,
              eius. Facilis nam dolores in velit, atque libero id, facere
              tempore beatae similique labore unde suscipit inventore voluptas
              autem odio itaque, nesciunt repellat minima maxime optio dolor.
              Nemo deserunt laborum eaque.
            </p>
          </div>
        </div>
      </section>
    </CScrollIntoView>
  );
};

export { OurStory };
