import React from "react";

export default function Project() {
  return (
    <a href="https://google.com" className="flex flex-col items-center rounded-lg bg-black shadow-lg hover:scale-[1.02] hover:transition-transform hover:ease-in-out hover:duration-[300ms]">
      <img className="w-max-full h-auto object-contain" src="http://www.personal.psu.edu/users/n/y/nys5290/Project-Image.jpg" />
      <div>
        <div className="text-2xl p-4 mt-2">Photo Invoice</div>
        <div className="text-left px-4 font-light mb-4">
          Designed and developed the sales website GatsbyJS, web application and backend for a full-featured SaaS startup.
        </div>
        <div>Built With:</div>
        <div className="flex gap-6 justify-center flex-wrap p-4">
          <img src="https://img.icons8.com/ios-filled/50/undefined/react-native.png" style={{ "height": "36px", "width": "36px" }} />
          <img src="https://img.icons8.com/ios-filled/50/undefined/react-native.png" style={{ "height": "36px", "width": "36px" }} />
          <img src="https://img.icons8.com/ios-filled/50/undefined/react-native.png" style={{ "height": "36px", "width": "36px" }} />
        </div>
      </div>
    </a>
  )
}