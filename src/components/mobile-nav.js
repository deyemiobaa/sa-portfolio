import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";


export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'About', 'Projects', 'Writings', 'Contact'];
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-nav absolute z-11 h-screen w-3/4 md:w-3/5 lg:hidden font-lato">
      {!isOpen && <button className="mobile-nav__toggle flex bg-slate-50/90 flex-col justify-center items-center rounded-full p-4 w-max absolute top-0 left-0 z-20"
        onClick={handleClick}
      >
        <CgMenu className="text-2xl text-teal-500 font-bold" />
      </button>}
      {isOpen && <button className="mobile-nav__toggle flex bg-slate-100 flex-col justify-center items-center rounded-full p-4 w-max absolute top-0 left-0 z-20"
        onClick={handleClick}
      >
        <CgClose className="text-4xl text-neutral-900 font-bold" />
      </button>}
      {isOpen &&
        <div className="mobile-nav__items flex flex-col justify-center items-center bg-slate-100 absolute top-0 left-0 right-0 bottom-0 z-10">
          {links.map((link) => (<NavLink to={`${link === 'Home' ? '/' : link.toLowerCase()}`} className="mobile-nav__item text-neutral-900 font-bold py-4 tracking-wide text-xl"
            key={link}
            onClick={handleClick}>
            {link}
          </NavLink>))}
        </div>
      }

    </div>
  )
}