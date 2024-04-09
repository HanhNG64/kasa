import React from 'react';
import './appartmentInformation.scss';
import Collapse from '../collapse/collapse';
import Rate from '../rate/rate';
import Host from '../host/host';
import AppartmentDescription from '../appartmentDescription/appartmentDescription';

function AppartmentInformation({ appartment }) {
  const equipments = appartment.equipments.map((equipement, index) => (
    <li key={index}>{equipement}</li>
  ));

  return (
    <section className="Information">
      <div className="Information__description">
        <AppartmentDescription
          title={appartment.title}
          location={appartment.location}
          tags={appartment.tags}
        />
        <div className="Information__description__host">
          <Host picture={appartment.host.picture} name={appartment.host.name} />
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

export default AppartmentInformation;
