import '../utils/about.scss';
import bannerImage from '../assets/kalen-emsley-Bkci.png';
import Banner from '../components/banner';
import Collapse from '../components/collapse';
import aboutData from '../data/about.json';

function About() {
  return (
    <div className="About">
      <Banner imageUrl={bannerImage} />
      <div className="About__collapse">
        {aboutData?.map((data) => (
          <Collapse
            key={data.aboutTitle}
            title={data.aboutTitle}
            content={data.aboutContent}
            alignSelf={'alignSelf'}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
