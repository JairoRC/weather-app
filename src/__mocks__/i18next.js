import i18n from 'i18next';

i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        loading: "Loading...",
        min_temperature: "Min Temperature",
        max_temperature: "Max Temperature",
        humidity: "Humidity",
        pressure: "Pressure",
      },
    },
  },
});

export default i18n;
