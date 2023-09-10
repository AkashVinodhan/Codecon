import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen text-lg font-bold bg-primaryLight text-secondaryLight dark:bg-primary dark:text-secondary"
    >
      <div className="flex flex-col justify-center h-full max-w-5xl gap-3 px-8 mx-auto">
        <h1 className="py-2 text-5xl text-center">
          Hi, I'm <span className="text-accent">Akash V</span>
        </h1>
        <p className="py-2 text-2xl text-center">
          I am a <span className="text-accent">Full Stack Developer</span> adept
          in front-end and back-end development specializing in{" "}
          <span className="font-extrabold">MERN</span> stack.
        </p>
        <div className="p-3 text-center">
          <a
            href="https://drive.google.com/file/d/1K59FLoi9U_LgN0qUii9sDNX6AW_quN9j/view?usp=drive_link"
            className="p-3 border  border-accent hover:bg-accent hover:text-primary"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
