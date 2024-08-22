import React from 'react';

const Gym = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-5 text-center">
          <div className="text_56_cerna_mont_extra mt-5">GYM</div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center mt-3">
          <div className="text_16_seda_mont col-12 col-md-4 text-center">
            Víceúčelový gym s osobním přístupem. Najdeš nás v Rožnově pod Radhoštěm na adrese Svazarmovská 2638.
          </div>
        </div>
      </div>

      <div className="container-fluid no-gutters">
        <div className="row mt-5">
          <div className="col-12 col-sm-6 col-xl-3 order-1 order-sm-1 order-xl-1">
            <div className="info-box">
              <div
                className="info-box-bg info-box-col-one"
                style={{ backgroundImage: 'url(/images/sortiment1.jpg)' }}
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

          <div className="col-12 col-sm-6 col-xl-3 order-2 order-sm-2 order-xl-2">
            <div className="info-box">
              <div
                className="info-box-bg info-box-col-one"
                style={{ backgroundImage: 'url(/images/kruhace.jpg)' }}
              ></div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 order-3 order-sm-4 order-xl-3">
            <div className="info-box">
              <div
                className="info-box-bg info-box-col-one"
                style={{ backgroundImage: 'url(/images/red_bg.jpg)' }}
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

          <div className="col-12 col-sm-6 col-xl-3 order-4 order-sm-3 order-xl-4">
            <div className="info-box">
              <div
                className="info-box-bg info-box-col-one"
                style={{ backgroundImage: 'url(/images/box.jpg)' }}
              ></div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 order-6 order-sm-6 order-xl-5">
            <div className="info-box">
              <div
                className="info-box-bg info-box-col-one"
                style={{ backgroundImage: 'url(/images/cross.jpg)' }}
              ></div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 order-5 order-sm-5 order-xl-6">
            <div className="info-box">
              <div
                className="info-box-bg info-box-col-one"
                style={{ backgroundImage: 'url(/images/red_bg.jpg)' }}
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

          <div className="col-12 col-sm-6 col-xl-3 order-8 order-sm-7 order-xl-7">
            <div className="info-box">
              <div
                className="info-box-bg info-box-col-one"
                style={{ backgroundImage: 'url(/images/individual.jpg)' }}
              ></div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 order-7 order-sm-8 order-xl-8">
            <div className="info-box">
              <div
                className="info-box-bg info-box-col-one"
                style={{ backgroundImage: 'url(/images/sortiment1.jpg)' }}
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
