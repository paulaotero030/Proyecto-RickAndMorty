import { Link, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ id, name, image, onClose, gender }) => {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);
  const { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, image, onClose, gender }));
    }
  };

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className='card-container'>
      <img src={image} alt={name} />

      <Link to={`/detail/${id}`}>
        <h2 className='name-card'>{name}</h2>
      </Link>

      {isFav ? (
        <button className='button-fav' onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite}>❤</button>
      )}
      {pathname !== '/favorites' ? (
        <button className='close-button' onClick={() => onClose(id)}>
          X
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Card;
