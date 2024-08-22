import React from 'react';
import './Gym.css'; // Ensure the CSS file is correctly linked
// Import images
import sortiment1 from '../../images/sortiment1.jpg';
import kruhace from '../../images/kruhace.jpg';
import red_bg from '../../images/red_bg.jpg';
import box from '../../images/box.jpg';
import cross from '../../images/cross.jpg';
import individual from '../../images/individual.jpg';

const Gym = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row justify-content-center mt-5 text-center mx-0">
          <div className="text_56_cerna_mont_extra mt-5">GYM</div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row justify-content-center mt-3 mx-0">
          <div className="text_16_seda_mont col-12 col-md-4 text-center">
            Víceúčelový gym s osobním přístupem. Najdeš nás v Rožnově pod Radhoštěm na adrese Svazarmovská 2638.
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row no-gutters mt-5 mx-0">
          <div className="col-12 col-sm-6 col-xl-3 p-0">
            <div className="info-box">
              <div
                className="info-box-bg"
                style={{ backgroundImage: `url(${sortiment1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
              ></div>
              <div className="info-box-inner">
                <div className="info-box-front d-flex justify-content-center align-items-center flex-wrap flex-column">
                  <div className="text_28_bila_mont_extra text-center">
                    FUNKČNÍ / KRUHOVÉ TRÉNINKY
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 p-0">
            <div className="info-box">
              <div
                className="info-box-bg"
                style={{ backgroundImage: `url(${kruhace})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
              ></div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 p-0">
            <div className="info-box">
              <div
                className="info-box-bg"
                style={{ backgroundImage: `url(${red_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
              ></div>
              <div className="info-box-inner">
                <div className="info-box-front d-flex justify-content-center align-items-center flex-wrap flex-column">
                  <div className="text_28_bila_mont_extra text-center">
                    KONDIČNÍ BOX / KICK BOX
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 p-0">
            <div className="info-box">
              <div
                className="info-box-bg"
                style={{ backgroundImage: `url(${box})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
              ></div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 p-0">
            <div className="info-box">
              <div
                className="info-box-bg"
                style={{ backgroundImage: `url(${cross})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
              ></div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 p-0">
            <div className="info-box">
              <div
                className="info-box-bg"
                style={{ backgroundImage: `url(${red_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
              ></div>
              <div className="info-box-inner">
                <div className="info-box-front d-flex justify-content-center align-items-center flex-wrap flex-column">
                  <div className="text_28_bila_mont_extra text-center">
                    CROSS, CROSS ZAČÁTEČNÍCI
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 p-0">
            <div className="info-box">
              <div
                className="info-box-bg"
                style={{ backgroundImage: `url(${individual})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
              ></div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 p-0">
            <div className="info-box">
              <div
                className="info-box-bg"
                style={{ backgroundImage: `url(${sortiment1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
              ></div>
              <div className="info-box-inner">
                <div className="info-box-front d-flex justify-content-center align-items-center flex-wrap flex-column">
                  <div className="text_28_bila_mont_extra text-center">
                    HIIT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gym;
