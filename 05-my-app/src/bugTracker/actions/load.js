import axios from 'axios';
import { getAll } from '../services/bugApi';

export function load(){
	return function(dispatch){
		getAll()		
			.then(bugs => {
				let action = { type : 'LOAD', payload : bugs};
				dispatch(action);
			});
	}
}