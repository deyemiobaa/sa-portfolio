import React from "react";

export default function Projects() {
  return (
    <div className="relative leading-7 lg:leading-10 tracking-wide text-base md:text-xl h-full">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto mb-10">
        <h1 className="mb-16 mt-20 lg:mt-10 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 font-bold">Projects . Open-Source</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
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
          <a href="https://google.com" className="flex flex-col items-center rounded-lg bg-black shadow-lg">
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
        </div>
      </div>
      <div className="text-big fixed z-0 top-32 right-0 opacity-[0.04] font-black font-elsie hidden lg:block">
        Build
      </div>
    </div>
  );
}