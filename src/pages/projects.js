import React, { useEffect } from "react";
import Project from "../components/project";
import { projects } from "../assets/data/data";

export default function Projects() {
  useEffect(() => {
    document.querySelector('.button').addEventListener('click', () => {
      document.getElementById('projects-section').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }, []);

  return (
    <div className="px-6 leading-7 lg:leading-10 tracking-wide mt-28 md:mt-36">
      <div className="w-4/4 md:w-3/4 mx-auto mb-10 static z-10">
        <div className="relative h-screen">
          <h1 className="mb-10 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-amber-500 font-bold">Projects . Open-Source</h1>
          <p className="font-bold">
            Building is fun!
          </p>
          <p className="mt-8 font-light">Building projects is something I really enjoy doing. Apart from the fresh experiences I gain with each project, the thrill of seeing a project through from beginning to end and having it work as intended makes the process/hurdles interesting.
          </p>
          <p className="font-light"><span className="button underline decoration-teal-500 decoration-4 font-normal cursor-pointer sticky z-[11]">Below</span> are some of my most recent works. Some are finished, in progress, personal, and open-sourced.
          </p>
          <div className="text-big absolute z-1 bottom-44 -right-40 opacity-[0.15] text-[#616971] font-black font-elsie hidden lg:block">
            Build
          </div>
        </div>
        <div id="projects-section" className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {projects.map(project =>
            <Project key={project.id} title={project.title} description={project.description} technologies={project.technologies} link={project.url} image={project.image} />
          )}
        </div>
      </div>
    </div>
  );
}