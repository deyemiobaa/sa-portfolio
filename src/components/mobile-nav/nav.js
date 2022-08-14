import React, { useState } from "react";
import Navigation from "./navigation";
import Toggle from "./toggle";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="fixed inset-0 z-20 w-3/4 transition-all duration-1000 ease-in-out mobile-nav md:w-3/5 lg:hidden"
      style={isOpen ? undefined : { "width": "0" }}
    >
      <Toggle toggle={isOpen} handleToggle={() => toggleNav()} />
      <Navigation
        handleClickProp={() => toggleNav()}
        style={isOpen ? { "width": "100%", "opacity": "1" } : { "width": "0%", "opacity": "0" }}
        itemStyle={isOpen ? { "opacity": "1", "height": "100%", "display": "flex" } : { "opacity": "0", "height": "0%", "display": "none" }}
      />
    </div>
  )
}
