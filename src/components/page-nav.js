import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Line } from 'react-icons/ri';
import { FiGrid } from 'react-icons/fi';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { BiChat } from 'react-icons/bi';

export default function PageNav() {
  return (
    <div className="page-nav text-cyan-100 text-lg flex flex-col w-max h-screen justify-center px-6 gap-12 border-r-2 border-y-0 border-l-0 border-r-teal-500">
      <NavLink to={'/'} className="page-nav__item flex flex-col justify-center items-center gap-2">
        <RiHome2Line className="text-teal-500 text-4xl" />
        {/* <span>Home</span> */}
      </NavLink>
      <NavLink to={'/'} className="page-nav__item flex flex-col justify-center items-center gap-2">
        <BsPerson className="text-teal-500 text-4xl" />
        {/* <span>About</span> */}
      </NavLink>
      <NavLink to={'/'} className="page-nav__item flex flex-col justify-center items-center gap-2">
        <FiGrid className="text-teal-500 text-4xl" />
        {/* <span>Work</span> */}
      </NavLink>
      <NavLink to={'/'} className="page-nav__item flex flex-col justify-center items-center gap-2">
        <HiOutlinePencilAlt className="text-teal-500 text-4xl" />
        {/* <span>Writings</span> */}
      </NavLink>
      <NavLink to={'/'} className="page-nav__item flex flex-col justify-center items-center gap-2">
        <BiChat className="text-teal-500 text-4xl" />
        {/* <span>Contact</span> */}
      </NavLink>
    </div>
  );
}