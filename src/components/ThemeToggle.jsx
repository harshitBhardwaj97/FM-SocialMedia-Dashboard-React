import { React, useState,useEffect } from "react";

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    if (isLightMode) {
      document.querySelector("html").classList.remove("dark");
    }

    if (!isLightMode) {
      document.querySelector("html").classList.add("dark");
    }
  }, [isLightMode]);

  return (
    <>
      <div className="mode font-bold dark:text-white">
        {isLightMode ? "Light Mode" : "Dark Mode"}
      </div>
      <div
        className="toggle__btn"
        style={{
          borderRadius: "30% / 60%",
          transition: "0.3s",
        }}
        onClick={handleToggle}
      >
        <div
          className={isLightMode ? `switch` : `switch__right`}
          style={{
            transition: "0.3s",
          }}
        ></div>
      </div>
    </>
  );
};

export default ThemeToggle;

/*
.toggle__btn {
    background: blue;
    border-radius: 30% / 60%;
    width: 70px;
    padding: 5px;
    cursor: pointer;
}

.switch {
    margin-left: unset;
    background-color: yellow;
    height: 25px;
    border-radius: 50%;
    width: 25px;
    transition: 0.3s;
}

.switch__right {
    margin-left: 35px;
    background-color: yellow;
    height: 25px;
    border-radius: 50%;
    width: 25px;
}

*/
