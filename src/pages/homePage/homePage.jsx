import './home.scss';
import Banner from '../../components/banner/banner';
import Gallery from '../../components/gallery/gallery';
import bannerImage from '../../assets/falaise.png';
import { useTheme } from '../../utils/hooks/kasaHooks';
import { useEffect } from 'react';

function Home() {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    if (theme === 'light') {
      toggleTheme();
    }
  }, []);

  return (
    <div className="Home">
      <Banner imageUrl={bannerImage} text=" Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
