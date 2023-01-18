import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4at0dSmd05tni02cb8oX6pT3SQFn1Txc",
  authDomain: "shoppers-6b54a.firebaseapp.com",
  projectId: "shoppers-6b54a",
  storageBucket: "shoppers-6b54a.appspot.com",
  messagingSenderId: "637496013118",
  appId: "1:637496013118:web:ebb138a7c3cb9fbd12fc6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

export { firebaseConfig, app, auth, database, storage };
