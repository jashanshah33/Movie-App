//Action Type
export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_Favourite = "ADD_Favourite";

export const REMOVE_Favourite = "REMOVE_Favourite";

export const SET_SHOW_Favourite = "SET_SHOW_Favourite";



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

