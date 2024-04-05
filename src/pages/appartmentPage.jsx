import Carousel from '../components/carousel';
import '../utils/appartment.scss';
import Information from '../components/information';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchAppartment } from '../data/data';

function Appartment() {
  const location = useLocation();
  const appId = location.state.appId;
  // const { id } = useParams();
  const { appartment } = useFetchAppartment('logements.json', appId);

  if (appartment == null) {
    return <div className="Appartment">...</div>;
  }

  return (
    <div className="Appartment">
      <Carousel imageUrl={appartment.cover} pictures={appartment.pictures} />
      <Information appartment={appartment} />
    </div>
  );
}

export default Appartment;
