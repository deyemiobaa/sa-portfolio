import React from "react";

export default function Welcome() {
  return (
    <div className="px-6 lg:px-14 text-slate-50 relative h-screen flex flex-col justify-center overflow-auto lg:justify-start lg:overflow-hidden font-lato leading-7 lg:leading-10 tracking-wide text-base md:text-lg">
      <div className="w-4/4 md:w-3/4">
        <h1 className="mb-4 lg:mt-36"><span className="animate-pulse pr-4 text-4xl">👋🏽</span>Hi, my name is <span className="font-bold text-lg md:text-2xl">Sodiq</span>.</h1>
        <p className="lg:pl-4 font-light">
          A full-stack software developer in Lagos, NG and I am passionate about education. <br />
          One of my life-long goals is to travel around the world teaching from my <span className="underline decoration-teal-500 decoration-4 font-normal">experience</span>.<br />
          I spend a lot of time perfecting my tech &amp; interpersonal skills to give out the best and create a great experience for whoever I work/meet with. I have an excellent eye for design and I pay very keen attention to details.
        </p>
        <p className="mt-8 lg:pl-4 font-light">You can read about my story <span className="underline decoration-teal-500 decoration-4 font-normal">here</span>, or check out my most recent <span className="underline decoration-teal-500 decoration-4 font-normal">projects</span>.</p>
      </div>
      <div className="text-big absolute z-1 bottom-32 right-0 opacity-5 font-black font-elsie hidden lg:block">
        Hello
      </div>
    </div>
  );
}