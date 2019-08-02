import axios from 'axios';
import { getAll } from '../services/bugApi';

export function load(){
	return async function(dispatch){
		/*getAll()		
			.then(bugs => {
				let action = { type : 'LOAD', payload : bugs};
				dispatch(action);
			});*/

		let bugs = await getAll();
		let action = { type : 'LOAD', payload : bugs};
		dispatch(action);
			
	}
}