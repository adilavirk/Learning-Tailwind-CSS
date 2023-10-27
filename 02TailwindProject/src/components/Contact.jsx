import React from "react";

const Contact = () => {
  return (
    <>
      <main className=" max-w-4xl mx-auto">
        <section
          className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
          id="contact"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Contact Us
          </h2>
          <form
            action="#"
            className="max-w-4xl mx-auto text-2xl sm:text-3xl  flex flex-col items-left gap-4"
          >
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              minLength={3}
              maxLength={60}
              placeholder="Your Subject"
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border bordr-solid bordr-slate-900 sm:border-none"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border bordr-solid bordr-slate-900 sm:border-none"
            ></textarea>
            <button className="bg-teal-700 dark:bg-teal-600 active:bg-teal-500 w-48 p-3 rounded-xl text-wite border border-solid border-slate-900 dark:border-none">
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
