import React from 'react';
import Carousel from '../landing/Carousel';  // Adjust the path as needed
import Asortiment from '../landing/Asortiment';  // Adjust the path as needed
import Novinky from './Novinky';
import Slevy from './Slevy';
import Gym from './Gym';

const LandingPage = () => {
  return (
    <div>
      <Carousel />
      {/* Add more content here if needed */}

      <Asortiment />
      <Novinky />
      <Slevy />
      <Gym />
    </div>
    
  );
};

export default LandingPage;
