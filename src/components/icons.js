import React from "react";
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from "react-icons/fi";
import { SiLichess } from "react-icons/si";

export default function SocialIcons() {
  return (
    <>
      <a
        href="mailto:sodiqaderibigbe90@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail className="text-teal-500 text-lg hover:scale-[1.01] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://github.com/deyemiobaa?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub className="text-teal-500 text-lg hover:scale-[1.01] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://www.linkedin.com/in/sodiqa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin className="text-teal-500 text-lg hover:scale-[1.01] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://twitter.com/deyemiobaa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiTwitter className="text-teal-500 text-lg hover:scale-[1.01] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://lichess.org/@/sodiq90"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLichess className="text-teal-500 text-lg hover:scale-[1.01] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
    </>
  )
}