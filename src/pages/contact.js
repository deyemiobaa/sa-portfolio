import React from "react";
import Form from "../components/form";

export default function Contact() {
  return (
    <div className="relative px-6 leading-7 lg:leading-10 tracking-wide  mt-28 md:mt-36 flex flex-col items-center">
      <div className="w-4/4 md:w-3/4 static z-10 mx-auto">
        <h1 className="mb-10 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-amber-500 font-bold">Collaborate . Connect</h1>
        <figure className="opacity-[.9] text-base text-white">
          <blockquote cite="https://deyemiobaa.vercel.app">
            <p className="border-l-4 pl-6 border-neutral-700 mb-4">There are no strangers here; Only friends you haven’t yet met.</p>
          </blockquote>
          <figcaption>—<cite> William Butler Yeats</cite></figcaption>
        </figure>
        <p className="mt-8 ">Do you have a project idea you’d like me to jump on, questions you’d like me to answer, looking to make a new connection, or do you want to hire me?
        </p>
        <p className="">You can reach out to me via my social links, or send me a message. I'd love to hear from you.</p>
        <Form />
      </div>
    </div>
  );
}