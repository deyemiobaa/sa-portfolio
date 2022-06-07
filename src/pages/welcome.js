import React from "react";
import SocialIcons from "../components/icons";
import self from "../assets/images/self.jpg";

export default function Welcome() {
  return (
    <div className="relative px-6 leading-7 lg:leading-10 tracking-wide text-base md:text-xl mt-28 md:mt-36 flex flex-col items-center">
      <div className="w-4/4 md:w-3/4 mx-auto static z-10">
        <h1 className="mb-8"><span className="animate-pulse pr-4 text-4xl">👋🏽</span>Hi, my name is <span className="font-bold text-lg md:text-2xl">Sodiq</span>.</h1>
        <div className="flex flex-col-reverse md:grid md:grid-cols-4 gap-12">
          <div className="lg:pl-4 font-light md:col-span-3">
            I'm a full-stack software developer in Lagos, Nigeria, with a strong interest in education. <br />One of my life's ambitions is to travel the world teaching from my <span className="underline decoration-teal-500 decoration-4 font-normal">experiences</span>.<br />
            I spend a lot of time honing my technical and interpersonal abilities to provide the most satisfactory service and create a positive experience for everyone I engage. <br />
            You may learn more about my background <span className="underline decoration-teal-500 decoration-4 font-normal">here</span> or look at some of my most recent <span className="underline decoration-teal-500 decoration-4 font-normal">projects</span>.</div>
          <img src={self} alt="Headshot" className="w-36 h-auto rounded-full md:rounded-2xl md:w-auto" />
        </div>
      </div>
      <div className="lg:hidden flex justify-between w-3/4 self-center my-16">
        <SocialIcons />
      </div>
      <div className="text-big fixed z-1 right-0 bottom-32 opacity-[0.04] font-black font-elsie hidden lg:block">
        Hello
      </div>
    </div>
  );
}