import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-primaryLight text-secondaryLight dark:bg-primary dark:text-secondary"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 text-secondary border-accent">
            Projects
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Gird Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="container flex items-center justify-center mx-auto text-center rounded-md shadow-lg shadow-primary group content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-bold tracking-wider text-white ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
