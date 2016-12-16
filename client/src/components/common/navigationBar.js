import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
class NavigationBar  extends React.Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		isLogin:false
	// 	}
	// }
	render(){
		console.log(1);
		const islogin = this.props.isLogin;
		console.log(islogin);
		return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			  	<div className="navbar-header">
			  		<Link to="/" className="navbar-brand" > WebChat</Link>
			  	</div>
			  	<div className="collapse navbar-collapse">
			  		<ul className="nav navbar-nav navbar-right">
			  			{islogin?false:<li><Link to="/signup">Sign up</Link></li>}
			  			{islogin?<li><Link to="/userInfo">Profile</Link></li>:null}
						{islogin?<li><Link to="/chat">Go to chat</Link></li>:null}
						{islogin?null:<li><Link to="/login">Login</Link></li>}
			  		</ul>
			  	</div> 
			  </div>
			</nav>
		);	
	}
}

NavigationBar.propTypes = {
	isLogin: React.PropTypes.bool.isRequired
}
function mapStateToProps(state){
	return{
		isLogin:state.loginUser
	}
}
export default connect(mapStateToProps)(NavigationBar);