import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-bc986.firebaseapp.com",
  projectId: "reactchat-bc986",
  storageBucket: "reactchat-bc986.appspot.com",
  messagingSenderId: "728724706660",
  appId: "1:728724706660:web:9683d3dc732f6785375671",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
