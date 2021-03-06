import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddNewPackage.css';

const AddNewPackage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        'https://aktarulrahul-live-rafting.herokuapp.com/rafting-packages/',
        data
      )
      .then((res) => {
        if (res.data.insertedId) {
          alert('New Rafting Package added successfully');
          reset();
        }
      });
  };
  return (
    <div className="mx-auto md:w-1/2 my-3 border border-blue-100 shadow-lg p-3 text-center overflow-hidden rounded lr-add-form">
      <img
        src="https://i.ibb.co/h22s2QY/rafting-421132-1920.jpg"
        alt=""
        className="rounded shadow-lg mb-4  transition duration-500 ease-in-out transform hover:scale-105"
      />
      <h2 className="my-4 text-3xl font-bold uppercase tracking-wide text-blue-800 ">
        Add Single Rafting Package
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', {
            required: true,
          })}
          placeholder="Name"
        />
        {errors.name && (
          <span className="text-red-500">
            Please enter a valid package name
          </span>
        )}
        <input
          {...register('length', { required: true })}
          placeholder="Length"
        />
        {errors.length && (
          <span className="text-red-500">Please enter a valid Length</span>
        )}
        <input
          {...register('time', { required: true })}
          placeholder="Time on water"
        />
        {errors.time && (
          <span className="text-red-500">
            Please enter a valid Rafting Duration
          </span>
        )}
        <input
          {...register('img', { required: true })}
          placeholder="Image url"
        />
        {errors.img && (
          <span className="text-red-500">Please enter a valid Image Url</span>
        )}
        <input
          type="number"
          {...register('price', { required: true })}
          placeholder="Price"
        />
        {errors.price && (
          <span className="text-red-500">Please enter a valid Price</span>
        )}
        <textarea
          {...register('description', { required: true })}
          placeholder="Description"
        />
        <input
          type="submit"
          value="Add Package"
          className="bg-blue-800 text-white hover:cursor-pointer transition duration-500 ease-in-out transform hover:scale-110"
        />
      </form>
    </div>
  );
};

export default AddNewPackage;
