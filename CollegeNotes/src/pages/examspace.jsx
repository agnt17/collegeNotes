import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExamSpace = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option, route) => {
    setSelectedOption(option);
    setIsOpen(false);
    navigate(route);
  };

  return (
    <div className="relative w-3/4 mx-auto mt-48">
      <button
        className="bg-emerald-500 text-white w-full h-14 flex justify-center items-center text-center rounded-xl"
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : "Select Your Course!"}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-emerald-700 text-white border border-gray-300 rounded-md shadow-lg z-10 text-center">
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Bachelors of Technology", "/btech_year")}
          >
            Bachelors of Technology
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Masters of Technology", "/mtech_year")}
          >
            Masters of Technology
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Philosophiae Doctor (Phd)", "/phd_year")}
          >
            Philosophiae Doctor (Phd)
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Masters of Computer Applications", "/mca_year")}
          >
            Masters of Computer Applications
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Masters of Business Administration", "/mba_year")}
          >
            Masters of Business Administration
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Masters of Science", "/msc_year")}
          >
            Masters of Science
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamSpace;
