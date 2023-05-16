import kitchen from "public/assets/svg/Vectorkitchen.svg";
import customDesign from "public/assets/svg/ruler_svgrepo.comcustomdesign.svg";
import bathroom from "public/assets/svg/Vectorbathroom.svg";
import flooring from "public/assets/svg/Vectorflooring.svg";
import image from "public/assets/img/projects/Rectangle-256.png";
import { StaticImageData } from "next/image";

export enum SectionType {
  KITCHEN = "kitchen",
  CUSTOM = "custom",
  BATRHOOM = "batrhoom",
  FLOOR = "floor",
}

export const indexPerSection = {
  [SectionType.KITCHEN]: 0,
  [SectionType.BATRHOOM]: 1,
  [SectionType.FLOOR]: 2,
  [SectionType.CUSTOM]: 3,
}

export type ISection = {
  icon: any;
  title: string;
  description: string;
  images: StaticImageData[];
}

export const sections: Record<SectionType, ISection> = {
  [SectionType.KITCHEN]: {
    icon: kitchen,
    title: "Revamp Your Home’s Heart with Marble",
    description:
      "Upgrade your kitchen with custom marble features that are both stylish and durable.",
    images: [image, image, image, image, image, image],
  },
  [SectionType.CUSTOM]: {
    icon: customDesign,
    title: "Elevate Your Bathroom with Our Remodeling Services",
    description:
      "Transform your bathroom into a luxurious oasis with custom marble vanities, showers, and flooring.",
    images: [image, image, image, image, image, image],
  },
  [SectionType.BATRHOOM]: {
    icon: bathroom,
    title: "Elevate Your Space with Our Durable Marble Flooring",
    description:
      "Experience timeless elegance, add sofistication and durability to your home with our marble flooring.",
    images: [image, image, image, image, image, image],
  },
  [SectionType.FLOOR]: {
    icon: flooring,
    title: "Explore Your Creativity with Our Custom Design Service",
    description:
      "Create a one-of-a-kind feature for your space with our custom marble design services.",
    images: [image, image, image, image, image, image],
  },
};