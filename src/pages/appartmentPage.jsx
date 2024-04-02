import Carousel from '../components/carousel';
import '../utils/appartment.scss';
import falaise from '../assets/falaise.png';
import Information from '../components/information';

function Appartment() {
  return (
    <div className="Appartment">
      <Carousel imageUrl={falaise} />
      <Information />
    </div>
  );
}

export default Appartment;
