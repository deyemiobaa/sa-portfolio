import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
  const [state, handleSubmit] = useForm("mbjwbway");
  if (state.succeeded) {
    return <p className="mt-10 font-bold">Thanks for your message! I'll get back to you within 24 hours.</p>;
  }
  return (
    <div className="relative flex flex-col justify-center w-full h-screen my-16 lg:my-0" data-aos="zoom-in-up">
      <p className="mb-6 text-white">Send me a message and I'll get back to you within 24 hours</p>
      <form onSubmit={handleSubmit} className="md:w-3/5">
        <label className="block ">
          <span >Full name</span>
          <input name="name" type="text" className="mt-1 block w-full rounded-md bg-[#616971]/[0.15] focus:border-b focus:border-teal-300 focus:ring-0 outline-0 py-1 pl-6" placeholder="" required />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </label>
        <label className="block ">
          <span >Email address</span>
          <input name="email" type="text" className="mt-1 block w-full rounded-md bg-[#616971]/[0.15] focus:border-b focus:border-teal-300 focus:ring-0 outline-0 py-1 pl-6" placeholder="" required />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </label>
        <label className="block ">
          <span >Message</span>
          <textarea name="message" className="mt-1 block w-full rounded-md bg-[#616971]/[0.15] focus:border-b focus:border-teal-300 focus:ring-0 outline-0 pt-1 pl-6" rows="3" required></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
        <button type="submit" disabled={state.submitting} className="border px-8 mt-6 py-1 border-teal-300 bg-transparent hover:bg-teal-300 hover:border ease-in-out duration-700 transition-colors text-teal-300 hover:text-black font-bold w-max sticky z-[11]">Send message</button>
      </form>
      <div className="text-big absolute z-1 -right-10 bottom-64 opacity-[0.15] text-[#616971] hidden lg:block font-spectral">
        @
      </div>
    </div>
  )
}