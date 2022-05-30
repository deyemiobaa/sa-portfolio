import React from "react";
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from "react-icons/fi";
import { SiLichess } from "react-icons/si";

export default function SocialNav() {
  return (
    <div className="social-nav text-slate-50 text-lg flex flex-col w-max h-screen justify-center items-center px-4 gap-8">
      <div className="rounded w-0.5 bg-teal-500 h-1/3" />
      <a
        href="mailto:mailto:sodiqaderibigbe90@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail className="text-teal-500 text-2xl" />
      </a>
      <a
        href="https://github.com/deyemiobaa?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub className="text-teal-500 text-2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/sodiqa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin className="text-teal-500 text-2xl" />
      </a>
      <a
        href="https://twitter.com/deyemiobaa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiTwitter className="text-teal-500 text-2xl" />
      </a>
      <a
        href="https://lichess.org/@/sodiq90"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLichess className="text-teal-500 text-2xl" />
      </a>
      <div className="rounded w-0.5 bg-teal-500 h-1/3" />
    </div>
  );
}