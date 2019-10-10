import React from "react";
import { connect } from "react-redux";
import "./App.css";

const App = props => {
  console.log(props);
  return (
    <div className="App">
      <h1>Breaking Bad Characters</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
