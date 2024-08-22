import React from 'react';

const Slevy = () => {
  // Define click handlers
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-8 text-center">
          <div className="d-flex justify-content-center justify-content-md-between align-items-center mt-3">
            <div className="text_36_cerna_mont_extra">SLEVY</div>
          </div>

          <div id="ContentPlaceHolder1_panel_slevy" className="mt-4 pb-5 text-center">
            <div className="flex-row row">
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => handleRedirect('boxerske-rukavice-box-fit-10-oz')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position noskladem">Na dotaz</div>
                      <div className="sleva_top_position_top40 sleva">SLEVA</div>
                      <img
                        src="https://boxfit.cz/Fotky/smallrukaviceboxfit1.png"
                        className="img-fluid p-2"
                        alt="Boxerské rukavice Box-Fit 10OZ"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Boxerské rukavice Box-Fit 10OZ
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_16_seda2_mont pr-2">890 Kč</div>
                      <div className="text_20_cervena_mont_bold">837 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => handleRedirect('bcaa-mandarinka-greenfood')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position skladem">SKLADEM</div>
                      <div className="sleva_top_position_top40 sleva">SLEVA</div>
                      <div className="sleva_top_position_top60 top">TOP</div>
                      <img
                        src="https://boxfit.cz/Fotky/smallBCAA_mandarinka_greenfood.png"
                        className="img-fluid p-2"
                        alt="BCAA 2:1:1 420g GreenFood"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      BCAA 2:1:1 420g GreenFood
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_16_seda2_mont pr-2">578 Kč</div>
                      <div className="text_20_cervena_mont_bold">549 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => handleRedirect('lapy-dlanove-box-fit')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position noskladem">Na dotaz</div>
                      <div className="sleva_top_position_top40 sleva">SLEVA</div>
                      <img
                        src="https://boxfit.cz/Fotky/smalla06.png"
                        className="img-fluid p-2"
                        alt="Lapy dlaňové BOX-FIT"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Lapy dlaňové BOX-FIT
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_16_seda2_mont pr-2">490 Kč</div>
                      <div className="text_20_cervena_mont_bold">456 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => handleRedirect('chranice-holeni-box-fit-m')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position skladem">SKLADEM</div>
                      <div className="sleva_top_position_top40 sleva">SLEVA</div>
                      <img
                        src="https://boxfit.cz/Fotky/smallholene-boxfit.png"
                        className="img-fluid p-2"
                        alt="Chrániče holení Box-Fit"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Chrániče holení Box-Fit
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_16_seda2_mont pr-2">890 Kč</div>
                      <div className="text_20_cervena_mont_bold">837 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => handleRedirect('bcaa_amix_black_cherry')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position skladem">SKLADEM</div>
                      <div className="sleva_top_position_top40 sleva">SLEVA</div>
                      <div className="sleva_top_position_top60 top">TOP</div>
                      <img
                        src="https://boxfit.cz/Fotky/smallbcaa_amix_black_cherry.png"
                        className="img-fluid p-2"
                        alt="BCAA Micro Instant Juice Fresh Black Cherry Amix 300g"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      BCAA Micro Instant Juice Fresh Black Cherry Amix 300g
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_16_seda2_mont pr-2">459 Kč</div>
                      <div className="text_20_cervena_mont_bold">436 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slevy;
