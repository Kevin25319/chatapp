import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeuPWcV0BIErz5Z86FVH7yduVj_KCP5Gc",
  authDomain: "chatapp-de9be.firebaseapp.com",
  projectId: "chatapp-de9be",
  storageBucket: "chatapp-de9be.appspot.com",
  messagingSenderId: "1004603624400",
  appId: "1:1004603624400:web:45416878bbeec3267b87d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);