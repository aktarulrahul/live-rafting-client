import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/notFound.svg';

const NotFound = () => {
  return (
    <div className="m-2">
      <div className="md:flex justify-around items-center">
        <div className="mx-5 shadow-lg p-10">
          <h2 className="text-5xl font-medium my-3">400</h2>
          <h3 className="text-3xl font-medium my-3">Page Not Found</h3>
          <p className="text-xl font-medium my-3">You may entered wrong URL</p>
          <NavLink to="/">
            <button className="bg-blue-500 text-white rounded px-4 py-2">
              Go To Home Page
            </button>
          </NavLink>
        </div>
        <div className="my-3">
          <img className="mx-auto w-2/3" src={notFound} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
