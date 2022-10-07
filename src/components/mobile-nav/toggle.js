import React from "react";

export default function Toggle({ handleToggle, toggle }) {
  return (
    <button
      type="button"
      aria-label="hamburger button"
      className="absolute top-0 left-0 z-20 flex flex-col justify-between w-5 h-4 mt-5 ml-5 backdrop-blur"
      onClick={handleToggle}>
      <span
        className={`w-full h-0.5 transition-transform duration-500 origin-[0%_0%] rounded-xl ${toggle ? "bg-neutral-900" : "bg-teal-300"}`}
        style={toggle ? { transform: "rotate(45deg)" } : {}}></span>
      <span
        className="w-3/4 h-0.5 transition-opacity duration-200 rounded-xl bg-teal-300"
        style={toggle ? { opacity: 0 } : {}}></span>
      <span
        className={`w-full h-0.5 transition-transform duration-500 origin-[0%_150%] rounded-xl ${toggle ? "bg-neutral-900" : "bg-teal-300"}`}
        style={toggle ? { transform: "rotate(-45deg)" } : {}}></span>
    </button>
  )
}