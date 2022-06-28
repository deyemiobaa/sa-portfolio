import React from "react";
import Form from "../components/form";
import MobileSocialNav from "../components/mobile-social-nav";
import { skills, techSkills } from "../assets/data/data";
import { Link } from "react-router-dom";

export default function Welcome() {

  return (
    <div className="px-6 leading-7 lg:leading-10 tracking-wide  ">
      <div className="max-w-3xl mx-auto mb-10 static z-10">
        <div className="h-screen flex flex-col justify-center">
          <h1 className="mb-4 font-bold text-4xl md:text-8xl text-white">Hi,<br /> I'm Sodiq,<br />Web developer.</h1>
          <p>I'm a Front-end Developer, focused on building accessible and performant apps<span className="pl-2 text-2xl text-white">👨🏽‍💻</span>.</p>
          <Link to="/contact" className="border px-8 mt-6 py-1 border-teal-500 bg-transparent hover:bg-teal-500 hover:border ease-in-out duration-700 transition-colors text-teal-500 hover:text-black font-bold w-max sticky z-[11]">Get in touch</Link>
        </div>
        <div data-aos="fade-right">
          <h2 className="text-xl text-white">Core focus:</h2>
          <ul className="md:w-3/4 my-2">
            {skills.map(skill =>
              <li key={skill.id} className="flex items-center gap-4 py-4 pr-2">
                <div className="text-xl text-teal-500 bg-[#0d1117] p-4 rounded-full">{skill.icon}</div>
                <p>{skill.text}</p>
              </li>
            )}
          </ul>
        </div>
        <div data-aos="fade-left">
          <div className="mb-4 mt-10">
            <p className="text-white">Technologies, tools, &amp; methods I use regularly:</p>
            <ul className="grid grid-cols-2 gap-x-4 md:w-3/5 text-[15px] list-[square] ml-4 mb-8 mt-6">
              {techSkills.map(skill =>
                <li key={skill.id} className="pl-px">{skill.skill}</li>
              )}
            </ul>
          </div>
        </div>
        <p>
          You may learn more about my background <Link className="border-b-2 text-white pb-1 border-teal-500" to="/about">here</Link><br /> or look at some of my most recent <Link className="border-b-2 pb-1 border-teal-500 text-white" to="/projects">projects</Link>.
        </p>
        <div>
          <h2 className="text-xl text-white mt-14">Contact me</h2>
          <p className="mt-2">Do you have a project idea you’d like me to jump on, questions you’d like me to answer, looking to make a new connection, or do you want to hire me?
          </p>
        </div>
        <Form />
      </div>
      <MobileSocialNav />
    </div>
  );
}