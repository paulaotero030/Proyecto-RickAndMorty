import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((character) => {
          return character.id != action.payload;
        }),
      };
    case FILTER:
      const filterByGender = [...state.allCharacters].filter((favorite) => {
        return favorite.gender === action.payload;
      });

      return {
        ...state,
        myFavorites: filterByGender,
      };

    case ORDER:
      const favoritesOrdered =
        action.payload === 'A'
          ? [...state.myFavorites].sort((a, b) => a.id - b.id)
          : [...state.myFavorites].sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: favoritesOrdered,
      };

    default:
      return { ...state };
  }
};

export default reducer;
