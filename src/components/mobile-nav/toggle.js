import React from "react";

export default function Toggle({ toggle, element, style }) {
  return (
    <button className="mobile-nav__toggle flex bg-slate-100 flex-col justify-center items-center rounded-full p-4 w-max absolute top-0 left-0 z-20 animate-spin-once"
      onClick={toggle}
      style={style}
    >
      {element}
    </button>
  )
}