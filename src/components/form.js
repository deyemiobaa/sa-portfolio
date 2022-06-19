import React from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
  const [state, handleSubmit] = useForm("mbjwbway");
  if (state.succeeded) {
    return <p className="mt-10 font-bold">Thanks for your message! I'll get back to you within 24 hours.</p>;
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center relative">
      <p className="font-bold mb-6">Send me a message and I'll get back to you within 24 hours</p>
      <form onSubmit={handleSubmit} className="md:w-3/5">
        <label className="block font-light">
          <span >Full name</span>
          <input name="name" type="text" className="mt-1 block w-full rounded-md bg-[#1d1d1d]/[0.4] border-transparent focus:ring-1 outline-0 py-2 pl-6" placeholder="" required />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </label>
        <label className="block font-light">
          <span >Email address</span>
          <input name="email" type="text" className="mt-1 block w-full rounded-md bg-[#1d1d1d]/[0.4] border-transparent focus:ring-1 outline-0 py-2 pl-6" placeholder="" required />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </label>
        <label className="block font-light">
          <span >Message</span>
          <textarea name="message" className="mt-1 block w-full rounded-md bg-[#1d1d1d]/[0.4] border-transparent focus:ring-1 outline-0 pt-4 pl-6" rows="3" required></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
        <button type="submit" disabled={state.submitting} className="border px-8 mt-4 border-teal-500 bg-transparent hover:bg-teal-500 hover:border ease-in-out duration-700 transition-colors text-teal-500 hover:text-black font-bold w-max sticky z-[11]">Send message</button>
      </form>
      <div className="text-big absolute z-1 -right-10 bottom-64 opacity-[0.15] text-[#616971] font-black font-elsie hidden lg:block">
        @
      </div>
    </div>
  )
}