import React, { useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';

const PackageContainer = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/rafting-packages')
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className="m-3 px-4 border rounded shadow-lg pb-8">
      <h2 className="text-center text-blue-800 font-bold mt-3 mb-8 text-4xl uppercase italic">
        Our Rafting Packages
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {packages.map((p) => (
          <PackageCard key={p._id} raftingPackage={p} />
        ))}
      </div>
    </div>
  );
};

export default PackageContainer;
