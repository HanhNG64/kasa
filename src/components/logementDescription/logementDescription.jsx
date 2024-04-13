import './logementDescription.scss';

function LogementDescription({ title, location, tags }) {
  return (
    <div className="Description">
      <h2>{title}</h2>
      <p>{location}</p>
      <div className="Description__tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default LogementDescription;
