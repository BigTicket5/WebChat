import axios from 'axios';
import {LOGGED_IN}  from '../constants/ActionTypes';
export function userLoginRequest(userData){
	return dispatch =>{
		return axios.post('/auth/login',userData).then((res)=>dispatch({reqdata:res,type:LOGGED_IN}))
		.catch((err) => dispatch({ type: 'LOGIN_FAILED' }));
	}
}