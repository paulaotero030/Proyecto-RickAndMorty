import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav , removeFav } from '../../redux/actions'
import { useState, useEffect } from "react";

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=> {
   if(isFav){
      setIsFav(false);
      removeFav(id);
   } else {
      setIsFav(true);
      addFav({id, name, status, species, gender, origin, image, onClose});
   }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )    
         }
         <button onClick={()=> onClose(id)}>X</button>
        <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
        </Link> 
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (personaje)=>{ dispatch(addFav(personaje)) },
      removeFav: (id)=>{ dispatch(removeFav(id))}
   }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);
