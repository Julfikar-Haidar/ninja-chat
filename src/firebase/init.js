import firebase from 'firebase'
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVU1W-Q-7NrYcy6OV-EKKPKLt0g8JPQrs",
    authDomain: "ninja-chat-4b283.firebaseapp.com",
    databaseURL: "https://ninja-chat-4b283.firebaseio.com",
    projectId: "ninja-chat-4b283",
    storageBucket: "ninja-chat-4b283.appspot.com",
    messagingSenderId: "791984085096",
    appId: "1:791984085096:web:41b4a2045c208c328bc3dd"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

firebaseApp.firestore()

export default db
