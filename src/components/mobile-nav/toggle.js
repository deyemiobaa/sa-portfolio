import React from "react";

export default function Toggle({ toggle, element }) {
  return (
    <button className="mobile-nav__toggle flex bg-slate-100 flex-col justify-center items-center rounded-full p-4 w-max absolute top-0 left-0 z-20"
      onClick={toggle}
    >
     {element}
    </button>
  )
}