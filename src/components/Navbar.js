import React from "react";
import { addMovieToList, handelMovieSearch } from "../actions";
//import { data } from "../data";
import { StoreContext } from "..";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handelAddMovie = (movie) => {
    this.props.store.dispatch(addMovieToList(movie));
  };

  handelSearch = () => {
    const { searchText } = this.state;
    this.props.store.dispatch(handelMovieSearch(searchText));
  };

  handelChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    // console.log(this.props.search.result);
    const { result: movie, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handelChange} />
          <button onClick={this.handelSearch} id="search-btn">
            Search
          </button>
          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handelAddMovie(movie)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class navBarWrapper extends React.Component {
  render() {
    // const { search } = store.getState();

    return (
      <StoreContext.Consumer>
        {(store) => <Navbar store={store} search={store.getState().search}/>}
      </StoreContext.Consumer>
    );
  }
}
export default navBarWrapper;
