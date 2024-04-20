import './about.scss';
import bannerImage from '../../assets/kalen-emsley-Bkci.png';
import Banner from '../../components/banner/banner';
import Collapse from '../../components/collapse/collapse';
import aboutData from '../../data/about.json';
import { useEffect } from 'react';
import { useTheme } from '../../utils/hooks/kasaHooks';

function About() {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    if (theme === 'dark') {
      toggleTheme();
    }
  }, []);

  return (
    <div className="About">
      <Banner imageUrl={bannerImage} />
      <section className="About__collapse">
        {aboutData?.map((data) => (
          <Collapse
            key={data.aboutTitle}
            title={data.aboutTitle}
            content={data.aboutContent}
            alignSelf={true}
          />
        ))}
      </section>
    </div>
  );
}

export default About;
