import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BtechBranch = () => {
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
        {selectedOption ? selectedOption : "Select Your Branch!"}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-emerald-700 text-white border border-gray-300 rounded-md shadow-lg z-10 text-center">
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("CSE-IT", "/semester")}
          >
            Computer Science and Engineering/ Information Technology
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Electronics", "/semester")}
          >
            Electronics Engineering
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Electrical", "/semester")}
          >
            Electrical Engineering
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Mechanical", "/semester")}
          >
            Mechanical Engineering
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Civil", "/semester")}
          >
            Civil Engineering
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Chemical", "/semester")}
          >
            Chemical Technology
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Paint", "/semester")}
          >
            Paint Technology
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Plastic", "/semester")}
          >
            Plastic Technology
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Oil", "/semester")}
          >
            Oil Technology
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Food", "/semester")}
          >
            Food Technology
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("BioChemical", "/semester")}
          >
            Bio-Chemical Engineering
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Leather", "/semester")}
          >
            Leather Technology
          </div>
          
        </div>
      )}
    </div>
  )
}

export default BtechBranch