import '../utils/about.scss';
import bannerImage from '../assets/kalen-emsley-Bkci.png';
import Banner from '../components/banner';

function About() {
  return (
    <div className="About">
      <Banner imageUrl={bannerImage} />
      <div>A PROPOS</div>
    </div>
  );
}

export default About;
