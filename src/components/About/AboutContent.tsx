"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import TabPanel from "./TabPanel";
import { useTranslations } from "next-intl";

const tabButtons = [
  {
    id: uuid(),
    title: "About Us",
    value: "about",
  },
  {
    id: uuid(),
    title: "Our Mission",
    value: "mission",
  },
  {
    id: uuid(),
    title: "Our Vision",
    value: "vision",
  },
];

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState<string>(tabButtons[0].value);

  const t = useTranslations("About");

  return (
    <>
      <div className="tabButtons flex w-full items-center justify-around">
        {tabButtons.map((tabButton) => (
          <button
            key={tabButton?.id}
            onClick={() => setActiveTab(tabButton?.value)}
            className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 ${activeTab === tabButton?.value ? "border-primary text-primary dark:border-primary" : "hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary"}`}
          >
            {tabButton?.title}
          </button>
        ))}
      </div>
      <div className="w-full">
        {activeTab === "about" && (
          <TabPanel
            title={t("taglineAbout")}
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
          >
            <p className="mb-6 text-base text-dark-text">
              {t("descriptionAbout1")}
            </p>
            <p className="mb-6 text-base text-dark-text">
              {t("descriptionAbout2")}
            </p>
            <p className="text-base text-dark-text">{t("descriptionAbout3")}</p>
          </TabPanel>
        )}

        {activeTab === "mission" && (
          <TabPanel
            title={t("taglineMission")}
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
            leftContent
          >
            <p className="mb-6 text-base text-dark-text">
              {t("descriptionMission1")}
            </p>
            <p className="mb-6 text-base text-dark-text">
              {t("descriptionMission2")}
            </p>
            <p className="text-base text-dark-text">
              {t("descriptionMission3")}
            </p>
          </TabPanel>
        )}

        {activeTab === "vision" && (
          <TabPanel
            title={t("taglineVision")}
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
          >
            <p className="mb-6 text-base text-dark-text">
              {t("descriptionVision")}
            </p>
          </TabPanel>
        )}
      </div>
    </>
  );
}
