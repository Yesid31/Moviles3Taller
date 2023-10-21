import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore'; 
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyByCiE4CChhjaLWU2D2MznUyOo3nST4NRU",
  authDomain: "moviles-3-murork.firebaseapp.com",
  projectId: "moviles-3-murork",
  storageBucket: "moviles-3-murork.appspot.com",
  messagingSenderId: "241453080615",
  appId: "1:241453080615:web:4fb25a88800961b334ae02",
  measurementId: "G-0Y4EXXE5BB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
