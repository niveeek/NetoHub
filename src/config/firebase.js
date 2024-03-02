import firebase from "firebase/compat/app"
// import "firebase/compat/firestore"
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCknqx7mVsefbEWZWdDF_fQAH7f8331adE",
    authDomain: "netohub-27ed6.firebaseapp.com",
    projectId: "netohub-27ed6",
    storageBucket: "netohub-27ed6.appspot.com",
    messagingSenderId: "171768366786",
    appId: "1:171768366786:web:85a1a5cb934cf4aab65d5b"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
