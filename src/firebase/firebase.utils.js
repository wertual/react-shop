import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyACEWbBdAeNUFXzX0ktBL8WwY9f7SjB_O8",
    authDomain: "crown-db-a117d.firebaseapp.com",
    databaseURL: "https://crown-db-a117d.firebaseio.com",
    projectId: "crown-db-a117d",
    storageBucket: "crown-db-a117d.appspot.com",
    messagingSenderId: "105628796449",
    appId: "1:105628796449:web:eaef32644f13f81a9a0560"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;