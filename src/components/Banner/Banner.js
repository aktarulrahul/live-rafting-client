import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import TextLoop from 'react-text-loop';
const Banner = () => {
  return (
    <div className="m-4 lr-banner-bg rounded-lg px-6 flex flex-col justify-center items-center">
      <div className="bg-white my-3 mx-2 p-8 rounded-lg shadow-lg opacity-75 text-center font-mono text-blue-600 border md:w-2/3">
        <h1 className="text-5xl mb-3 font-extrabold">
          Rafting{' '}
          <TextLoop className="text-red-600">
            <Typist>for pleasure</Typist>
            <Typist>for passion</Typist>
            <Typist>for life</Typist>
          </TextLoop>
        </h1>

        <Typist className=" text-3xl mb-5 uppercase">
          Get the joy of river rafting
        </Typist>
      </div>
      <Link to="/all-packages">
        <button className="bg-blue-600 shadow-lg border border-blue-600 text-white text-2xl rounded-full py-3 px-6 transition duration-500 ease-in-out transform hover:scale-110 mb-4">
          See All Packages
        </button>
      </Link>
    </div>
  );
};

export default Banner;
