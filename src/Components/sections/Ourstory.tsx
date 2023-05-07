import { useScrollIntoView } from "@/Hooks/useScrollIntoView";
import Image from "next/image";
import imageOurStory from "public/assets/img/three-male-friends-standing-against-white-wall-pointing-finger-upward-looking-camera 1ourstory.jpg";
const OurStory = () => {
  const { CScrollIntoView } = useScrollIntoView("/#why-us");
  return (
    <CScrollIntoView>
      <section className="bg-gray py-[70px]">
        <h2 className="md:hidden text-fontWhite uppercase text-center text-6xl font-bold mb-8">
          Our Story
        </h2>
        <div className="flex flex-col mx-8 md:ml-0 md:mr-20 md:flex-row gap-4">
          <div className="relative mx-auto md:my-auto lg:m-0  ">
            <div className="relative z-20">
              <Image
                className="rounded"
                src={imageOurStory}
                alt={"image of Our story"}
              />
            </div>
            <div className="absolute top-[-15px] right-[-15px] z-10 w-32 h-32 t rounded bg-dark-400 z-index-10"></div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-8 md:pr-4 ">
            <h2 className="hidden md:block text-fontWhite uppercase md:text-4xl lg:text-6xl font-bold mb-3">
              Our Story
            </h2>
            <h4 className="font-semibold text-lg">
              Villalobos Tile, A business that changes lives
            </h4>
            <div className="bg-blue-100 h-[2px] w-4/12 mb-4"></div>
            <p className="text-fontWhite">
              We are experts in marble work, committed to quality and attention
              to detail. With a focus on kitchen, bathroom, flooring, and custom
              designs, we offer a range of options to enhance your living
              spaces. Trust us to provide expert guidance and craftsmanship for
              stunning and functional results that elevate your space. Add a
              touch of luxury to your home or business with our timeless marble
              work.
            </p>
          </div>
        </div>
      </section>
    </CScrollIntoView>
  );
};

export { OurStory };
