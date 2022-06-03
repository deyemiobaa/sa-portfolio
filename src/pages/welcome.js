import React from "react";
import SocialIcons from "../components/icons";

export default function Welcome() {
  return (
    <div className="relative px-6 lg:px-14 leading-7 lg:leading-10 tracking-wide text-base md:text-xl h-full flex items-center flex-col justify-center">
      <div className="w-4/4 md:w-3/4 mx-auto static z-10">
        <h1 className="mb-4"><span className="animate-pulse pr-4 text-4xl">👋🏽</span>Hi, my name is <span className="font-bold text-lg md:text-2xl">Sodiq</span>.</h1>
        <p className="lg:pl-4 font-light">
          A full-stack software developer in Lagos, NG and I am passionate about education. <br />
          One of my life-long goals is to travel around the world teaching from my <span className="underline decoration-teal-500 decoration-4 font-normal">experience</span>.<br />
          I spend a lot of time perfecting my tech &amp; interpersonal skills to give out the best and create a great experience for whoever I work/meet with.
        </p>
        <p className="mt-8 lg:pl-4 font-light">You can read about my story <span className="underline decoration-teal-500 decoration-4 font-normal">here</span>, or check out my most recent <span className="underline decoration-teal-500 decoration-4 font-normal">projects</span>.</p>
      </div>
      <div className="lg:hidden flex justify-between w-3/4 self-center mt-16">
        <SocialIcons />
      </div>
      <div className="text-big fixed z-1 right-0 bottom-32 opacity-[0.04] font-black font-elsie hidden lg:block">
        Hello
      </div>
    </div>
  );
}