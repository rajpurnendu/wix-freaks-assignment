import ThemeSwitch from "@/app/ThemeSwitch";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center px-4 py-6 md:px-14 md:py-7 text-[#002e47] dark:text-[#eae3b8]">
      {/* Logo  */}
      <div className="text-[25px] hover:text-[#367ca1] dark:hover:text-[#b3ac84] cursor-pointer">
        Logo
      </div>
      {/* Menu  */}
      <div className="flex w-[60%] md:w-[30%] justify-between items-center">
        <p className="hover:text-[#367ca1] dark:hover:text-[#b3ac84] cursor-pointer">
          Call Us
        </p>
        <p className="hover:text-[#367ca1] dark:hover:text-[#b3ac84] cursor-pointer">
          Our Portfolio
        </p>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
