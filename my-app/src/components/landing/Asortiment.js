import React from 'react';
import './Asortiment.css'; // Import your CSS file

// Import images
import uvod_protein from '../../images/uvod_protein.png';
import uvod_holene from '../../images/uvod_holene.png';
import uvod_rukavice from '../../images/uvod_rukavice.png';
import uvod_ron from '../../images/uvod_ron.png';
import red_bg from '../../images/red_bg.jpg';
import sortiment1 from '../../images/sortiment1.jpg';

const Asortiment = () => {
  return (
    <div className='container-fluid no-gutters'>
      <div className='row justify-content-center mt-5'>
        <h1 className='header-title'>NÁŠ SORTIMENT</h1>
      </div>

      <div className='row no-gutters'>
        
        {/* Box 1 */}
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 info-box-container'>
          <div className='info-box'>
            <div
              className='info-box-bg'
              style={{ backgroundImage: `url(${sortiment1})` }}
            ></div>
            <div className='info-box-inner'>
              <div className='box-title text_28_bila_mont_extra'>DOPLŇKY STRAVY</div>
              <a href="doplnky-stravy" className='button red mt-4'>ZJISTIT VÍCE</a>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 info-box-container'>
          <div className='info-box'>
            <div className='info-box-bg bg-gray'></div>
            <div className='info-box-inner'>
              <img src={uvod_protein} className='box-image' alt="Protein" />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 info-box-container'>
          <div className='info-box'>
            <div
              className='info-box-bg'
              style={{ backgroundImage: `url(${red_bg})` }}
            ></div>
            <div className='info-box-inner'>
              <div className='box-title text_28_bila_mont_extra'>BOJOVÉ SPORTY</div>
              <a href="bojove-sporty" className='button black mt-4'>ZJISTIT VÍCE</a>
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 info-box-container'>
          <div className='info-box'>
            <div className='info-box-bg bg-gray'></div>
            <div className='info-box-inner'>
              <img src={uvod_holene} className='box-image' alt="Holene" />
            </div>
          </div>
        </div>

        {/* Box 5 */}
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 info-box-container'>
          <div className='info-box'>
            <div className='info-box-bg bg-gray'></div>
            <div className='info-box-inner'>
              <img src={uvod_rukavice} className='box-image' alt="Rukavice" />
            </div>
          </div>
        </div>

        {/* Box 6 */}
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 info-box-container'>
          <div className='info-box'>
            <div
              className='info-box-bg'
              style={{ backgroundImage: `url(${red_bg})` }}
            ></div>
            <div className='info-box-inner'>
              <div className='box-title text_28_bila_mont_extra'>FITNESS VYBAVENÍ</div>
              <a href="fitness-vybaveni" className='button black mt-4'>ZJISTIT VÍCE</a>
            </div>
          </div>
        </div>

        {/* Box 7 */}
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 info-box-container'>
          <div className='info-box'>
            <div className='info-box-bg bg-gray'></div>
            <div className='info-box-inner'>
              <img src={uvod_ron} className='box-image' alt="Ron" />
            </div>
          </div>
        </div>

        {/* Box 8 */}
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 info-box-container'>
          <div className='info-box'>
            <div
              className='info-box-bg'
              style={{ backgroundImage: `url(${sortiment1})` }}
            ></div>
            <div className='info-box-inner'>
              <div className='box-title text_28_bila_mont_extra'>OBLEČENÍ A DOPLŇKY</div>
              <a href="obleceni-doplnky" className='button red mt-4'>ZJISTIT VÍCE</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Asortiment;
