import { Feature } from "@/types/feature";
import { useTranslations } from "next-intl";

export default function SingleFeature({ feature }: { feature: Feature }) {
  const t = useTranslations("Services");

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="group mx-auto mb-10 max-w-[380px] text-center md:mb-16">
        <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[100px] md:w-[100px]">
          {feature?.icon}
        </div>
        <div>
          <h3 className="mb-3 font-heading text-xl font-medium text-dark dark:text-white sm:text-base md:mb-5">
            {t(feature?.title)}
          </h3>
          <p className="text-base text-dark-text">{t(feature?.description)}</p>
        </div>
      </div>
    </div>
  );
}
