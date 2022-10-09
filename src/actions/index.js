//Action Type
export const ADD_MOVIES = "ADD_MOVIES";

//Action Creators

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIES,
    movies: movie,
  };
};
