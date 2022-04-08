import { combineReducers, createStore } from "redux";
import searchReducer from "./search-reducer";
import hotelsReducer from "./hotels-reducer";

const reducers = combineReducers({
  searchData: searchReducer,
  hotels: hotelsReducer,
});

const store = createStore(reducers);

export default store;
