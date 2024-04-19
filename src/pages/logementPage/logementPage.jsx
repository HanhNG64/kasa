import './logementPage.scss';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../data/data';
import SlideShow from '../../components/slideShow/slideShow';
import LogementInformation from '../../components/logementInformation/logementInformation';
import ErrorPage from '../errorPage/errorPage.jsx';
import Loader from '../../components/loader/loader.jsx';
import config from '../../utils/config/config.jsx';

function Logement() {
  const { id } = useParams();

  const { logements, isLoading, error } = useFetchData(config.dataUrl);

  if (error) {
    return <div className="FetchProblem">Erreur de récupération de ...</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  const logement = logements.find((item) => item.id === id);

  return logement ? (
    <div className="Logement">
      <SlideShow imageUrl={logement.cover} pictures={logement.pictures} />
      <LogementInformation logement={logement} />
    </div>
  ) : (
    ErrorPage()
  );
}

export default Logement;
