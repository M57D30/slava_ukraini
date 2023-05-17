import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

const Dropdown = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = async (languageCode: string) => {
    console.log("Language changed:", languageCode);
    await i18n.changeLanguage(languageCode);
    setDropdownOpen(false); // Close the dropdown after language change
  };

  const currentLanguage = i18n.language; // Get the currently set language

  return (
    <div className="relative z-50">
      <button
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        className="inline-flex items-center rounded-lg bg-blue-700 px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleDropdownToggle}
      >
        {/* Display the flag corresponding to the current language */}
        <Flag code={currentLanguage.toUpperCase()} className="mr-2 h-5 w-5" />
        <svg
          className="ml-2 h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          id="dropdownDelay"
          className="absolute left-0 z-10 mt-2 w-20 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleLanguageChange("lt")}
              >
                <Flag code="LT" className="mr-2 h-5 w-5" />
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleLanguageChange("en")}
              >
                <Flag code="GB" className="mr-2 h-5 w-5" />
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleLanguageChange("fr")}
              >
                <Flag code="FR" className="mr-2 h-5 w-5" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
