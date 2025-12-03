
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmX9GGk8e947KKQxz-_p9ePNqVuTeCE1w",
  authDomain: "food-delivery-f72f8.firebaseapp.com",
  projectId: "food-delivery-f72f8",
  storageBucket: "food-delivery-f72f8.firebasestorage.app",
  messagingSenderId: "874554186528",
  appId: "1:874554186528:web:eedf506d6844f85e5b5545",
  measurementId: "G-PMX6F7MRKV"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);