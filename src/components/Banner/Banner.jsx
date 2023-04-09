import React from "react";
import "./Banner.css";
import Img from "../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="w-full bg-background ">
      <div className="container mx-auto p-4 font-primary lg:flex justify-between items-center ">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-7xl text-deep-dark font-extrabold">
            Discover your next career move with <br />
            <span className="text-primary">your dream job</span>
          </h1>
          <p className="mt-4 lg:mt-6 text-light-dark">
            suggests that you can find your ideal profession by identifying what
            it is that you truly desire in a job. This process involves
            assessing your skills.
          </p>
          <button className="btn btn-sml mt-4 lg:mt-6 px-6 py-2 lg:px-[25px] lg:py-[15px]">
            Get Started
          </button>
        </div>
        <img className="mt-6" src={Img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
