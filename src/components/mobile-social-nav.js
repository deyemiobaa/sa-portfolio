import React from "react";
import SocialIcons from "../components/icons";

export default function MobileSocialNav() {
  return (
    <div className="lg:hidden flex justify-center w-full fixed bottom-5 inset-x-0 z-10">
      <div className="w-3/4 backdrop-blur-lg rounded-2xl flex justify-between p-4">
        <SocialIcons />
      </div>
    </div>
  );
}