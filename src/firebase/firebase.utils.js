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

export const createUserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            });
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;