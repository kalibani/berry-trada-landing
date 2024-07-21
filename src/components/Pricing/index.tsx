import Link from "next/link";
import {
  pricingDataService,
  pricingDataExport,
} from "../../../stripe/pricingData";
import SectionTitle from "../Common/SectionTitle";
import SinglePricing from "./SinglePricing";
import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("Pricing");
  return (
    <section id="pricing" className="pt-14 lg:pt-[100px]">
      <div className="px-4 xl:container">
        <SectionTitle mainTitle={t("mainTitle")} title={t("title")} />

        <div className="relative z-10 mb-2 flex flex-wrap justify-center overflow-hidden rounded drop-shadow-light dark:drop-shadow-none sm:mb-4">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
            <svg
              width="1174"
              height="560"
              viewBox="0 0 1174 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4" filter="url(#filter0_f_41_257)">
                <rect
                  x="450.531"
                  y="279"
                  width="272.933"
                  height="328.051"
                  fill="url(#paint0_linear_41_257)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_41_257"
                  x="0.531494"
                  y="-171"
                  width="1172.93"
                  height="1228.05"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="225"
                    result="effect1_foregroundBlur_41_257"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_41_257"
                  x1="425.16"
                  y1="343.693"
                  x2="568.181"
                  y2="660.639"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ABBCFF" />
                  <stop offset="0.859375" stopColor="#4A6CF7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="absolute text-center font-heading text-xl font-medium text-dark dark:text-white sm:text-3xl md:text-4xl">
            {t("washingService")}
          </h2>
          {pricingDataService &&
            pricingDataService.map((price, key) => (
              <SinglePricing price={price} key={key} />
            ))}
          <div className="mb-10 flex justify-start gap-1">
            <span className="text-rose-600">*</span>
            <p className="text-left text-gray-700">{t("priceAdjustment")}</p>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center overflow-hidden rounded pt-4 drop-shadow-light dark:drop-shadow-none">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
            <svg
              width="1174"
              height="560"
              viewBox="0 0 1174 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4" filter="url(#filter0_f_41_257)">
                <rect
                  x="450.531"
                  y="279"
                  width="272.933"
                  height="328.051"
                  fill="url(#paint0_linear_41_257)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_41_257"
                  x="0.531494"
                  y="-171"
                  width="1172.93"
                  height="1228.05"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="225"
                    result="effect1_foregroundBlur_41_257"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_41_257"
                  x1="425.16"
                  y1="343.693"
                  x2="568.181"
                  y2="660.639"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ABBCFF" />
                  <stop offset="0.859375" stopColor="#4A6CF7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2 className="absolute mb-2 text-center font-heading text-xl font-medium text-dark dark:text-white sm:text-3xl md:text-4xl">
            {t("gingerExport")}
          </h2>
          {pricingDataExport &&
            pricingDataExport.map((price, key) => (
              <SinglePricing price={price} key={key} />
            ))}

          <div className="mb-10 flex justify-start gap-1">
            <span className="text-rose-600">*</span>
            <p className="text-left text-gray-700">{t("priceAdjustment")}</p>
          </div>
        </div>

        <div className="pt-12 text-center">
          <h3 className="mb-5 font-heading text-xl font-medium text-dark dark:text-white sm:text-3xl">
            Looking for a company solution?
          </h3>
          <Link
            href="/contact-us"
            className="text-base text-dark-text underline-offset-2 duration-200 hover:text-primary hover:underline"
          >
            Contact our team to get a quote.
          </Link>
        </div>
      </div>
    </section>
  );
}
