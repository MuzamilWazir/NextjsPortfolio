"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_55aypvq", "template_tbqdyaa", form.current, {
        publicKey: "qul6HJbpsdWu-jI1a",
      })
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="py-20 px-4" id="contact">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-2">
        Get In Touch
      </h2>
      <span className="block text-center text-sm text-gray-600 mb-16">
        Contact Me
      </span>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 justify-items-center">
          {/* Left Side - Talk to me */}
          <div className="w-full max-w-md">
            <h3 className="text-xl font-medium mb-8 text-gray-900">
              Talk to me
            </h3>
            <div className="grid gap-6">
              {/* Email Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-3 text-center">
                <i className="bx bx-mail-send text-4xl text-gray-900 mb-1 block"></i>
                <h3 className="text-base font-medium mb-1 text-gray-900">
                  Email
                </h3>
                <span className="block text-sm text-gray-600 mb-2">
                  itzmuzu@gmail.com
                </span>
                <a
                  href="mailto:itzmuzu@gmail.com"
                  className="text-gray-700 text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt text-base"></i>
                </a>
              </div>

    
              <div className="bg-white border border-gray-200 rounded-2xl p-3 text-center">
                <i className="bx bxl-whatsapp text-4xl text-gray-900 mb-1 block"></i>
                <h3 className="text-base font-medium mb-1 text-gray-900">
                  Whatapp
                </h3>
                <span className="block text-sm text-gray-600 mb-2">
                  0347-8048455
                </span>
                <a
                  href="https://api.whatsapp.com/send?phone=923478048455&text=Hello, I would like to discuss a project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt text-base"></i>
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-3 text-center">
                <i className="bx bxl-messenger text-4xl text-gray-900 mb-1 block"></i>
                <h3 className="text-base font-medium mb-1 text-gray-900">
                  Messenger
                </h3>
                <span className="block text-sm text-gray-600 mb-2">
                  user.fb123
                </span>
                <a
                  href="https://m.me/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt text-base"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md">
            <h3 className="text-xl font-medium mb-8 text-gray-900">
              Write me your Project
            </h3>

            <form ref={form} onSubmit={sendEmail} className="w-full">
              <div className="relative mb-8 h-16">
                <label className="absolute -top-3 left-5 text-sm px-2 bg-[#fafafa] z-10 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 bg-transparent text-gray-900 outline-none rounded-xl px-6 z-1 focus:border-gray-900 transition-colors placeholder:text-gray-400"
                  placeholder="Insert your name"
                />
              </div>

              {/* Email Field */}
              <div className="relative mb-8 h-16">
                <label className="absolute -top-3 left-5 text-sm px-2 bg-[#fafafa] z-10 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 bg-transparent text-gray-900 outline-none rounded-xl px-6 z-1 focus:border-gray-900 transition-colors placeholder:text-gray-400"
                  placeholder="Insert your Email"
                />
              </div>

              {/* Project Field */}
              <div className="relative mb-8 h-44">
                <label className="absolute -top-3 left-5 text-sm px-2 bg-[#fafafa] z-10 text-gray-700">
                  Project
                </label>
                <textarea
                  name="project"
                  required
                  className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 bg-transparent text-gray-900 outline-none rounded-xl px-6 py-6 z-1 resize-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                  placeholder="Write Your project"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
