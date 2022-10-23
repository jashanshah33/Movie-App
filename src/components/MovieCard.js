import React from "react";
import { addFavourite, removeFavourite } from "../actions";

class MovieCard extends React.Component {
  handelFavoriteBtn = () => {
    // const { movie, store } = this.props;
    const { movie } = this.props;


    this.props.dispatch(addFavourite(movie));
   // console.log(store.getState());
  };

  handelUnFavoriteBtn = () => {
    // const { movie, store } = this.props;
    const { movie } = this.props;


    this.props.dispatch(removeFavourite(movie));
  };
  render() {
    const { movie, isFavorite } = this.props;

    // console.log(this.props.store.getState());

    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating"> {movie.imdbRating}</div>
            {isFavorite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handelUnFavoriteBtn}
              >
                unFavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handelFavoriteBtn}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}



export default MovieCard;
