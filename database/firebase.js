// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpfarhbsEoXHs45GAmPG5hYpLGsj9h-D4",
  authDomain: "react-native-project-b1ce0.firebaseapp.com",
  projectId: "react-native-project-b1ce0",
  storageBucket: "react-native-project-b1ce0.appspot.com",
  messagingSenderId: "361627307188",
  appId: "1:361627307188:web:ae72bc0657411d96605be1",
  measurementId: "G-N21Q6WGWCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export default {
  db,
};
