import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import {logUser} from './actions';
import reducer from './reducers';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {firebaseApp} from './firebase';
import './styles/index.css';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
	if(user) {
		// console.log('user has signed in/up', user);
		const {email} = user;
		store.dispatch(logUser(email));
		browserHistory.push('/app');
	} else {
		// console.log('user has signed out or not signed up', user);		
		browserHistory.replace('/signin');
	}
})

ReactDOM.render(
	<Provider store={store}>
		<div>
			<div className="background1"></div>
			<div className="background2"></div>
			<Router path="/" history={browserHistory}>
				<Route path="/app" component={App}/>
				<Route path="/signin" component={SignIn}/>
				<Route path="/signup" component={SignUp}/>
			</Router>
		</div>
	</Provider>, document.getElementById('root')
)