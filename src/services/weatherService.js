import axios from "axios";
import API_KEY from "../config";
import { addMinutes, isPast } from "date-fns";
import i18n from "../i18n/i18n";

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

let cache = JSON.parse(localStorage.getItem("city")) || {};
let currentLang = localStorage.getItem("currentLanguage") || "en";

export const getWeather = async (city, language) => {
  console.log(language, "lang");
  if (currentLang !== language) {
    cache = {};
    cache = {};
    currentLang = language;
    localStorage.setItem("currentLanguage", language);
  }
  if (!cache[city] || isPast(cache[city].expirationDate)) {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
        lang: language,
      },
    });
    cache[city] = {
      data: response.data,
      lang: i18n.language,
      expirationDate: addMinutes(new Date(), 5),
    };
    localStorage.setItem("city", JSON.stringify(cache));
  }

  return cache[city].data;
};
