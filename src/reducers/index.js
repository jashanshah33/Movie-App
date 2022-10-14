import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_Favourite,
  REMOVE_Favourite,
  SET_SHOW_Favourite,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions";

const inistialMovieState = {
  list: [],
  favourites: [],
  showFavourite: false,
};

export function movies(state = inistialMovieState, action) {
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
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };

    default:
      return state;
  }
}

const inistialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = inistialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };

    default:
      return state;
  }
}

// const initialRootState =  {
//   movies: inistialMovieState,
//   search: inistialSearchState
// }

// export default function rootReducer(state = initialRootState, action) {
//   return{
//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   }

// }

export default combineReducers({
  movies: movies,
  search: search,
});
