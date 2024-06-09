import React from "react";
import { useNavigate } from "react-router-dom";
import examspace from "../pages/examspace";

const Hero = () => {
  const navigate = useNavigate(); // useNavigate should be called inside the component function

  const handleClick = () => {
    navigate("/examspace");
  };
  const handleClick1 = () => {
    navigate("/learnspace");
  };

  return (
    <div className="">
      <p className="text-center text-6xl mt-40 select-none">
        Get All Your Notes RightHere!
      </p>
      <div className="">
        <button className="items-center mx-auto flex justify-center mt-20 text-2xl bg-transparen text-white font-semibold py-2 px-4 border border-green-600 rounded-lg hover:bg-green-600 transform decoration-slate-500">
          Get Notes
        </button>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row justify-center mt-14 lg:gap-44 text-green-600 text-xl items-center mb-10  ">
        <div
          className="w-44 h-24 border border-fuchsia-700 flex justify-center items-center rounded-xl cursor-pointer hover:scale-125 transition-all ease-out duration-2000"
          onClick={handleClick}
        >
          ExamSpace
        </div>
        <div className="w-44 h-24 border border-fuchsia-700 flex justify-center items-center rounded-xl cursor-pointer hover:scale-125 transition-all ease-out duration-2000" onClick={handleClick1}>

          LearnSpace
        </div>
      </div>
    </div>
  );
};

export default Hero;
