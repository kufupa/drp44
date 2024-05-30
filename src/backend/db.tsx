import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
