// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prod
const firebaseConfig = {
  apiKey: "AIzaSyAQFV0btGyflFbHnRdPlnafeRAGAA5rU8Q",
  authDomain: "react-cursos-5e750.firebaseapp.com",
  projectId: "react-cursos-5e750",
  storageBucket: "react-cursos-5e750.appspot.com",
  messagingSenderId: "678121694899",
  appId: "1:678121694899:web:19daa80f2781239def72c6"
};

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyD42pI5mMCKKLFocAOR-8SYwFf7S1juZfM",
//   authDomain: "react-testing-c2092.firebaseapp.com",
//   projectId: "react-testing-c2092",
//   storageBucket: "react-testing-c2092.appspot.com",
//   messagingSenderId: "432610563748",
//   appId: "1:432610563748:web:0c1051ce327f51e0c47831"
// };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);