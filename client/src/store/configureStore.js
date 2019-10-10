import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { characterReducers } from '../reducers/characters'

// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
// const store = createStore(
//   characterReducers,
//   composeEnhancers(applyMiddleware(...thunk))
// );

const middleware = [thunk]

export default createStore(
  characterReducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
