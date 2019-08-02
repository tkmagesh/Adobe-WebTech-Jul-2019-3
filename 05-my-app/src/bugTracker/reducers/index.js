function bugsReducer(currentState = [] , action){
	console.log('bugsReducer triggered');
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'REPLACE'){
		let { oldBug, newBug } = action.payload;
		let newState = currentState.map(bug => bug === oldBug ? newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE_ALL'){
		let bugsToRemove = action.payload;
		let newState = currentState.filter(bug => bugsToRemove.indexOf(bug) < 0);
		return newState;
	}
	return currentState;
}

export default bugsReducer;