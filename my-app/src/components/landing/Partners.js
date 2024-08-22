import React from 'react';
import './Partners.css'; // Ensure the CSS file is correctly linked
// Import images
import partner1 from '../../images/01.png';
import partner2 from '../../images/02.png';
import partner3 from '../../images/03.png';
import partner4 from '../../images/04.png';
import partner5 from '../../images/05.png';
import partner6 from '../../images/06.png';
import partner7 from '../../images/07.png';
import partner8 from '../../images/08.png';
import partner9 from '../../images/09.png';
import partner10 from '../../images/10.png';
import partner11 from '../../images/11.png';
import partner12 from '../../images/12.png';

const Partners = () => {
  const partners = [
    partner1, partner2, partner3, partner4, partner5, partner6,
    partner7, partner8, partner9, partner10, partner11, partner12,
  ];

  return (
    <div className="container-fluid p-0">
      <div className="row justify-content-center mt-5 text-center mx-0">
        <div className="text_56_cerna_mont_extra mt-5">OUR PARTNERS</div>
      </div>

      <div className="row justify-content-center mt-3 mx-0">
        <a href="https://boxfitgym.inrs.cz/rs" className="button-black my-5" target="_blank" rel="noopener noreferrer">
          VIEW PROGRAM
        </a>
      </div>

      <div className="container-fluid p-0">
        <div className="row no-gutters mt-5 mx-0">
          {partners.map((img, index) => (
            <div key={index} className="col-6 col-sm-4 col-xl-2 p-0">
              <div className="partner-box">
                <img src={img} className="partner-img" alt={`Partner ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
