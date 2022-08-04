import React from "react";

import profile from "../../data/profile.js";
import { SiHey } from "react-icons/si";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Headline = () => {
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
      <h2 className="flex justify-start items-center gap-2 text-xl font-bold text-teal-500 mb-4 sm:text-2xl">
        <SiHey /> <span>Hey there, I'm</span>
      </h2>
      <h1 className="text-6xl font-bold text-white sm:text-7xl">
        {profile.name}
      </h1>
      <p className="text-md text-gray-400 leading-7 my-4 sm:text-lg sm:leading-8">
        {profile.headline}
      </p>
      <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
        <ul className="flex items-center flex-wrap gap-4 ">
          <li title="GitHub">
            <a
              href={profile.githubLink}
              target="_blank"
              className="text-teal-500 text-lg ease-in-out duration-150 hover:text-white"
            >
              <FiGithub />
            </a>
          </li>
          <li title="LinkedIn">
            <a
              href={profile.linkedinLink}
              target="_blank"
              className="text-teal-500 text-lg ease-in-out duration-150 hover:text-white"
            >
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-start items-start gap-3"></div>
    </div>
  );
};

export default Headline;
