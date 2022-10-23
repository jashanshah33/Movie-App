import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovie, setShowFavourites } from "../actions";
import { connect } from "react-redux";
//import { connect } from "..";
//import { search } from "../reducers";

class App extends React.Component {
  componentDidMount() {
    // const { store } = this.props;
    // store.subscribe(() => {
    //   // console.log("update");
    //   this.forceUpdate();
    // });
    this.props.dispatch(addMovie(data));
    // console.log(this.props.store.getState());
  }
  isMovieFavorite = (m) => {
    const { movies } = this.props;
    // console.log(favourites);
    const index = movies.favourites.indexOf(m);

    if (index !== -1) {
      return true;
    }
    return false;
  };

  handelMoviesBtn = () => {
    this.props.dispatch(setShowFavourites(false));
  };

  handelFavouritesBtn = () => {
    this.props.dispatch(setShowFavourites(true));
  };

  render() {
    // const { store } = this.props;
    // const { movies, search } = this.props;
    const { movies } = this.props;


    const { list, favourites, showFavourite } = movies;

    const display = showFavourite ? favourites : list;

    //console.log(this.props.store.getState());
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
                dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component {
//   render(){

//     return(
//       <StoreContext.Consumer>
//         {(store)=> <App store={store}
// />}
//       </StoreContext.Consumer>
//     )
//   }
// }
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
