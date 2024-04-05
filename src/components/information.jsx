import React from 'react';
import '../utils/information.scss';
import Collapse from './collapse';
import Rate from './rate';
import HostPhoto from './hostPhoto';
import InformationHeader from './informationHeader';

function Information({ appartment }) {
  const equipments = appartment.equipments.map((equipement, index) => (
    <li key={index}>{equipement}</li>
  ));

  return (
    <section className="Information">
      <div className="Information__description">
        <InformationHeader
          title={appartment.title}
          location={appartment.location}
          tags={appartment.tags}
        />
        <div className="Information__description__host">
          <HostPhoto
            picture={appartment.host.picture}
            name={appartment.host.name}
          />
          <Rate rate={appartment.rating} />
        </div>
      </div>
      <div className="Information__details">
        <Collapse title="Description" content={appartment.description} />
        <Collapse
          title="Équipements"
          content={<ul className="listItem">{equipments}</ul>}
        />
      </div>
    </section>
  );
}

export default Information;
