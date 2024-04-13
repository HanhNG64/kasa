import './logementPage.scss';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../data/data';
import SlideShow from '../../components/slideShow/slideShow';
import LogementInformation from '../../components/logementInformation/logementInformation';
import ErrorPage from '../errorPage/errorPage.jsx';

function Logement() {
  const navigate = useNavigate();
  // const location = useLocation();
  // const appId = location.state.appId;
  const { id } = useParams();

  const { logements, isLoading, error } = useFetch('logements.json');

  if (error) {
    return <div className="FetchProblem">Erreur de récupération de ...</div>;
  }

  if (isLoading) {
    return <div className="Loading">En chargement ...</div>;
  }

  const logement = logements.find((item) => item.id === id);

  return logement ? (
    <div className="Logement">
      <SlideShow imageUrl={logement.cover} pictures={logement.pictures} />
      <LogementInformation logement={logement} />
    </div>
  ) : (
    ErrorPage()
    // navigate('*')
  );
}

export default Logement;
