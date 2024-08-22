import React from 'react';
import sliderImage from '../../images/slidernew.jpg';
import hero01Image from '../../images/hero_01.jpg';
import hero02Image from '../../images/hero_02.jpg';
import './Carousel.css'; // Ensure the CSS file is correctly linked

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="main_pozadi">
            <img src={sliderImage} className="d-block w-100" alt="Slider" />
            <div className="main_pozadi_absolute">
              <a href="boxfit" className="tlacitko_16_cervene">ZJISTIT VÍCE</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="main_pozadi">
            <img src={hero01Image} className="d-block w-100" alt="Hero 01" />
            <div className="main_pozadi_absolute">
              <a href="boxfit" className="tlacitko_16_cervene">ZJISTIT VÍCE</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="main_pozadi">
            <img src={hero02Image} className="d-block w-100" alt="Hero 02" />
            <div className="main_pozadi_absolute">
              <a href="doplnky-stravy" className="tlacitko_16_cervene">ZJISTIT VÍCE</a>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
