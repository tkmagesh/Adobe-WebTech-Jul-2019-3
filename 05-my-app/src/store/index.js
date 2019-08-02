import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import bugsReducer from '../bugTracker/reducers'
import { projectsReducer } from '../projects';

let rootReducer = combineReducers({
	bugs : bugsReducer,
	projects : projectsReducer
});


let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;