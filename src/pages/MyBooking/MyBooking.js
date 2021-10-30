import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookingCard from '../../components/BookingCard/BookingCard';
import { useParams } from 'react-router';
import art from '../../images/confirm.svg';
import Fade from 'react-reveal/Fade';

const MyBooking = () => {
  const { userEmail } = useParams();
  const [allBooking, setAllBooking] = useState([]);
  const [control, setControl] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://aktarulrahul-live-rafting.herokuapp.com/booking/user/${userEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllBooking(data);
        setIsLoading(false);
      });
  }, [control]);
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
    <div className="lr-all-booking">
      {allBooking.length === 0 ? (
        <div>
          <h2 className="text-center text-4xl text-blue-800 uppercase my-8">
            You didn't Book any of our Rafting packages. <br />
            Try our exciting rafting experiences!!
          </h2>
          <img src={art} alt="" className="w-1/3 mx-auto " />
        </div>
      ) : (
        allBooking.map((booking) => (
          <Fade left>
            <BookingCard
              isUser={true}
              key={booking._id}
              booking={booking}
              handleCancel={() => handleCancel(booking._id)}
            />
          </Fade>
        ))
      )}
    </div>
  );
};

export default MyBooking;
