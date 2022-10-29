import React from "react";

export default function Project({ title, description, image, link }) {
  return (
    <div
      className="flex flex-col max-w-sm shadow-lg"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <img className="object-cover h-auto" src={image} alt={title} />
      <div>
        <h3 className="py-2 my-4 text-3xl font-light text-white font-spectral">
          {title}
        </h3>
        <div className="py-2">{description}</div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold text-white md:hover:text-teal-300 md:hover:animate-none"
        >
          VIEW PROJECT &gt;
        </a>
      </div>
    </div>
  );
}
