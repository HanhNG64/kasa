import './logementCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LogementCard({ logementId, logementTitle, imageUrl }) {
  return (
    <Link className="LogementCard" to={`/${logementId}`}>
      <img src={imageUrl} alt={`logement ${logementTitle}`} />
      <div className="LogementCard__title">
        <h2>{logementTitle}</h2>
      </div>
    </Link>
  );
}

LogementCard.propTypes = {
  logementId: PropTypes.string,
  logementTitle: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default LogementCard;
