import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import {browserHistory} from 'react-router';
class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			useremail:'',
			password: '',
			errors:{},
			isLoading:false
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e){
		console.log(this.state);
		this.setState({[e.target.name]:e.target.value});
	}
	onSubmit(e){
		e.preventDefault();
		this.setState({errors:{},isLoading:true});
		this.props.userLoginRequest({useremail:this.state.useremail,password:this.state.password}).then(
			()=>{
				browserHistory.push('/');
			},
			(err)=>this.setState({errors:err.response.data.errors,isLoding:false}));
	}
	render(){
		const {errors} = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Login</h1>
				<TextFieldGroup
					error = {errors.useremail}
					label = "Email"
					onChange = {this.onChange}
					value = {this.state.useremail}
					field = "useremail"
				/>
				<TextFieldGroup
					error = {errors.password}
					label = "Password"
					onChange = {this.onChange}
					value = {this.state.password}
					field = "password"
					type = 'password'
				/>
				<div className="form-group">
					<button disable={this.state.isLoading} className="btn btn-primary btn-lg">
						Login
					</button>
				</div>
			</form>
		)
	}
}

Login.propTypes={
	userLoginRequest: React.PropTypes.func.isRequired
}

export default Login;