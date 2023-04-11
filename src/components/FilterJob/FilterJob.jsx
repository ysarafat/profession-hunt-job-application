import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const FilterJob = ({ filterRemote, filterOnsite }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const remote = () => {
    filterRemote();
    setIsOpen(false);
  };
  const onsite = () => {
    filterOnsite();
    setIsOpen(false);
  };

  return (
    <div className="font-primary">
      <button
        className="bg-slate-100 px-7 py-4 rounded-lg text-xl font-semibold text-light-dark "
        onClick={toggleDropdown}
      >
        Filter by <FontAwesomeIcon className="ml-2 icon " icon={faArrowDown} />
      </button>
      {isOpen && (
        <ul className="text-lg font-semibold mt-2 bg-transparent z-10">
          <li className="hover:cursor-pointer" onClick={() => onsite()}>
            Onsite
          </li>
          <li className="hover:cursor-pointer" onClick={() => remote()}>
            Remote
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterJob;
