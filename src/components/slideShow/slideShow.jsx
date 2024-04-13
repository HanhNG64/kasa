import './slideShow.scss';
import { useState } from 'react';
import arrowLeft from '../../assets/arrow-slideShow.svg';

function SlideShow(props) {
  const pictures = props.pictures ? props.pictures : [];
  const numberOfIpictures = pictures.length;
  const display = numberOfIpictures > 1;

  const [currentIndex, setCurrentIndex] = useState(0);

  function buildCounterText() {
    return numberOfIpictures >= 2
      ? currentIndex + 1 + '/' + numberOfIpictures
      : '';
  }

  function previous() {
    const index = currentIndex >= 1 ? currentIndex - 1 : numberOfIpictures - 1;
    setCurrentIndex(index);
  }

  function next() {
    const index = currentIndex < numberOfIpictures - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  }

  const currentImage = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <section className="SlideShow">
      <article className="SlideShow__logement" style={currentImage}>
        {pictures.map((imageUrl, index) => (
          <div key={imageUrl + index} className="SlideShow__logement__item">
            <img key={imageUrl} src={imageUrl} alt={`logement ${index + 1}`} />
          </div>
        ))}
      </article>

      {display && (
        <img
          className="SlideShow__previous"
          src={arrowLeft}
          alt="arrow previous"
          onClick={previous}
        />
      )}
      {display && (
        <img
          className="SlideShow__next"
          src={arrowLeft}
          alt="arrow next"
          onClick={next}
        />
      )}
      {display && <p className="SlideShow__counter">{buildCounterText()}</p>}
    </section>
  );
}

export default SlideShow;
