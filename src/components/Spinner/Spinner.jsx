import React from "react";

const Spinner = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="border-8 border-dashed animate-spin  border-primary h-24 w-24 rounded-full"></div>
     
      {/* <p className="text-7xl text-primary ">Lodding<span className="animate-ping">...</span></p> */}
    </div>
  );
};

export default Spinner;
