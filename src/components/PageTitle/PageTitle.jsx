import React from "react";
import headerLeft from "/public/left.png";
import headerRight from "/public/right.png";
const PageTitle = ({ children }) => {
  return (
    <>
      <div className=" bg-background ">
        <div className="flex md:flex-row flex-col justify-between relative">
          <div className="hidden md:block">
            <img src={headerLeft} alt="" />{" "}
          </div>
          <div className="md:absolute md:left-[45%] left-[38%] ">
            <h1 className="text-deep-dark text-4xl text-center  py-[70px] font-extrabold">
              {children}
            </h1>
          </div>
          <div className="hidden md:block">
            <img
              className="absolute -top-[98px] right-0"
              src={headerRight}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
