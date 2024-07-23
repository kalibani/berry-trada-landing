import { Feature } from "@/types/feature";
import Image from "next/image";
import { v4 as uuid } from "uuid";

export const servicesData: Feature[] = [
  {
    id: uuid(),
    title: "ExportServiceTitle",
    description: "ExportServiceDescription",
    icon: (
      <Image
        src="/images/services/image-6.png"
        alt="hero-image"
        width={160}
        height={120}
        className="h-full rounded-full"
      />
    ),
  },
  {
    id: uuid(),
    title: "WashingServiceTitle",
    description: "WashingServiceDescription",
    icon: (
      <Image
        src="/images/services/image-1.webp"
        alt="hero-image"
        width={160}
        height={120}
        className="h-full rounded-full"
      />
    ),
  },
  {
    id: uuid(),
    title: "WholesaleServiceTitle",
    description: "WholesaleServiceDescription",
    icon: (
      <Image
        src="/images/services/image-5.webp"
        alt="hero-image"
        width={160}
        height={120}
        className="h-full rounded-full"
      />
    ),
  },
  {
    id: uuid(),
    title: "TubersServiceTitle",
    description: "TubersServiceDescription",
    icon: (
      <Image
        src="/images/services/image-3.webp"
        alt="hero-image"
        width={160}
        height={120}
        className="h-full rounded-full"
      />
    ),
  },
  {
    id: uuid(),
    title: "GingerCollectServiceTitle",
    description: "GingerCollectServiceDescription",
    icon: (
      <Image
        src="/images/services/image-4.webp"
        alt="hero-image"
        width={160}
        height={120}
        className="h-full rounded-full"
      />
    ),
  },
  {
    id: uuid(),
    title: "GingerPlantingServiceTitle",
    description: "GingerPlantingServiceDescription",
    icon: (
      <Image
        src="/images/services/image-7.jpg"
        alt="hero-image"
        width={160}
        height={120}
        className="h-full rounded-full"
      />
    ),
  },
];
