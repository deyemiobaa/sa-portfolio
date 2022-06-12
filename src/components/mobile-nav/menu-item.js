import React from "react";
import { NavLink } from "react-router-dom";


export default function MenuItem({ link, handleClickProp }) {

  return (
    <NavLink
      to={`${link === 'Home' ? '/' : link.toLowerCase()}`}
      className="mobile-nav__item text-neutral-900 font-bold py-2 mb-2 tracking-wide text-lg"
      key={link}
      onClick={handleClickProp}
      style={{ color: 'black', border: 'none' }}
    >
      {link}
    </NavLink>
  )
}