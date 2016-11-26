import React from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './app';
import SignupPage from './pages/signup';
import ChatLobby from './pages/main';

export default(
	<Route path="/" component={App} >
		<IndexRoute component={ChatLobby} />
		<Route path="signup" component={SignupPage}/>
	</Route>
)