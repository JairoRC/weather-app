import React from "react";
import { useTranslation } from "react-i18next";

const CitySelector = ({ cityData, setCityData }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row mb-4 text-center sm:text-left items-center sm:items-start">
      <h1 className="text-3xl text-white mb-2 sm:mb-0 sm:mr-4">
        {t("select_city")}
      </h1>
      <select
        value={cityData}
        onChange={(e) => setCityData(e.target.value)}
        className="px-4 py-2 border rounded bg-gray-900 text-white"
      >
        <option value="London">{t("london")}</option>
        <option value="Madrid">{t("madrid")}</option>
        <option value="Murcia">{t("murcia")}</option>
      </select>
    </div>
  );
};

export default CitySelector;
