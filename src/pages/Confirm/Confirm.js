import React from 'react';
import { NavLink } from 'react-router-dom';
import confirm from '../../images/confirm.svg';

const Confirm = () => {
  return (
    <div className="mx-2 my-5 text-center">
      <div className="md:flex justify-around items-center">
        <div className="mx-5 shadow-lg p-10">
          <h2 className="text-2xl md:text-6xl font-medium my-8 text-blue-600">
            Congratulations!!
          </h2>
          <h3 className="text-2xl font-medium my-3">
            Your Booking has been successfully recorded.
          </h3>
          <p className="text-xl font-medium my-3">
            One of our member reach you soon!!
          </p>
          <NavLink to="/">
            <button className="bg-blue-500 text-white rounded px-4 py-2">
              Go To Home Page
            </button>
          </NavLink>
        </div>
        <div className="my-5">
          <img className="w-2/3 mx-auto " src={confirm} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
