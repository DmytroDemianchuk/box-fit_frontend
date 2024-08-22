import React from 'react';
import './Novinky.css'; // Import your CSS file

const Novinky = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3 justify-content-center mt-5">
        <div className="col-12 col-xl-8 text-center">
          <div className="d-flex justify-content-center justify-content-md-between align-items-center mt-5">
            <div className="text_36_cerna_mont_extra">NOVINKY</div>
            <div>
              <a href="bojove-sporty" className="tlacitko_16_cerne d-none d-md-block">
                ZOBRAZIT PRODUKTY
              </a>
            </div>
          </div>

          <div id="ContentPlaceHolder1_panel_novinky" className="mt-4 pb-5 text-center">
            <div className="flex-row row">
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => (window.location.href = 'mikina-bojovnik-damska-bila-S')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position skladem">SKLADEM</div>
                      <div className="sleva_top_position_top40 top">TOP</div>
                      <img
                        src="https://boxfit.cz/Fotky/smallbojovnik-mikina-damska-bila.png"
                        className="img-fluid p-2"
                        alt="Dámská mikina Bojovník Organic Bílá"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Dámská mikina Bojovník Organic Bílá
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_20_cervena_mont_bold">1 050 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => (window.location.href = 'tricko-bojovnik-damske-organic-bile-s')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position skladem">SKLADEM</div>
                      <div className="sleva_top_position_top40 top">TOP</div>
                      <img
                        src="https://boxfit.cz/Fotky/smalldamske_tricko_bojovnik_bile.png"
                        className="img-fluid p-2"
                        alt="Tričko Bojovník Dámské Bílé Organic"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Tričko Bojovník Dámské Bílé Organic
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_20_cervena_mont_bold">450 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => (window.location.href = 'Pure-DIGES-TEA-čaj-pro-dobré-trávení-50-g')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position skladem">SKLADEM</div>
                      <img
                        src="https://boxfit.cz/Fotky/small48077_digestea.png"
                        className="img-fluid p-2"
                        alt="Pure DIGES-TEA, čaj pro dobré trávení, 50 g"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Pure DIGES-TEA, čaj pro dobré trávení, 50 g
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_20_cervena_mont_bold">99 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => (window.location.href = 'Pure-Skin-Beauty-Tea-čaj-pro-hezkou-pleť-50-g')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position skladem">SKLADEM</div>
                      <img
                        src="https://boxfit.cz/Fotky/small47652_skin-beauty-tea.png"
                        className="img-fluid p-2"
                        alt="Pure Skin Beauty Tea, čaj pro hezkou pleť, 50 g"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Pure Skin Beauty Tea, čaj pro hezkou pleť, 50 g
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_20_cervena_mont_bold">99 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => (window.location.href = 'Sleep-Magnesium-320-mg-100-kapslí')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position noskladem">Na dotaz</div>
                      <img
                        src="https://boxfit.cz/Fotky/small15620_sleep-mg.png"
                        className="img-fluid p-2"
                        alt="Sleep Magnesium, 320 mg, 100 kapslí"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Sleep Magnesium, 320 mg, 100 kapslí
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_20_cervena_mont_bold">699 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => (window.location.href = 'Boxerske-rukavice-Fighter-SIAM-modra-16-OZ')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position noskladem">Na dotaz</div>
                      <img
                        src="https://boxfit.cz/Fotky/smallSIAMmodracerna.png"
                        className="img-fluid p-2"
                        alt="Boxerské rukavice Fighter SIAM - modrá 16 OZ"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Boxerské rukavice Fighter SIAM - modrá 16 OZ
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_20_cervena_mont_bold">1 880 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 pb-5">
                <div className="thumbnail">
                  <div
                    onClick={() => (window.location.href = 'Chranice-holeni-Fighter-Thai-Classic-khaki-cerna-XL')}
                    className="caption koupit_show"
                  >
                    <div className="pozadi_produkt d-flex flex-column justify-content-center">
                      <div className="sleva_top_position skladem">SKLADEM</div>
                      <img
                        src="https://boxfit.cz/Fotky/small_thai_classic_khaki.png"
                        className="img-fluid p-2"
                        alt="Chrániče holení Fighter Thai Classic - khaki/černá XL"
                      />
                    </div>
                    <p className="flex-text text_16_cerna_mont_semi mt-3">
                      Chrániče holení Fighter Thai Classic - khaki/černá XL
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="text_20_cervena_mont_bold">1 230 Kč</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <a href="bojove-sporty" className="tlacitko_16_cerne d-md-none">
                ZOBRAZIT PRODUKTY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novinky;
