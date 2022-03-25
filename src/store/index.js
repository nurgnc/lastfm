import { combineReducers, createStore } from "redux";
import artistReducer from "./artists";
import themeReducer from "./theme";

// merge root info
const rootReducer = combineReducers({
  artist: artistReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
