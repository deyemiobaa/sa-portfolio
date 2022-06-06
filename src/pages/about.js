import React from "react";
import SocialIcons from "../components/icons";

export default function About() {
  return (
    <div className="relative px-6 leading-7 lg:leading-10 tracking-wide text-base md:text-xl mt-28 md:mt-36 flex flex-col items-center">
      <div className="w-4/4 md:w-3/4 static z-10 mx-auto">
        <h1 className="mb-10 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-amber-500 font-bold">Journey . Process</h1>
        <p className="mt-8 font-light">My first memory of computers is from when I was a young boy. I used to play a lot of games, particularly chess. <br />
          From generating emails and Facebook profiles for individuals in cybercafés to being contacted for the slightest difficulty my parents faced on their devices, it seemed rather apparent that I would be doing something in the computer industry.
        </p>
        <p className="font-light">
          Over the years, I've taken a detour, fixating on medicine, business, and fashion before landing back in the tech world. <br />

          As a digital consultant at an advertising agency, I got my first experience in technology. I had no experience writing codes, but I worked with developers and designers to troubleshoot website issues and create new landing pages. After two years, I gained a wealth of knowledge about business and how developers bring concepts to life.<br />

          I decided to learn to code in Python, focusing on data science and analytics. It was an eye-opening experience, but I quickly decided to switch gears and learn web development instead.<br />

          After a few years, I've had the chance to build unique projects with incredible developers from countries across Africa and Europe. I'm currently concentrating on React web development and would love to work with Edu-tech or customer-focused companies.<br />

          When I'm not behind a computer screen, you can find me at the gym or playing basketball.

        </p>
      </div>
      <div className="lg:hidden flex justify-between w-3/4 self-center mt-20">
        <SocialIcons />
      </div>
      <div className="text-big fixed z-1 bottom-32 right-0 opacity-[0.04] font-black font-elsie hidden lg:block">
        About
      </div>
    </div>
  );
}