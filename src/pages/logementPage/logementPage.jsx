import './logementPage.scss';
import { useLocation, useParams } from 'react-router-dom';
import { useFetch, useFetchAppartment } from '../../data/data';
import SlideShow from '../../components/slideShow/slideShow';
import AppartmentInformation from '../../components/appartmentInformation/appartmentInformation';

function Appartment() {
  const location = useLocation();
  const appId = location.state.appId;
  // const { appId } = useParams();
  const { appartment } = useFetchAppartment('logements.json', appId);

  // const appartment = null;
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
