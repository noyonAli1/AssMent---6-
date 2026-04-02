import React from 'react';
import BannerImage from "../../banner.png";
import { CiPlay1 } from "react-icons/ci";
const Banner = () => {
  return (
    <div className="container mx-auto mr-35 ">
      <div>
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 my-20">

          <div className="space-y-3 text-center lg:text-left">
            <button className="btn rounded-full text-[#9514FA] bg-[#E1E7FF]"> <span className='w-2 h-2 rounded bg-blue-600'></span>
              New: AI-Powered Tools Available
            </button>

            <h1 className="text-4xl lg:text-[72px] font-bold">
              Supercharge Your <br />
              Digital Workflow
            </h1>

            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster today.
            </p>

            <div className="flex gap-2 justify-center lg:justify-start">
              <button className="btn btn-primary rounded-full hover:bg-blue-700">
                Get Started
              </button>
              <button className="btn btn-outline rounded-full flex items-center gap-1 hover:bg-blue-900 hover:border-0 hover:text-white">
                <CiPlay1 /> Watch Demo
              </button>
            </div>
          </div>

          <img
            src={BannerImage}
            className="lg:max-w-sm w-[80%] mx-auto rounded-lg shadow-2xl"
            alt="Banner"
          />

        </div>
      </div>
    </div>
  );
};

export default Banner;