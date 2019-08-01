import React from 'react';

let BugItem = (props) => {
	let { bug, toggle } = props;
	let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
	return(
		<li>
			<span className={bugStyle} onClick={() => toggle(bug)}>
				{bug.name}
			</span>
			<div className="datetime"> {bug.createdAt.toString()} </div>
		</li>
	);
};
export default BugItem;