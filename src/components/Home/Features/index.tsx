import SectionTitle from "@/components/Common/SectionTitle";
import { servicesData } from "@/static-data/featurte";
import SingleFeature from "./SingleFeature";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="pt-10 sm:pt-6 lg:pt-10">
      <div className="px-4 xl:container">
        {/* <!-- Section Title --> */}
        <SectionTitle
          mainTitle={t("services")}
          title={t("tagline")}
          paragraph={t("paragraph")}
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          {servicesData.map((service) => (
            <SingleFeature key={service?.id} feature={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
