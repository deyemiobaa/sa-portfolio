import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="fixed inset-0 z-20 w-3/4 transition-all duration-1000 ease-in-out mobile-nav md:w-3/5 lg:hidden"
      style={isOpen ? undefined : { width: "0" }}
    >
      <Toggle toggle={isOpen} handleToggle={() => toggleNav()} />
      <Navigation
        handleClickProp={() => toggleNav()}
        style={
          isOpen
            ? { width: "100%", opacity: "1" }
            : { width: "0%", opacity: "0" }
        }
        itemStyle={
          isOpen
            ? { opacity: "1", height: "100%", display: "flex" }
            : { opacity: "0", height: "0%", display: "none" }
        }
      />
    </div>
  );
}

function Toggle({ handleToggle, toggle }) {
  return (
    <button
      type="button"
      aria-label="hamburger button"
      className="absolute top-0 left-0 z-20 flex flex-col justify-between w-5 h-4 mt-5 ml-5 backdrop-blur"
      onClick={handleToggle}
    >
      <span
        className={`w-full h-0.5 transition-transform duration-500 origin-[0%_0%] rounded-xl ${
          toggle ? "bg-neutral-900" : "bg-teal-300"
        }`}
        style={toggle ? { transform: "rotate(45deg)" } : {}}
      ></span>
      <span
        className="w-3/4 h-0.5 transition-opacity duration-200 rounded-xl bg-teal-300"
        style={toggle ? { opacity: 0 } : {}}
      ></span>
      <span
        className={`w-full h-0.5 transition-transform duration-500 origin-[0%_150%] rounded-xl ${
          toggle ? "bg-neutral-900" : "bg-teal-300"
        }`}
        style={toggle ? { transform: "rotate(-45deg)" } : {}}
      ></span>
    </button>
  );
}

function MenuItem({ pathName, path, handleClickProp }) {
  return (
    <Link
      href={path}
      className="py-2 mb-2 text-lg font-bold mobile-nav__item text-neutral-900"
      onClick={handleClickProp}
      style={{ color: "black", border: "none" }}
    >
      {pathName}
    </Link>
  );
}

function Navigation({ handleClickProp, style, itemStyle }) {
  const links = [
    ["Home", "/"],
    ["About", "/#skills"],
    ["Projects", "/#what-im-working-on"],
    ["Contact", "/contact"],
  ];
  return (
    <div
      className="mobile-nav__items flex items-center justify-center bg-slate-100 h-full transition-all ease-in-out duration-[600ms]"
      style={style}
    >
      <menu
        className="flex flex-col justify-center items-center transition-opacity ease-in-out delay-[550ms]"
        style={itemStyle}
      >
        {links.map((link) => (
          <MenuItem
            path={link[1]}
            pathName={link[0]}
            handleClickProp={handleClickProp}
            key={link[0]}
          />
        ))}
      </menu>
    </div>
  );
}
