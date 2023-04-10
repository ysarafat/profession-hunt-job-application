import React from "react";
const JobDetails = ({ job }) => {
  const { logo, title, company, type, hours, location, salary } = job;
  return (
    <div>
      <img className="w-[300px] h-14 object-fit" src={logo} alt="" />
      <h2>{title}</h2>
      <p>{company}</p>
      <div>
        <button></button>
      </div>
    </div>
  );
};

export default JobDetails;
