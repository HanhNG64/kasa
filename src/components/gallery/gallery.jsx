import './gallery.scss';
import { useFetchAllData } from '../../data/data.jsx';
import LogementCard from '../logementCard/logementCard.jsx';

import Loader from '../loader/loader.jsx';

function Gallery() {
  const { logements, isLoading, error } = useFetchAllData();
  if (error) {
    return <div className="FetchProblem">Erreur de récupération de ...</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="Gallery">
      <div className="Gallery__content">
        {logements?.map((logement) => (
          <LogementCard
            key={logement.id}
            logementId={logement.id}
            logementTitle={logement.title}
            imageUrl={logement.cover}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
