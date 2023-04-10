import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import JobDetails from "../JobDetails/JobDetails";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
const Home = () => {
  const [categorys, setCategorys] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  // console.log(jobs);
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
      <div className="px-4 container mx-auto">
        {jobs.map((job) => (
          <JobDetails key={job.id} job={job}></JobDetails>
        ))}
      </div>
    </div>
  );
};

export default Home;
