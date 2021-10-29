import React from 'react';
import './WhyRafting.css';
import Fade from 'react-reveal/Fade';

const WhyRafting = () => {
  return (
    <div className="mt-16">
      <Fade left>
        <div className="text-center lg:w-1/2 mx-auto ">
          <h1 className="text-4xl text-blue-800 uppercase font-mono my-4">
            WHY ADVENTURE RAFTING
          </h1>
          <p>
            Come and join the thrill and excitement of white water rafting with
            the adventure rafting team! We explore the best the Chilko River has
            to offer with thrilling rapids, overnight adventures and sightseeing
            that you will only see here. Book your tickets today!
          </p>
        </div>
      </Fade>
      <div className="grid md:grid-cols-2 mt-4 mt-16">
        <div className="p-8 bg-blue-800 text-white">
          <h1 className="text-2xl uppercase font-mono my-4">
            <i className="fas fa-mountain text-4xl"></i> You get an amazing view
          </h1>
          <p>
            Rafting makes sure you get a picturesque view of the water,
            greenery, and the mountains. The river usually lies between two
            mountains and takes care of giving you a splendid view of the nature
            around. You surely don't need a DSLR to capture the view, your eyes
            are enough!
          </p>
        </div>
        <div className="lr-why lr-why-bg-1 md:h-96 h-48"></div>
        <div className="lr-why lr-why-bg-2 md:h-96 h-48"></div>
        <div className="p-8  text-blue-800">
          <h1 className="text-2xl uppercase font-mono my-4">
            <i className="fas fa-water text-4xl"></i> Why is whitewater rafting
            fun?
          </h1>
          <p>
            It's a Learning Experience. No matter what part of the adventure
            you're on, there is always something you can learn from it. The
            people, the animals, the plants, the scenery and even the river
            itself. There are even legends, tales and the famed “ghost stories”
            to learn as well.
          </p>
        </div>
        <div className="p-8 bg-blue-800 text-white">
          <h1 className="text-2xl uppercase font-mono my-4">
            <i className="fas fa-route text-4xl"></i> Is rafting adventurous?
          </h1>
          <p>
            Rafting involves riding down the waves of a river in an inflatable
            raft, with a few rapids along the way that you encounter. It is a
            wet and wild adventure full of thrills, fun as well as disciplined
            manoeuvring. Trained rafting instructors accompany you on every trip
            to ensure your safety on the river.
          </p>
        </div>
        <div className="lr-why lr-why-bg-3 md:h-96 h-48"></div>
      </div>
    </div>
  );
};

export default WhyRafting;
