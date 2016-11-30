import React from 'react';
import LoginForm from './Form/LoginForm' ;
import {connect} from 'react-redux';
import {userLoginRequest} from '../../actions/loginAction';
class LoginPage extends React.Component{
	render()
	{
		const {userLoginRequest} = this.props;
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<LoginForm userLoginRequest={userLoginRequest} />
				</div>
			</div>
		);
	}
}

LoginPage.propTypes={
	userLoginRequest: React.PropTypes.func.isRequired
}

export default connect((state)=>{return {}},{userLoginRequest})(LoginPage);