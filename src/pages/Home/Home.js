import React from 'react';
import Banner from '../../components/Banner/Banner';
import PackageContainer from '../../components/PackageContainer/PackageContainer';
import WhyRafting from '../../components/WhyRafting/WhyRafting';
import Testimonial from '../../components/Testimonial/Testimonial';
import v from '../../images/rafting-vedio.mp4';

const Home = () => {
  return (
    <div>
      <Banner />
      <PackageContainer />
      <WhyRafting />
      <video className="videoTag" autoPlay loop muted>
        <source src={v} type="video/mp4" />
      </video>
      <Testimonial />
    </div>
  );
};

export default Home;
