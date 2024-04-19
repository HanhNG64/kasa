import './logementPage.scss';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../data/data';
import SlideShow from '../../components/slideShow/slideShow';
import LogementInformation from '../../components/logementInformation/logementInformation';
import ErrorPage from '../errorPage/errorPage.jsx';
import Loader from '../../components/loader/loader.jsx';

function Logement() {
  const { id } = useParams();

  const { logements, isLoading, error } = useFetch('logements.json');

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
