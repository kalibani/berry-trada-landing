"use client";

import axios from "axios";
import SingleOffer from "./SingleOffer";
import { useTranslations } from "next-intl";

export default function SinglePricing({ price }: any) {
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  const t = useTranslations("Pricing");

  return (
    <div
      className={`w-full sm:w-1/2 lg:w-1/3 ${price?.nickname === "Professional" ? "dark:border-[#2E333D] sm:border-l lg:border-x" : ""}`}
    >
      <div className="pb-20 pt-10 text-center">
        <div className="">
          <h3 className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white">
            {t(price?.nickname)}
          </h3>
          <p className="pb-6 text-base text-dark-text">{t(price?.subtitle)}</p>
        </div>
        <div className="border-b pb-10 dark:border-[#2E333D]">
          <h3 className="mb-6 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white">
            <span className="text-lg">
              {price?.nickname === "nickNameExport" ||
              price?.nickname === "nickNameExport2" ||
              price?.nickname === "nickNameExport3"
                ? "$"
                : "Rp"}{" "}
            </span>
            <sup className="-mb-2 text-[55px]">
              {" "}
              {(price.unit_amount / 100).toLocaleString("id-ID", {
                currency: "IDR",
              })}{" "}
            </sup>
            /KG
          </h3>

          {/* <p className="mx-auto max-w-[300px] text-base text-dark-text">
            {t(price?.description)}
          </p> */}
        </div>
        <div className="space-y-4 px-6 pb-[60px] pt-10 text-left sm:px-10 md:px-8 lg:px-10 xl:px-20">
          {price?.nickname === "nickNameExport" && (
            <>
              <SingleOffer text={t("age")} status="active" />
              <SingleOffer text={t("size")} status="active" />
              <SingleOffer text={t("wash")} status="active" />
              <SingleOffer text={t("postHarvest")} status="active" />
              <SingleOffer text={t("ozonation")} status="active" />
              <SingleOffer text={t("coating")} status="active" />
              <SingleOffer text={t("packing")} status="active" />
              <SingleOffer text={t("guaranteed")} status="active" />
            </>
          )}
          {price?.nickname === "nickNameExport2" && (
            <>
              <SingleOffer text={t("age")} status="active" />
              <SingleOffer text={t("size")} status="active" />
              <SingleOffer text={t("wash")} status="active" />
              <SingleOffer text={t("postHarvest")} status="active" />
              <SingleOffer text={t("ozonation")} status="active" />
              <SingleOffer text={t("coating")} status="active" />
              <SingleOffer text={t("packing")} status="active" />
              <SingleOffer text={t("guaranteed")} status="active" />
            </>
          )}
          {price?.nickname === "nickNameExport3" && (
            <>
              <SingleOffer text={t("age")} status="active" />
              <SingleOffer text={t("size")} status="active" />
              <SingleOffer text={t("wash")} status="active" />
              <SingleOffer text={t("postHarvest")} status="active" />
              <SingleOffer text={t("ozonation")} status="active" />
              <SingleOffer text={t("coating")} status="active" />
              <SingleOffer text={t("packing")} status="active" />
              <SingleOffer text={t("guaranteed")} status="active" />
            </>
          )}
          {price?.nickname === "nickNameWashing" && (
            <>
              <SingleOffer text="Menggunakan Mesin Canggih" status="active" />
              <SingleOffer text="Packing Waring" status="active" />
              <SingleOffer text="Sampai Di Atas Kontener" status="active" />
              <SingleOffer text="Teknologi Pasca Panen" status="active" />
              <SingleOffer text="Ozonisasi" status="active" />
              <SingleOffer text="Edible Coating" status="inactive" />
              <SingleOffer text="Bergaransi" status="inactive" />
              <SingleOffer text="Sudah Termasuk Jahe" status="inactive" />
            </>
          )}
          {price?.nickname === "nickNameWashingPremium" && (
            <>
              <SingleOffer text="Menggunakan Mesin Canggih" status="active" />
              <SingleOffer text="Packing Waring" status="active" />
              <SingleOffer text="Sampai Di Atas Kontener" status="active" />
              <SingleOffer text="Teknologi Pasca Panen" status="active" />
              <SingleOffer text="Ozonisasi" status="active" />
              <SingleOffer text="Edible Coating" status="active" />
              <SingleOffer text="Bergaransi" status="active" />
              <SingleOffer text="Sudah Termasuk Jahe" status="inactive" />
            </>
          )}
          {price?.nickname === "nickNameWashingComplete" && (
            <>
              <SingleOffer text="Menggunakan Mesin Canggih" status="active" />
              <SingleOffer text="Packing Waring" status="active" />
              <SingleOffer text="Sampai Di Atas Kontener" status="active" />
              <SingleOffer text="Teknologi Pasca Panen" status="active" />
              <SingleOffer text="Ozonisasi" status="active" />
              <SingleOffer text="Edible Coating" status="active" />
              <SingleOffer text="Bergaransi" status="active" />
              <SingleOffer text="Sudah Termasuk Jahe" status="active" />
            </>
          )}
        </div>
        <button
          onClick={handleSubscription}
          className={`inline-flex items-center rounded bg-primary px-8 py-[14px] font-heading text-base text-white duration-200 hover:bg-primary/90`}
        >
          {t("ContactUs")}
          <span className="pl-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
