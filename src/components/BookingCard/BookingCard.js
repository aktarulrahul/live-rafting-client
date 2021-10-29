import React from 'react';
import { Link } from 'react-router-dom';

const BookingCard = ({ booking, handleApproved, handleCancel, isUser }) => {
  return (
    <div className="grid lg:grid-cols-8 lg:grid-cols-4 grid-cols-2 mx-8 flex-wrap p-2 border rounded shadow-lg text-center my-4 ransition duration-500 ease-in-out transform hover:scale-105 ">
      <p className="border rounded p-2 m-1 ">{booking.name}</p>
      <p className="border rounded p-2 m-1 break-all">{booking.phone}</p>
      <p className="border rounded p-2 m-1 break-all">{booking.email}</p>
      <p className="border rounded p-2 m-1 ">{booking.address}</p>
      <p className="border rounded p-2 m-1 ">{booking['date-input']}</p>
      <Link to={`/booking/${booking.raftingId}`}>
        <p className="border rounded p-2 m-1 ">{booking.raftingName}</p>
      </Link>
      <p className="border rounded p-2 m-1 ">{booking.status}</p>
      <div className="border rounded p-2 m-1">
        {isUser ? (
          ''
        ) : (
          <button
            className="border rounded p-2 m-1 text-white bg-green-500 mx-auto"
            onClick={handleApproved}
          >
            Approved
          </button>
        )}
        <button
          className="border rounded p-2 m-1 text-white bg-red-500 mx-auto"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
