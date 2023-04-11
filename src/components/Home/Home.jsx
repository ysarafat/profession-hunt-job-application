import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import JobDetails from "../JobDetails/JobDetails";
import { useLoaderData, useNavigation } from "react-router-dom";
import Category from "../Category/Category";
import Spinner from "../Spinner/Spinner";
const Home = () => {
  const [jobs, setJobs] = useState([]);
  const circular = useLoaderData();
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const jobSlice = circular.slice(0, 4);
    setJobs(jobSlice);
  }, []);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  const spinner = useNavigation();
  if (spinner.state === "loading") {
    return <Spinner />;
  }
  const handelData = () => {
    setJobs(circular);
  };
  return (
    <div className="font-primary">
      <Banner />
      <div className="px-4 container mx-auto mt-12 lg:mt-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:5xl font-extrabold text-deep-dark">
            Job Category List
          </h1>
          <p className="text-light-dark mt-4 ">
            Select your dream job here with categories
          </p>
        </div>
        <div className="md:flex justify-between gap-7 max-w-full">
          {categorys.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="px-4 container mx-auto mt-12 lg:mt-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:5xl font-extrabold text-deep-dark">
            Featured Jobs
          </h1>
          <p className="text-light-dark mt-4 ">
            Select your dream job here with categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {jobs?.map((job) => (
            <JobDetails key={job.id} job={job}></JobDetails>
          ))}
        </div>
        <div className="w-1/2 mx-auto text-center">
          {jobs.length <= 4 ? (
            <button
              onClick={handelData}
              className="btn px-4 py-3 font-semibold mt-8 btn-sml"
            >
              See More
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
