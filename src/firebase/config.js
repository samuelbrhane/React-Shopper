import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "shoppers-6413a.firebaseapp.com",
  projectId: "shoppers-6413a",
  storageBucket: "shoppers-6413a.appspot.com",
  messagingSenderId: "876712899403",
  appId: "1:876712899403:web:36de6f678b2edb0e65aece",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { firebaseConfig, app, auth, db, storage };
