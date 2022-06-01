import React from "react";
import { NavLink } from "react-router-dom";


export default function MenuItem({ link, handleClickProp }) {

  return (
    <NavLink
      to={`${link === 'Home' ? '/' : link.toLowerCase()}`}
      className="mobile-nav__item text-neutral-900 font-bold py-2 mb-2 tracking-wide text-xl font-lato"
      key={link}
      onClick={handleClickProp}
    >
      {link}
    </NavLink>
  )
}