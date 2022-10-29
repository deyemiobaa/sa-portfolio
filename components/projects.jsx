import React, { useEffect } from "react";
import Project from "./project";
import { projects } from "../assets/data/data";

export default function Projects() {
  useEffect(() => {
    document.querySelector(".button").addEventListener("click", () => {
      document.getElementById("projects-section").scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <main className="px-6 mb-20 leading-7 lg:leading-10 mt-28 md:mt-36">
      <div className="static z-10 mx-auto mb-10 w-4/4 md:w-3/4">
        <div className="relative mb-20">
          <h1 className="mb-10 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-emerald-500 to-amber-500">
            Projects . Open-Source
          </h1>
          <p className="hidden font-bold text-white">
            Talk is cheap, I'd rather show you the code.
          </p>
          <p className="mt-8 ">
            Building projects is something I enjoy doing. Apart from the fresh
            experiences I gain with each project, the thrill of seeing a project
            through from beginning to end and having it work as intended makes
            the process/hurdles interesting.
          </p>
          <p className="">
            <span className="button border-b-2 pb-1 border-teal-300 text-white cursor-pointer sticky z-[11]">
              Below
            </span>{" "}
            are some of my most recent works. Some are finished, in progress,
            personal, and open-sourced.
          </p>
        </div>
        <div
          id="projects-section"
          className="grid w-full grid-cols-1 gap-8 text-center text-white md:grid-cols-2 lg:mb-0"
        >
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.url}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
