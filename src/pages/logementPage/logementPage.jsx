import './logementPage.scss';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../data/data';
import SlideShow from '../../components/slideShow/slideShow';
import LogementInformation from '../../components/logementInformation/logementInformation';
import ErrorPage from '../errorPage/errorPage.jsx';
import Loader from '../../components/loader/loader.jsx';

function Logement() {
  const { id } = useParams();

  const { logement, isLoading, error } = useFetchData(id);

  if (error) {
    return <div className="FetchProblem">Erreur de récupération de ...</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return logement ? (
    <div className="Logement">
      <SlideShow pictures={logement.pictures} />
      <LogementInformation logement={logement} />
    </div>
  ) : (
    ErrorPage()
  );
}

export default Logement;
