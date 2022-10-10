import React from "react";
import { removeFavourite } from "../actions";

class FavouritesCard extends React.Component {
  handelUnFavoriteBtn = () => {
    const { movie, store } = this.props;

    this.props.store.dispatch(removeFavourite(movie));
  };
  render() {
    const { favourite } = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={favourite.Poster} />
        </div>
        <div className="right">
          <div className="title">{favourite.Title}</div>
          <div className="plot">{favourite.Plot}</div>
          <div className="footer">
            <div className="rating"> {favourite.imdbRating}</div>

            <button
              className="unfavourite-btn"
              onClick={this.handelUnFavoriteBtn}
            >
              unFavourite
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FavouritesCard;
