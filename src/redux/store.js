import { legacy_createStore as createStore, combineReducers,applyMiddleware } from "redux";
import { searchReducer } from "./search/search.reducers";
import { createLogger } from 'redux-logger'; 


let rootReducer = combineReducers({
    search: searchReducer,
});
const logger = createLogger();
//Redux Store
const store = createStore(rootReducer,applyMiddleware(logger) );

export default store;
