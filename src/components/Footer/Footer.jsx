import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-deep-dark w-full font-primary">
      <div className=" text-white  container mx-auto md:flex justify-between  px-4 pt-16 border-b-2 border-gray-800">
        <div className="w-full md:w-72 mb-10">
          <h2 className="text-3xl font-extrabold">Profession Hunt</h2>
          <p className="sub-title my-5">
            This process involves assessing your skills, interests, values, and
            goals, and using that information to research and evaluate different
            career options.
          </p>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon className="w-5 h-5" icon={faEnvelope} />
            <FontAwesomeIcon className="w-5 h-5" icon={faEnvelope} />
            <FontAwesomeIcon className="w-5 h-5" icon={faEnvelope} />
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold">Company</h3>
          <ul className="mt-4">
            <li className="cursor-pointer text-light-dark">Product</li>
            <li className="cursor-pointer text-light-dark">Project</li>
            <li className="cursor-pointer text-light-dark">Contact Us</li>
            <li className="cursor-pointer text-light-dark">About Us</li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold">Projects</h3>
          <ul className="mt-4">
            <li className="cursor-pointer text-light-dark">Ema-jhon</li>
            <li className="cursor-pointer text-light-dark">Dev Tips</li>
            <li className="cursor-pointer text-light-dark">Food Hunt</li>
            <li className="cursor-pointer text-light-dark">Taklu IN</li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="mt-4">
            <li className="cursor-pointer text-light-dark">Help Desk</li>
            <li className="cursor-pointer text-light-dark">Online Chat</li>
            <li className="cursor-pointer text-light-dark">By Email</li>
            <li className="cursor-pointer text-light-dark">By Phone</li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-4 text-light-dark">
            House No. 123, <br /> Road No. 4 Block C,
            <br /> Banani Dhaka 1213 Bangladesh
          </p>
          <p className="my-2 text-light-dark">
            <FontAwesomeIcon className="mr-2" icon={faPhone} /> +8801700-000015
          </p>
          <p className="text-light-dark">
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
            contact@pro-hunt.com.bd
          </p>
          <p></p>
        </div>
      </div>
      <div className=" text-light-dark container mx-auto md:flex justify-between px-4 py-11">
        <p className="my-2">@2023 Profession Hunt. All Rights Reserved</p>
        <p className="mt-2">Powered by Job Dibo Company Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
