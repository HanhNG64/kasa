import '../utils/banner.scss';
import { useTheme } from '../hooks/kasaHooks.jsx';

function Banner({ imageUrl, text = null }) {
  const { theme } = useTheme();

  return (
    <div
      className={`Banner ${theme}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {text}
    </div>
  );
}

export default Banner;
