import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD9Gb7aUTwWzlv9kEWyDFkOeGUMfCzK_OE",
  authDomain: "facebook-clone-77242.firebaseapp.com",
  projectId: "facebook-clone-77242",
  storageBucket: "facebook-clone-77242.appspot.com",
  messagingSenderId: "89380552298",
  appId: "1:89380552298:web:18df0ec245083c82175413",
  measurementId: "G-L7GXGKBMWD",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
const googleAuth = new firebase.auth.GoogleAuthProvider();
export { db, auth, googleAuth, timestamp };
