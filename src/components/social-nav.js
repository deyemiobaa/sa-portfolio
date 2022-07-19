import React from "react";
import SocialIcons from "./icons";

export default function SocialNav() {
  return (
    <div className="social-nav hidden lg:flex flex-col w-max h-screen justify-center items-center pr-6 gap-8 fixed right-0 top-0 bottom-0">
      <div className="rounded w-0.5 bg-teal-500 h-1/3" />
      <SocialIcons />
      <div className="rounded w-0.5 bg-teal-500 h-1/3" />
    </div>
  );
}