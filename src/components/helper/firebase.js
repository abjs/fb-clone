// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'  
// import firebase from 'firebase/app'
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain ,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket ,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth =firebase.auth()
const googleAuth = new firebase.auth.GoogleAuthProvider();
// const email = new firebase.auth.createUserWithEmailAndPassword()

export{ auth,googleAuth};
export default db;