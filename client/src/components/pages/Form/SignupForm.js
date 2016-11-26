import React from 'react';
// import axios from 'axios';
class Signup extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			useremail:'',
			password: '',
			passwordconfirm:'',
			nickname:''
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
		this.props.userSignupRequest({useremail:this.state.useremail,password:this.state.password,nickname:this.state.nickname});
		// axios.post('/auth/signup',{useremail:this.state.useremail,password:this.state.password,nickname:this.state.nickname});
	}
	render(){
		return (
			<form onSubmit={this.onSubmit}>
				<h1> Join the World!</h1>
				<div className="form-group">
					<label className="control-label"> Email</label>
					<input value ={this.state.useremail}
						onChange ={this.onChange}
						type="text" name="useremail" className="form-control"/>
				</div>
				<div className="form-group">
					<label className="control-label"> Password</label>
					<input value = {this.state.password}
						onChange = {this.onChange}
						type="password" name="password" className="form-control"/>
				</div>
				<div className="form-group">
					<label className="control-label"> Verify Password</label>
					<input value = {this.state.passwordconfirm}
						onChange = {this.onChange}
						type="password" name="passwordconfirm" className="form-control"/>
				</div>
				<div className="form-group">
					<label className="control-label"> Nickname</label>
					<input value = {this.state.nickname}
						onChange = {this.onChange}
						type="text" name="nickname" className="form-control"/>
				</div>
				<div className="form-group">
					<button className="btn btn-primary btn-lg">
						Sign up
					</button>
				</div>
			</form>
		);
	}
}
Signup.propTypes={
	userSignupRequest: React.PropTypes.func.isRequired
}
export default Signup;
