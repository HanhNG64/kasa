import '../utils/gallery.scss';
import { useFetch } from '../data/data.jsx';
import AppartCard from './appartCard.jsx';

function Gallery() {
  const { appartments } = useFetch('logements.json');

  return (
    <div className="Gallery">
      {appartments?.map((appartment) => (
        <AppartCard
          key={appartment.id}
          appartementTitle={appartment.title}
          imageUrl={appartment.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
