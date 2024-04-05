import { Link } from 'react-router-dom';
import '../utils/error.scss';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const handleClick = () => {
    // Redirection vers "/nouvelle-page"
    navigate('/');
  };

  return (
    <div className="Error">
      <h2 className="Error__status">404</h2>
      <div className="Error__message">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <p className="Error__link" onClick={handleClick}>
        Retourner sur la page d’accueil
      </p>
    </div>
  );
}

export default Error;
