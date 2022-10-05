import React from "react";
import Form from "../components/form";
import { projects, techSkills } from "../assets/data/data";
import Project from "../components/project";
import { Link } from "react-router-dom";

export default function Welcome() {

  return (
    <div className="static z-10 mx-auto mb-10">
      <section className="flex flex-col justify-center h-screen" aria-label="intro">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-8xl">Hi there, I'm Sodiq.<br />Full Stack <span className="text-teal-300">Developer.</span></h1>
        <div className="gap-10 my-10 md:flex">
          <p>Throughout my years as a developer, I've had the opportunity to work with talented developers and designers who helped me raise my standards for what's expected from a web application.</p>
          <p>Through this experience, I've learned to build products that are not only aesthetic and easy to use but are written in code that's maintainable and easy to understand.</p>
        </div>
        <Link to="/contact" className="border px-8 mt-6 py-1 border-teal-300 bg-transparent hover:bg-teal-300 hover:border ease-in-out duration-700 transition-colors text-teal-300 hover:text-black font-bold w-max sticky z-[11]">Get in touch</Link>
      </section>
      <section data-aos="fade-right" aria-label="my tech skills" className="my-20">
        <h2 className="text-4xl font-bold text-white md:text-5xl">My Skills</h2>
        <p className="w-2/3 py-10">Through my experience and education, I've gained a solid understanding of computer science and web development concepts, and I've dedicated a lot of time to apply them in the real world.</p>
        <ul className="grid grid-cols-3 gap-x-4 w-full text-[15px] list-[square] justify-between">
          {techSkills.map(skill =>
            <li key={skill.id} class="flex text-base mb-4 items-center">
              <span class="rounded-full text-base text-teal-300 mr-4">
                <svg width="10" height="10" viewBox="0 0 20 20" class="fill-current">
                  <path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path>
                </svg>
              </span>
              {skill.skill}
            </li>
          )}
        </ul>
      </section>
      <section data-aos="fade-right" aria-label="my values" className="my-20">
        <h2 className="text-4xl font-bold text-white md:text-5xl">What I've been working on</h2>
        <p className="w-2/3 py-10">I enjoy building projects. I get to gain new experiences with each project and also work on something interesting. Take a look at some of the projects I've dedicated my time to.</p>
        <div id="projects-section" className="grid w-full grid-cols-1 gap-32 md:grid-cols-2 lg:mb-0">
          {projects.map(project =>
            <Project key={project.id} title={project.title} description={project.description} technologies={project.technologies} link={project.url} image={project.image} />
          )}
        </div>
      </section>
      <section aria-label="contact me" className="mt-10">
        <h2 className="text-4xl font-bold text-white md:text-5xl">Let's build something together</h2>
        <p className="w-2/3 py-10">Do you have a project idea you’d like me to jump on, questions you’d like me to answer, looking to make a new connection, or do you want to hire me?
        </p>
        <Form />
      </section>
    </div>
  );
}