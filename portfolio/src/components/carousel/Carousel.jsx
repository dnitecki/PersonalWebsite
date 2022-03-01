import "./Carousel.scss";
import React from "react";
import Slider from "react-slick";
const ibmSpecialization = "./assets/IBM_specialization.png";
const ibmPython = "./assets/IBM_python.png";
const tensorflowCert = "./assets/Tensorflow_cert.png";
const ArrowRight = "./assets/interface-arrow-button-right.svg";
const images = [ibmSpecialization, ibmPython, tensorflowCert];

export default function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow_next" onClick={onClick}>
        <ArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow_prev" onClick={onClick}>
        <ArrowRight />
      </div>
    );
  };
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slideToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <Slider>
        {images.map((image, index) => (
          <div className="slider">
            <img src={image} alt={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
