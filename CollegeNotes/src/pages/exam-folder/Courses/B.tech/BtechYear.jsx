import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BtechYear = () => {
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
        {selectedOption ? selectedOption : "Select Your Year!"}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-emerald-700 text-white border border-gray-300 rounded-md shadow-lg z-10 text-center">
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("1st Year Branch", "/btech_branch")}
          >
            1st Year(Freshman)
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("2nd Year Branch", "/btech_branch")}
          >
            2nd Year(Sophomore)
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("3rd Year Branch", "/btech_branch")}
          >
            3rd year(Junior)
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("Final Year Branch", "/btech_branch")}
          >
            Final Year(Senior)
          </div>
          
        </div>
      )}
    </div>
  )
}

export default BtechYear