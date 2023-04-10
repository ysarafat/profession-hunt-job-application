import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
  faInfoCircle,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ApplyJob = ({ job }) => {
  const { logo, title, company, type, hours, salary, location } = job;
  return (
    <div className="border border-slate-200 rounded-lg p-7 flex md:flex-row flex-col items-center gap-8 font-primary mt-6">
      <div className="w-60 h-60 bg-background flex justify-center items-center rounded-lg">
        <img className=" w-[150px] h-7 my-auto" src={logo} alt="" />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-extrabold text-deep-dark mb-2">{title}</h2>
        <p className="text-2xl font-semibold text-light-dark mb-4">{company}</p>
        <div className="flex items-center gap-4 mb-4">
          <p className="border border-primary text-primary px-4 py-2 rounded-md font-extrabold">
            {type}
          </p>
          <p className="border border-primary text-primary px-4 py-2 rounded-md font-extrabold">
            {hours}
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-6 text-light-dark text-lg md:text-xl font-semibold">
          <p>
            <FontAwesomeIcon className="mr-2" icon={faLocationDot} /> {location}
          </p>
          <p>
            <FontAwesomeIcon className="mr-2" icon={faCircleDollarToSlot} />
            Salary : {salary}
          </p>
        </div>
      </div>
      <div>
        <button className="btn px-4 py-3 font-semibold mt-8 btn-sml">
          View Deails
        </button>
      </div>
    </div>
  );
};

export default ApplyJob;
