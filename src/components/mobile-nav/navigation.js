import React from "react";
import MenuItem from "./menu-item";


export default function Navigation({ handleClickProp, style, itemStyle }) {
  const links = ['Home', 'About', 'Projects', 'Contact'];
  return (
    <div
      className="mobile-nav__items flex items-center justify-center bg-slate-100 h-full transition-all ease-in-out duration-[600ms]"
      style={style}
    >
      <menu className="flex flex-col justify-center items-center transition-opacity ease-in-out delay-[550ms]"
        style={itemStyle}
      >
        {links.map((link) => <MenuItem link={link} handleClickProp={handleClickProp} key={link} />)}
      </menu>
    </div>
  )
}