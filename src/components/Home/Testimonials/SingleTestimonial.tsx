import { Testimonial } from "@/types/testimonial";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SingleTestimonial({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const t = useTranslations("testimonials");
  return (
    <div className="testimonial-item">
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="order-last w-full px-4 lg:order-first lg:w-1/2">
          <div className="text-center lg:text-left">
            <p className="mb-9 font-heading text-base font-light text-dark-text lg:text-lg xl:text-2xl">
              “{t(testimonial?.review)}
            </p>

            <h3 className="mb-1 font-heading text-xl text-dark dark:text-white">
              {testimonial?.name}
            </h3>
            <p className="text-base text-dark-text">
              {testimonial?.designation}
            </p>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <div className="relative mx-auto mb-9 aspect-square w-full max-w-[420px] lg:mb-0 lg:mr-0">
            <div className="absolute right-5 top-5 z-10 h-full w-full">
              <Image src={testimonial?.image} alt={testimonial?.name} fill />
            </div>
            <div className="absolute -right-5 -top-5 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
