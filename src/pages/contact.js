import React from "react";
import SocialIcons from "../components/icons";

export default function Contact() {
  return (
    <div className="relative px-6 leading-7 lg:leading-10 tracking-wide text-base md:text-xl h-full flex items-center flex-col justify-center">
      <div className="w-4/4 md:w-3/4 static z-10">
        <h1 className="mb-10 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-amber-500 font-bold">Collaborate . Connect</h1>
        <p className="font-bold">
          Let's have a chat!
        </p>
        <p className="mt-8 font-light">Do you have a project idea you’d like me to jump on, questions you’d like me to answer, looking to make a new connection, or do you want to hire me?
        </p>
        <p className="font-light">You can reach out to me via my social links, or send me an <span className="underline decoration-teal-500 decoration-4 font-normal">email</span>. I'd love to hear from you.</p>
      </div>
      <div className="lg:hidden flex justify-between w-3/4 self-center mt-20">
        <SocialIcons />
      </div>
      <div className="text-big fixed z-1 bottom-32 right-0 opacity-[0.04] font-black font-elsie hidden lg:block">
        Link
      </div>
    </div>
  );
}