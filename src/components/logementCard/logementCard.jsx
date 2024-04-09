import './logementCard.scss';
import { Link } from 'react-router-dom';

function AppartCard({ appartmentId, appartmentTitle, imageUrl }) {
  const state = {
    appId: appartmentId,
  };
  // const appId = appartmentId;
  return (
    <Link className="AppartmentCard" to="appartment" state={state}>
      {/* <Link className="AppartCard" to={`appartment/${appId}`}> */}
      <div className="AppartmentCard__layer" />
      <img src={imageUrl} alt="appartment" />
      <div className="AppartmentCard__title">{appartmentTitle}</div>
    </Link>
  );
}

export default AppartCard;
