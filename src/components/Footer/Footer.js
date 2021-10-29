import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-screen">
      <div className="grid grid-cols-3 gap-4 bg-gray-600 text-white px-4">
        <div className="m-2 p-2">
          <NavLink to="/">
            <h2 className="text-4xl font-bold my-2">
              <i className="fas fa-ship"></i> Live Rafting
            </h2>
          </NavLink>
          <h2 className="text-2xl font-bold mt-4">Follow Us</h2>
          <p>
            <i className="mr-2 text-xl fab fa-facebook"></i>
            <i className="mr-2 text-xl fab fa-twitter"></i>
            <i className="mr-2 text-xl fab fa-instagram"></i>
          </p>
        </div>
        <div className="m-2 p-2">
          <p className="text-2xl my-2">Call Us</p>
          <p className="text-xl my-2  ">+14 2 3465 8754</p>
          <p className="text-2xl my-2">Write a Message</p>
          <p className="text-xl my-2  ">noreply@liverafting.com</p>
        </div>
        <div className="m-2 p-2">
          <h2 className="text-3xl my-3">Address</h2>
          <p className="text-xl my-2 font-bold ">USA</p>
          <p className=" my-2 ">3225 Sumner Street, Gardena</p>
          <p className=" my-2 ">CA-90247, California</p>
        </div>
      </div>
      <div className="bg-blue-600 text-white text-center py-8">
        <p>Live Rafting | 2021. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
