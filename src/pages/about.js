import React from "react";
import SocialIcons from "../components/icons";
import myphoto from '../assets/images/potr.jpg';
import gym from '../assets/images/gym.jpg';
import bball from '../assets/images/bball.jpg';

export default function About() {
  return (
    <div className="relative px-6 leading-7 lg:leading-10 tracking-wide  mt-28 md:mt-36 flex flex-col items-center pb-10">
      <div className="w-4/4 md:w-3/4 static z-10 mx-auto">
        <h1 className="mb-10 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-amber-500 font-bold">Genesis . Journey</h1>
        <div className="flex flex-col-reverse md:grid md:grid-cols-4 gap-12">
          <div className="font-light md:col-span-3">My first memory of computers is from when I was a young boy. I used to play a lot of games, particularly chess. <br />
            Soon I went from generating emails and Facebook profiles for individuals in cybercafés to being contacted for the slightest difficulty my parents faced on their devices. It seemed rather apparent that I would later do something in the computer industry.<br />
            Over the years, I've taken a detour, fixating on medicine, business, and fashion before landing back in the tech world. <br />

            As a digital consultant at an advertising agency, I got my first tech experience. I had no experience writing codes, but I worked with developers and designers to troubleshoot website issues and create new landing pages. After two years, I gained a wealth of knowledge about business and how developers bring concepts to life.<br />

            I decided to learn to code in Python, focusing on data science and analytics. It was an eye-opening experience, but I quickly decided to switch gears and learn web development instead.<br />

            After a few years, I've had the chance to build unique projects with incredible developers from countries across Africa and Europe. I'm currently concentrating on React web development and would love to work with Edu-tech or customer-focused companies.<br />

            When I'm not behind a computer screen, you can find me at the gym or playing basketball.
            <div className="grid grid-cols-2 gap-6 justify-items-center pt-6 mb-6">
              <img src={gym} alt="gym" className="rounded-lg  w-full" />
              <img src={bball} alt="basketball" className="rounded-lg  w-full"/>
            </div>
          </div>
          <img src={myphoto} alt="Headshot" className="w-36 h-auto rounded-full md:rounded-2xl md:w-auto" />
        </div>
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