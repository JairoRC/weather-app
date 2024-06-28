import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getWeather } from "../services/weatherService";
import londonImage from "../images/London.png";
import madridImage from "../images/Madrid.png";
import murciaImage from "../images/Murcia.png";
import i18n from "../i18n/i18n";

const WeatherDisplay = () => {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const { t } = useTranslation();

  const cityImages = {
    London: londonImage,
    Madrid: madridImage,
    Murcia: murciaImage,
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const lang = i18n.language;
      const data = await getWeather(city, lang);
      setWeather(data);
    };

    fetchWeather();
  }, [city, t]);

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  if (!weather) return <div>{t("loading")}</div>;

  const { list } = weather;
  const currentWeather = list[0];
  console.log(currentWeather, "tiempo");

  return (
    <div className="max-w-lg bg-gray-900 shadow-lg p-6">
      <div className="flex flex-col ">
        <div className="">
          <div className="relative h-62 w-full mb-3">
            <div className="absolute flex flex-col top-0 right-0 p-3"></div>
            <img
              src={cityImages[city]}
              alt={city}
              className=" w-full   object-fill  rounded-2xl"
            />
          </div>
          <div className="mb-4">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-4 py-2 border rounded "
            >
              <option value="London">{t("london")}</option>
              <option value="Madrid">{t("madrid")}</option>
              <option value="Murcia">{t("murcia")}</option>
            </select>
          </div>
          <div className="flex-auto justify-evenly">
            <div className="text-xl text-white font-semibold mt-1">
              <div className="flex">
                <img
                  src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                  alt={currentWeather.weather[0].description}
                  className="w-16 h-16"
                />
                <h1 className="text-4xl">{currentWeather.main.temp}°C</h1>
              </div>
              <p>{capitalizeWords(currentWeather.weather[0].description)}°C</p>
              <p>
                {t("temperature")}🌡 {currentWeather.main.temp}°C
              </p>
              <p>
                {t("min_temperature")} {currentWeather.main.temp_min}°C
              </p>
              <p>
                {t("max_temperature")}: {currentWeather.main.temp_max}°C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
