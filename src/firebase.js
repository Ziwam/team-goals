import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC3zAO5TgPoKZKjHL_ZFbxYy6_DyJmQtWQ",
  authDomain: "teamgoals-8eaba.firebaseapp.com",
  databaseURL: "https://teamgoals-8eaba.firebaseio.com",
  projectId: "teamgoals-8eaba",
  storageBucket: "",
  messagingSenderId: "185981288485"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals')