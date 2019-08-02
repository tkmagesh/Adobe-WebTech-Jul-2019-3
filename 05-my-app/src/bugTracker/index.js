import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import BugStats from './views/bugStats';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

import * as bugActionCreators from './actions';

class BugTracker extends Component{
	render(){
		let { bugs, addNew, toggle, removeClosed } = this.props;
		return(
			<div>
				<h3>Bug Tracker</h3>
				<hr/>
	  			<BugStats bugs={bugs} />
	  			<BugEdit addNew={addNew} />
	  			<BugList {...{bugs, toggle, removeClosed}} />
	  		</div>
		)
	}
}

function mapStateToProps(storeState){
	let bugs = storeState.bugs;
	return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
	let bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
	return bugActionDispatchers
}


export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(BugTracker);





