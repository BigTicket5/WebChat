import {ADD_FLASH_MESSAGE}  from '../constants/ActionTypes';
export function addFlashMessage(message){
	console.log(1);
	return {type:ADD_FLASH_MESSAGE,
	message}
}