import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignUp extends Component {
	constructor(props){
		super(props);
		this.state ={
			email: '',
			password: '',
			error: {
				message: ''
			}
		}
	}

	signUp() {
		console.log('this.state', this.state);
		const {email, password} = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email,password)
		.catch(error => {
			console.log('error', error); 
			this.setState({error})
		})
	}

	render() {
		return (
			<div className="form-inline">
				<h2>Sign Up</h2>
				<div className="form-group">
					<input 
						type="text" 
						className="form-control" 
						placeholder="email" 
						onChange={ev => this.setState({email:ev.target.value})}/>
					<input 
						type="password" 
						className="form-control" 
						placeholder="password" 
						onChange={ev => this.setState({password: ev.target.value})}/>
					<button 
						className="btn btn-primary" 
						type="button"
						onClick={()=>this.signUp()}
					>
						Sign Up
					</button>
				</div>
				<div>{this.state.error.message}</div>
				<div><Link to={'/signin'}>Already a user? Sign In</Link></div>
			</div>
		);
	}
}

export default SignUp;