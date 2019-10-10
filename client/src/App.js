import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from './actions/actions'
import './App.css'

const App = props => {
  console.log(props.characters)
  return (
    <div className='App'>
      <h1>Breaking Bad Characters</h1>
      <button onClick={() => props.dispatch(fetchCharacters())}>
        Fetch Users
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

export default connect(
  mapStateToProps,
  null
)(App)
