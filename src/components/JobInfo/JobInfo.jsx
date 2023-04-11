import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
  faInfoCircle,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./jobinfo.css";
import Spinner from "../Spinner/Spinner";
import { addToDb } from "../../Storage/Storage";
import PageTitle from "../PageTitle/PageTitle";

const JobInfo = () => {
  const jobs = useLoaderData();
  const identified = useParams();
  const [jobDetails, setJobDetails] = useState({});
  useEffect(() => {
    const finding = jobs.find((job) => job.id === identified.id);
    setJobDetails(finding);
  }, []);
  const handelApply = (id) => {
    addToDb(id);
  };
  const {
    description,
    responsibility,
    edu,
    experiance,
    salary,
    title,
    contact,
    id,
  } = jobDetails;
  const spinner = useNavigation();
  if (spinner.state === "loading") {
    return <Spinner />;
  }

  return (
    <div>
      <PageTitle>Job Details</PageTitle>
      <div className="px-4 container mx-auto  md:grid grid-cols-6 font-primary gap-6 my-12 lg:my-16">
        <div className="col-span-4 text-light-dark font-medium">
          <p className="">
            <span className="font-extrabold text-deep-dark">
              Job Description :
            </span>{" "}
            {description}
          </p>
          <p className="my-6">
            {" "}
            <span className="font-extrabold text-deep-dark">
              Job Responsibility :{" "}
            </span>{" "}
            {responsibility?.map((re, index) => (
              <li
                key={index}
                className="my-2 hover:text-light-dark list-decimal"
              >
                {re}
              </li>
            ))}
          </p>
          <p className="mb-6">
            <span className="font-extrabold text-deep-dark">
              Educational Requirements :{" "}
            </span>{" "}
            {edu?.map((edu, index) => (
              <li key={index} className="my-2 hover:text-light-dark list-disc">
                {edu}
              </li>
            ))}
          </p>
          <p className="mb-16">
            <span className="font-extrabold text-deep-dark">
              Experiences :{" "}
            </span>{" "}
            {experiance}
          </p>
        </div>
        <div className="col-span-2 ">
          <div className="bg-background p-6 w-full rounded-lg  text-light-dark text-xl">
            <h3 className="pb-6 border-b border-slate-200 text-deep-dark font-extrabold">
              Job Details
            </h3>
            <p className="mt-6">
              {" "}
              <FontAwesomeIcon
                className="mr-2 icon "
                icon={faCircleDollarToSlot}
              />
              <span className="text-deep-dark font-bold">Salary :</span>{" "}
              {salary} (per month)
            </p>
            <p className="mt-4 mb-7">
              {" "}
              <FontAwesomeIcon className="mr-2 icon" icon={faInfoCircle} />{" "}
              <span className="text-deep-dark font-bold">Title :</span> {title}
            </p>
            <h3 className="pb-6 border-b border-slate-200 text-deep-dark font-extrabold">
              Contact Information
            </h3>
            <p className="mt-6">
              {" "}
              <FontAwesomeIcon className="mr-2 icon" icon={faPhone} />
              <span className="text-deep-dark font-bold">Phone :</span>{" "}
              {contact?.phone}
            </p>
            <p className="my-4">
              {" "}
              <FontAwesomeIcon className="mr-2 icon" icon={faEnvelope} />
              <span className="text-deep-dark font-bold">Email :</span>{" "}
              {contact?.email}
            </p>
            <p className="">
              {" "}
              <FontAwesomeIcon className="mr-2 icon" icon={faLocationDot} />
              <span className="text-deep-dark font-bold">Addresses : </span>
              {contact?.address}
            </p>
          </div>
          <button
            onClick={() => handelApply(id)}
            className="btn btn-sml w-full px-[25px] py-[15px] mt-6 text-xl font-bold md:font-extrabold"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
