import Image from "next/image";
import {
  SectionType,
  sections,
  ISection,
  indexPerSection,
  SectionperIndex,
  Position,
} from "./constants";
import { useEffect, useState } from "react";
import styles from "./galery.module.css";
import { Button } from "@/Components/Layout/Button";
import { StaticImageData } from "next/image";
import arrow from "public/assets/svg/arrow.svg";
import close from "public/assets/svg/close.svg";

type Props = {
  section: SectionType | null;
};

const figuras = Array.from({ length: 4 });

const getSection = (position: Position, section: SectionType): SectionType => {
  const value = position === Position.NEXT ? 1 : -1;
  const index = indexPerSection[section] + value;
  return SectionperIndex[index as 0 | 1 | 2 | 3];
};

export const Galery = ({ section }: Props) => {
  const [curSection, setCurSection] = useState<SectionType | null>();
  const [selectedSection, setSelectedSection] = useState<ISection | null>();
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>();
  const [selectedImageHover, setSelectedImageHover] =
    useState<StaticImageData | null>();

  const handleHover = (image: StaticImageData) => () => {
    setSelectedImageHover(image);
  };

  const handleBlur = () => {
    setSelectedImageHover(null);
  };

  const handlePickImage = (image: StaticImageData) => () => {
    setSelectedImage(image);
  };

  const setSectionValues = (section?: SectionType) => () => {
    setSelectedSection(section ? sections[section] : null);
    setSelectedImage(section ? sections[section].images[0] : null);
    setCurSection(section);
  };

  const handleArrowClick = (position: Position) => () => {
    if (!curSection) return;
    const newSection = getSection(position, curSection);
    setSectionValues(newSection)();
  };

  useEffect(() => {
    if (section) {
      setSectionValues(section)();
    }
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
        <div className="px-8 md:px-20 max-w-[1148px] m-auto relative">
          <Image
            src={close}
            alt="close"
            className="absolute right-0 top-[-50px] cursor-pointer"
            onClick={setSectionValues()}
          />
          {indexPerSection[curSection as SectionType] > 0 && (
            <Image
              src={arrow}
              alt="arrow"
              className="absolute left-0 top-[50%] rotate-180 cursor-pointer"
              onClick={handleArrowClick(Position.PREVIOUS)}
            />
          )}

          {indexPerSection[curSection as SectionType] < 3 && (
            <Image
              src={arrow}
              alt="arrow"
              className="absolute right-0 top-[50%] cursor-pointer"
              onClick={handleArrowClick(Position.NEXT)}
            />
          )}

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
              <Image
                src={selectedImageHover || (selectedImage as StaticImageData)}
                alt={section}
                className="h-[315px]"
              />
            </div>
          </div>
          <div className="flex gap-[10px] mt-[60px]">
            {selectedSection.images.map((image, index) => (
              <Image
                onClick={handlePickImage(image)}
                onMouseEnter={handleHover(image)}
                onMouseLeave={handleBlur}
                key={`${index}-image`}
                src={image}
                alt={section}
                className="w-[155px] h-auto cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
