//Action Type
export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_Favourite = "ADD_Favourite";

export const REMOVE_Favourite = "REMOVE_Favourite";

export const SET_SHOW_Favourite = "SET_SHOW_Favourite";

export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

//Action Creators

export const addMovie = (movies) => {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
};

export const addFavourite = (movie) => {
  return {
    type: ADD_Favourite,
    movie,
  };
};

export const removeFavourite = (movie) => {
  return {
    type: REMOVE_Favourite,
    movie,
  };
};

export const setShowFavourites = (val) => {
  return {
    type: SET_SHOW_Favourite,
    val,
  };
};

export const addMovieToList = (movie) => {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
};

export const handelMovieSearch = (movie) => {
  const url = `https://www.omdbapi.com/?apikey=d4aa3f24&t=${movie}`;

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => dispatch(addMovieSearchResult(movie)));
  };
};

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
