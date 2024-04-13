import './logementCard.scss';
import { Link } from 'react-router-dom';

function LogementCard({ logementId, logementTitle, imageUrl }) {
  // const state = {
  //   appId: logementId,
  // };

  return (
    // <Link className="LogementCard" to="logement" state={state}>
    <Link className="LogementCard" to={`/${logementId}`}>
      <img src={imageUrl} alt={`logement ${logementTitle}`} />
      <div className="LogementCard__title">
        <h2>{logementTitle}</h2>
      </div>
    </Link>
  );
}

export default LogementCard;
