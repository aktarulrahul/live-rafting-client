import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookingCard from '../../components/BookingCard/BookingCard';
import { useParams } from 'react-router';

const MyBooking = () => {
  const { userEmail } = useParams();
  const [allBooking, setAllBooking] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/booking/user/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setAllBooking(data));
  }, [control]);
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
          isUser={true}
          key={booking._id}
          booking={booking}
          handleCancel={() => handleCancel(booking._id)}
        />
      ))}
    </div>
  );
};

export default MyBooking;
