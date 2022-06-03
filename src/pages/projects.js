import React from "react";
import Project from "../components/project";
import projects from "../assets/data/data";

export default function Projects() {
  return (
    <div className="relative leading-7 lg:leading-10 tracking-wide text-base md:text-xl h-full">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto mb-10">
        <h1 className="mb-16 mt-20 lg:mt-10 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-amber-500 font-bold">Projects . Open-Source</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {projects.map(project =>
            <Project key={project.id} title={project.title} description={project.description} technologies={project.technologies} link={project.url} image={project.image} />
          )}
        </div>
      </div>
      <div className="text-big fixed z-0 bottom-32 right-0 opacity-[0.04] font-black font-elsie hidden lg:block">
        Build
      </div>
    </div>
  );
}