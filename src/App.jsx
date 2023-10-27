// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Facebook from "../images/icon-facebook.svg";
// import Instagram from "../images/icon-instagram.svg";
// import Twitter from "../images/icon-twitter.svg";
// import Youtube from "../images/icon-youtube.svg";
// import Up from "../images/icon-up.svg";
// import Down from "../images/icon-down.svg";

import Header from "./components/Header";
import SocialHandle from "./components/SocialHandle";
import Overview from "./components/Overview";

import { overViewData, socialMediaData } from "./utils/data";

function App() {
  // Calculate the total number of followers dynamically based on the array data
  let totalCount = 0;
  socialMediaData.map((socialmedia) => {
    totalCount += socialmedia.followers;
  });

  return (
    <>
      <div className={`container mx-auto max-w-7xl`}>
        <Header totalfollowers={totalCount} />

        <div className="top__section cursor-pointer lg:flex items-center justify-between md:grid md:grid-cols-2 md:gap-2 mx-auto p-4 grid grid-cols-1 gap-3">
          {socialMediaData.map((socialmedia, idx) => (
            <div className="social__handle mx-auto">
              <SocialHandle
                key={idx}
                mention={socialmedia.mention}
                image={socialmedia.image}
                followers={socialmedia.followers}
                deltacount={socialmedia.deltacount}
                deltaicon={socialmedia.deltaicon}
                socialhandle={socialmedia.socialhandle}
              />
            </div>
          ))}
        </div>

        <div className="overview__heading p-4 text-3xl font-bold my-2">
          OVERVIEW TODAY
        </div>

        <div className="overview__section grid items-center justify-center lg:grid-cols-4 md:grid-cols-2 gap-2">
          {overViewData.map((overview, idx) => (
            <div className="mx-auto">
              <Overview
                heading={overview.heading}
                image={overview.image}
                count={overview.count}
                deltacount={overview.deltacount}
                deltaicon={overview.deltaicon}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
