import React from "react";

const Project = ({ project }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${project?.pic})` }}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
      >
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider text-center mx-auto">
            {project?.projectName}
          </span>
          <div className="pt-8 text-center">
            <a href={project?.demo} target="_blank" rel="noreferrer">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href={project?.gitUrl} target="_blank" rel="noreferrer">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
