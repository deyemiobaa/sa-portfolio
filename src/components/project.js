import React from "react";

export default function Project({ title, description, image, technologies, link }) {
  return (
    <div className="flex flex-col rounded-lg bg-slate-900/50 shadow-lg hover:scale-[1.01] hover:transition-transform hover:ease-in-out hover:duration-[300ms] static z-10" data-aos="zoom-out">
      <img className="object-cover h-auto w-max-full" src={image} alt={title} />
      <div className="px-4">
        <a href={link} target="_blank" rel="noopener noreferrer" >
          <div className="p-4 mt-2 text-2xl underline">{title}</div>
        </a>
        <div className="px-4 mb-4 text-left">
          {description}
        </div>
        <div>Built With:</div>
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {technologies.map(tech =>
            <img src={tech.image} style={{ "height": "36px", "width": "36px" }} alt={tech.name} key={tech.name} title={tech.name} />)
          }
        </div>
      </div>
    </div>
  )
}