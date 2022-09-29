import React from "react";
import myphoto from '../assets/images/potr.jpg';
import gym from '../assets/images/gym.jpg';
import bball from '../assets/images/bball.jpg';

export default function About() {
  return (
    <div className="relative flex flex-col items-center px-6 pb-10 leading-7 tracking-wide lg:leading-10 mt-28 md:mt-36">
      <div className="static z-10 mx-auto w-4/4 md:w-3/4">
        <h1 className="mb-10 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-teal-500 to-amber-500">Genesis . Journey</h1>
        <div className="flex flex-col-reverse gap-12 md:grid md:grid-cols-4">
          <div className=" md:col-span-3">My first memory of computers is from when I was a young boy. I used to play a lot of games, particularly chess. <br />
            Soon I went from generating emails and Facebook profiles for individuals in cybercafés to being contacted for the slightest difficulty my parents faced on their devices. It seemed rather apparent that I would later do something in the computer industry.<br />

            <h3 className="my-4 text-xl text-white lg:text-2xl">Starting out;</h3>
            Over the years, I've taken a detour, fixating on medicine, business, and fashion before landing back in the tech world. <br />

            As a digital consultant at an advertising agency, I got my first tech experience. I had no experience writing codes, but I worked with developers and designers to troubleshoot website issues and create new landing pages. After two years, I gained a wealth of knowledge about business and how developers bring concepts to life.<br />

            <h3 className="my-4 text-xl text-white lg:text-2xl">Circling back;</h3>
            I decided to learn to code in Python, focusing on data science and analytics. It was an eye-opening experience, but I quickly decided to switch gears and learn web development instead.<br />

            After a few years, I've had the chance to build unique projects with incredible developers from countries across Africa and Europe. I'm currently concentrating on React web development and would love to work with Edu-tech or customer-focused companies.<br />

            When I'm not behind a computer screen, you can find me at the gym or playing basketball.
          </div>
          <img src={myphoto} alt="Headshot" className="h-auto rounded-full w-36 md:rounded-2xl md:w-auto" />
        </div>
      </div>
    </div>
  );
}