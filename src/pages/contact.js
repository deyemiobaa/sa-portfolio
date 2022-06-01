import React from "react";
import SocialIcons from "../components/icons";

export default function Contact() {
  return (
    <div className="px-6 lg:px-14 text-slate-50 relative h-screen flex flex-col overflow-auto justify-start lg:overflow-hidden font-lato leading-7 lg:leading-10 tracking-wide text-base md:text-lg">
      <div className="w-4/4 md:w-3/4">
        <h1 className="mb-4 mt-24 md:mt-32 text-4xl md:text-5xl font-lato bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 font-bold">Collaborate . Connect</h1>
        <p>
          Let's have a chat!
        </p>
        <p className="mt-8 font-light">Do you have a project idea you’d like me to jump on, questions you’d like me to answer, looking to make a new connection, or do you want to hire me?
        </p>
        <p>You can reach out to me via my social links, or send me an email. I'd love to hear from you.</p>
      </div>
      <div className="lg:hidden flex justify-between w-3/4 self-center mt-20">
        <SocialIcons />
      </div>
      <div className="text-big absolute z-1 bottom-32 right-0 opacity-5 font-black font-elsie hidden lg:block">
        Link
      </div>
    </div>
  );
}