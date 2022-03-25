import { combineReducers, createStore } from "redux";
import artistReducer from "./artists";

// merge root info
const rootReducer = combineReducers({
  artist: artistReducer,
});

const store = createStore(rootReducer);

export default store;
