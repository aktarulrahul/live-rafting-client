import React, { useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';
import Fade from 'react-reveal/Fade';

const PackageContainer = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://aktarulrahul-live-rafting.herokuapp.com/rafting-packages')
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="m-3 px-4 border rounded shadow-lg pb-8">
      <h2 className="text-center text-blue-800 font-bold mt-3 mb-8 text-4xl uppercase italic">
        Our Rafting Packages
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        <Fade left>
          {packages.map((p) => (
            <PackageCard key={p._id} raftingPackage={p} />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default PackageContainer;
