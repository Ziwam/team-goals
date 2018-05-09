import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import {logUser} from './actions';
import reducer from './reducers';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {firebaseApp} from './firebase';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
	if(user) {
		// console.log('user has signed in/up', user);
		const {email} = user;
		store.dispatch(logUser(email));
		hashHistory.push('/app');
	} else {
		// console.log('user has signed out or not signed up', user);		
		hashHistory.replace('/signin');
	}
})

ReactDOM.render(
	<Provider store={store}>
		<Router path="/" history={hashHistory}>
			<Route path="/app" component={App}/>
			<Route path="/signin" component={SignIn}/>
			<Route path="/signup" component={SignUp}/>
		</Router>
	</Provider>, document.getElementById('root')
)