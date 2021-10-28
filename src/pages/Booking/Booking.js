import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const { user } = useAuth();
  console.log(user.email);
  const { campId } = useParams();
  const [camp, setCamp] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/camps/${campId}`)
      .then((res) => res.json())
      .then((data) => setCamp(data));
  }, []);

  const onSubmit = (data) => {
    var date = new Date(data['date-input']),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    const onlyDate = [date.getFullYear(), mnth, day].join('-');
    console.log(onlyDate);
    data['date-input'] = onlyDate;
    const bookingData = {
      ...data,
      email: user.email,
      camp: { campId: campId, campName: camp.name },
    };
    console.log(bookingData);
    axios.post('http://localhost:5000/booking/', bookingData).then((res) => {
      if (res.data.insertedId) {
        alert('Service added successfully');
        reset();
      }
    });
  };
  return <div>Booking</div>;
};

export default Booking;
