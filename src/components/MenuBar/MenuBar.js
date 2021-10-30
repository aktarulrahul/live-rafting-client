import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import avater from '../../images/avater.png';

const MenuBar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="md:sticky w-screen top-0 z-10 bg-blue-800 p-2 xl:px-4">
      <div className="m-2 lg:flex lg:h-14 lg:items-center lg:justify-between md:justify-around text-white text-center">
        <div className="md:flex md:items-center lg:justify-between md:justify-around">
          <NavLink to="/">
            <h2 className="text-4xl font-bold my-2">
              <i className="fas fa-ship"></i> Live Rafting
            </h2>
          </NavLink>
          <div className="flex justify-between">
            <NavLink
              to="/home"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#fff',
                color: '#1E40AF',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
              className="mx-2 py-1 px-2 rounded-lg"
            >
              Home
            </NavLink>
            <NavLink
              to="/all-packages"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#fff',
                color: '#1E40AF',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
              className="mx-2 py-1 px-2 rounded-lg"
            >
              Packages
            </NavLink>
            <NavLink
              to="/about"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#fff',
                color: '#1E40AF',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
              className="mx-2 py-1 px-2 rounded-lg"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#fff',
                color: '#1E40AF',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
              className="mx-2 py-1 px-2 rounded-lg"
            >
              Contact
            </NavLink>
          </div>
        </div>
        {/* Show based on Login */}
        <div>
          {/* login or Registration */}
          {user?.email ? (
            <div className="md:flex items-center justify-center lg:justify-end my-2">
              {/* Booking, Add Package */}
              <div className="flex items-center justify-center lg:justify-end pb-2">
                {/* My Booking History */}
                <NavLink
                  to={`/my-booking/${user.email}`}
                  activeStyle={{
                    fontWeight: 'bold',
                    backgroundColor: '#fff',
                    color: '#1E40AF',
                    borderRadius: '20px',
                    padding: '4px 10px',
                  }}
                  className="mx-2 my-2 py-1 px-2"
                >
                  My Booking
                </NavLink>
                {/* Manage All Booking */}
                <NavLink
                  to="/manage-all-booking"
                  activeStyle={{
                    fontWeight: 'bold',
                    backgroundColor: '#fff',
                    color: '#1E40AF',
                    borderRadius: '20px',
                    padding: '4px 10px',
                  }}
                  className="mx-2 my-2 py-1 px-2"
                >
                  Manage All
                </NavLink>
                {/* Add New Package */}
                <NavLink
                  to="/add-new-package"
                  activeStyle={{
                    fontWeight: 'bold',
                    backgroundColor: '#fff',
                    color: '#1E40AF',
                    borderRadius: '20px',
                    padding: '4px 10px',
                  }}
                  className="mx-2 my-2 py-1 px-2"
                >
                  Add New
                </NavLink>
              </div>
              {/* User Info , Logout */}
              <div className="flex items-center justify-center lg:justify-end pb-2">
                <img
                  className="rounded-full w-1/12"
                  src={user.photoURL ? user.photoURL : avater}
                  alt=""
                />
                <p className="mx-2">{user.displayName}</p>
                <button
                  onClick={logOut}
                  className="text-blue-800 px-4 py-2 rounded-full bg-white"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="text-blue-800 px-10 py-2 rounded-full bg-white mx-auto">
              <NavLink
                to="/sign-in-up"
                activeStyle={{
                  fontWeight: 'bold',
                }}
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
