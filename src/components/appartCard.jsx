import '../utils/appartCard.scss';
import { Link } from 'react-router-dom';

function AppartCard({ appartementTitle, imageUrl }) {
  return (
    <Link
      className="AppartCard"
      to="/appartment"
      // style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* 1 <h3>{appartementTitle}</h3> */}
      {/* 2 <img src={bannerImage} alt="location" />
      <div className="Thumbnail__layer">
        <h3 className="Thumbnail__title">{appartementTitle}</h3>
      </div> */}

      <div className="AppartCard__layer" />
      <img src={imageUrl} alt="appartment" />
      <div className="AppartCard__title">{appartementTitle}</div>
    </Link>
  );
}

export default AppartCard;
