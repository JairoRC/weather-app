import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-4 py-2 m-2 ${
          i18n.language === "en" ? "font-bold text-blue-500" : "text-white"
        }`}
      >
        {t("english")}
      </button>
      <button
        onClick={() => i18n.changeLanguage("es")}
        className={`px-4 py-2 m-2 ${
          i18n.language === "es" ? "font-bold text-blue-500" : "text-white"
        }`}
      >
        {t("spanish")}
      </button>
    </div>
  );
};

export default LanguageSelector;
