import './gallery.scss';
import { useFetch } from '../../data/data.jsx';
import AppartCard from '../logementCard/logementCard.jsx';

function Gallery() {
  const { appartments } = useFetch('logements.json');
  return (
    <div className="Gallery">
      {appartments?.map((appartment) => (
        <AppartCard
          key={appartment.id}
          appartmentId={appartment.id}
          appartmentTitle={appartment.title}
          imageUrl={appartment.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
