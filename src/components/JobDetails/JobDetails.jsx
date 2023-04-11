import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const JobDetails = ({ job }) => {
  const { id, logo, title, company, type, hours, location, salary } = job;
  const fixdScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="border border-slate-300 p-10 rounded-lg">
      <img className="w-[300px] h-14 object-fit" src={logo} alt="" />
      <h2 className="text-xl md:text-2xl font-extrabold text-deep-dark mt-8 mb-2">
        {title}
      </h2>
      <p className="text-light-dark text-lg md:text-xl font-semibold mb-4">
        {company}
      </p>
      <div className="flex items-center gap-4 mb-4">
        <p className="border border-primary text-primary px-4 py-2 rounded-md font-extrabold">
          {type}
        </p>
        <p className="border border-primary text-primary px-4 py-2 rounded-md font-extrabold">
          {hours}
        </p>
      </div>
      <div className=":flex items-center gap-6 text-light-dark text-lg md:text-xl font-semibold">
        <p>
          <FontAwesomeIcon className="mr-2" icon={faLocationDot} /> {location}
        </p>
        <p>
          <FontAwesomeIcon className="mr-2" icon={faCircleDollarToSlot} />
          Salary : {salary}
        </p>
      </div>
      <Link to={`/job-details/${id}`}>
        <button
          onClick={() => fixdScroll()}
          className="btn px-4 py-3 font-semibold mt-8 btn-sml"
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;
