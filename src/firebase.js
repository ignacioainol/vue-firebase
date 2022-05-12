// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLFf0DKc59thkG2ClvdtmoIWbBcNvKHOk",
  authDomain: "vue-db-410d7.firebaseapp.com",
  projectId: "vue-db-410d7",
  storageBucket: "vue-db-410d7.appspot.com",
  messagingSenderId: "154905516429",
  appId: "1:154905516429:web:e3db17214fd511ebdc85c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, 'cities');
export default citiesColRef;