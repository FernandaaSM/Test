// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVxzZNlu3ZL2RT2ipu6C5YFSfqJ_6A6Rw",
  authDomain: "healthcycle-4fbcd.firebaseapp.com",
  projectId: "healthcycle-4fbcd",
  storageBucket: "healthcycle-4fbcd.appspot.com",
  messagingSenderId: "785359058416",
  appId: "1:785359058416:web:7697dc2248acfe075c9935"
};

// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig);

export default initFirebase;