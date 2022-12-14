import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCTLl8YYC5CZmuwK5y3Fn_HQ5IvOtlHTWk",
  authDomain: "clothing-app-db-a3879.firebaseapp.com",
  projectId: "clothing-app-db-a3879",
  storageBucket: "clothing-app-db-a3879.appspot.com",
  messagingSenderId: "720216408166",
  appId: "1:720216408166:web:61bb8b16815acd9ddeada7",
  measurementId: "G-W36NKSRYNT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createuserprofileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export default firebase;
