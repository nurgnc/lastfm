import { combineReducers, createStore } from "redux";
// redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// reducers
import artistReducer from "./artists";
import themeReducer from "./theme";

// merge root info
const rootReducer = combineReducers({
  artist: artistReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "artist"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
