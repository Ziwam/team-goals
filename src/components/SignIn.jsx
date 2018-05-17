import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignIn extends Component {
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

	signIn() {
		const {email, password} = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email,password)
		.catch(error => {
			this.setState({error})
		})
	}

	render() {
		return (
			<div className="container">
				<h2>Sign In</h2>
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
						onClick={()=>this.signIn()}
					>
						Sign In
					</button>
					<div className="error">{this.state.error.message}</div>
					<div className="link"><Link to={'/signup'}>Sign Up</Link></div>
				</div>
			</div>
		);
	}
}

export default SignIn;