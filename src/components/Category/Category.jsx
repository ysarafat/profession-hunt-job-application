import React from "react";
const Category = ({ category }) => {
  const { icon, title, jobs } = category;
  return (
    <div className="bg-background rounded-lg p-10 mb-7 md:mb-0 w-full">
      <img className="bg-[#EFECFF] p-4 rounded-lg mb-8" src={icon} alt="" />
      <h3 className="text-xl font-extrabold">{title}</h3>
      <p className="text-light-dark">{jobs} Jobs Available</p>
    </div>
  );
};

export default Category;
