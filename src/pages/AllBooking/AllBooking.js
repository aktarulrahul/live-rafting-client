import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookingCard from '../../components/BookingCard/BookingCard';
import Fade from 'react-reveal/Fade';

const AllBooking = () => {
  const [allBooking, setAllBooking] = useState([]);
  const [control, setControl] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://aktarulrahul-live-rafting.herokuapp.com/booking/')
      .then((res) => res.json())
      .then((data) => {
        setAllBooking(data);
        setIsLoading(false);
      });
  }, [control]);

  const handleApproved = (id) => {
    if (window.confirm('Approved the Booking?')) {
      axios
        .put(`https://aktarulrahul-live-rafting.herokuapp.com/update/${id}`, {
          status: 'approved',
        })
        .then((res) => {
          if (res.data.modifiedCount) {
            setControl(() => !control);
          } else {
            setControl(false);
          }
        });
    }
  };
  const handleCancel = (id) => {
    if (window.confirm('Delete the Booking?')) {
      axios
        .delete(`https://aktarulrahul-live-rafting.herokuapp.com/booking/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            setControl(() => !control);
          } else {
            setControl(false);
          }
        });
    }
  };
  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div>
      {allBooking.map((booking) => (
        <Fade left>
          <BookingCard
            isUser={false}
            key={booking._id}
            booking={booking}
            handleApproved={() => handleApproved(booking._id)}
            handleCancel={() => handleCancel(booking._id)}
          />
        </Fade>
      ))}
    </div>
  );
};

export default AllBooking;
