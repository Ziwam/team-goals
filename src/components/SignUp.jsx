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
		const {email, password} = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email,password)
		.catch(error => {
			this.setState({error})
		})
	}

	render() {
		return (
			<div className="container">
				<h2>Sign Up</h2>
				<div className="fields">
					<input 
						type="text" 
						placeholder="email" 
						onChange={ev => this.setState({email:ev.target.value})}/>
					<input 
						type="password" 
						placeholder="password" 
						onChange={ev => this.setState({password: ev.target.value})}/>
					<button 
						className="log-btn" 
						type="button"
						onClick={()=>this.signUp()}
					>
						Sign Up
					</button>
					<div className="error">{this.state.error.message}</div>
					<div className="link"><Link to={'/signin'}>Already a user? Sign In</Link></div>
				</div>
			</div>
		);
	}
}

export default SignUp;