import React from "react";
import MenuItem from "./menu-item";


export default function Navigation({ handleClickProp, style, itemStyle }) {
  const links = ['Home', 'About', 'Projects', 'Blog', 'Contact'];
  return (
    <div
      className="mobile-nav__items flex items-center justify-center bg-slate-100 h-full transition-all ease-in-out duration-700"
      style={style}
    >
      <div className="flex flex-col justify-center items-center transition-opacity ease-in-out delay-[750ms]"
        style={itemStyle}
      >
        {links.map((link) => <MenuItem link={link} handleClickProp={handleClickProp} key={link} />)}
      </div>
    </div>
  )
}