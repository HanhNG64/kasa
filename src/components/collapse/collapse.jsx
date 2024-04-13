import './collapse.scss';
import { useState } from 'react';
import arrow from '../../assets/arrow.png';

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

export default Collapse;
