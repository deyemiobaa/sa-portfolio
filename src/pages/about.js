import React from "react";

export default function About() {
  return (
    <div className="px-6 lg:px-32 text-slate-50 relative h-screen flex flex-col justify-center overflow-auto lg:justify-start lg:overflow-hidden font-merri leading-7 lg:leading-10 tracking-wide text-sm md:text-lg lg:text-2xl">
      <div className="w-4/4 xl:w-3/4">
        <h1 className="mb-4 lg:mt-40"><span className="animate-pulse pr-4 text-4xl">👋🏽</span>Hi, my name is <span className="font-bold text-lg md:text-2xl lg:text-4xl">Sodiq</span>.</h1>
        <p>
          I’m a full-stack software developer based in Lagos, NG. <br />
          I’m passionate about education, and one of my life-long goals is to travel around the world teaching.<br />
          I spend a lot of time perfecting my tech &amp; interpersonal skills to give out the best and create a great experience for whoever I work/meet with. I have an excellent eye for design and I pay very keen attention to details.<br />
          <span className="mt-8">You can read about my story <span className="underline decoration-teal-500 decoration-4">here</span>, or check out my most recent <span className="underline decoration-teal-500 decoration-4">projects</span>.</span>
        </p>
      </div>
      <div className="text-big absolute z-1 bottom-32 right-0 opacity-5 font-black font-elsie hidden lg:block">
        Meet Me
      </div>
    </div>
  );
}