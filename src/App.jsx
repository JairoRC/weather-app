import React from "react";
import "./index.css";
import NavBar from "./components/ui/NavBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <NavBar />

        <WeatherDisplay />
      </div>
    </I18nextProvider>
  );
}

export default App;
