import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobInfo = () => {
  const jobs = useLoaderData();
  const identified = useParams();
  const [jobDetails, setJobDetails] = useState({});
  useEffect(() => {
    const finding = jobs.find((job) => job.id === identified.id);
    setJobDetails(finding);
  }, []);
  console.log(jobDetails);
  return <div>Hello</div>;
};

export default JobInfo;
