import '../utils/information.scss';

function HostPhoto({ picture, name }) {
  const [first, last] = name.split(' ');

  return (
    <div className="Information__host">
      <div className="Information__host__name">
        <p>{first}</p>
        <p>{last}</p>
      </div>
      <div className="Information__host__photo">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
}

export default HostPhoto;
