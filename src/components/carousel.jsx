import '../utils/carousel.scss';

function Courressel({ imageUrl }) {
  return (
    <div
      className="Carousel"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
}

export default Courressel;
