import ReactDOM from 'react-dom';  
import React from 'react';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import appStore from './store'
import BugTracker from './bugTracker';
import ProjectTracker from './projects';

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<BugTracker/>
			<hr/>
			<ProjectTracker/>
		</div>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
