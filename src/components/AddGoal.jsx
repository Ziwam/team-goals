import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: ''
		}
	}

	AddGoal() {
		const {title} = this.state;
		const {email} = this.props.user;
		goalRef.push({email, title});
		this.setState({title: ''});
	}

	render() {
		return (
			<div className="form">
				<textarea 
					placeholder="add a task..."
					value = {this.state.title}
					onChange= {event => this.setState({title: event.target.value})}
				>
				</textarea>
				<button 
					type="button" 
					className="add-btn"
					onClick= {() => this.AddGoal()}						
				>
				Submit
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {user} = state;
	return {
		user
	}
}

export default connect(mapStateToProps, null)(AddGoal);