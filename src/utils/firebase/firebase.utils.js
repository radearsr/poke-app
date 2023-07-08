import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABxFtfPyVRyHrEcLW8mvWcMX9rEaBTiKw",
  authDomain: "poke-app-a3b3a.firebaseapp.com",
  projectId: "poke-app-a3b3a",
  storageBucket: "poke-app-a3b3a.appspot.com",
  messagingSenderId: "996406503579",
  appId: "1:996406503579:web:a1bc351044be19fca23e3e"
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogleRedirect = async () => await signInWithRedirect(auth, provider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const checkExistingUserId = async (userAuth) => {
  const userDocRef = db(db, "users", userAuth.id);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    return "USER_IS_NOT_EXISTS";
  }
}
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const signOutAuth = () => signOut(auth);
