import React, { useEffect, useState } from "react";
import { getJobs } from "../../Storage/Storage";
import { useLoaderData, useNavigation } from "react-router-dom";
import ApplyJob from "../ApplyJob/ApplyJob";
import Spinner from "../Spinner/Spinner";
import FilterJob from "../FilterJob/FilterJob";
import headerLeft from "/public/left.png";
import headerRight from "/public/right.png";

const Apply = () => {
  const [applyJobs, setApplyJobs] = useState([]);
  const [filterRemote, setFilterRemote] = useState([]);
  const [filterOnsite, setFilterOnsite] = useState([]);
  const jobsData = useLoaderData();
  useEffect(() => {
    const storedJobs = getJobs();
    let jobs = [];
    let remotJobs = [];
    let onsiteJobs = [];
    for (const id in storedJobs) {
      const savedJob = jobsData.find((job) => job.id === id);
      if (savedJob) {
        jobs.push(savedJob);
        if (savedJob.type === "Remote") {
          remotJobs.push(savedJob);
        }
        if (savedJob.type === "Onsite") {
          onsiteJobs.push(savedJob);
        }
      }
    }
    setApplyJobs(jobs);
    setFilterRemote(remotJobs);
    setFilterOnsite(onsiteJobs);
  }, []);

  const filterRemoteJob = () => {
    setApplyJobs(filterRemote);
  };
  const filterOnsiteJob = () => {
    setApplyJobs(filterOnsite);
  };

  const spinner = useNavigation();
  if (spinner.state === "loading") {
    return <Spinner />;
  }

  return (
    <div className="">
      <div className=" bg-background ">
        <div className="flex md:flex-row flex-col justify-between relative">
          <div className="hidden md:block">
            <img src={headerLeft} alt="" />{" "}
          </div>
          <div className="md:absolute md:left-[45%] left-[38%] ">
            <h1 className="text-deep-dark text-4xl text-center  py-[70px] font-extrabold">
              Apply Job
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
      <div className="container mx-auto px-4 mt-20">
        <div className="text-end">
          <FilterJob
            filterRemote={filterRemoteJob}
            filterOnsite={filterOnsiteJob}
          />
        </div>
        <div>
          {applyJobs?.map((job) => (
            <ApplyJob key={job.id} job={job}></ApplyJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apply;
