import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Line } from 'react-icons/ri';
import { FiGrid } from 'react-icons/fi';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { BiChat } from 'react-icons/bi';

export default function PageNav() {
  return (
    <div className="page-nav hidden text-cyan-100 lg:flex flex-col w-max h-screen justify-center px-4 gap-8 border-r-2 border-y-0 border-l-0 border-r-teal-500">
      <NavLink to={'/'}
        className="page-nav__item flex flex-col justify-center items-center rounded-full p-4"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgb(248,250,252, 0.05)"} : undefined
        }
      >
        <RiHome2Line className="text-teal-500 text-xl" />
        {/* <span>Home</span> */}
      </NavLink>
      <NavLink to={'/about'}
        className="page-nav__item flex flex-col justify-center items-center rounded-full p-4"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgb(248,250,252, 0.05)"} : undefined
        }
      >
        <BsPerson className="text-teal-500 text-xl" />
        {/* <span>About</span> */}
      </NavLink>
      <NavLink to={'/projects'}
        className="page-nav__item flex flex-col justify-center items-center rounded-full p-4"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgb(248,250,252, 0.05)"} : undefined
        }
      >
        <FiGrid className="text-teal-500 text-xl" />
        {/* <span>Work</span> */}
      </NavLink>
      <NavLink to={'/writings'}
        className="page-nav__item flex flex-col justify-center items-center rounded-full p-4"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgb(248,250,252, 0.05)"} : undefined
        }
      >
        <HiOutlinePencilAlt className="text-teal-500 text-xl" />
        {/* <span>Writings</span> */}
      </NavLink>
      <NavLink to={'/contact'}
        className="page-nav__item flex flex-col justify-center items-center rounded-full p-4"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgb(248,250,252, 0.05)"} : undefined
        }
      >
        <BiChat className="text-teal-500 text-xl" />
        {/* <span>Contact</span> */}
      </NavLink>
    </div>
  );
}