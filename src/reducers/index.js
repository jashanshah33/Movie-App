import {
  ADD_MOVIES,
  ADD_Favourite,
  REMOVE_Favourite,
  SET_SHOW_Favourite,
} from "../actions";

const inistialState = {
  list: [],
  favourites: [],
  showFavourite: false,
};

export default function movies(state = inistialState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  // return state;
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_Favourite:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_Favourite:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_Favourite:
      return {
        ...state,
        showFavourite: action.val,
      };

    default:
      return state;
  }
}
