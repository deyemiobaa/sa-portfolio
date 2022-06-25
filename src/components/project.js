import React from "react";

export default function Project({ title, description, image, technologies, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center rounded-lg bg-slate-900/50 shadow-lg hover:scale-[1.01] hover:transition-transform hover:ease-in-out hover:duration-[300ms] static z-10">
      <img className="w-max-full h-auto object-cover" src={image} alt={title} />
      <div>
        <div className="text-2xl p-4 mt-2">{title}</div>
        <div className="text-left px-4  mb-4">
          {description}
        </div>
        <div>Built With:</div>
        <div className="flex gap-6 justify-center flex-wrap p-4">
          {technologies.map(tech =>
            <img src={tech.image} style={{ "height": "36px", "width": "36px" }} alt={tech.name} key={tech.name} />)
          }
        </div>
      </div>
    </a>
  )
}