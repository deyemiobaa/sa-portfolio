import React from "react";
import Form from "../components/form";
import { skills, techSkills } from "../assets/data/data";
import { Link } from "react-router-dom";

export default function Welcome() {

  return (
    <main className="px-6 mb-20 leading-7 tracking-wide lg:leading-10">
      <div className="static z-10 max-w-3xl mx-auto mb-10">
        <section className="flex flex-col justify-center h-screen" aria-label="intro">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-8xl">Hi,<br /> I'm Sodiq,<br />A Full-stack Developer.</h1>
          <p>I'm a Full-stack Developer, focused on building accessible and performant apps<span className="pl-2 text-2xl text-white">👨🏽‍💻</span>.</p>
          <Link to="/contact" className="border px-8 mt-6 py-1 border-teal-500 bg-transparent hover:bg-teal-500 hover:border ease-in-out duration-700 transition-colors text-teal-500 hover:text-black font-bold w-max sticky z-[11]">Get in touch</Link>
        </section>
        <section data-aos="fade-right" aria-label="my values">
          <h2 className="text-xl text-white">Core focus:</h2>
          <ul className="my-2 md:w-3/4">
            {skills.map(skill =>
              <li key={skill.id} className="flex items-center gap-4 py-4 pr-2">
                <div className="text-xl text-teal-500 bg-[#0d1117] p-4 rounded-full">{skill.icon}</div>
                <p>{skill.text}</p>
              </li>
            )}
          </ul>
        </section>
        <section data-aos="fade-right" aria-label="my tech skills" className="mt-10 mb-4">
          <h2 className="text-xl text-white">Technologies &amp; tools stack:</h2>
          <ul className="grid grid-cols-2 gap-x-4 md:w-3/5 text-[15px] list-[square] ml-4 mb-8 mt-6">
            {techSkills.map(skill =>
              <li key={skill.id} className="pl-px">{skill.skill}</li>
            )}
          </ul>
        </section>
        <p>
          You may learn more about my background <Link className="pb-1 text-white border-b-2 border-teal-500" to="/about">here</Link><br /> or look at some of my most recent <Link className="pb-1 text-white border-b-2 border-teal-500" to="/projects">projects</Link>.
        </p>
        <section aria-label="contact me" className="mt-10">
          <h2 className="text-xl text-white">Contact me</h2>
          <p className="mt-2">Do you have a project idea you’d like me to jump on, questions you’d like me to answer, looking to make a new connection, or do you want to hire me?
          </p>
          <Form />
        </section>
      </div>
    </main>
  );
}