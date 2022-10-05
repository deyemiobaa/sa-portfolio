import React from "react";
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from "react-icons/fi";
// import { SiLichess } from "react-icons/si";

export default function SocialIcons() {
  return (
    <>
      <a
        href="mailto:sodiqaderibigbe90@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send me an email"
      >
        <FiMail className="text-teal-300 text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://github.com/deyemiobaa?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Github profile"
      >
        <FiGithub className="text-teal-300 text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://www.linkedin.com/in/sodiqa/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Linkedin profile"
      >
        <FiLinkedin className="text-teal-300 text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://twitter.com/deyemiobaa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Twitter profile"
      >
        <FiTwitter className="text-teal-300 text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      {/* <a
        href="https://lichess.org/@/sodiq90"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Lichess profile"
      >
        <SiLichess className="text-teal-300 text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a> */}
    </>
  )
}