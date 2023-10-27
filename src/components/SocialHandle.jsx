import React from "react";

const SocialHandle = ({
  mention,
  image,
  followers,
  deltacount,
  deltaicon,
  socialhandle,
}) => {
  /*
  let borderColor;

  switch (socialhandle) {
    case "instagram":
      borderColor = `primaryInstagram`;
      break;

    case "facebook":
      borderColor = `primaryFacebook`;
      break;

    case "twitter":
      borderColor = `primaryTwitter`;
      break;

    case "youtube":
      borderColor = `primaryYoutube`;
      break;
  }
  */

  return (
    <>
      <div
        className={`w-[200px] h-[170px] md:w-[250px] md:h-[230px] p-4 m-4  rounded-lg   bg-lightGrayishBlue hover:bg-blue-200 ease-linear duration-150 flex flex-col items-center justify-between hover:border-t-4 hover:border-red-600 shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-700`}
      >
        <div className="info flex items-center justify-center font-bold gap-2">
          <img src={image} alt={image} />
          <p>@{mention}</p>
        </div>
        <div className="followers">
          <div className="followers__info text-center">
            <p className="text-4xl font-bold">{followers.toLocaleString()}</p>
            <p className="uppercase">
              {socialhandle.toLowerCase().includes("youtube")
                ? "SUBSCRIBERS"
                : "FOLLOWERS"}
            </p>
          </div>
        </div>
        <div
          className={
            deltaicon === "/icon-up.svg"
              ? `delta__info text-center text-green-500`
              : `delta__info text-center text-red-500`
          }
        >
          <p className="delta__count flex items-center gap-1 font-bold">
            <img src={deltaicon} alt={deltaicon} />
            {deltacount.toLocaleString()} Today
          </p>
        </div>
      </div>
    </>
  );
};

export default SocialHandle;
