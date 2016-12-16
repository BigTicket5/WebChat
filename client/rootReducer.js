import {combineReducers} from 'redux';

import flashMessages from './src/reducers/flashMessages';
import loginUser from './src/reducers/loginUser';

export default combineReducers({
	flashMessages,
	loginUser
});