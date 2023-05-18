import { useScrollIntoView } from "@/Hooks/useScrollIntoView";
import { Circle } from "./Circle";
import { Button } from "@/Components/Layout/Button";

const Marbles = () => {
  return (
    <section className="bg-gray">
      <div className="flex flex-col gap-12 lg:gap-8 lg:flex-row mx-8 md:mx-[190px]">
        <div className="lg:w-1/2 lg:mr-8 mr-0 lg:my-[200px] mt-[45px]">
          <article className="flex flex-col gap-8">
            <h2 className="uppercase font-bold text-3xl">
              A WORLD OF MARBLE TO CHOOSE FROM
            </h2>
            <p className="text-fontWhite">
              Upgrade your space with durable and elegant marble. Trust us for
              expert marble work and a stunning, long-lasting result.
            </p>
            <Button className="mx-auto lg:m-0 w-10/12">
              SCHEDULE A FREE CONSULTATION
            </Button>
          </article>
        </div>
        <div className="w-full lg:w-8/12 my-auto">
          <Circle />
        </div>
      </div>
    </section>
  );
};

export { Marbles };
