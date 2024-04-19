import './banner.scss';
import { useTheme } from '../../utils/hooks/kasaHooks.jsx';
import PropTypes from 'prop-types';

function Banner({ imageUrl, text = null }) {
  const { theme } = useTheme();

  return (
    <section
      className={`Banner ${theme}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {text && <h1>{text}</h1>}
    </section>
  );
}

Banner.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string,
};

export default Banner;
