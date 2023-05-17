import React, { useState } from "react";
import Dropdown from "Components/LangDropDown";
import Logo from "Components/Logo";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  handleModalVisibility: (isVisible: boolean) => void;
}

const Navbar = ({ handleModalVisibility }: NavbarProps) => {
  const handleSignInClick = () => {
    handleModalVisibility(true);
  };

  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between bg-blue-500 px-6 py-3">
      <Logo />
      <div className="flex items-center">
        <a href="#" className="mx-4 text-white">
          {t("Navbar.aboutUs")}
        </a>
        <a href="#" className="mx-4 text-white">
          {t("Navbar.signUp")}
        </a>
        <a href="#" className="mx-4 text-white" onClick={handleSignInClick}>
          {t("Navbar.logIn")}
        </a>
        <a>
          <Dropdown />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
