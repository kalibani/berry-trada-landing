"use client";

import { Locale } from "@/i18n";
import changeLang from "@/lib/locale";
import { getClientSideCookie } from "@/lib/utils";
import { useEffect, useState } from "react";

export const useTranslate = () => {
  const langCookie = getClientSideCookie("lang");
  const [language, setLanguage] = useState<Locale>("id");

  const handleChangeLang = async (lang: Locale) => {
    await changeLang(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    if (!!langCookie) {
      setLanguage(langCookie as "en" | "id");
    }
  }, []);

  return {
    language,
    setLanguage: (lang: Locale) => handleChangeLang(lang),
  };
};
