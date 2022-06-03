import React, { useState } from "react";
import Navigation from "./navigation";
import Toggle from "./toggle";
import { CgMenu, CgClose } from "react-icons/cg";


export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="mobile-nav fixed inset-0 z-20 w-3/4 md:w-3/5 lg:hidden transition-all ease-in-out duration-1000"
      style={isOpen ? undefined : { "width": "0" }}
    >
      {!isOpen && <Toggle style={{ "backgroundColor": "#0f172a" }} toggle={() => toggleNav()} element={<CgMenu className="text-2xl text-teal-500 font-bold" />} />}
      {isOpen && <Toggle toggle={() => toggleNav()} element={<CgClose className="text-2xl text-neutral-900 font-bold" />} />}
      <Navigation
        handleClickProp={() => toggleNav()}
        style={isOpen ? { "width": "100%", "opacity": "1" } : { "width": "0%", "opacity": "0" }}
        itemStyle={isOpen ? { "opacity": "1", "height": "100%", "display": "flex" } : { "opacity": "0", "height": "0%", "display": "none" }}
      />
    </div>
  )
}