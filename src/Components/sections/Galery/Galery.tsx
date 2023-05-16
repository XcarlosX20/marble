import Image from "next/image";
import { SectionType, sections, ISection, indexPerSection } from "./constants";
import { useEffect, useState } from "react";
import styles from "./galery.module.css";
import { Button } from "@/Components/Layout/Button";

type Props = {
  section: SectionType | null;
};

const figuras = Array.from({ length: 4 });

export const Galery = ({ section }: Props) => {
  const [selectedSection, setSelectedSection] = useState<ISection | null>(
    sections[SectionType.KITCHEN]
  );

  useEffect(() => {
    if (section) setSelectedSection(sections[section]);
  }, [section]);
  if (!section || !selectedSection) return null;
  return (
    <div className="w-full z-10 relative">
      <div className="md:grid grid-cols-4 gap-4 hidden bd-[#2D2D2D] mt-[-36px] px-8 md:px-20 max-w-[1148px] m-auto">
        {figuras.map((_, index) => (
          <div
            key={index}
            className={`${styles.triangle} ${
              index !== indexPerSection[section] && "opacity-0"
            }`}
          ></div>
        ))}
      </div>
      <div className="bg-[#2D2D2D] py-[150px]">
        <div className="px-8 md:px-20 max-w-[1148px] m-auto">
          <div className="flex">
            <div className="flex-1 mr-[38px]">
              <Image
                src={selectedSection.icon}
                alt={section}
                className={styles["section-icon"]}
              />
              <p className="text-fontWhite font-bold text-[32px] mt-[26px]">
                {selectedSection.title}
              </p>
              <p className="text-fontWhite mt-[20px]">
                {selectedSection.description}
              </p>
              <Button className="mt-[30px] !bg-blue-100">
                GET A FREE QUOTE
              </Button>
            </div>
            <div className="flex-1">
              <Image src={selectedSection.images[0]} alt={section} />
            </div>
          </div>
          <div className="flex gap-[10px] mt-[60px]">
            {selectedSection.images.map((image, index) => (
              <Image
                key={`${index}-image`}
                src={image}
                alt={section}
                className="w-[155px] h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
