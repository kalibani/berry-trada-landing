import { Testimonial } from "@/types/testimonial";
import { v4 as uuid } from "uuid";

export const testimonialData: Testimonial[] = [
  {
    id: uuid(),
    name: "Musharof Chy",
    designation: "Director @ Sa**n Enterprise",
    image: "/images/testimonial/image-1.png",
    review: "review1",
  },
  {
    id: uuid(),
    name: "Naimur Rahman",
    designation: "Director @ Si**r Ventures",
    image: "/images/testimonial/image-2.png",
    review: "review2",
  },
  {
    id: uuid(),
    name: "Irwan Riandi",
    designation: "Director @ PT Agriculture Indonesia",
    image: "/images/testimonial/image-5.webp",
    review: "review3",
  },
];
