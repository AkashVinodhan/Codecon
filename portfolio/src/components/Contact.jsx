import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primaryLight text-secondaryLight dark:bg-primary dark:text-secondary"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="mb-7">
          <p className="inline text-4xl font-bold border-b-4 border-accent">
            Get in touch
          </p>
        </div>
        <div className="font-bold md:text-2xl flex flex-col items-center">
          <div className="flex items-center gap-4 mb-5">
            <BsGithub />
            <p>AkashVinodhan</p>
          </div>
          <div className="flex items-center gap-4 mb-5">
            <AiFillPhone />
            <p>+91 8825785286</p>
          </div>
          <div className="flex items-center gap-4 mb-5">
            <BiLogoGmail />
            <p>akashvinodhan@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
