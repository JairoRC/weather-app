import API_KEY from "../config";
import { addMinutes, isPast } from "date-fns";
import i18n from "../i18n/i18n";

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

let cache = JSON.parse(localStorage.getItem("city")) || {};
let currentLang = localStorage.getItem("currentLanguage") || "en";

export const getWeather = async (city, language) => {
  if (currentLang !== language) {
    cache = {};
    currentLang = language;
    localStorage.setItem("currentLanguage", language);
  }

  if (!cache[city] || isPast(cache[city].expirationDate)) {
    const url = new URL(BASE_URL);
    url.searchParams.append("q", city);
    url.searchParams.append("units", "metric");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("lang", language);

    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      cache[city] = {
        data: data,
        lang: i18n.language,
        expirationDate: addMinutes(new Date(), 5),
      };
      localStorage.setItem("city", JSON.stringify(cache));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }

  return cache[city].data;
};
