import React from 'react';
import './Asortiment.css'; // Import your CSS file

// Import images
import uvod_protein from '../../images/uvod_protein.png';
import uvod_holene from '../../images/uvod_holene.png';
import uvod_rukavice from '../../images/uvod_rukavice.png';
import uvod_ron from '../../images/uvod_ron.png';
import red_bg from '../../images/red_bg.jpg';
import sortiment1 from '../../images/sortiment1.jpg';

const items = [
  {
    title: 'DOPLŇKY STRAVY',
    image: sortiment1,
    link: 'doplnky-stravy',
    buttonText: 'ZJISTIT VÍCE',
    buttonColor: 'red',
  },
  {
    image: uvod_protein,
    alt: 'Protein',
  },
  {
    title: 'BOJOVÉ SPORTY',
    image: red_bg,
    link: 'bojove-sporty',
    buttonText: 'ZJISTIT VÍCE',
    buttonColor: 'black',
  },
  {
    image: uvod_holene,
    alt: 'Holene',
  },
  {
    image: uvod_rukavice,
    alt: 'Rukavice',
  },
  {
    title: 'FITNESS VYBAVENÍ',
    image: red_bg,
    link: 'fitness-vybaveni',
    buttonText: 'ZJISTIT VÍCE',
    buttonColor: 'black',
  },
  {
    image: uvod_ron,
    alt: 'Ron',
  },
  {
    title: 'OBLEČENÍ A DOPLŇKY',
    image: sortiment1,
    link: 'obleceni-doplnky',
    buttonText: 'ZJISTIT VÍCE',
    buttonColor: 'red',
  },
];

const Asortiment = () => {
  return (
    <div className='container-fluid no-gutters'>
      <div className='row justify-content-center mt-5'>
        <h1 className='header-title'>NÁŠ SORTIMENT</h1>
      </div>
      <div className='row no-gutters'>
        {items.map((item, index) => (
          <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3 info-box-container'>
            <div className='info-box'>
              <div
                className='info-box-bg'
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className='info-box-inner'>
                {item.title && (
                  <>
                    <div className='box-title text_28_bila_mont_extra'>{item.title}</div>
                    {item.link && (
                      <a href={item.link} className={`button ${item.buttonColor} mt-4`}>
                        {item.buttonText}
                      </a>
                    )}
                  </>
                )}
                {!item.title && <img src={item.image} alt={item.alt} className='box-image' />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asortiment;
