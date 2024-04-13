import './gallery.scss';
import { useFetch } from '../../data/data.jsx';
import LogementCard from '../logementCard/logementCard.jsx';

function Gallery() {
  const { logements } = useFetch('logements.json');
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
