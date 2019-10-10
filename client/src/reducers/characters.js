import { FETCH_CHARACTERS } from '../actions/actions'

const initialState = {
  characters: []
}

export const characterReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      console.log(action.payload)
      return {
        ...state,
        characters: [...action.payload]
      }
    default:
      return state
  }
}
