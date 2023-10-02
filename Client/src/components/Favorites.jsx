 import Card from "./Card";
 import { connect } from "react-redux";
 import { filterCards, orderCards } from "../redux/actions";
 import { useDispatch } from "react-redux";
 import { useState } from "react";

 const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const handleOrder = ()=>{
    dispatch(orderCards(event.target.value));
    setAux(true);
  }

  const handleFilter = ()=>{
    dispatch(filterCards(event.target.value));
  }


  return (
    <>
    {
      myFavorites?.map(fav => {
        return (
            <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            onClose={fav.onClose}
            />
        )
      })
    }
    <select onChange={handleOrder}>
      <option value="A">ASCENDENTE</option>
      <option value="D">DESCENDENTE</option>
    </select>
    <select onChange={handleFilter}>
      <option value="Male"></option>
      <option value="Female"></option>
      <option value="Genderless"></option>
      <option value="unknown"></option>
    </select>
    </>
)
}

const mapStateToProps = (state) => {
 return {
    myFavorites: state.myFavorites
}
}

export default connect(
    mapStateToProps,
    null
)(Favorites);