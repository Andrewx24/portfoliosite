"use client";

import React, { useRef, RefObject, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Tooltip } from "@nextui-org/tooltip";
import Link from 'next/link';

const useFocus = (): [RefObject<HTMLInputElement>, () => void] => {
  const htmlElRef = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    if (htmlElRef.current) {
      htmlElRef.current.focus();
    }
  };
  return [htmlElRef, setFocus];
};

const Contact: React.FC = () => {
  const [inputRef, setInputFocus] = useFocus();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log('Form data:', formJson);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formJson),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      const responseText = await response.text();
      console.log('Raw response:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
        console.log('Parsed response data:', data);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        console.error('Invalid JSON:', responseText);
        throw new Error(`Invalid response from server: ${responseText}`);
      }

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <Link
                  href="https://www.linkedin.com/in/andrewaliaj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-none">
                    <FaLinkedinIn className="mx-auto mb-1" /> LinkedIn
                  </div>
                </Link>
              </div>

              <div className="mx-auto">
                <Link
                  href="https://github.com/Andrewx24"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-none">
                    <FaGithub className="mx-auto mb-1" /> GitHub
                  </div>
                </Link>
              </div>

              <div className="mx-auto">
                <Tooltip
                  content="Use the form below"
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

            {submitSuccess ? (
              <div className="text-green-600 text-center py-4">
                Thanks for your submission, I will get back to you ASAP.
              </div>
            ) : (
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
                    rows={10}
                  />
                </div>
                {errorMessage && (
                  <div className="text-red-600 text-center py-2">{errorMessage}</div>
                )}
                <div className="flex items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[90%] mx-auto p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#21568a] to-[#1d97bd] cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-none disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;