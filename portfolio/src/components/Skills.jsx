import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Reactlogo from "../assets/react.png";
import NodeJS from "../assets/nodejs.png";
import GitHub from "../assets/github.png";
import MongoDB from "../assets/mongodb.png";

const Skills = () => {
  const arr = [
    { name: "HTML", img: HTML },
    { name: "CSS", img: CSS },
    { name: "Javascript", img: JavaScript },
    { name: "React", img: Reactlogo },
    { name: "Node", img: NodeJS },
    { name: "MongoDB", img: MongoDB },
    { name: "Github", img: GitHub },
  ];
  return (
    <div
      name="skills"
      className="w-full h-screen bg-primaryLight text-secondaryLight dark:bg-primary dark:text-secondary"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-accent">
            Skills
          </p>
          <p className="py-4">These are the technologies I've mastered</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
          {arr.map((skill) => (
            <div
              key={skill.name}
              className="shadow-md shadow-[#040c16] hover:scale-105 duration-500"
            >
              <img className="w-20 mx-auto" src={skill.img} alt={skill.name} />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
