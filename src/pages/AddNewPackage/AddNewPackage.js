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
    console.log(data);
    axios.post('http://localhost:5000/rafting-packages/', data).then((res) => {
      if (res.data.insertedId) {
        alert('Service added successfully');
        reset();
      }
    });
  };
  return (
    <div className="mx-auto md:w-1/2 my-3 border border-blue-100 shadow-lg p-3 text-center rounded lr-add-form">
      <h2 className="my-3 text-3xl font-bold uppercase tracking-wide text-blue-800 ">
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
