import { createStore, combineReducers } from 'redux';

import bugsReducer from '../bugTracker/reducers'
import { projectsReducer } from '../projects';

let rootReducer = combineReducers({
	bugs : bugsReducer,
	projects : projectsReducer
});


let store = createStore(rootReducer);

export default store;