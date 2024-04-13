import React from 'react';
import './logementInformation.scss';
import Collapse from '../collapse/collapse';
import Rate from '../rate/rate';
import Host from '../host/host';
import LogementDescription from '../logementDescription/logementDescription';

function LogementInformation({ logement }) {
  const equipments = logement.equipments.map((equipement, index) => (
    <li key={index}>{equipement}</li>
  ));

  return (
    <section className="Information">
      <div className="Information__description">
        <LogementDescription
          title={logement.title}
          location={logement.location}
          tags={logement.tags}
        />
        <div className="Information__description__host">
          <Host picture={logement.host.picture} name={logement.host.name} />
          <Rate rate={logement.rating} />
        </div>
      </div>
      <div className="Information__details">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={<ul className="listItem">{equipments}</ul>}
        />
      </div>
    </section>
  );
}

export default LogementInformation;
