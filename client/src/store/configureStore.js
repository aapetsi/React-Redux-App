import { createStore } from "redux";
import { characterReducers } from "../reducers/characters";

export default createStore(
  characterReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
