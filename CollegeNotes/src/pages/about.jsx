import React from "react";
import { useHref } from "react-router-dom";
import { Icons } from "react-toastify";

const About = () => {
  return (
    <div className="select-none">
      <div className="flex font-extralight text-3xl text-center mx-auto justify-center m-9 border border-fuchsia-500 w-3/4 lg:w-3/12 p-7 rounded-2xl select-none bg-fuchsia-500 text-white">
        About us
      </div>
      <div className="flex justify-center text-sm lg:text-2xl font-extralight lg:font-normal m-5 text-emerald-500">
        Who We are and What we Contribute
      </div>
      <p className="flex justify-center text-sm lg:text-xl font-extralight lg:font-normal m-5 text-fuchsia-500 text-center">
        We are FINAL YEAR Information Technology Grads from HBTU KANPUR.
      </p>
      <div className="flex flex-col justify-center mx-auto lg:flex-row">
        <div className="flex flex-col justify-center mx-auto w-3/4 lg:w-5/12 border border-fuchsia-700 rounded-lg h-96 m-10 p-5">
          <div className="flex flex-row lg:gap-24">
            <p className="text-3xl mx-auto text-blue-600 underline lg:mt-6">
              Aditya Gupta
            </p>
            <img src="./my photo.jpg" className="w-30 h-20 rounded" />
          </div>
          <div className="flex lg:flex-row mt-20 justify-evenly ">
            <a href="https://github.com/agnt17" target="_blank"><img
              src="./github-icon.png"
              alt="github"
              className="w-10 hover:text-emerald-500 cursor-pointer hover:scale-125"
            />
            </a>
            <a href="https://www.linkedin.com/in/aditya-gupta-452790229/" target="_blank"><img src="./linkedin-icon.png" alt="linkedin" className="w-10 cursor-pointer hover:scale-125" /></a>
            <a href="https://www.instagram.com/adityagupta1859/" target="_blank"><img src="./insta-icon.png" alt="instagram" className="w-10 cursor-pointer hover:scale-125" /></a>
            
          </div>
        </div>
        <div className="flex flex-col justify-center mx-auto w-3/4 lg:w-5/12 border border-fuchsia-700 rounded-lg h-96 m-10 p-5">
          <div className="flex flex-row lg:gap-24">
            <p className="text-3xl mx-auto text-blue-600 underline lg:mt-6">
              Anurag Khokhar
            </p>
            <img src="./my photo1.jpg" className="w-30 h-20 rounded" />
          </div>
          <div className="flex lg:flex-row mt-20 justify-evenly">
            <a href="" target="_blank"><img
              src="./github-icon.png"
              alt="github"
              className="w-10 hover:text-emerald-500 cursor-pointer hover:scale-125"
              
            />
            </a>
            <a href="" target="_blank"><img src="./linkedin-icon.png" alt="linkedin" className="w-10 cursor-pointer hover:scale-125" /></a>
            <a href="" target="_blank"><img src="./insta-icon.png" alt="instagram" className="w-10 cursor-pointer hover:scale-125" /></a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
