import React from 'react';
import Banner from '../../components/Banner/Banner';
import contact from '../../images/contact.svg';

const Contact = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Banner />
      <div className="md:flex justify-arround m-4 itrms-center border rounded shadow-lg overflow-hidden">
        <img
          src={contact}
          className="md:w-1/2 transition duration-500 ease-in-out transform hover:scale-105"
          alt=""
        />
        <div className="mx-auto my-auto">
          <h2 className="text-4xl font-bold text-center text-blue-800 my-5 ">
            Live Rafting
          </h2>
          <form onSubmit={handleSumbit} className="mx-3">
            <input
              type="text"
              className="py-2 px-4 rounded border my-2 w-full"
              placeholder="Name"
            />
            <br />
            <input
              type="email"
              className="py-2 px-4 rounded border my-2 w-full"
              placeholder="email"
            />
            <br />
            <textarea
              cols="30"
              rows="3"
              className="py-2 px-4 rounded border my-2 w-full"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="py-2 px-4 rounded-full border my-2 w-full bg-blue-800 text-white text-xl transition duration-500 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
