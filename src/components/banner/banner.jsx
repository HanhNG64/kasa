import './banner.scss';
import { useTheme } from '../../utils/hooks/kasaHooks.jsx';

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
