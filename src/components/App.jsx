import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			checked: "goals"
		}
	}

	signOut() {
		firebaseApp.auth().signOut();
	}

	switch = (evn) => {
		const checked = evn.target.value;
		this.setState({checked});
	}

	render() {
		return (
			<div className="App">
				<div className="header">
					<h1 className="title">Team Goals</h1>
					<button 
						className="signout-btn"
						onClick={() => this.signOut()}
					>
					Sign Out
					</button>
				</div>
				<div className="toggle">
					<input type="radio" name="section" id="tog_goals" value="goals" checked={this.state.checked === 'goals'} onChange={this.switch}/>
					<label htmlFor="tog_goals" className="toggle-label">Goals</label>
					<input type="radio" name="section" id="tog_complete" value="complete" checked={this.state.checked === 'complete'} onChange={this.switch}/>
					<label htmlFor="tog_complete" className="toggle-label">Complete</label>
				</div>
				{
					(this.state.checked === 'goals')?
					(
						<div>
						<AddGoal/>
						<GoalList/>
						</div>
					):(
						<CompleteGoalList/>
					)
				}
			</div>
		);
	}
}

export default App;