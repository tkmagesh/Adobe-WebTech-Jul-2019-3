import ReactDOM from 'react-dom';  
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import appStore from './store'
import BugTracker from './bugTracker';
import ProjectTracker from './projects';


function Index() {
  return <h2>Home</h2>;
}


ReactDOM.render(
	<Provider store={appStore}>
		<Router>
	      <div>
	        <nav>
	            <span>
	                &nbsp;<Link to="/">Home</Link>
	            </span>
	            <span>
	                &nbsp;<Link to="/bugs/">Bug Tracker</Link>
	            </span>
	            <span>
	              &nbsp;<Link to="/projects/">Project Tracker</Link>
	            </span>
	          
	        </nav>

	        <Route path="/" exact component={Index} />
	        <Route path="/bugs/" component={BugTracker} />
	        <Route path="/projects/" component={ProjectTracker} />
	      </div>
	    </Router>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
