function bugsReducer(currentState = [] , action){
	console.log('bugsReducer triggered');
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'REPLACE'){
		let bugToReplace = action.payload;
		let newState = currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
		return newState;
	}
	if (action.type === 'REMOVE_ALL'){
		let bugsToRemove = action.payload;
		let newState = currentState.filter(bug => bugsToRemove.indexOf(bug) < 0);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		let newState = currentState.filter(bug => bug.id !== bugToRemove.id);
		return newState;
	}
	if (action.type === 'LOAD'){
		return [...action.payload];
	}
	return currentState;
}

export default bugsReducer;