import './logementPage.scss';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchAppartment } from '../../data/data';
import SlideShow from '../../components/slideShow/slideShow';
import AppartmentInformation from '../../components/appartmentInformation/appartmentInformation';

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
      <SlideShow imageUrl={appartment.cover} pictures={appartment.pictures} />
      <AppartmentInformation appartment={appartment} />
    </div>
  );
}

export default Appartment;
