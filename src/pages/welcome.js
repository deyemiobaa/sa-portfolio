import React from "react";
import SocialIcons from "../components/icons";
import { skills, techSkills } from "../assets/data/data";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="px-6 leading-7 lg:leading-10 tracking-wide  font-light">
      <div className="w-4/4 md:w-3/4 mx-auto mb-10 static z-10">
        <div className="h-screen flex flex-col justify-center relative">
          <h1 className="mb-4 font-bold text-4xl md:text-8xl">Hi,<br /> I'm Sodiq,<br />Software developer.</h1>
          <p>I'm a Front-end Developer, ready to build with your team<span className="pl-4 text-2xl">🚀</span>.</p>
          <button type="button" className="border px-8 mt-4 border-teal-500 bg-transparent hover:bg-teal-500 hover:border ease-in-out duration-700 transition-colors text-teal-500 hover:text-black font-bold w-max sticky z-[11]">Hire me</button>
          <div className="text-big absolute z-1 left-0 bottom-20 opacity-[0.02] font-black font-elsie hidden lg:block">
            Hello
          </div>
        </div>
        <div>
          <h3 className="text-xl font-normal">If you need:</h3>
          <ul className="md:w-3/4 my-4">
            {skills.map(skill =>
              <li key={skill.id} className="flex items-center gap-4 py-4 pr-2">
                <div className="text-xl text-teal-500 bg-[#0d1117] p-4 rounded-full">{skill.icon}</div>
                <p>{skill.text}</p>
              </li>
            )}
          </ul>
          <h3 className="text-xl font-normal">You're in the right place.</h3>
          <div className="mb-4 mt-6">
            <p>Here is a current list of the technologies &amp; tools I use regularly.</p>
            <ul className="grid grid-cols-2 gap-x-4 md:w-3/5 text-[15px] list-[square] ml-4 mb-8 mt-6">
              {techSkills.map(skill =>
                <li key={skill.id} className="pl-px">{skill.skill}</li>
              )}
            </ul>
          </div>
        </div>
        <p className="md:w-3/4">
          I spend a lot of time honing my technical and interpersonal abilities to provide the most satisfactory service and create a positive experience for everyone I engage.
          <br />
          You may learn more about my background <Link className="underline decoration-teal-500 decoration-4 font-normal" to="/about">here</Link> or look at some of my most recent <Link className="underline decoration-teal-500 decoration-4 font-normal" to="/projects">projects</Link>.
        </p>

      </div>
      <div className="lg:hidden flex justify-between w-3/4 self-center my-16">
        <SocialIcons />
      </div>
    </div>
  );
}