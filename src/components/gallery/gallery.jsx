import './gallery.scss';
import { useFetchData } from '../../data/data.jsx';
import LogementCard from '../logementCard/logementCard.jsx';
import config from '../../utils/config/config.jsx';
import Loader from '../loader/loader.jsx';

function Gallery() {
  const { logements, isLoading, error } = useFetchData(config.dataUrl);
  if (error) {
    return <div className="FetchProblem">Erreur de récupération de ...</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="Gallery">
      {logements?.map((logement) => (
        <LogementCard
          key={logement.id}
          logementId={logement.id}
          logementTitle={logement.title}
          imageUrl={logement.cover}
        />
      ))}
    </section>
  );
}

export default Gallery;
