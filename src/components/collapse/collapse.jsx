import './collapse.scss';
import { useState } from 'react';
import arrow from '../../assets/arrow.png';

/**
 * The Collapse component is composed of a fixed title and text that can be displayed or hidden using a chevron
 * @param {*} title The title.
 * @param {*} content The content.
 * @param {*} alignSelf If true the component is centered relative to the parent.
 * @returns The html block representing the component
 */
function Collapse({ title, content, alignSelf = false }) {
  const [open, setOpen] = useState(false);

  function collapse() {
    setOpen(!open);
  }

  return (
    <div className={alignSelf ? 'Collapse alignSelf' : 'Collapse'}>
      <div className="Collapse__title">
        <p>{title}</p>
        <img
          className={open ? 'Collapse__title open' : 'Collapse__title'}
          src={arrow}
          alt="flèche "
          onClick={collapse}
        />
      </div>
      <div className={open ? 'Collapse__content open' : 'Collapse__content'}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
