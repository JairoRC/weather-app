import React from "react";
import LanguageSelector from "../LanguageSelector";

const NavBar = () => {
  return (
    <nav className="border-b-2 border-gray-500 px-2 sm:px-4 py-2.5 bg-gray-900 shadow">
      <div className="container flex flex-wrap justify-end items-center mx-auto">
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default NavBar;
