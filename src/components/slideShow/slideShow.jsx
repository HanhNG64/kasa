import './slideShow.scss';
import { useState } from 'react';
import arrowLeft from '../../assets/arrow-slideShow.svg';
import PropTypes from 'prop-types';

/**
 * The component contains a set of images, that are displayed using a carousel representation.
 * @param {*} pictures Array of pictures
 * @returns The html block representing the component
 */
function SlideShow({ pictures }) {
  const numberOfIpictures = pictures.length;
  const display = numberOfIpictures > 1;

  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Build the display text that indicates the position of the current picture
   * @returns The text. It is empty if there is only one picture.
   */
  function buildCounterText() {
    return numberOfIpictures >= 2
      ? currentIndex + 1 + '/' + numberOfIpictures
      : '';
  }

  /**
   * Display the previous picture
   */
  function previous() {
    const index = currentIndex >= 1 ? currentIndex - 1 : numberOfIpictures - 1;
    setCurrentIndex(index);
  }

  /**
   * Display the next picture
   */
  function next() {
    const index = currentIndex < numberOfIpictures - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  }

  /**
   * The annimation to change the current picture
   */
  const styleCurrentImage = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <section className="SlideShow">
      <article className="SlideShow__logement" style={styleCurrentImage}>
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

SlideShow.propTypes = {
  pictures: PropTypes.array,
};

export default SlideShow;
