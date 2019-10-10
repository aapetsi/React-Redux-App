import axios from 'axios'

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS'

export const fetchCharacters = () => dispatch => {
  axios.get('/characters').then(res => {
    dispatch({
      type: FETCH_CHARACTERS,
      payload: res.data
    })
  })
}
