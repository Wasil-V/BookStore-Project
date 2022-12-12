import { legacy_createStore as createStore, combineReducers } from "redux";
import { searchReducer } from "./search/search.reducers";

let rootReducer = combineReducers({
    search: searchReducer,
});

//Redux Store
const store = createStore(rootReducer);

export default store;
