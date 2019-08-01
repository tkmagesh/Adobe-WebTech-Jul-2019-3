import bugsReducer from '../bugTracker/reducers'
import { createStore } from 'redux';

let store = createStore(bugsReducer);

export default store;