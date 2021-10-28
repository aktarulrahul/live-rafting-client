import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddNewPackage = () => {
  const { register, handleSubmit, reset } = useForm();
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
    <div className="">
      <h2>Add Single Rafting Package</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Name"
        />
        <input
          {...register('description', { required: true })}
          placeholder="Description"
        />
        <input
          type="number"
          {...register('price', { required: true })}
          placeholder="Price"
        />
        <input
          {...register('img', { required: true })}
          placeholder="Image url"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewPackage;
