import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBl8FvNjtS5R5LiLGfqmXYx052fZ45xhiw",
    authDomain: "demo2-c52fd.firebaseapp.com",
    databaseURL: "https://demo2-c52fd.firebaseio.com",
    projectId: "demo2-c52fd",
    storageBucket: "demo2-c52fd.appspot.com",
    messagingSenderId: "325134453840"
};
firebase.initializeApp(config);


export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
