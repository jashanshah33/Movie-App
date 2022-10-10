import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovie, setShowFavourites } from "../actions";
import FavouritesCard from "./Favorite";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      // console.log("update");
      this.forceUpdate();
    });
    store.dispatch(addMovie(data));
    // console.log(this.props.store.getState());
  }
  isMovieFavorite = (m) => {
    const { favourites } = this.props.store.getState();
    // console.log(favourites);
    const index = favourites.indexOf(m);

    if (index !== -1) {
      return true;
    }
    return false;
  };

  handelMoviesBtn = () => {
    this.props.store.dispatch(setShowFavourites(false));
  };

  handelFavouritesBtn = () => {
    this.props.store.dispatch(setShowFavourites(true));
  };

  render() {
    const { store } = this.props;

    const { list, favourites, showFavourite } = this.props.store.getState();

    const display = showFavourite ? favourites : list;

    // console.log(this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourite ? "" : "active-tabs"}`}
              onClick={this.handelMoviesBtn}
            >
              Movies
            </div>

            <div
              className={`tab ${showFavourite ? "active-tabs" : ""}`}
              onClick={this.handelFavouritesBtn}
            >
              Favorites
            </div>
          </div>
          <div className="list">
            {display.map((movie, index) => (
              <MovieCard
                movie={movie}
                store={store}
                isFavorite={this.isMovieFavorite(movie)}
                key={`movies${index}`}
              />
            ))}
          </div>
          {display.length === 0 ? (
            <div className="no-movies">No movies to display! </div>
          ) : null}
          {/* <div className="tabs">
            <Link to={"/"}>
              {" "}
              <div className="tab">Movies</div>
            </Link>
            <Link to={"/favourite"}>
              {" "}
              <div className="tab">Favorites</div>
            </Link>
          </div>
          <div className="list">
            <Switch>
              <Route exact path={"/"}>
                {list.map((movie, index) => (
                  <MovieCard
                    movie={movie}
                    store={store}
                    isFavorite={this.isMovieFavorite(movie)}
                    key={`movies${index}`}
                  />
                ))}
              </Route>
              <Route exact path={"/favourite"}>
                {favourites.map((favourite, index) => (
                  <FavouritesCard
                    favourite={favourite}
                    store={store}
                    key={`favourite${index}`}
                  />
                ))}
              </Route>
            </Switch>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
