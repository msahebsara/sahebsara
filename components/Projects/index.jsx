import React from "react";

import projects from "../../data/projects.js";
import Image from "next/image";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Projects = () => {
  return (
    <div className="max-w-4xl m-auto p-4 pt-8 px-2 sm:pt-20" id="projects">
      <h1 className="text-3xl text-teal-500 font-bold sm:text-4xl sm:leading-10">
        Projects
      </h1>
      <div className="py-6 pt-10 grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4">
        {projects
          ? projects.map((project, index) => (
              <div
                key={index}
                title={`${project.title} ${project.type}`}
                className="bg-cyan-900 p-4 max-w-4xl m-auto mb-4 w-full grid grid-cols-1 gap-0 ease-in-out duration-150 hover:bg-cyan-800 sm:mb-0"
              >
                <div className="w-45 flex justify-center items-center">
                  <Image
                    className="rounded w-100"
                    height="275"
                    width="500"
                    src={`/images/${project.image}`}
                    alt="Project Image"
                  />
                </div>
                <div className="flex flex-col justify-center items-start w-55 pb-0">
                  <h2 className="text-2xl text-white font-bold my-5 mb-2">
                    {project.title}
                  </h2>
                  <b className="text-teal-500 mb-2">{project.type}</b>
                  <p className="text-gray-300 text-sm leading-6 m-0">
                    {project.description}
                  </p>
                  <button
                    className="py-2 px-4 bg-white mt-4 text-black ease-in-out duration-150 border-2 border-white rounded-md hover:bg-gray-900 hover:border-gray-900 hover:text-white"
                    title="Link"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex justify-between items-center gap-1 font-semibold text-md p-0 m-0"
                    >
                      <span>Visit Link</span>
                      <HiOutlineArrowNarrowRight />
                    </a>
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Projects;
