import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3zzb8c8OlSBQpnvaIrpfOK9tZEh6lKfU",
  authDomain: "chat-app-raydevpro.firebaseapp.com",
  projectId: "chat-app-raydevpro",
  storageBucket: "chat-app-raydevpro.appspot.com",
  messagingSenderId: "5030388879",
  appId: "1:5030388879:web:113048b5c23d8cc368fcfa"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
