import React from "react";
import SocialIcons from "../components/icons";

export default function MobileSocialNav() {
  return (
    <div className="lg:hidden flex justify-between w-3/4 mx-auto p-4 fixed bottom-2 inset-x-0 backdrop-blur-lg rounded-2xl z-10">
      <SocialIcons />
    </div>
  );
}