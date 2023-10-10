import Cards from './Cards';
import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../redux/actions';
import { useState } from 'react';

const Favorites = () => {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value='A'>ASCENDENTE</option>
        <option value='D'>DESCENDENTE</option>
      </select>
      <select onChange={handleFilter}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
      <Cards characters={myFavorites} />
    </div>
  );
};

export default Favorites;
