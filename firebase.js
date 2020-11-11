import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBVhAidvimjnoIR4ckUn7gO9LQ8KIq5nDU",
    authDomain: "bagel-79264.firebaseapp.com",
    databaseURL: "https://bagel-79264.firebaseio.com",
    projectId: "bagel-79264",
    storageBucket: "bagel-79264.appspot.com",
    messagingSenderId: "173607999667",
    appId: "1:173607999667:web:5c4073deeff1cc6797f8c6",
    measurementId: "G-SQELFHV9KZ"
};

export const fb = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const dbMenuAdd = db.collection('MenuItems');