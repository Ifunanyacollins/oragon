import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCDex-XSGXC3wGU0DVwl9oYQekITwADyDA",
    authDomain: "expenses-98bfe.firebaseapp.com",
    databaseURL: "https://expenses-98bfe.firebaseio.com",
    projectId: "expenses-98bfe",
    storageBucket: "expenses-98bfe.appspot.com",
    messagingSenderId: "410184677245"
  };

 
firebase.initializeApp(config);

export const database = firebase.database()


export  const auth    = firebase.auth()



export default firebase