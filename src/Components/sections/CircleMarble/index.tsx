import { useScrollIntoView } from "@/Hooks/useScrollIntoView";
import { Circle } from "./Circle";
import { Button } from "@/Components/Layout/Button";

const Marbles = () => {
  return (
    <section className="bg-gray">
      <div className="flex flex-col gap-8 md:flex-row mx-8 py-16 md:mx-[190px] md:py-[90px]">
        <div className="md:w-1/2">
          <article className="flex flex-col gap-8">
            <h2 className="uppercase font-bold text-3xl">
              A WORLD OF MARBLE TO CHOOSE FROM
            </h2>
            <p className="text-fontWhite">
              Upgrade your space with durable and elegant marble. Trust us for
              expert marble work and a stunning, long-lasting result.
            </p>
            <Button className="w-10/12">SCHEDULE A FREE CONSULTATION</Button>
          </article>
        </div>
        <div className="md:w-8/12">
          <Circle />
        </div>
      </div>
    </section>
  );
};

export { Marbles };
