import { useTranslation } from "react-i18next";
import { useCallback, useEffect } from "react";

export function useLanguage() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === "ar";

  const toggleLanguage = useCallback(() => {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  }, [currentLanguage, i18n]);

  const setLanguage = useCallback(
    (lang: "en" | "ar") => {
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  // Update document direction and lang attribute
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage, isRTL]);

  return {
    currentLanguage,
    isRTL,
    toggleLanguage,
    setLanguage,
  };
}
