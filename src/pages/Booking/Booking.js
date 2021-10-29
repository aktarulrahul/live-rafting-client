import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const { user } = useAuth();
  const { raftingId } = useParams();
  const history = useHistory();
  const [rafting, setRafting] = useState({});
  const { name, img, price, length, time, description } = rafting;
  useEffect(() => {
    fetch(
      `https://aktarulrahul-live-rafting.herokuapp.com/rafting-packages/${raftingId}`
    )
      .then((res) => res.json())
      .then((data) => setRafting(data));
  }, []);

  const onSubmit = (data) => {
    var date = new Date(data['date-input']),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    const onlyDate = [date.getFullYear(), mnth, day].join('-');
    data['date-input'] = onlyDate;
    const bookingData = {
      ...data,
      email: user.email,
      raftingId: raftingId,
      raftingName: rafting.name,
      status: 'pending',
    };
    axios
      .post(
        'https://aktarulrahul-live-rafting.herokuapp.com/booking/',
        bookingData
      )
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          history.push('/confirm');
        }
      });
  };
  return (
    <div>
      <img src={img} alt="" className="w-screen h-96 object-cover" />
      <div className="grid md:grid-cols-2 gap-4 lr-add-form">
        {/* Booking From */}
        <div className="md:mx-10 mx-2 -mt-16 bg-blue-200 rounded shadow-lg border p-4 opacity-75 transition duration-500 ease-in-out transform hover:scale-105">
          <h1 className=" text-center text-6xl font-bold mt-4 text-blue-800">
            <i className="fas fa-ship"></i> Live Rafting
          </h1>
          <hr />
          <h2 className="text-center text-2xl text-blue-800 my-4 uppercase font-bold">
            Booking Details
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user.displayName}
              {...register('name', { required: true, maxLength: 20 })}
              placeholder="Name"
            />
            <input
              {...register('address', { required: true })}
              placeholder="Address"
            />
            <input
              {...register('phone', { required: true })}
              placeholder="Phone"
            />
            <Controller
              name="date-input"
              control={control}
              render={({ field }) => (
                <DatePicker
                  dateFormat="dd MMMM yyyy"
                  placeholderText="Select Date"
                  selected={field.value}
                  onChange={(e) => field.onChange(e)}
                />
              )}
            />

            <input
              type="submit"
              value="Confirm Booking"
              className=" my-4 bg-blue-800 text-white hover:cursor-pointer transition duration-500 ease-in-out transform hover:scale-110"
            />
          </form>
        </div>
        {/* Package Info */}
        <div className="border rounded shadow-lg px-4 py-4 my-4 mx-8 transition duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-center text-2xl text-blue-800 uppercase font-bold mb-3">
            Rafting Details
          </h2>
          <h2 className="px-2 font-medium mb-2 text-center text-xl uppercase">
            {name}
          </h2>
          <p className="text-center text-xl bg-blue-400 rounded text-white my-3">
            Description
          </p>
          <p className="mb-2">{description}</p>
          <hr className="my-3" />
          <table className="table-fixed">
            <tbody>
              <tr>
                <td className="font-bold pr-2">Length</td>
                <td>{length}</td>
              </tr>
              <tr>
                <td className="font-bold pr-2">Duration on Water</td>
                <td>{time}</td>
              </tr>
            </tbody>
          </table>
          <hr className="my-3" />

          <p className="text-blue-800 p-2 text-2xl">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
