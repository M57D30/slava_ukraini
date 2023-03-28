import React from "react";

import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-500 px-6 py-3">
      <a href="#" className="text-xl font-bold text-white">
        LOGO
      </a>

      <div className="flex items-center">
        <a href="#" className="mx-4 text-white">
          About Us
        </a>
        <a href="#" className="mx-4 text-white">
          Sign Up
        </a>
        <a href="#" className="mx-4 text-white">
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
