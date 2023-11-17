import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/63f2d67a-206d-47d9-b20f-bd668a0b1a5f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          type="text"
          className="p-2 bg-[#ccd6f6]"
          placeholder="Name"
          name="name"
          id=""
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          id=""
          className="my-4 p-2 bg-[#ccd6f6] "
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          className="p-2 bg-[#ccd6f6]"
          placeholder="Message"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 
        "
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
