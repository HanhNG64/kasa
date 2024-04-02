import Banner from '../components/banner';
import Gallery from '../components/gallery';
import bannerImage from '../assets/falaise.png';
import '../utils/home.scss';

function Home() {
  return (
    <div className="Home">
      <Banner imageUrl={bannerImage} text=" Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
