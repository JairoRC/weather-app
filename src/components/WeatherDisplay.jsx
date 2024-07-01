import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { format, fromUnixTime } from "date-fns";
import { getWeather } from "../services/weatherService";
import londonImage from "../images/London.png";
import madridImage from "../images/Madrid.png";
import murciaImage from "../images/Murcia.png";
import i18n from "../i18n/i18n";
import CitySelector from "./CitySelector";

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

  function roundTemperature(temp) {
    return parseFloat(temp).toFixed(1);
  }

  const filterTodayWeather = (data) => {
    const today = new Date().toISOString().split("T")[0];

    return data.filter((item) => item.dt_txt.startsWith(today));
  };

  const formatTimestampToTime = (timestamp) => {
    const date = fromUnixTime(timestamp);
    return format(date, "HH:mm");
  };

  if (!weather) return <div>{t("loading")}</div>;

  const { list } = weather;
  const currentWeather = list[0];
  const todayWeather = filterTodayWeather(list).map((item) => ({
    ...item,
    formattedTime: formatTimestampToTime(item.dt),
  }));

  return (
    <div className="sm:h-88dvh bg-gray-900 shadow-lg p-6 flex flex-col items-center">
      <CitySelector cityData={city} setCityData={setCity} />
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-62 mr-0 sm:mr-6 mb-4 sm:mb-0">
          <img
            src={cityImages[city]}
            alt={city}
            className="max-w-full sm:max-w-96 object-fill rounded-2xl"
          />
        </div>
        <div className="flex-auto justify-evenly">
          <div className="text-xl text-white font-semibold mt-1 text-left">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                alt={currentWeather.weather[0].description}
                className="w-16 h-16"
              />
              <h1 className="text-4xl mt-2 sm:mt-0 sm:ml-4">
                {roundTemperature(currentWeather.main.temp)}°C
              </h1>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-4xl ml-0 sm:ml-2 mb-2">
                {capitalizeWords(currentWeather.weather[0].description)}
              </p>
              <p className="ml-0 sm:ml-2 text-gray-400">
                {t("min_temperature")}{" "}
                {roundTemperature(currentWeather.main.temp_min)}°C
              </p>
              <p className="ml-0 sm:ml-2 text-gray-400">
                {t("max_temperature")}{" "}
                {roundTemperature(currentWeather.main.temp_max)}°C
              </p>
              <p className="ml-0 sm:ml-2 text-gray-400">
                {t("humidity")} {roundTemperature(currentWeather.main.humidity)}
                %
              </p>
              <p className="ml-0 sm:ml-2 text-gray-400">
                {t("pressure")} {roundTemperature(currentWeather.main.pressure)}
                mbar
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-center w-full mt-6">
        {todayWeather.map((weatherItem, index) => (
          <div
            key={index}
            className="flex flex-col items-center mr-2 sm:mr-6 mb-4 sm:mb-0 pt-2 pb-2 pl-2 pr-4 bg-gray-800 rounded-lg w-32 text-white"
          >
            <div>
              <span>🕛{weatherItem.formattedTime}</span>
            </div>
            <div className="flex items-center mt-2">
              <img
                src={`http://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png`}
                alt={weatherItem.weather[0].description}
                className="w-10 h-10"
              />
              <span className="">
                {roundTemperature(weatherItem.main.temp)}°C
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
