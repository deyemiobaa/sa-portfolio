import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Line } from 'react-icons/ri';
import { BsBriefcase } from 'react-icons/bs';
// import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { BiChat } from 'react-icons/bi';

export default function PageNav() {
  const elements = [
    {
      path: "/",
      icon: RiHome2Line,
      title: "Home",
    },
    {
      path: "/projects",
      icon: BsBriefcase,
      title: "Projects",
    },
    {
      path: "/about",
      icon: BsPerson,
      title: "About me",
    },
    {
      path: "/contact",
      icon: BiChat,
      title: "Contact",
    }
  ]
  return (
    <div className="fixed top-0 bottom-0 left-0 z-20 flex-col justify-center hidden h-screen gap-6 px-4 text-lg page-nav lg:flex w-max text-slate-50">
      {elements.map((element, index) =>
        <NavLink to={element.path}
          className="page-nav__item flex flex-col justify-center items-center rounded-full p-4 hover:bg-black/25 hover:scale-[1.1] hover:transition-transform hover:ease-in-out hover:duration-[300ms]"
          key={index}
          title={element.title}
        >
          {element.icon}
        </NavLink>
      )}
    </div>
  );
}

/*
  {
      path: "/blog",
      icon: HiOutlinePencilAlt
    },
*/