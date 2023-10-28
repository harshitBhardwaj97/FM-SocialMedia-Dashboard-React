import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-7xl p-4 mx-auto bg-darkGrayishBlue dark:bg-[#252B43] flex items-center justify-center">
        <div className="footer__info text-md md:text-l text-veryDarkBlue dark:text-darkGrayishBlue font-bold">
          Coded By{" "}
          <a
            href="https://github.com/harshitBhardwaj97" target="_blank"
            className="text-lightGrayishBlue dark:text-white hover:scale-105 dark:hover:text-opacity-80 hover:text-indigo-900 ease-linear duration-150"
          >
            @harshitBhardwaj97
          </a> 
        </div>
      </footer>
    </>
  );
};

export default Footer;
