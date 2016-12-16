import {ADD_FLASH_MESSAGE} from '../constants/ActionTypes';
import shortid from 'shortid';
export default(state=[],action) =>{
	switch (action.type){
		case ADD_FLASH_MESSAGE:
			console.log(state);
			return [
				...state,
				{
					id: shortid.generate(),
					type:action.message.type,
					text:action.message.text
				}
			];
			default: return state;
	}
}