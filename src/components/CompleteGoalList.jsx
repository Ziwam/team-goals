import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
	componentDidMount() {
		completeGoalRef.on('value', snap => {
			let completeGoals = [];
			snap.forEach(completeGoal => {
				const {email,title} = completeGoal.val();
				completeGoals.push({email, title})
			})
			this.props.setCompleted(completeGoals);
		})
	}

	clearCompleted() {
		completeGoalRef.set([]);
	}

	render() {
		return (
			<div className="list">
				{
					this.props.completedGoals.map((completeGoal,index) => {
						const {title, email} = completeGoal;
						return (
							<div key={index} className="item">
								<div className="head">
									<div className="email completed">{email}</div>
									<div className="status completed">complete</div>
								</div>
								<div className="task">{title}</div>
							</div>
						)
					})	
				}
				{
					(this.props.completedGoals.length > 0)?
					(
						<button className="clear-btn"
							onClick={() => this.clearCompleted()}
						>Clear All</button>
					):
					(
						<div></div>
					)
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	const {completedGoals} =state;
	return {
		completedGoals
	}
}

export default connect(mapStateToProps,{setCompleted})(CompleteGoalList);