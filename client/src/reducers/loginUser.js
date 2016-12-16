import {LOGGED_IN} from '../constants/ActionTypes';
export default(state=[],action={}) =>{
	
	switch (action.type){
		case LOGGED_IN:
			return true;
			default: return false;
	}
}
