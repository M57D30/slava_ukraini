import React from "react";
import Logo from "Components/Logo";

interface NavbarProps {
  handleModalVisibility: (isVisible: boolean) => void;
}

const Navbar = ({ handleModalVisibility }: NavbarProps) => {
  const handleSignInClick = () => {
    handleModalVisibility(true);
  };

  return (
    <nav className="flex justify-between bg-blue-500 px-6 py-3">
      <Logo />

      <div className="flex items-center">
        <a href="#" className="mx-4 text-white">
          About Us
        </a>
        <a href="#" className="mx-4 text-white">
          Sign Up
        </a>
        <a href="#" className="mx-4 text-white" onClick={handleSignInClick}>
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
