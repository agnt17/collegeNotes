import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PdfViewer from "./PdfViewer.jsx"; // Import the PdfViewer component

const SelectSemester = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setShowContent(true);
    // navigate(route); // Uncomment if you still want to navigate
  };

  return (
    <div className="relative w-3/4 mx-auto mt-48">
      {!showContent && (
        <button
          className="bg-emerald-500 text-white w-full h-14 flex justify-center items-center text-center rounded-xl"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : "Select Semester"}
        </button>
      )}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-emerald-700 text-white border border-gray-300 rounded-md shadow-lg z-10 text-center">
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("1st")}
          >
            1st Semester
          </div>
          <div
            className="px-4 py-2 hover:bg-emerald-900 cursor-pointer"
            onClick={() => handleOptionClick("2nd")}
          >
            2nd Semester
          </div>
        </div>
      )}
      {showContent && (
        <div className="mt-4 flex flex-col lg:flex-row gap-10 justify-center items-center h-4/5">
          <div className="bg-gray-100 p-4 rounded-lg w-4/5 lg:w-5/12 shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2 flex justify-center">
              Notes
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 ">
                <p>Notes 1</p>
                <a
                  href="/AdmitCard (4).pdf"
                  preview
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  Preview
                </a>
                <a
                  href="/AdmitCard (4).pdf"
                  download
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg w-4/5 lg:w-5/12 shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2 flex justify-center">
              Books
            </h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 ">
                  <p>Book 1</p>
                  <a
                    href="/AdmitCard (4).pdf"
                    preview
                    className="text-blue-500 hover:underline"
                    target="_blank"
                  >
                    Preview
                  </a>
                  <a
                    href="/AdmitCard (4).pdf"
                    download
                    className="text-blue-500 hover:underline"
                    target="_blank"
                  >
                    Download
                  </a>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectSemester;
