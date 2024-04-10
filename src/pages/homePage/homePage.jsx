import './home.scss';
import Banner from '../../components/banner/banner';
import Gallery from '../../components/gallery/gallery';
import bannerImage from '../../assets/falaise.png';

function Home() {
  return (
    <div className="Home">
      <Banner imageUrl={bannerImage} text=" Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
