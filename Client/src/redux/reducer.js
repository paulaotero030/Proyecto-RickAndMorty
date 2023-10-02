import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
myFavorites: [],
allCharacters: [],
}

const reducer = (state = initialState, action)=>{
   switch(action.type){
     case ADD_FAV: 
     return {
        ...state,
        myFavorites: payload, allCharacters: payload
     } 

     case REMOVE_FAV: 
     return {
        ...state,
        myFavorites: payload
     }
     case FILTER:
      return{
         ...state.allCharacters,

      }
      case ORDER:
         return{
            ...state.allCharacters,
            
         }
   
     default: 
     return { ...state }
   }
}

export default reducer;