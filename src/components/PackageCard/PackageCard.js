import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const PackageCard = ({ raftingPackage }) => {
  const { _id, name, img, price, length, time, description } = raftingPackage;
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <div className="px-2 py-4 border rounded shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
        <img src={img} alt="" className=" mb-2 rounded shadow-lg" />
        <div className="shadow-inner p-2">
          <h2 className="px-2 font-medium mb-2 text-center text-xl uppercase">
            {name}
          </h2>
          <p className="text-center text-xl bg-blue-400 rounded text-white my-3">
            Rafting Description
          </p>
          <p className="mb-2">{description}</p>
          <hr className="my-3" />
          <table class="table-fixed">
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
          <div className="lg:flex justify-between px-4">
            <p className="text-blue-800 p-2 text-2xl">${price}</p>
            <Link to={`/booking/${_id}`}>
              <button className="p-2 bg-blue-800 text-white rounded mr-2 transition duration-500 ease-in-out transform hover:scale-105">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default PackageCard;
