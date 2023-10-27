import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-7xl p-4 mx-auto bg-darkGrayishBlue flex items-center justify-center">
        <div className="footer__info text-md md:text-l text-veryDarkBlue font-bold">
          Coded By{" "}
          <a
            href="https://github.com/harshitBhardwaj97" target="_blank"
            className="text-lightGrayishBlue hover:scale-105 hover:text-indigo-900 ease-linear duration-150"
          >
            @harshitBhardwaj97
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
