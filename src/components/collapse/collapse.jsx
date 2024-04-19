import './collapse.scss';
import { useState } from 'react';
import arrow from '../../assets/arrow.png';
import PropTypes from 'prop-types';

function Collapse({ title, content = null, alignSelf = null }) {
  const [open, setOpen] = useState(false);

  function collapse() {
    setOpen(!open);
  }

  return (
    <div className={alignSelf ? 'Collapse alignSelf' : 'Collapse'}>
      <div className="Collapse__title">
        <p>{title}</p>
        <img
          className={open ? 'Collapse__title--open' : 'Collapse__title--close'}
          src={arrow}
          alt="flèche "
          onClick={collapse}
        />
      </div>
      <div
        className={
          open ? 'Collapse__content--open' : 'Collapse__content--close'
        }
      >
        {content}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  alignSelf: PropTypes.string,
};

export default Collapse;
