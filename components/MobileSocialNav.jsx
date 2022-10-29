import React from "react";
import SocialIcons from "./SocialIcons";

export default function MobileSocialNav() {
  return (
    <div className="fixed inset-x-0 z-10 flex justify-center w-full lg:hidden bottom-5">
      <div className="flex justify-between w-3/4 p-4 backdrop-blur-lg rounded-2xl">
        <SocialIcons />
      </div>
    </div>
  );
}
