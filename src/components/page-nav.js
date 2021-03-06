import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Line } from 'react-icons/ri';
import { FiGrid } from 'react-icons/fi';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { BiChat } from 'react-icons/bi';

export default function PageNav() {
  const elements = [
    {
      path: "/",
      icon: RiHome2Line
    },
    {
      path: "/projects",
      icon: FiGrid
    },
    {
      path: "/about",
      icon: BsPerson
    },
    {
      path: "/blog",
      icon: HiOutlinePencilAlt
    },
    {
      path: "/contact",
      icon: BiChat
    }
  ]
  return (
    <div className="page-nav hidden lg:flex flex-col w-max h-screen justify-center px-4 gap-6 text-slate-50 text-lg fixed left-0 bottom-0 top-0 z-20">
      {elements.map((element, index) =>
        <NavLink to={element.path}
          className="page-nav__item flex flex-col justify-center items-center rounded-full p-4 hover:bg-black/25 hover:scale-[1.1] hover:transition-transform hover:ease-in-out hover:duration-[300ms]"
          key={index}
        >
          {element.icon}
        </NavLink>
      )}
    </div>
  );
}