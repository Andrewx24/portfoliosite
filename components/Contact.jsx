"use client";

import Link from 'next/link';
import React, { useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { Tooltip } from "@nextui-org/tooltip";
import { useForm, ValidationError } from "@formspree/react";

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const Contact = () => {
  const [inputRef, setInputFocus] = useFocus();
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  
  return (
    <section id="contact" className="w-full container lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 pt-8 w-full">
        <p className="text-xl tracking-widest uppercase text-[#21568a] dark:text-white">
          Contact
        </p>
        <h2 className="py-4 dark:text-white">Get In Touch</h2>

        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:shadow-none">
          <div className="p-4">
            <div className="grid grid-cols-2 gap-8 py-4 sm:flex sm:flex-wrap sm:items-center sm:justify-around">
              <div className="mx-auto">
                <a
                  href="https://www.linkedin.com/in/aleceiber"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-none">
                    <FaLinkedinIn className="mx-auto mb-1" /> LinkedIn
                  </div>
                </a>
              </div>

              <div className="mx-auto">
                <a
                  href="https://www.github.com/a-eiber"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-none">
                    <FaGithub className="mx-auto mb-1" /> GitHub
                  </div>
                </a>
              </div>

              <div className="mx-auto">
                <Tooltip
                  content="Use the form below"
                  rounded
                  color="primary"
                  onClick={setInputFocus}
                  className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-none"
                >
                  <div>
                    <AiOutlineMail className="mx-auto mb-1" /> Email Me
                  </div>
                </Tooltip>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label htmlFor="user_name" className="uppercase text-sm py-2 dark:text-white">
                    Name
                  </label>
                  <input
                    ref={inputRef}
                    required
                    type="text"
                    name="user_name"
                    id="user_name"
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-white text-lg dark:bg-slate-100"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="user_email" className="uppercase text-sm py-2 dark:text-white">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="user_email"
                    id="user_email"
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-white text-lg dark:bg-slate-100"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="message" className="uppercase text-sm py-2 dark:text-white">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  className="border-2 rounded-lg p-3 border-gray-300 text-lg dark:border-white dark:bg-slate-100"
                  rows="10"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-[90%] mx-auto p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#21568a] to-[#1d97bd] cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
