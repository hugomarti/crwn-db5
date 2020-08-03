import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCrsWt2VkfzHm8h53Rb4THuKgCuqtLrHig",
  authDomain: "crnw-db5.firebaseapp.com",
  databaseURL: "https://crnw-db5.firebaseio.com",
  projectId: "crnw-db5",
  storageBucket: "crnw-db5.appspot.com",
  messagingSenderId: "42080823620",
  appId: "1:42080823620:web:a5db109be420c1007bcf11",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
