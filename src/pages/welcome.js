import React from "react";

export default function Welcome() {
  return (
    <div className="px-32 text-slate-50 text-2xl relative h-screen flex flex-col overflow-hidden font-merri leading-10 tracking-wide ">
      <div className="w-3/4">
        <h1 className="mb-4 mt-40"><span className="animate-pulse pr-4 text-4xl">👋🏾</span>Hi, my name is Sodiq.</h1>
        <p>
          I’m a full-stack software developer based in Lagos, NG. <br />
          I’m passionate about education, and one of my life-long goals is to travel around the world teaching.<br />
          I spend a lot of time perfecting my tech &amp; interpersonal skills to give out the best and create a great experience for whoever I work/meet with. I have an excellent eye for design and I pay very keen attention to details.<br />
          <span className="mt-8">You can read about my story <span className="underline decoration-teal-500 decoration-4">here</span>, or check out my most recent <span className="underline decoration-teal-500 decoration-4">projects</span>.</span>
        </p>
      </div>
      <div className="text-big absolute z-1 bottom-32 right-0 opacity-5 font-black font-elsie">
        Hello
      </div>
    </div>
  );
}