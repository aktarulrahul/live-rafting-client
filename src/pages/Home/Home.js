import React from 'react';
import Banner from '../../components/Banner/Banner';
import PackageContainer from '../../components/PackageContainer/PackageContainer';
import WhyRafting from '../../components/WhyRafting/WhyRafting';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner />
      <PackageContainer />
      <WhyRafting />
      <Testimonial />
    </div>
  );
};

export default Home;
