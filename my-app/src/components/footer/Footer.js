import React from 'react';
import './Footer.css';
// Import images
import logoFooter from '../../images/logo_footer.svg';
import mobileIcon from '../../images/mobil.svg';
import emailIcon from '../../images/email.svg';

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid">
        {/* Footer Links */}
        <div className="row justify-content-center text-center bg-black">
          <div className="col-12 col-xl-8">
            <div className="logo_footer">
              <img src={logoFooter} alt="Logo Footer" />
            </div>

            <div className="row my-5"></div>

            <div className="row my-5">
              <div className="col-lg-3 text-left">
                {/* Contact Section */}
                <div className="text_20_bila_mont_semi mt-5">KONTAKT</div>

                <div className="bg-seda_footer mt-3">
                  <div className="row justify-content-between align-items-center">
                    <div className="text_18_bila_mont">+420 735 927 023</div>
                    <div className="bg-cervena_footer footer_kontaky d-flex justify-content-center">
                      <img src={mobileIcon} className="footer_center" alt="Mobile Icon" />
                    </div>
                  </div>
                </div>

                <div className="bg-seda_footer mt-3">
                  <div className="row justify-content-between align-items-center">
                    <div className="text_18_bila_mont">info@boxfit.cz</div>
                    <div className="bg-cervena_footer footer_kontaky d-flex justify-content-center">
                      <img src={emailIcon} className="footer_center" alt="Email Icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 text-left">
                {/* Categories Section */}
                <div className="text_20_bila_mont_semi mt-5">KATEGORIE</div>

                <ul className="list-unstyled mt-3">
                  <li>
                    <a href="doplnky-stravy" className="text_16_bila_mont_semi_link">Doplňky stravy</a>
                  </li>
                  <li className="mt-2">
                    <a href="bojove-sporty" className="text_16_bila_mont_semi_link">Bojové sporty</a>
                  </li>
                  <li className="mt-2">
                    <a href="fitness-vybaveni" className="text_16_bila_mont_semi_link">Fitness vybavení</a>
                  </li>
                  <li className="mt-2">
                    <a href="obleceni-doplnky" className="text_16_bila_mont_semi_link">Oblečení a doplňky</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 text-left">
                {/* Address Section */}
                <div className="text_20_bila_mont_semi mt-5">ADRESA</div>

                <ul className="list-unstyled mt-3">
                  <li>
                    <div className="text_16_bila_mont_semi">Box-Fit Gym v.o.s.</div>
                  </li>
                  <li>
                    <div className="text_16_bila_mont_semi">Svazarmovská 2638/3</div>
                  </li>
                  <li>
                    <div className="text_16_bila_mont_semi">756 61 Rožnov pod Radhoštěm</div>
                  </li>
                  <li className="mt-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.124585791037!2d18.127599215577984!3d49.463260579351385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47138ef07a0b4887%3A0x191b49dce3b3563!2sBox%20Fit%20Gym%20v.%20o.%20s.!5e0!3m2!1scs!2scz!4v1639502602269!5m2!1scs!2scz"
                      width="200"
                      height="150"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Google Map"
                    ></iframe>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 text-left">
                {/* Gym Operating Hours Section */}
                <div className="text_20_bila_mont_semi mt-5">PROVOZNÍ DOBA GYM</div>

                <ul className="list-unstyled mt-3">
                  <li>
                    <div className="text_16_bila_mont_semi">Po - Pá:&nbsp;&nbsp;&nbsp;&nbsp; 07:00 - 12:00</div>
                  </li>
                  <li>
                    <div className="text_16_bila_mont_semi">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  14:00 - 20:00</div>
                  </li>
                  <li>
                    <div className="text_16_bila_mont_semi">So - Ne:&nbsp;&nbsp;&nbsp;&nbsp; 09:00 - 12:00</div>
                  </li>
                  <li className="mt-3">
                    <a href="https://boxfitgym.inrs.cz/" target="_blank" className="tlacitko_16_cervene">REZERVACE</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
