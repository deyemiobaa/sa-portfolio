import Form from "../components/Form";

export default function Contact() {
  return (
    <main className="relative flex flex-col items-center px-6 mb-20 leading-7 lg:leading-10 mt-28 md:mt-36">
      <div className="static z-10 mx-auto w-4/4 md:w-5/6">
        <h1 className="mb-10 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-green-500 to-amber-500">
          Collaborate . Connect
        </h1>
        <figure className="opacity-[.9] text-white">
          <blockquote cite="https://deyemiobaa.vercel.app">
            <p className="pl-6 mb-4 border-l-4 border-neutral-700">
              There are no strangers here; Only friends you haven’t yet met.
            </p>
          </blockquote>
          <figcaption>
            —<cite> William Butler Yeats</cite>
          </figcaption>
        </figure>
        <p className="mt-8">
          Do you have a project idea you’d like me to jump on, questions you’d
          like me to answer, looking to make a new connection, or do you want to
          hire me?
        </p>
        <p>
          You can reach out to me via my social links, or send me a message
          using the form below. I'd love to hear from you.
        </p>
        <Form />
      </div>
    </main>
  );
}
