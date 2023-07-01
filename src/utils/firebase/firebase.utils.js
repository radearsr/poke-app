import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABxFtfPyVRyHrEcLW8mvWcMX9rEaBTiKw",
  authDomain: "poke-app-a3b3a.firebaseapp.com",
  projectId: "poke-app-a3b3a",
  storageBucket: "poke-app-a3b3a.appspot.com",
  messagingSenderId: "996406503579",
  appId: "1:996406503579:web:a1bc351044be19fca23e3e"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogleRedirect = async () => await signInWithRedirect(auth, provider);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const signOutAuth = () => signOut(auth);
