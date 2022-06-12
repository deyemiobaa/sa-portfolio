import React from "react";
import SocialIcons from "../components/icons";
import { skills } from "../assets/data/data";

export default function Welcome() {
  return (
    <div className="relative px-6 leading-7 lg:leading-10 tracking-wide mt-28 md:mt-36 font-light">
      <div className="w-4/4 md:w-3/4 mx-auto mb-10 static z-10">
        <div className="mb-36 md:mb-80">
          <h1 className="mb-4 font-bold text-4xl md:text-8xl">Hi,<br /> I'm Sodiq,<br />Software developer.</h1>
          <p>I'm a full-stack software developer, ready to build with your team<span className="pl-4 text-2xl">🚀</span>.</p>
          <button type="button" className="border px-8 mt-4 border-teal-500 bg-transparent hover:bg-teal-500 hover:border ease-in-out duration-700 transition-colors text-teal-500 hover:text-black font-bold">Hire me</button>
        </div>
        <div data-aos="fade-up">
          <h3 className="text-xl font-normal mb-4">If you need:</h3>
          <ul className="md:w-3/4">
            {skills.map(skill =>
              <li key={skill.id} className="flex items-center gap-4 py-4 pr-2">
                <div className="text-xl text-teal-500 bg-black/25 p-4 rounded-full">{skill.icon}</div>
                <p>{skill.text}</p>
              </li>
            )}
          </ul>
          <h3 className="text-xl font-normal mt-4">You're in the right place.</h3>
          <div>
            <h3>Skills &amp; Tools</h3>
          </div>
        </div>
        <p>
          I spend a lot of time honing my technical and interpersonal abilities to provide the most satisfactory service and create a positive experience for everyone I engage.
          <br />
          You may learn more about my background <span className="underline decoration-teal-500 decoration-4 font-normal">here</span> or look at some of my most recent <span className="underline decoration-teal-500 decoration-4 font-normal">projects</span>.
        </p>

      </div>
      <div className="lg:hidden flex justify-between w-3/4 self-center my-16">
        <SocialIcons />
      </div>
      <div className="text-big fixed z-1 right-0 bottom-32 opacity-[0.02] font-black font-elsie hidden lg:block">
        Hello
      </div>
    </div>
  );
}