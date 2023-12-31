import React from "react";

const Overview = ({ heading, image, count, deltaicon, deltacount }) => {
  return (
    <>
      <div className="overview w-[180px] h-[130px] md:w-[250px] md:h-[150px] cursor-pointer  p-4 m-4 rounded-lg bg-lightGrayishBlue hover:bg-blue-200 shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-700 ease-linear duration-150 flex flex-col items-center justify-between dark:shadow-white/30 dark:hover:shadow-white/60 dark:bg-[#252B43] dark:hover:bg-[#333A56] dark:text-[#8089B0]">
        <div className="overview__top flex w-[90%] p-2 items-center justify-between">
          <div className="overview__heading font-bold text-l md:text-xl">{heading}</div>
          <div className="icon">
            <img src={image} alt={image} />
          </div>
        </div>
        <div className="overview__bottom w-[90%] p-2 flex font-bold items-center justify-between">
          <div className="count text-l md:text-2xl dark:text-white">{count.toLocaleString()}</div>
          <div
            className={
              deltaicon === "/icon-up.svg"
                ? `delta text-center flex items-center justify-between text-green-500`
                : `delta text-center flex items-center justify-between text-red-500`
            }
          >
            <img src={deltaicon} alt={deltaicon} />
            <div className="text-l md:text-xl">{deltacount.toLocaleString()}</div> %
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
