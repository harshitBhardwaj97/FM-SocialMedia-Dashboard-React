import { React, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = ({ totalfollowers }) => {
  const total = totalfollowers.toLocaleString();
  return (
    <>
      <div className="header bg-verypaleBlue dark:bg-[#252B43] md:flex items-center justify-between max-w-7xl mx-auto p-3">
        <div className="header__left font-bold">
          <h1 className="md:text-3xl text-2xl text-veryDarkBlue dark:text-white">Social Media Dashboard</h1>
          <p className="text-darkGrayishBlue">Total Followers : {total}</p>
        </div>
        <div className="header__right flex items-center justify-between gap-2 md:justify-center md:border-0 border-t-2 pt-2 m-2">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;


