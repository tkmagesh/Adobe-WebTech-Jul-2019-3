let SM = (function(){
	let _currentState = undefined,
		_subscriptionFns = [],
		_reducer = undefined,
		_init_action = '@@INIT_ACTION';

	function getState(){
		return _currentState;
	}

	function subscribe(subcriptionFn){
		_subscriptionFns.push(subcriptionFn);
	}

	function triggerChange(){
		_subscriptionFns.forEach(subcriptionFn => subcriptionFn());
	}

	function dispatch(action){
		let newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = reducer(_currentState, _init_action);
		return { getState, subscribe, dispatch };
	}

	function bindActionCreators(actionCreator, dispatch){
		let dispatchers = {};
		for(let key in actionCreator){
			dispatchers[key] = function(...args){
				let action = actionCreator[key](...args);
				dispatch(action);
			}
		}
		return dispatchers;
	}

	return { createStore, bindActionCreators  };
})();