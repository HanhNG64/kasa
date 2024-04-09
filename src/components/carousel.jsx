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
    const widthSlider =
      document.querySelector('.Carousel__logement').offsetWidth * (index - 1);

    document.querySelector('.Carousel__logement').scrollLeft = widthSlider;
  }

  function next() {
    const index = currentIndex < numberOfIpictures ? currentIndex + 1 : 1;

    setCurrentIndex(index);

    const widthSlider =
      document.querySelector('.Carousel__logement').offsetWidth * (index - 1);
    document.querySelector('.Carousel__logement').scrollLeft = widthSlider;
  }

  return (
    <div className="Carousel">
      <div className="Carousel__logement">
        {pictures.map((imageUrl, index) => (
          <div key={imageUrl + index} className="Carousel__logement__item">
            <img key={imageUrl} src={imageUrl} alt={`apprtment ${index + 1}`} />
          </div>
        ))}
      </div>

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
