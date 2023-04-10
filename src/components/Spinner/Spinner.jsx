import React from "react";

const Spinner = () => {
  return (
    <div className=" flex justify-center items-center h-[calc(100vh-542px)]">
      <p className="text-7xl text-primary ">
        Lodding<span className="animate-ping">...</span>
      </p>
    </div>
  );
};

export default Spinner;
