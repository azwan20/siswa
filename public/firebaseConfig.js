// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOdo-lwR2vOXxzw3zisDCtnjkmhWKvHIA",
  authDomain: "pendaftaran-siswa-f87f6.firebaseapp.com",
  projectId: "pendaftaran-siswa-f87f6",
  storageBucket: "pendaftaran-siswa-f87f6.appspot.com",
  messagingSenderId: "356439405874",
  appId: "1:356439405874:web:f219f22f61e8e8e2cd132b",
  measurementId: "G-3M9T7LQY4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };