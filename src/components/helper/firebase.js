// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'  
// import firebase from 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Gb7aUTwWzlv9kEWyDFkOeGUMfCzK_OE",
  authDomain: "facebook-clone-77242.firebaseapp.com",
  projectId: "facebook-clone-77242",
  storageBucket: "facebook-clone-77242.appspot.com",
  messagingSenderId: "89380552298",
  appId: "1:89380552298:web:18df0ec245083c82175413",
  measurementId: "G-L7GXGKBMWD"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth =firebase.auth()
const googleAuth = new firebase.auth.GoogleAuthProvider();
// const email = new firebase.auth.createUserWithEmailAndPassword()

export{ auth,googleAuth};
export default db;
