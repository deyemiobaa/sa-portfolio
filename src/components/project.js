import React from "react";

export default function Project({ title, description, image, link }) {
  return (
    <div className="flex flex-col max-w-sm shadow-lg" data-aos="fade-up">
      <img className="object-cover h-auto" src={image} alt={title} />
      <div>
        <h3 className="py-2 my-4 text-2xl font-medium text-white">{title}</h3>
        <div className="py-2 text-base">
          {description}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-teal-300 animate-pulse hover:animate-none">
          VIEW PROJECT &gt;
        </a>
      </div>
    </div>
  )
}