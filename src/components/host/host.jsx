import './host.scss';

function Host({ picture, name }) {
  const [first, last] = name.split(' ');

  return (
    <div className="Host">
      <div className="Host__name">
        <p>{first}</p>
        <p>{last}</p>
      </div>
      <div className="Host__photo">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
}

export default Host;
