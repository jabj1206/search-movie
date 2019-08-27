import React, { Component } from "react";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import "./App.css";
import "bulma/css/bulma.css";
import { MoviesList } from "./components/MoviesList";

class App extends Component {
  state = { userSearch: false, results: [] };

  _handleResults = results => {
    this.setState({ results, userSearch: true });
  };

  _renderResults = () => {
    return this.state.results.length === 0 ? (
      <p> Sorry! 😔 Result not found!</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  };

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.userSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </div>
    );
  }
}

export default App;
