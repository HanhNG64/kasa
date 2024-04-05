import '../utils/carousel.scss';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';
import { useState } from 'react';

function Carousel(props) {
  const pictures = props.pictures ? props.pictures : [];
  const numberOfIpictures = pictures.length;
  const display = numberOfIpictures > 1;

  const [currentIndex, setCurrentIndex] = useState(1);

  function buildCounterText() {
    return currentIndex >= 1 ? currentIndex + '/' + numberOfIpictures : '';
  }

  function previous() {
    const index = currentIndex > 1 ? currentIndex - 1 : numberOfIpictures;
    setCurrentIndex(index);
  }

  function next() {
    const index = currentIndex < numberOfIpictures ? currentIndex + 1 : 1;
    setCurrentIndex(index);
  }

  return (
    <div className="Carousel">
      <div className="btn">Vois comme je grandis !</div>
      <img
        className="Carousel__logement"
        src={pictures[currentIndex - 1]}
        alt="logment"
      ></img>
      {display && (
        <img
          className="Carousel__previous"
          src={arrowLeft}
          alt="arrow previous"
          onClick={previous}
        />
      )}
      {display && (
        <img
          className="Carousel__next"
          src={arrowRight}
          alt="arrow next"
          onClick={next}
        />
      )}
      {display && <p className="Carousel__counter">{buildCounterText()}</p>}
    </div>
  );
}

export default Carousel;
// navigate("/404", { state: { message: "Can't get data" } }); //renvoi vers la page 404 en cas d'URL de logement invalide
