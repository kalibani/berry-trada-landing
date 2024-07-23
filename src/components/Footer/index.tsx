import { footerLinks, footerLinksTwo } from "@/static-data/footer";
import FooterAbout from "./FooterAbout";
import FooterBottom from "./FooterBottom";
import FooterLinkItem from "./FooterLinkItem";
import FooterNewsletter from "./FooterNewsletter";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-3/12">
            <FooterAbout />
          </div>

          <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                {t("company")}
              </h3>

              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <FooterLinkItem key={link?.id} linkItem={link} />
                ))}
              </ul>
            </div>
          </div>

          <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                {t("support")}
              </h3>

              <ul className="space-y-4">
                {footerLinksTwo.map((link) => (
                  <FooterLinkItem key={link?.id} linkItem={link} />
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                {t("getInTouch")}
              </h3>

              <div className="space-y-7">
                <div>
                  <p className="font-heading text-base text-dark-text">
                    {t("contactNo")}
                  </p>
                  <a
                    href="tel:+(62) 82126753060"
                    className="font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    {" "}
                    +(62) 82126753060{" "}
                  </a>
                </div>
                <div>
                  <p className="font-heading text-base text-dark-text">
                    {t("liveSupport")}
                  </p>
                  <a
                    href="mailto:contact@berrytrada.com"
                    className="font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    {" "}
                    contact@berrytrada.com{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-5/12 xl:w-3/12">
            <FooterNewsletter />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
