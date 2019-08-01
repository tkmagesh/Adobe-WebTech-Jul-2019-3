import React from 'react';

let BugStats = ({ bugs }) => {
	//to be refactored
	let closedBugCount = bugs.reduce((result, bug) => bug.isClosed ? ++result : result , 0);
	return(
		<section className="stats">
			<span className="closed">{closedBugCount}</span>
			<span> / </span>
			<span>{bugs.length}</span>
		</section>
	)
}

export default BugStats;