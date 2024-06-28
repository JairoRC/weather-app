import React from "react";
import { useTranslation } from "react-i18next";

const CitySelector = ({ city, setCity }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        <option value="London">{t("london")}</option>
        <option value="Madrid">{t("madrid")}</option>
        <option value="Murcia">{t("murcia")}</option>
      </select>
    </div>
  );
};

export default CitySelector;
