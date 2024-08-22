import React from 'react';
import Carousel from '../landing/Carousel';  // Adjust the path as needed
import Asortiment from '../landing/Asortiment';  // Adjust the path as needed
import Novinky from './Novinky';
import Slevy from './Slevy';
import Gym from './Gym';
import Partners from './Partners';

const LandingPage = () => {
  return (
    <div>
      <Carousel />
      <Asortiment />
      <Novinky />
      <Slevy />
      <Gym />
      <Partners />
    </div>
    
  );
};

export default LandingPage;
