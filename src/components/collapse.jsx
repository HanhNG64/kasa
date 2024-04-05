import '../utils/collapse.scss';
import arrow from '../assets/arrow.png';
import { useState } from 'react';

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
          alt="arrow"
          onClick={collapse}
        />
      </div>
      {open && <div className="Collapse__content">{content}</div>}
    </div>
  );
}

export default Collapse;
