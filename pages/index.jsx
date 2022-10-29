import Link from "next/link";
import Form from "../components/Form";
import Project from "../components/Project";
import { projects, techSkills } from "../data/data";

export default function Home() {
  return (
    <div className="mx-auto mb-10 home">
      <section id="intro" aria-label="intro">
        <h1 className="flex flex-col justify-center h-screen max-w-5xl m-auto mb-4 text-4xl leading-[50px] tracking-tight text-center text-white font-extralight md:text-8xl font-spectral">
          <span className="font-light">
            Full Stack <span className="text-teal-300">Engineer.</span>
          </span>
          <span>
            Building <span className="italic">interactive</span> <br />
            user interfaces.
          </span>
        </h1>
        <div className="gap-10 my-10 md:flex">
          <p>
            Throughout my years as a developer, I've had the opportunity to work
            with talented developers and designers who helped me raise my
            standards for what's expected from a web application.
          </p>
          <p>
            Through this experience, I've learned to build products that are not
            only aesthetic and easy to use but are written in code that's
            maintainable and easy to understand.
          </p>
        </div>
        <Link href="/contact">
          <button
            type="button"
            className="border px-8 mt-6 py-1 border-teal-300 bg-transparent hover:bg-teal-300 hover:border ease-in-out duration-700 transition-colors text-teal-300 hover:text-black font-bold w-max sticky z-[11]"
          >
            Get in touch
          </button>
        </Link>
      </section>

      <section
        id="skills"
        data-aos="fade-right"
        aria-label="my tech skills"
        className="my-20"
      >
        <h2 className="text-4xl font-light text-white md:text-5xl font-spectral">
          My Skills
        </h2>
        <p className="py-10 md:w-2/3">
          Through my experience and education, I've gained a solid understanding
          of computer science and web development concepts, and I've dedicated a
          lot of time to apply them in the real world.
        </p>
        <ul className="grid md:grid-cols-3 grid-cols-2 gap-x-4 w-full text-base list-[square] justify-between">
          {techSkills.map((skill) => (
            <li key={skill.id} className="flex items-center mb-4">
              <span className="mr-4 text-teal-300 rounded-full">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  className="fill-current"
                >
                  <path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path>
                </svg>
              </span>
              {skill.skill}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="what-im-working-on"
        data-aos="fade-right"
        aria-label="My projects"
        className="my-20"
      >
        <h2 className="text-4xl font-light text-white md:text-5xl font-spectral">
          What I've been working on
        </h2>
        <p className="py-10 md:w-2/3">
          I enjoy building projects. I get to gain new experiences with each
          project and also work on something interesting. Take a look at some of
          the projects I've dedicated my time to.
        </p>
        <div
          id="projects-section"
          className="grid w-full grid-cols-1 gap-32 md:grid-cols-2 lg:mb-0"
        >
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.url}
              image={project.image}
            />
          ))}
        </div>
      </section>

      <section aria-label="contact me" className="mt-10">
        <h2 className="text-4xl font-light text-white md:text-5xl font-spectral">
          Let's build something together
        </h2>
        <p className="py-10 md:w-2/3">
          Feel free to reach out if you're looking for a developer, have a
          project idea you’d like me to work on, have a question, or looking to
          make a new connection.
        </p>
        <a
          href="mailto:sodiqaderibigbe90@gmail.com"
          className="pb-2 font-semibold border-b border-teal-300"
        >
          Send me an e-mail
        </a>
        <Form />
      </section>
    </div>
  );
}
