import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// REDUCERS

import favoritesReducer from "./modules/favorites/reducer";
import userReducer from "./modules/users/reducer";
import loginReducer from "./modules/login/reducer";
import songsReducer from "./modules/data-songs/reducer";
import playerReducer from "./modules/current-song/reducer"
import statusReducer from "./modules/is-playing/reducer";
//import authenticateReducer from "./modules/Authenticated/reducer";

const reducers = combineReducers({
  favorite_songs: favoritesReducer,
  user: userReducer,
  login: loginReducer,
  top_songs: songsReducer,
  current_song: playerReducer,
  song_status: statusReducer,
  //authenticated: authenticateReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;