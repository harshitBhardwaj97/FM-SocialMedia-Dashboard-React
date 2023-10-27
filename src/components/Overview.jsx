import React from "react";

const Overview = ({ heading, image, count, deltaicon, deltacount }) => {
  return (
    <>
      <div className="overview w-[180px] h-[130px] md:w-[250px] md:h-[150px] cursor-pointer  p-4 m-4 rounded-lg bg-lightGrayishBlue hover:bg-blue-200 ease-linear duration-150 flex flex-col items-center justify-between">
        <div className="overview__top flex w-[90%] p-2 items-center justify-between">
          <div className="overview__heading font-bold">{heading}</div>
          <div className="icon">
            <img src={image} alt={image} />
          </div>
        </div>
        <div className="overview__bottom w-[90%] p-2 flex font-bold items-center justify-between">
          <div className="count text-2xl">{count}</div>
          <div
            className={
              deltaicon === "../images/icon-up.svg"
                ? `delta text-center flex items-center text-green-500`
                : `delta text-center flex items-center text-red-500`
            }
          >
            <img src={deltaicon} alt={deltaicon} />
            {deltacount} %
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
