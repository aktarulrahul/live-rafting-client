import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookingCard from '../../components/BookingCard/BookingCard';

const AllBooking = () => {
  const [allBooking, setAllBooking] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch('http://localhost:5000/booking/')
      .then((res) => res.json())
      .then((data) => setAllBooking(data));
  }, [control]);
  const handleApproved = (id) => {
    if (window.confirm('Approved the Booking?')) {
      axios
        .put(`http://localhost:5000/update/${id}`, { status: 'approved' })
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
      axios.delete(`http://localhost:5000/booking/${id}`).then((res) => {
        if (res.data.deletedCount) {
          setControl(() => !control);
        } else {
          setControl(false);
        }
      });
    }
  };
  return (
    <div>
      {allBooking.map((booking) => (
        <BookingCard
          isUser={false}
          key={booking._id}
          booking={booking}
          handleApproved={() => handleApproved(booking._id)}
          handleCancel={() => handleCancel(booking._id)}
        />
      ))}
    </div>
  );
};

export default AllBooking;
