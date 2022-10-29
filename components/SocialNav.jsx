import React from "react";
import SocialIcons from "./SocialIcons";

export default function SocialNav() {
  return (
    <aside className="fixed top-0 bottom-0 right-0 flex-col items-center justify-center hidden h-screen gap-8 pr-6 social-nav lg:flex w-max">
      <div className="rounded w-0.5 bg-teal-300 h-1/3" />
      <SocialIcons />
      <div className="rounded w-0.5 bg-teal-300 h-1/3" />
    </aside>
  );
}
