import '../utils/information.scss';

function InformationHeader({ title, location, tags }) {
  return (
    <div className="Information__header">
      <h2>{title}</h2>
      <p>{location}</p>
      <div className="Information__header__tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default InformationHeader;
